export class DamageCalculator {

    public static calculate(
        attackerStrength: number,
        targetDefense: number
    ): number {

        let damage =
            attackerStrength - targetDefense;

        if (damage < 1) {

            damage = 1;

        }

        return damage;

    }

}