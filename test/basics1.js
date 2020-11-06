const wdioPageLocators = require('../pages/wdioPage')

beforeEach(function () {
    browser.url('https://webdriver.io');
})

describe('webdriver.io page', () => {
    //Demo of verifying pagetitle
    it('Validate page title', () => {
        assert.strictEqual(browser.getTitle(), 'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    })
    
    //Demo of sending keys
    it('send keys to textbox', () => {
        wdioPageLocators.searchBox().addValue('webdriver');
    })

    //Demo of getText function
    it('validate button text ', () => {
        assert.strictEqual(wdioPageLocators.contributeBtn().getText(), 'Contribute');
    })    

    xit('Demo of protractor super calc', () => {
        browser.url('https://juliemr.github.io/protractor-demo/');
        let firstTxtbox = $("input[ng-model ='first']")
        firstTxtbox.addValue('4')
        let text = $("select[ng-model ='operator']").getValue();
        console.log(text);
        $("input[ng-model ='second']").addValue('5');
        $("button[id='gobutton']").click();
        console.log($('table > tbody > tr > td:nth-child(3)').getText());
    })

    xit('should open a new tab', () => {
        browser.url('http://google.com')
        console.log(browser.getTitle()) // outputs: "Google"

        browser.newWindow('https://webdriver.io', 'WebdriverIO window')
        console.log(browser.getTitle()) // outputs: "WebdriverIO · Next-gen WebDriver test framework for Node.js"
        browser.pause(3000);
        browser.closeWindow();
        browser.switchWindow('Google')
        console.log(browser.getTitle()) // outputs: "Google"
    });
})