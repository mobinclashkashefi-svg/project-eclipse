import Phaser from "phaser";

export class HealthBar {

    private width: number;

    private background: Phaser.GameObjects.Rectangle;
    private bar: Phaser.GameObjects.Rectangle;

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        width: number,
        height: number
    ) {

        this.width = width;

        this.background = scene.add.rectangle(
            x,
            y,
            width,
            height,
            0x444444
        );

        this.background.setOrigin(0,0.5);

        this.bar = scene.add.rectangle(
            x,
            y,
            width,
            height,
            0x00cc66
        );

        this.bar.setOrigin(0,0.5);

    }

    public setPercent(percent:number):void{

        percent = Phaser.Math.Clamp(percent,0,1);

        this.bar.displayWidth = this.width * percent;

    }

}