import Phaser from "phaser";
import { Tile } from "./Tile";

export class TileMap {

    constructor(private scene: Phaser.Scene) {}

    public create(): void {

        const tileSize = 64;

        const cols = 18;
        const rows = 10;

        for (let y = 0; y < rows; y++) {

            for (let x = 0; x < cols; x++) {

                const color =
                    (x + y) % 2 === 0
                        ? 0x4f8a3f
                        : 0x5b9a47;

                new Tile(
                    this.scene,
                    x * tileSize + tileSize / 2,
                    y * tileSize + tileSize / 2,
                    tileSize,
                    color
                ).create();

            }

        }

    }

}