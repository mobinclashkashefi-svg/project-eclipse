import Phaser from "phaser";
import { World } from "./World";

export class WorldManager {

    private world: World;

    constructor(scene: Phaser.Scene) {

        this.world = new World(scene);

    }

    public create(): void {

        this.world.create();

    }

}