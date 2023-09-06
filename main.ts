let zzz = 0
basic.showIcon(IconNames.Yes)
let strip = neopixel.create(DigitalPin.P1, 3, NeoPixelMode.RGB)
basic.forever(function () {
    zzz += 1
    basic.showNumber(zzz)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(5000)
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
    basic.pause(2000)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(5000)
    for (let index = 0; index < 4; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(500)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.pause(500)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
    basic.pause(2000)
})
