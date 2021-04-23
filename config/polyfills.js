'use strict'

// Подключаем промисы, если нет родных
if(typeof Promise === 'undefined') {
    require('promise/lib/rejection-tracking').enable();
    window.Promise = require('promise/lib/es6-extensions.js');
}

//Мы хотим Fetch API
require('whatwg-fetch');
require('babel-polyfill');
//Object.assign() нужен для реакта, имеем его из коробки вместе с тс, но мало ли
Object.assign = require('object-assign');

