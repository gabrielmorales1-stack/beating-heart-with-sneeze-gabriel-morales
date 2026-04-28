input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
basic.forever(function () {
    basic.pause(500)
    basic.showIcon(IconNames.Heart)
    basic.pause(200)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(200)
})
