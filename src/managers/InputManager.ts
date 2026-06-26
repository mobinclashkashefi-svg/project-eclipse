import Phaser from "phaser";

export class InputManager {

    private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor(scene: Phaser.Scene) {

        this.cursors = scene.input.keyboard!.createCursorKeys();

    }

    public left(): boolean {

        return this.cursors.left.isDown;

    }

    public right(): boolean {

        return this.cursors.right.isDown;

    }

    public up(): boolean {

        return this.cursors.up.isDown;

    }

    public down(): boolean {

        return this.cursors.down.isDown;

    }

}