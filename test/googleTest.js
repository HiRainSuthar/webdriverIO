const googlehomepage = require('../pages/googlePage.js')

describe('elemetns finder',function(){
    it('google search',function(){
        browser.url('https://www.google.com');
        browser.pause(10000);
        googlehomepage.getSearchTxtbox().addValue('PMC');
        browser.pause(5000);
        googlehomepage.getSearchBtn().click();
    })
})