let zzz = 0
basic.showIcon(IconNames.Yes)
let strip = neopixel.create(DigitalPin.P1, 3, NeoPixelMode.RGB)
basic.forever(function () {
    zzz += 1
    basic.showNumber(zzz)
    basic.pause(2000)
})
