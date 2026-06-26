import Phaser from "phaser";

export class SceneTransitionManager {

    public static fadeTo(
        scene: Phaser.Scene,
        targetScene: string,
        duration: number = 500
    ): void {

        scene.cameras.main.fadeOut(duration);

        scene.cameras.main.once(
            Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE,
            () => {

                scene.scene.start(targetScene);

            }
        );

    }

}