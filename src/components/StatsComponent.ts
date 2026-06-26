export class StatsComponent {

    public health: number;
    public maxHealth: number;

    public mana: number;
    public maxMana: number;

    public energy: number;
    public maxEnergy: number;

    public strength: number;
    public agility: number;
    public intelligence: number;

    public defense: number;
    public accuracy: number;
    public criticalChance: number;

    constructor() {

        this.maxHealth = 100;
        this.health = 100;

        this.maxMana = 50;
        this.mana = 50;

        this.maxEnergy = 100;
        this.energy = 100;

        this.strength = 10;
        this.agility = 10;
        this.intelligence = 10;

        this.defense = 5;
        this.accuracy = 95;
        this.criticalChance = 5;

    }

    public takeDamage(amount: number): void {

        this.health -= amount;

        if (this.health < 0) {

            this.health = 0;

        }

    }

    public heal(amount: number): void {

        this.health += amount;

        if (this.health > this.maxHealth) {

            this.health = this.maxHealth;

        }

    }

    public getHealthPercent(): number {

        return this.health / this.maxHealth;

    }

}