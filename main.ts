let counter = 0
input.onPinPressed(TouchPin.P0, function () {
    counter = 0
    while (counter <= 5) {
        basic.showNumber(counter)
        counter += 1
        music.playTone(175, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    for (let counter = 0; counter <= 5; counter++) {
        basic.showNumber(counter)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    counter = 5
    while (counter >= 5) {
        basic.showNumber(counter)
        counter += -1
        music.playTone(175, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
    }
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Ghost)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
