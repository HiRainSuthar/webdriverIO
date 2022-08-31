const blazepage = require('../pages/blazePage.js')

describe("practice of findelements", function(){
    it("blaze page for findelements", async function(){
        await browser.url("https://www.blazemeter.com/");
        await blazepage.getTextForLis;
        await blazepage.getTextForLiElements;
    });
});