(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = {
    strings: {
        failString: 'Пожалуйста добавьте строку',
        wrongDialectString: 'Допустимые диалекты: «с» — «синий язык», «б» — «белый язык», «з» — «зелёный язык», «ф» — «фиолетовый язык», «к» — «кирпичный язык»'
    },
    settings: {
        approvedDialects: [ 'с', 'б', 'з', 'а', 'к', 'ф' ]
    }
}
},{}],2:[function(require,module,exports){
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
},{"./config":1}],3:[function(require,module,exports){
const pigLatin = require('./index');

document.addEventListener('DOMContentLoaded', function() {
    const app = new Vue({
        el: '#app',
        template: document.querySelector('.translator').innerHTML,
        data: {
            message: `
                Я сразу смазал карту будня,
                плеснувши краску из стакана;
                я показал на блюде студня
                косые скулы океана.
                На чешуе жестяной рыбы
                прочел я зовы новых губ.
                А вы
                ноктюрн сыграть
                могли бы
                на флейте водосточных труб? 
            `,
            dialect: 'с'
        },
        computed: {
            translated() {
                return pigLatin(this.message, this.dialect);
            }
        }
    });
});
},{"./index":2}]},{},[3]);
