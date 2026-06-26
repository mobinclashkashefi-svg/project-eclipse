import Phaser from "phaser";
import { AssetManager } from "../managers/AssetManager";

export class PreloadScene extends Phaser.Scene {

    constructor() {
        super("PreloadScene");
    }

    preload(): void {

        AssetManager.preload(this);

    }

    create(): void {

        this.scene.start("MainMenuScene");

    }

}