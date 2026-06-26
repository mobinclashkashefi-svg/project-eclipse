import Phaser from "phaser";

export class CombatButton {

    private button: Phaser.GameObjects.Rectangle;
    private label: Phaser.GameObjects.Text;

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        text: string,
        callback: () => void
    ) {

        this.button = scene.add.rectangle(
            x,
            y,
            180,
            55,
            0x2563eb
        );

        this.button
            .setInteractive({ useHandCursor: true })
            .on("pointerdown", callback);

        this.label = scene.add.text(
            x,
            y,
            text,
            {
                fontFamily: "Arial",
                fontSize: "24px",
                color: "#ffffff"
            }
        ).setOrigin(0.5);

    }

}