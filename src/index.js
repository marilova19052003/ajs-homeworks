class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}
class Team {
  constructor() {
    this.characters = [];
  }

  addCharacter(character) {
    this.characters.push(character);
  }

  *[Symbol.iterator]() {
    for (const character of this.characters) {
      yield character;
    }
  }
}
const team = new Team();
team.addCharacter(new Character("Лучник", "Bowman", 50, 1, 40, 10));
team.addCharacter(new Character("Мечник", "Swordsman", 60, 1, 50, 20));

for (const character of team) {
  console.log(character);
}
console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(null)); // false
console.log(canIterate(10)); // false
console.log(canIterate("Netology")); // true
