'use strict';

const APPROVED_DIALECTS = [ 'с', 'б', 'з', 'а', 'к', 'ф' ];
const failString = 'Пожалуйста добавьте строку';
const wrongDialectString = 'Допустимые диалекты: «с» — «синий язык», «б» — «белый язык», «з» — «зелёный язык», «ф» — «фиолетовый язык», «к» — «кирпичный язык»';

function pigLatin(input, dialect = 'с') {
    if (!input || typeof input !== 'string') {
        return failString;
    }
    dialect = dialect.toLowerCase();
    if (dialect && !APPROVED_DIALECTS.includes(dialect)) {
        return wrongDialectString;
    }
    return input.replace(/а|у|о|ы|и|э|я|ю|ё|е/gi, `$&${dialect}$&`);
}

module.exports = pigLatin;
