import Phaser from "phaser";
import { GameState } from "../core/GameState";
import { GameStateManager } from "../managers/GameStateManager";
import { WorldManager } from "../world/WorldManager";
import { Player } from "../entities/Player";
import { Enemy } from "../entities/Enemy";
import { DataManager } from "../managers/DataManager";
import { CombatManager } from "../managers/CombatManager";
import { HealthBar } from "../ui/HealthBar";
import { CombatButton } from "../ui/CombatButton";
import { FloatingText } from "../ui/FloatingText";

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
        this.player = new Player(this, 350, 350);
        this.player.create();

        // Enemy
        this.enemy = new Enemy(this, 850, 350);
        this.enemy.create();

        // HP Bars
        this.playerHpBar = new HealthBar(
            this,
            260,
            240,
            180,
            18
        );

        this.enemyHpBar = new HealthBar(
            this,
            760,
            240,
            180,
            18
        );

        this.playerHpBar.setPercent(
            this.player.getStats().getHealthPercent()
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

                const damage = CombatManager.attack(
                    this.player,
                    this.enemy
                );
                new FloatingText(
                this,
                 850,
                 300,
                  damage.toString()
                );
                this.enemyHpBar.setPercent(
                    this.enemy.getStats().getHealthPercent()
                );

                console.log("Damage:", damage);
                console.log(
                    "Enemy HP:",
                    this.enemy.getStats().health
                );

                if (this.enemy.getStats().health <= 0) {

                    this.add.text(
                        this.cameras.main.centerX,
                        520,
                        "VICTORY!",
                        {
                            fontFamily: "Arial",
                            fontSize: "40px",
                            color: "#00ff00",
                            fontStyle: "bold"
                        }
                    ).setOrigin(0.5);

                }

            }
        );

        console.log("Classes:", DataManager.getClasses());
        console.log("Enemies:", DataManager.getEnemies());
        console.log("Skills:", DataManager.getSkills());

        this.cameras.main.setBackgroundColor("#1b263b");

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