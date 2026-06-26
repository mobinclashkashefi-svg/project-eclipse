export enum Turn {

    PLAYER,
    ENEMY

}

export class TurnManager {

    private static currentTurn: Turn = Turn.PLAYER;

    public static getCurrentTurn(): Turn {

        return this.currentTurn;

    }

    public static isPlayerTurn(): boolean {

        return this.currentTurn === Turn.PLAYER;

    }

    public static isEnemyTurn(): boolean {

        return this.currentTurn === Turn.ENEMY;

    }

    public static nextTurn(): void {

        this.currentTurn =
            this.currentTurn === Turn.PLAYER
                ? Turn.ENEMY
                : Turn.PLAYER;

    }

    public static reset(): void {

        this.currentTurn = Turn.PLAYER;

    }

}