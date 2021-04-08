input.onButtonPressed(Button.A, function () {
    jugador.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    jugador.change(LedSpriteProperty.X, 1)
})
let obstacle: game.LedSprite = null
let jugador: game.LedSprite = null
jugador = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(randint(4000, 6000))
    obstacle = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(20)
        obstacle.change(LedSpriteProperty.Y, 1)
    }
    if (jugador.isTouching(obstacle)) {
        game.gameOver()
    }
    basic.pause(200)
    game.addScore(1)
    obstacle.delete()
})
