'use strict';

import test from 'ava';
import pigLatinCyr from './index';

const { strings: { failString, wrongDialectString } } = require('./config');

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

test('Корректно работает длинных строках', async t => {
    t.is(
        pigLatinCyr(
            `Я памятник себе воздвиг нерукотворный, К нему не зарастет народная тропа, Вознесся выше он главою непокорной Александрийского столпа.`
        ),
        `ЯсЯ пасамясятнисик сесебесе восоздвисиг несерусукосотвосорнысый, К несемусу несе засарасастесет насаросоднасаяся тросопаса, Восознесессяся высышесе осон гласавосоюсю несепосокосорносой АсАлесексасандрисийскосогосо стосолпаса.`
    );
});