controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    if (controller.up.isPressed()) {
        animation.runImageAnimation(
        TinyBoxTim,
        [img`
            . e e f e e . 
            . e e f e e . 
            . e e e e e . 
            . e e e e e . 
            . e e e e e . 
            `,img`
            . . . . . . . 
            . e e f e e . 
            . e e e e e . 
            . . . . . . . 
            . . . . . . . 
            `],
        100,
        false
        )
    } else {
        TinyBoxTim.setImage(img`
            e e f e e 
            e e f e e 
            e e e e e 
            e e e e e 
            e e e e e 
            `)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.left.isPressed()) {
        animation.runImageAnimation(
        TinyBoxTim,
        [img`
            . e e f e e . 
            . e e f e e . 
            . e e e e e . 
            . e e e e e . 
            . e e e e e . 
            `,img`
            e e f e e . . 
            . e e f e e . 
            . e e e e e . 
            . e e e e e . 
            . . e e e e e 
            `],
        100,
        false
        )
    } else {
        TinyBoxTim.setImage(img`
            e e f e e 
            e e f e e 
            e e e e e 
            e e e e e 
            e e e e e 
            `)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.right.isPressed()) {
        animation.runImageAnimation(
        TinyBoxTim,
        [img`
            . e e f e e . 
            . e e f e e . 
            . e e e e e . 
            . e e e e e . 
            . e e e e e . 
            `,img`
            . . e e f e e 
            . e e f e e . 
            . e e e e e . 
            . e e e e e . 
            e e e e e . . 
            `],
        100,
        false
        )
    } else {
        TinyBoxTim.setImage(img`
            e e f e e 
            e e f e e 
            e e e e e 
            e e e e e 
            e e e e e 
            `)
    }
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    if (controller.down.isPressed()) {
        animation.runImageAnimation(
        TinyBoxTim,
        [img`
            . e e f e e . 
            . e e f e e . 
            . e e e e e . 
            . e e e e e . 
            . e e e e e . 
            `,img`
            . . . . . . . 
            . . . . . . . 
            . e e f e e . 
            . e e e e e . 
            . . . . . . . 
            `],
        100,
        false
        )
    } else {
        TinyBoxTim.setImage(img`
            e e f e e 
            e e f e e 
            e e e e e 
            e e e e e 
            e e e e e 
            `)
    }
})
let TinyBoxTim: Sprite = null
TinyBoxTim = sprites.create(img`
    e e f e e 
    e e f e e 
    e e e e e 
    e e e e e 
    e e e e e 
    `, SpriteKind.Player)
controller.moveSprite(TinyBoxTim)
