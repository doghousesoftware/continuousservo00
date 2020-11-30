input.onButtonPressed(Button.A, function () {
    // This is a speed of about 1sec./rotation
    pins.servoWritePin(AnalogPin.P2, 0)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    // This is a speed of about 1sec./rotation
    pins.servoWritePin(AnalogPin.P2, 90)
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # . #
        # . . . #
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    // This is a speed of about 1sec./rotation
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.showLeds(`
        # # # # .
        # . . # .
        # . # . .
        # # . # .
        # . . . #
        `)
})
