import { DamageCalculator } from "../combat/DamageCalculator";
import { BattleLog } from "../ui/BattleLog";

export class CombatManager {

    public static attack(attacker: any, target: any): number {

        const damage = DamageCalculator.calculate(
            attacker.getStats().strength,
            target.getStats().defense
        );

        target.getStats().takeDamage(damage);

        BattleLog.write(
            `${attacker.constructor.name} dealt ${damage} damage`
        );

        return damage;

    }

}