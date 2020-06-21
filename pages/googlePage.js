class googleHomePage{

    get searchTxtbox() { return $("//input[@name='q']") }
    get searchBtn() { return $("//input[@name='btnK']") }
}

module.exports = new googleHomePage();