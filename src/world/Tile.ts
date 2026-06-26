import Phaser from "phaser";

export class Tile {

    constructor(
        private scene: Phaser.Scene,
        private x: number,
        private y: number,
        private size: number,
        private color: number
    ) {}

    public create(): void {

        this.scene.add.rectangle(
            this.x,
            this.y,
            this.size,
            this.size,
            this.color
        ).setStrokeStyle(1, 0x000000, 0.2);

    }

}