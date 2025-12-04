const {bagi, kali} = require('../src/mathFunctions');

describe ('Fungsi Matematika', () =>{
    //test untuk Fungsi tambah
    it('Pembangian 2 bilangan', ()=>{
        expect(bagi (6,3)).toBe(3);
    });
    it('Perkalian 2 bilangan', ()=>{
        expect(kali (3,3)).toBe(6);
    });
});