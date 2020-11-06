class wdioPageLocators {
    constructor() {
        this.searchBox = () => $('#search_input_react');
        this.contributeBtn = () => $('nav > ul > li:nth-child(6) > a');
    }
}

module.exports = new wdioPageLocators();