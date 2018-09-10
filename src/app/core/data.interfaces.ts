// ARMOR
export interface Armor {
    id?: number;
    armorName: string;
    armorLevel: number;
    armorType: ArmorTypeEnum;
    armorStats: Stats;
    imgUrl: string;
}

export enum ArmorTypeEnum {
    None = 'None',
    Head= 'Head',
    Shoulder= 'Shoulder',
    Neck= 'Neck',
    Arm= 'Arm',
    Hand= 'Hand',
    Torso= 'Torso',
    Waist= 'Waist',
    Leg= 'Leg',
    Foot= 'Foot'
}

export interface Stats {
    health: number;
    power: number;
    defense: number;
}

// POTIONS
export interface Potion {
    id?: number;
    potionName: string;
    potionStrength: number;
    potionEffectDuration: number;
    potionEffectType: PotionEffectTypeEnum;
    imageUrl: string;
}

export enum PotionEffectTypeEnum {
    Power = 'Power',
    Defense = 'Defense',
    Health = 'Health',
    None = 'None'
}


// WEAPONS
export interface Weapon {
    id?: number;
    weaponName: string;
    weaponStats: WeaponStats;
    weaponLevel?: number;
    weaponBaseDamage?: number;
    imageUrl: string;
}

export interface WeaponStats {
    power?: number;
    defense?: number;
    damage?: number;
}
