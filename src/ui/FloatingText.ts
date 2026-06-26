import Phaser from "phaser";

export class FloatingText {

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        text: string,
        color: string = "#ff4444"
    ) {

        const damageText = scene.add.text(
            x,
            y,
            text,
            {
                fontFamily: "Arial",
                fontSize: "28px",
                fontStyle: "bold",
                color
            }
        ).setOrigin(0.5);

        scene.tweens.add({
            targets: damageText,
            y: y - 60,
            alpha: 0,
            duration: 900,
            ease: "Power2",
            onComplete: () => {
                damageText.destroy();
            }
        });

    }

}