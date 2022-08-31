
describe('Trying angular app', function(){
    it('Demo of protractor super calc', async() => {
        await browser.url('https://juliemr.github.io/protractor-demo/');
        let firstTxtbox = await $("input[ng-model ='first']")
        await firstTxtbox.addValue('4')
        await $("input[ng-model ='second']").addValue('5');
        await $("button[id='gobutton']").click();
        expect(await $('table > tbody > tr > td:nth-child(3)').getText()).toEqual('9')
    })
})