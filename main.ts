let zzz = 0
basic.showIcon(IconNames.Yes)
let strip = neopixel.create(DigitalPin.P1, 3, NeoPixelMode.RGB)
basic.forever(function () {
    zzz += 1
    basic.showNumber(zzz)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(2000)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(2000)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(1000)
    for (let index = 0; index < 4; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(500)
    }
})
