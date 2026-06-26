import Phaser from "phaser";

export class BattleController {

    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    public create(): void {

        console.log("BattleController initialized");

    }

    public update(): void {

    }

}