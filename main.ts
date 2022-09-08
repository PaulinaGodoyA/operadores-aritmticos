let numero1 = 0
let numero2 = 0
input.onButtonPressed(Button.A, function () {
    numero1 = randint(0, 10)
    basic.showNumber(numero1)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    numero2 = randint(0, 10)
    basic.showNumber(numero2)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showNumber(numero1 + numero2)
})
input.onButtonPressed(Button.B, function () {
    numero1 = randint(0, 10)
    basic.showNumber(numero1)
    basic.showLeds(`
        # . . # #
        . . # . .
        . # . . .
        . . # . .
        . . . # #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showNumber(numero1 * 1.8 + 32)
})
