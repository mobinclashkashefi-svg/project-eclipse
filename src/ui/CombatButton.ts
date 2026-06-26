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

    public setEnabled(enabled: boolean): void {

        this.button.disableInteractive();

        if (enabled) {

            this.button
                .setFillStyle(0x2563eb)
                .setInteractive({ useHandCursor: true });

        } else {

            this.button
                .setFillStyle(0x555555);

        }

    }

    public onClick(callback: () => void): void {

        this.button.removeAllListeners();

        this.button.on("pointerdown", callback);

    }

}