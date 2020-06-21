describe('webdriver.io page', () => {
    //Demo of verifying pagetitle
    it('should have the right title', () => {
        browser.url('https://webdriver.io');
        var title = browser.getTitle();
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
    })

    //Demo of sending keys
    it('should send keys to searbox', () => {
        browser.url('https://webdriver.io');
        let searchBox = $('#search_input_react')
        searchBox.addValue('webdriver');
    })

    //Demo of getText function
    it('should get text of button', () => {
        browser.url('https://webdriver.io');
        let contributeBtn = $('nav > ul > li:nth-child(6) > a')
        let btnText = contributeBtn.getText();
        console.log(btnText)
    })

    it('Demo of protractor super calc', () => {
        browser.url('https://juliemr.github.io/protractor-demo/');
        let firstTxtbox = $("input[ng-model ='first']")
        firstTxtbox.addValue('4')
        let text = $("select[ng-model ='operator']").getValue();
        console.log(text);
        $("input[ng-model ='second']").addValue('5');
        $("button[id='gobutton']").click();
        console.log($('table > tbody > tr > td:nth-child(3)').getText());
    })

    it('should open a new tab', () => {
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