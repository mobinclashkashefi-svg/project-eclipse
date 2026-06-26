import Phaser from "phaser";

export class PreloadScene extends Phaser.Scene {
    constructor() {
        super("PreloadScene");
    }

    preload(): void {
        console.log("PreloadScene: Loading Assets...");
    }

    create(): void {
        console.log("Assets Loaded");
        this.scene.start("MainMenuScene");
    }
}