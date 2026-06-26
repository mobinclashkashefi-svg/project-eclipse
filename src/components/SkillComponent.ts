export class SkillComponent {

    private skills: string[] = [];

    public add(skillId: string): void {

        if (!this.skills.includes(skillId)) {

            this.skills.push(skillId);

        }

    }

    public remove(skillId: string): void {

        this.skills = this.skills.filter(
            skill => skill !== skillId
        );

    }

    public has(skillId: string): boolean {

        return this.skills.includes(skillId);

    }

    public getAll(): string[] {

        return this.skills;

    }

}