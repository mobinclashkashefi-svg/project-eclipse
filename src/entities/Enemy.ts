import Phaser from "phaser";
import { Entity } from "./Entity";
import { StatsComponent } from "../components/StatsComponent";

export class Enemy extends Entity {

    private circle!: Phaser.GameObjects.Arc;
    private stats: StatsComponent;

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number
    ) {

        super(scene, x, y);

        this.stats = new StatsComponent();

    }

    public create(): void {

        this.circle = this.scene.add.circle(
            this.x,
            this.y,
            25,
            0xff4d4d
        );

        console.log("Enemy Stats:", this.stats);

    }

    public update(): void {

    }

    public getStats(): StatsComponent {

        return this.stats;

    }

}