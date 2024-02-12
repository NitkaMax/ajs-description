import { specialAttacks } from '../js/description';

test('Извлечь спец.атаки с описанием по умолчанию', () => {
  const character = {
    special: [
      { id: 8, name: 'Piercing Discharge', icon: 'https://skyforge-archive.fandom.com/wiki/Category:Archer_Ability_Icons?file=Ionization_Icon.png' },
      { id: 9, name: 'Electric Shot', icon: 'https://skyforge-archive.fandom.com/wiki/Category:Archer_Ability_Icons?file=Elemental_Fusion_Icon.png' },
    ],
  };

  const result = specialAttacks(character);

  expect(result).toEqual([
    { id: 8, name: 'Piercing Discharge', description: 'Описание недоступно', icon: 'https://skyforge-archive.fandom.com/wiki/Category:Archer_Ability_Icons?file=Ionization_Icon.png' },
    { id: 9, name: 'Electric Shot', description: 'Описание недоступно', icon: 'https://skyforge-archive.fandom.com/wiki/Category:Archer_Ability_Icons?file=Elemental_Fusion_Icon.png' },
  ]);
});

test('Извлечь спец.атаки с описанием', () => {
  const character = {
    special: [
      { id: 8, name: 'Piercing Discharge', description: 'Двойной разряд При восстановлении импульсного заряда есть шанс, что его можно активировать два раза подряд. Шанс увеличивается на 12% за каждый уровень этого символа.', icon: 'https://skyforge-archive.fandom.com/wiki/Category:Archer_Ability_Icons?file=Ionization_Icon.png' },
      { id: 9, name: 'Electric Shot', icon: 'https://skyforge-archive.fandom.com/wiki/Category:Archer_Ability_Icons?file=Elemental_Fusion_Icon.png' },
    ],
  };

  const result = specialAttacks(character);

  expect(result).toEqual([
    { id: 8, name: 'Piercing Discharge', description: 'Двойной разряд При восстановлении импульсного заряда есть шанс, что его можно активировать два раза подряд. Шанс увеличивается на 12% за каждый уровень этого символа.', icon: 'https://skyforge-archive.fandom.com/wiki/Category:Archer_Ability_Icons?file=Ionization_Icon.png' },
    { id: 9, name: 'Electric Shot', description: 'Описание недоступно', icon: 'https://skyforge-archive.fandom.com/wiki/Category:Archer_Ability_Icons?file=Elemental_Fusion_Icon.png' },
  ]);
});

test('Должен обработать пустой массив специальных атак', () => {
  const character = {
    special: [],
  };

  const result = specialAttacks(character);

  expect(result).toEqual([]);
});