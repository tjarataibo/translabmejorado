/* const assert = require('chai').assert;
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
    describe('Debería verificar si tiene un dominio', ()=>{
        it('Tiene un punto y luego solo carácteres del alfabeto', ()=>{
            assert.equal(validateEmail('qwerty@qwerty'), false);
            assert.equal(validateEmail('qwerty@qwerty.'), false);
        });
    describe('Debería verificar que no tenga carácteres raros', ()=>{
        it('Debería el correo tener sólo un arroba', ()=>{ //Caso de prueba
            assert.equal(validateEmail("qwerty#@qwerty.com"), false); //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
            assert.equal(validateEmail("%qwerty@@qwerty.com"), false);
            assert.equal(validateEmail("qwerty&.com"), false);
        });
    describe('Debería verificar que tenga al menos 1 carácter antes del arroba', ()=>{
            assert.equal(validateEmail("q@qwerty.com"), true);
            assert.equal(validateEmail("@qwerty.com"), false);
        });
    });
}); */


/* describe('Validar contraseña', ()=>{ // Describe lo que habrá dentro de cada función
  describe('Debería verificar que no contenga máximo 8 carácteres', ()=>{
    it('Debería aceptar sólo números', ()=>{ // Caso de prueba
      assert.equal(validatePassword('12345678'), true); // assert.equal verifica que el parámetro 1 sea igual al parámetro 2
      assert.equal(validatePassword('123456789'), false);
      assert.equal(validatePassword('qwertyui'), false);
      assert.equal(validatePassword('1234567'), false);
      assert.equal(validatePassword('@1234567'), false);
    });
  });
});


describe('Validar tarjeta', () =>{
  describe('verificar que contenga máximo 10 caracteres numéricos y no contenga espacio en blanco', () =>{
    it('Debería tener máximo 10 carácteres', () =>{
      assert.equal(validateCard('0123456789'), true);
      assert.equal(validateCard('12345678'), true);
      assert.equal(validateCard('01234567891234'), false);
    });
    it('Debería tener sólo números', () =>{
      assert.equal(validateCard('1234567890'), true);
      assert.equal(validateCard('12a4g609jk'), false);
    });
    it('Debería no tener espacios', () =>{
      assert.equal(validateCard('1234567890'), true);
      assert.equal(validateCard('12 347'), false);
      assert.equal(validateCard('12 34787686'), false);
    });
  });
}); */

const assert = require('chai').assert;
global.window = global;
require('../src/js/validate.js'); // Enlaza el archivo

// Validar correo
describe('Validar emails', () => { 
  describe('Debería verificar si existe el arroba', () => {
    it('Debería el correo tener sólo un arroba', () => { 
      assert.equal(validateEmail('qwerty@qwerty.com'), true);
      assert.equal(validateEmail('qwerty@@qwerty.com'), false);
      assert.equal(validateEmail('qwerty.com'), false);
    });
    it('Debería el correo tener un arroba antes del dominio', ()=>{
      assert.equal(validateEmail('tjarataibo@gmail.com'), true);
      assert.equal(validateEmail('.com@qwerty'), false);
    });
    it('Tiene un punto y luego sólo carácteres del alfabeto', ()=>{
      assert.equal(validateEmail('qwerty@qwerty.cl'), true);
      assert.equal(validateEmail('qwerty@qwerty'), false);
      assert.equal(validateEmail('qwerty@qwerty.'), false);
    });
  });
});

// Validar contraseña
describe('Validar contraseña', ()=>{ // Describe lo que habrá dentro de cada función
  describe('Debería verificar que contenga máximo 8 carácteres', ()=>{
    it('Debería aceptar sólo números', ()=>{ // Caso de prueba
    //   assert.equal(validatePassword('12345678'), true); // assert.equal verifica que el parámetro 1 sea igual al parámetro 2
      assert.equal(validatePassword('123456789'), false);
      assert.equal(validatePassword('qwertyui'), false);
      assert.equal(validatePassword('12345 678'), false);
    //   assert.equal(validatePassword('1234567'), false);
    //   assert.equal(validatePassword('@1234567'), false);
    });
  });
});

// Validar tarjeta
describe('Validar tarjeta', () =>{
  describe('verificar que contenga máximo 10 carácteres numéricos y no contenga espacios', () =>{
    it('Debería tener máximo 10 carácteres', () =>{
    //   assert.equal(validateCard('0123456789'), true);
    //   assert.equal(validateCard('12345678'), true);
      assert.equal(validateCard('01234567891234'), false);
    });
    it('Debería tener sólo números', () =>{
    //   assert.equal(validateCard('1234567890'), true);
      assert.equal(validateCard('12a4g609jk'), false);
    });
    it('Debería no tener espacios', () =>{
    //   assert.equal(validateCard('1234567890'), true);
      assert.equal(validateCard('12 347'), false);
      assert.equal(validateCard('12 34787686'), false);
    });
  });
});
