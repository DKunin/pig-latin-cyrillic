'use strict';

const {
    strings: { failString, wrongDialectString },
    settings: { approvedDialects }
} = require('./config');

function pigLatin(input, dialect = 'с') {
    if (!input || typeof input !== 'string') {
        return failString;
    }
    dialect = dialect.toLowerCase();
    if (dialect && !approvedDialects.includes(dialect)) {
        return wrongDialectString;
    }
    return input.replace(/а|у|о|ы|и|э|я|ю|ё|е/gi, `$&${dialect}$&`);
}

module.exports = pigLatin;