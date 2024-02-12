const character = {
    name: 'GreenArrow',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Piercing Discharge',
        icon: 'https://skyforge-archive.fandom.com/wiki/Category:Archer_Ability_Icons?file=Ionization_Icon.png',
        description: 'Двойной разряд При восстановлении импульсного заряда есть шанс, что его можно активировать два раза подряд. Шанс увеличивается на 12% за каждый уровень этого символа.'
      }, 
      {
        id: 9,
        name: 'Electric Shot',
        icon: 'https://skyforge-archive.fandom.com/wiki/Category:Archer_Ability_Icons?file=Elemental_Fusion_Icon.png'
      }
    ]
  }
  
  export function specialAttacks({ special }) {
    return special.map((attack) => {
      const { id, name, description = 'Описание недоступно', icon } = attack;
      return { id, name, description, icon };
    });
  }
  
  specialAttacks(character);