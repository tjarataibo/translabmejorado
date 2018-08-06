const assert = require('chai').assert;
global.window = global;
require('../src/js/validate'); //Sólo enlaza el archivo, parecido al script de html

describe('Validar emails', ()=>{ //Describe lo que habrá dentro de cada función
    describe('Debería verificar si existe el arroba', ()=>{
        it('Debería el correo tener sólo un arroba', ()=>{ //Caso de prueba
            assert.equal(validateEmail("qwerty@qwerty.com"), true); //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
            assert.equal(validateEmail("qwerty@@qwerty.com"), false);
            assert.equal(validateEmail("qwerty.com"), false);
        });
        it('Debería el correo tener un arroba antes del dominio', ()=>{
            assert.equal(validateEmail("tjarataibo@gmail.com"), true);
            assert.equal(validateEmail(".com@qwerty"), false);
        });
    });(
    describe('Debería verificar si tiene un dominio', ()=>{
        it('Tiene un punto y luego solo carácteres del alfabeto', ()=>{
            assert.equal(validateEmail('qwerty@qwerty'), false);
            assert.equal(validateEmail('qwerty@qwerty.'), false);
        });
    }));
    describe('Debería verificar que no tenga carácteres raros', ()=>{
        it('Debería el correo tener sólo un arroba', ()=>{ //Caso de prueba
            assert.equal(validateEmail("qwerty@qwerty.com"), true); //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
            assert.equal(validateEmail("qwerty@@qwerty.com"), false);
            assert.equal(validateEmail("qwerty.com"), false);

    });(
    describe('Debería verificar que tenga al menos 1 carácter antes del arroba', ()=>{

    }));
});