Add-Type -AssemblyName System.Drawing
$bmp = New-Object System.Drawing.Bitmap("C:\Users\HP\Downloads\favicon.jpg")
$c = $bmp.GetPixel(0, 0)
Write-Host "Corner Color: R=$($c.R) G=$($c.G) B=$($c.B)"
$c2 = $bmp.GetPixel(50, 50)
Write-Host "Random Color 50,50: R=$($c2.R) G=$($c2.G) B=$($c2.B)"
$bmp.Dispose()
