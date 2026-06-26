import Phaser from "phaser";

export class MainMenuScene extends Phaser.Scene {
    constructor() {
        super("MainMenuScene");
    }

    create(): void {
        this.cameras.main.setBackgroundColor("#111827");

        this.add
            .text(640, 180, "PROJECT ECLIPSE", {
                fontFamily: "Arial",
                fontSize: "48px",
                color: "#ffffff"
            })
            .setOrigin(0.5);

        this.add
            .text(640, 280, "Version 0.1.0", {
                fontFamily: "Arial",
                fontSize: "22px",
                color: "#8b949e"
            })
            .setOrigin(0.5);
    }
}