export class DamageCalculator {

    public static calculate(
        attack: number,
        defense: number
    ): number {

        const damage = attack - defense;

        return Math.max(1, damage);

    }

}