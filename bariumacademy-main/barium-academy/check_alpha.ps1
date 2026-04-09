Add-Type -AssemblyName System.Drawing
$bmp = New-Object System.Drawing.Bitmap("C:\Users\HP\Downloads\bariumacademy-website\bariumacademy-main\barium-academy\public\favicon-48x48.png")
$transCount = 0
$solidCount = 0
for ($x=0; $x -lt $bmp.Width; $x++) {
    for ($y=0; $y -lt $bmp.Height; $y++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.A -lt 255) { $transCount++ }
        if ($c.A -eq 255) { $solidCount++ }
    }
}
Write-Host "Transparent/Semi pixels: $transCount"
Write-Host "Solid pixels: $solidCount"
$bmp.Dispose()
