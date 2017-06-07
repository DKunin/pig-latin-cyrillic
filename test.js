'use strict';

import test from 'ava';
import pigLatinCyr from './index';
const failString = 'Пожалуйста добавьте строку';
const wrongDialectString = 'Допустимые диалекты: «с» — «синий язык», «б» — «белый язык», «з» — «зелёный язык», «ф» — «фиолетовый язык», «к» — «кирпичный язык»';

test('Простая проверка дефолтного диалекта', async t => {
    t.is(pigLatinCyr('Проверка'), 'Просовесеркаса');
});

test('Простая проверка дефолтного диалекта', async t => {
    t.is(pigLatinCyr('Проверка'), 'Просовесеркаса');
});

test('Должно сломаться при отсутствии вводных данных', async t => {
    t.is(pigLatinCyr(), failString);
    t.is(pigLatinCyr(123), failString);
    t.is(pigLatinCyr(false), failString);
    t.is(pigLatinCyr(true), failString);
    t.is(pigLatinCyr(null), failString);
});

test('Ломается при неверном диалекте', async t => {
    t.is(pigLatinCyr('Проверка', 'ш'), wrongDialectString);
});

test('Корректно работает на допустимых диалектах', async t => {
    t.is(pigLatinCyr('Проверка', 'с'), 'Просовесеркаса');
    t.is(pigLatinCyr('Проверка', 'б'), 'Пробовеберкаба');
    t.is(pigLatinCyr('Проверка', 'з'), 'Прозовезерказа');
    t.is(pigLatinCyr('Проверка', 'ф'), 'Профовеферкафа');
    t.is(pigLatinCyr('Проверка', 'к'), 'Проковекеркака');
});

