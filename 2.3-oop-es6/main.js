class Weapon {
    constructor(newWeapon) {
        this.name = newWeapon.name;
        this.attack = newWeapon.attack;
        this.durability = newWeapon.durability;
        this.range = newWeapon.range;
        this.originalDurability = newWeapon.durability;
    }

    takeDamage(damage) {
        if (this.durability === Infinity) {
            return;
        };
        let durability = this.durability;
        durability -= damage;
        if (durability <= 0) {
            this.durability = 0;
        } else {
            this.durability = durability;
        };
    }

    getDamage() {
        if (this.durability * this.originalDurability / 100 <= 30) {
            return this.attack / 2;
        } else if (this.durability === 0) {
            return 0;
        } else {
            return this.attack;
        };

    }

    isBroken() {
        if (this.durability === 0) {
            return true;
        } else {
            return false;
        };
    }
}

class Bow extends Weapon {
    constructor() {
        let newWeapon = {
            name: 'Лук',
            attack: 10,
            durability: 200,
            range: 3
        };
        super(newWeapon);
    }

}

class Arm extends Weapon {
    constructor() {
        let newWeapon = {
            name: 'Рука',
            attack: 1,
            durability: Infinity,
            range: 1
        };
        super(newWeapon);
    }
}

class Sword extends Weapon {
    constructor() {
        let newWeapon = {
            name: 'Старый меч',
            attack: 20,
            durability: 500,
            range: 1
        };
        super(newWeapon);
    }
}

class Knife extends Weapon {
    constructor() {
        let newWeapon = {
            name: 'Нож',
            attack: 5,
            durability: 300,
            range: 1
        };
        super(newWeapon);
    }

}

class Staff extends Weapon {

    constructor() {
        let newWeapon = {
            name: 'Посох',
            attack: 8,
            durability: 300,
            range: 2
        };
        super(newWeapon);
    }

}

class AdvancedBow extends Bow {
    constructor() {
        super();
        this.attack = 15;
        this.range = 4;
    }
}

class AdvancedSword extends Sword {
    constructor() {
        super();
        this.attack = 27;
        this.durability = 800;
    }
}

class AdvancedStaff extends Staff {
    constructor(n) {
        super();
        this.attack = 10;
        this.range = 3;
    }
}

const bow = new Bow();
console.log(bow.name); // Лук
console.log(bow.attack); // 10
console.log(bow.durability); // 200
console.log(bow.range); // 3

const advancedBow = new AdvancedBow();
console.log(advancedBow.name); // Лук
console.log(advancedBow.attack); // 15
console.log(advancedBow.durability); // 200
console.log(advancedBow.range); // 4