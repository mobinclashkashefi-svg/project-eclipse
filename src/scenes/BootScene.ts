import Phaser from "phaser";

export class BootScene extends Phaser.Scene {
    constructor() {
        super("BootScene");
    }

    preload(): void {
        console.log("BootScene: Loading...");
    }

    create(): void {
        console.log("BootScene: Complete");
        this.scene.start("PreloadScene");
    }
}