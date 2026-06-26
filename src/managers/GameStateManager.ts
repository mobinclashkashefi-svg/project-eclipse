import { GameState } from "../core/GameState";

export class GameStateManager {

    private static currentState: GameState = GameState.BOOT;

    public static setState(state: GameState): void {

        this.currentState = state;

        console.log("Game State:", state);

    }

    public static getState(): GameState {

        return this.currentState;

    }

}