import { DamageCalculator } from "./DamageCalculator";

export class CombatManager {

    public static attack(attacker: any, target: any): number {

        const damage = DamageCalculator.calculate(
            attacker.getStats().strength,
            target.getStats().defense
        );

        target.getStats().takeDamage(damage);

        return damage;

    }

}