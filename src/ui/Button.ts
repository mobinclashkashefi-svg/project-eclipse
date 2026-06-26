import Phaser from "phaser";

export class Button extends Phaser.GameObjects.Text {

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        text: string,
        callback: () => void
    ) {

        super(scene, x, y, text, {
            fontFamily: "Arial",
            fontSize: "30px",
            color: "#cfcfcf"
        });

        this.setOrigin(0.5);

        this.setInteractive({
            useHandCursor: true
        });

        this.on("pointerover", () => {

            this.setColor("#ffffff");
            this.setScale(1.08);

        });

        this.on("pointerout", () => {

            this.setColor("#cfcfcf");
            this.setScale(1);

        });

        this.on("pointerdown", callback);

        scene.add.existing(this);

    }

}