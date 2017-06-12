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