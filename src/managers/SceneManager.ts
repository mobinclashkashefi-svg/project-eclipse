import Phaser from "phaser";

export class SceneManager {

    public static changeScene(
        scene: Phaser.Scene,
        targetScene: string
    ): void {

        scene.scene.start(targetScene);

    }

}