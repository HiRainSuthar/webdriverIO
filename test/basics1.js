import wdioPageLocators from '../pages/wdioPage';

beforeEach(function () {
    browser.url('https://webdriver.io');
})

describe('webdriver.io page', async () => {
    //Demo of verifying pagetitle
    it('Validate page title', async () => {
        expect(await browser.getTitle()).toEqual('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    })
    
    //Demo of getting the text and validation
    it('Get the text to textbox', async () => {
        await wdioPageLocators.searchBox.waitForEnabled();
        expect(await wdioPageLocators.searchBox.getText()).toEqual('Search');
    })

    //Demo of getText function
    it('validate button text ', async () => {
        expect(await wdioPageLocators.contributeBtn.getText()).toEqual('Contribute');
    })
})