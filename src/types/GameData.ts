export interface CharacterClass {

    id: string;
    name: string;
    description: string;

    baseHealth: number;
    baseMana: number;
    baseEnergy: number;

    strength: number;
    agility: number;
    intelligence: number;

}

export interface EnemyData {

    id: string;
    name: string;

    health: number;
    mana: number;

    strength: number;
    agility: number;

}

export interface SkillData {

    id: string;
    name: string;

    cost: number;
    damage: number;

    type: string;

}