import classes from "../data/classes/classes.json";
import enemies from "../data/enemies/enemies.json";
import skills from "../data/skills/skills.json";

import type {
    CharacterClass,
    EnemyData,
    SkillData
} from "../types/GameData";

export class DataManager {

    public static getClasses(): CharacterClass[] {
        return classes as CharacterClass[];
    }

    public static getEnemies(): EnemyData[] {
        return enemies as EnemyData[];
    }

    public static getSkills(): SkillData[] {
        return skills as SkillData[];
    }

}