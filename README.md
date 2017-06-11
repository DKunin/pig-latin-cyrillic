# Russian Pig Latin translator

> Переводчик на поросячью латынь [link](https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D1%80%D0%BE%D1%81%D1%8F%D1%87%D1%8C%D1%8F_%D0%BB%D0%B0%D1%82%D1%8B%D0%BD%D1%8C)

## Install

```
    npm i pig-latin-cyrillic
```

## Usage

```
import pigLatinCyr from 'pig-latin-cyrillic';

console.log(pigLatinCyr('Проверка')); // 'Просовесеркаса'

// Другие диалекты: «с» — «синий язык», «б» — «белый язык», «з» — «зелёный язык», «ф» — «фиолетовый язык», «к» — «кирпичный язык»

console.log(pigLatinCyr('Проверка', 'б')); // 'Пробовеберкаба'

```

## Contribute

PRs accepted.

## License

MIT © Dmitri Kunin
