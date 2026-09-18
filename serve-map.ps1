$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$listener = [Net.Sockets.TcpListener]::new([Net.IPAddress]::Loopback, 0)

try {
    $listener.Start()
    $port = ([Net.IPEndPoint]$listener.LocalEndpoint).Port
    $prefix = "http://127.0.0.1:$port/"
    Start-Process ($prefix + 'index.html')
    Write-Host 'Surf Life Saving Natural Hazards Dashboard v0.8 is open in your browser.'
    Write-Host "Local address: $prefix"
    Write-Host 'Keep this window open while using the map. Press Ctrl+C to close it.'

    while ($true) {
        $client = $listener.AcceptTcpClient()
        $stream = $client.GetStream()
        $reader = [IO.StreamReader]::new($stream, [Text.Encoding]::ASCII, $false, 4096, $true)
        $requestLine = $reader.ReadLine()
        while (($line = $reader.ReadLine()) -ne $null -and $line -ne '') { }
        $requestTarget = if ($requestLine -match '^GET\s+([^\s]+)\s+HTTP/') { $Matches[1] } else { '/' }
        $relativePath = [Uri]::UnescapeDataString(($requestTarget -split '\?')[0].TrimStart('/'))
        if ([string]::IsNullOrWhiteSpace($relativePath)) { $relativePath = 'index.html' }

        $candidate = [IO.Path]::GetFullPath((Join-Path $root $relativePath))
        if (-not $candidate.StartsWith([IO.Path]::GetFullPath($root), [StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path -LiteralPath $candidate -PathType Leaf)) {
            $notFound = [Text.Encoding]::UTF8.GetBytes('Not found')
            $headers = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain; charset=utf-8`r`nContent-Length: $($notFound.Length)`r`nConnection: close`r`n`r`n"
            $headerBytes = [Text.Encoding]::ASCII.GetBytes($headers)
            $stream.Write($headerBytes, 0, $headerBytes.Length)
            $stream.Write($notFound, 0, $notFound.Length)
            $stream.Close()
            $client.Close()
            continue
        }

        $extension = [IO.Path]::GetExtension($candidate).ToLowerInvariant()
        $contentTypes = @{
            '.html' = 'text/html; charset=utf-8'
            '.css'  = 'text/css; charset=utf-8'
            '.js'   = 'text/javascript; charset=utf-8'
            '.json' = 'application/json; charset=utf-8'
            '.png'  = 'image/png'
            '.svg'  = 'image/svg+xml'
        }
        $contentType = if ($contentTypes.ContainsKey($extension)) { $contentTypes[$extension] } else { 'application/octet-stream' }
        $bytes = [IO.File]::ReadAllBytes($candidate)
        $headers = "HTTP/1.1 200 OK`r`nContent-Type: $contentType`r`nContent-Length: $($bytes.Length)`r`nReferrer-Policy: strict-origin-when-cross-origin`r`nConnection: close`r`n`r`n"
        $headerBytes = [Text.Encoding]::ASCII.GetBytes($headers)
        $stream.Write($headerBytes, 0, $headerBytes.Length)
        $stream.Write($bytes, 0, $bytes.Length)
        $stream.Close()
        $client.Close()
    }
}
finally {
    $listener.Stop()
}
