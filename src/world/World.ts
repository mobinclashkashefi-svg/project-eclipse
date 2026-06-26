import Phaser from "phaser";
import { TileMap } from "./TileMap";

export class World {

    constructor(private scene: Phaser.Scene) {}

    public create(): void {

        const map = new TileMap(this.scene);

        map.create();

    }

}