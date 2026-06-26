import Phaser from "phaser";

export abstract class Entity {

    protected scene: Phaser.Scene;
    protected x: number;
    protected y: number;

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number
    ) {

        this.scene = scene;
        this.x = x;
        this.y = y;

    }

    public abstract create(): void;

    public abstract update(): void;

}