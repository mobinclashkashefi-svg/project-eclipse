import Phaser from "phaser";
import { Entity } from "./Entity";
import { InputManager } from "../managers/InputManager";
import { StatsComponent } from "../components/StatsComponent";

export class Player extends Entity {

    private circle!: Phaser.GameObjects.Arc;
    private input: InputManager;
    private stats: StatsComponent;

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number
    ) {
        super(scene, x, y);

        this.input = new InputManager(scene);
        this.stats = new StatsComponent();
    }

    public create(): void {

        this.circle = this.scene.add.circle(
            this.x,
            this.y,
            25,
            0x4dabf7
        );

        console.log("Player Stats:", this.stats);

    }

    public update(): void {

        const speed = 4;

        if (this.input.left()) {
            this.circle.x -= speed;
        }

        if (this.input.right()) {
            this.circle.x += speed;
        }

        if (this.input.up()) {
            this.circle.y -= speed;
        }

        if (this.input.down()) {
            this.circle.y += speed;
        }

    }

    public getStats(): StatsComponent {
        return this.stats;
    }

}