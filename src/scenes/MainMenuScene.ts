import Phaser from "phaser";
import { Button } from "../ui/Button";
import { GameState } from "../core/GameState";
import { GameStateManager } from "../managers/GameStateManager";
import { SceneManager } from "../managers/SceneManager";

export class MainMenuScene extends Phaser.Scene {

    constructor() {
        super("MainMenuScene");
    }

    create(): void {

        GameStateManager.setState(GameState.MAIN_MENU);

        this.cameras.main.setBackgroundColor("#111827");

        const centerX = this.cameras.main.centerX;

        this.add.text(
            centerX,
            120,
            "PROJECT ECLIPSE",
            {
                fontFamily: "Arial",
                fontSize: "52px",
                color: "#ffffff",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        const buttons = [
            "New Game",
            "Continue",
            "Settings",
            "Credits",
            "Exit"
        ];

        buttons.forEach((label, index) => {

            new Button(
                this,
                centerX,
                240 + index * 70,
                label,
                () => {

                    switch (label) {

                        case "New Game":
                            SceneManager.changeScene(this, "GameplayScene");
                            break;

                        case "Continue":
                            console.log("Continue");
                            break;

                        case "Settings":
                            console.log("Settings");
                            break;

                        case "Credits":
                            console.log("Credits");
                            break;

                        case "Exit":
                            console.log("Exit");
                            break;

                    }

                }
            );

        });

    }

}