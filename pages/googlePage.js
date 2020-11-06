class googleHomePage {
    constructor() {
        this.getSearchTxtbox = () => $("//input[@name='q']")
        this.getSearchBtn = () => $("//input[@name='btnK']")
        
        //another way of declaring locators
        // get searchTxtbox() { return $("//input[@name='q']") }
        // get searchBtn() { return $("//input[@name='btnK']") }
    }
}

module.exports = new googleHomePage();