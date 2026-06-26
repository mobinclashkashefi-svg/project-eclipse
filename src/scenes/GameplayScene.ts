import Phaser from "phaser";
import { GameState } from "../core/GameState";
import { GameStateManager } from "../managers/GameStateManager";
import { WorldManager } from "../world/WorldManager";
import { Player } from "../entities/Player";
import { Enemy } from "../entities/Enemy";
import { DataManager } from "../managers/DataManager";
import { HealthBar } from "../ui/HealthBar";
import { CombatButton } from "../ui/CombatButton";

export class GameplayScene extends Phaser.Scene {

    private player!: Player;
    private enemy!: Enemy;

    private playerHpBar!: HealthBar;
    private enemyHpBar!: HealthBar;

    constructor() {
        super("GameplayScene");
    }

    create(): void {

        GameStateManager.setState(GameState.PLAYING);

        const world = new WorldManager(this);
        world.create();

        // Player
        this.player = new Player(
            this,
            350,
            350
        );

        this.player.create();

        // Enemy
        this.enemy = new Enemy(
            this,
            850,
            350
        );

        this.enemy.create();

        // HP Bars
        this.playerHpBar = new HealthBar(
            this,
            260,
            240,
            180,
            18
        );

        this.playerHpBar.setPercent(
            this.player.getStats().getHealthPercent()
        );

        this.enemyHpBar = new HealthBar(
            this,
            760,
            240,
            180,
            18
        );

        this.enemyHpBar.setPercent(
            this.enemy.getStats().getHealthPercent()
        );

        // Attack Button
        new CombatButton(
            this,
            this.cameras.main.centerX,
            600,
            "ATTACK",
            () => {

                this.enemy.getStats().takeDamage(10);

                this.enemyHpBar.setPercent(
                    this.enemy.getStats().getHealthPercent()
                );

                console.log(
                    "Enemy HP:",
                    this.enemy.getStats().health
                );

            }
        );

        console.log("Classes:", DataManager.getClasses());
        console.log("Enemies:", DataManager.getEnemies());
        console.log("Skills:", DataManager.getSkills());

        this.add.text(
            this.cameras.main.centerX,
            60,
            "PROJECT ECLIPSE",
            {
                fontFamily: "Arial",
                fontSize: "42px",
                color: "#ffffff"
            }
        ).setOrigin(0.5);

        this.add.text(
            350,
            210,
            "PLAYER",
            {
                fontFamily: "Arial",
                fontSize: "22px",
                color: "#4dabf7"
            }
        ).setOrigin(0.5);

        this.add.text(
            850,
            210,
            "ENEMY",
            {
                fontFamily: "Arial",
                fontSize: "22px",
                color: "#ff4d4d"
            }
        ).setOrigin(0.5);

    }

    update(): void {

        this.player.update();
        this.enemy.update();

    }

}