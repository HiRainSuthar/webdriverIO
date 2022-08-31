const googlehomepage = require('../pages/googlePage.js')

describe('elemetns finder',function(){
    it('google search',async function(){
        await browser.url('https://www.google.com');
        await browser.pause(10000);
        await googlehomepage.getSearchTxtbox().addValue('PMC');
        await browser.pause(5000);
        await googlehomepage.getSearchBtn().click();
        await browser.pause(3000)
    })

    it('should open a new tab',async () => {
        await browser.url('http://google.com')
        expect(await browser.getTitle()).toEqual('Google') // outputs: "Google"
        await browser.newWindow('https://webdriver.io', 'WebdriverIO window')
        expect(await browser.getTitle()).toHaveText('webdriverio') // outputs: "WebdriverIO · Next-gen WebDriver test framework for Node.js"
        await browser.pause(3000);
        await browser.closeWindow();
        await browser.switchWindow('Google')
        expect(await browser.getTitle()).toEqual('Google') // validation
    });
})