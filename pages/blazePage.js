class blazePage {

    //notes - you cannot pass parameters in the get methods like java 
    //use direct function without get keyword.
    //one way to get multipl elements
    //get the parent
    parent  = $('ul.list-nav-links');
    // get parent(){
    //     return $('ul.list-nav-links')
    // }
    //using parent get the children
    childElements = this.parent.$$('li');
    // get childElements(){
    //     return this.parent.$$('li');
    // }
    //method to get the text for desired element from elements
    get getTextForLis(){
        return this.childElements.filter(element => {
            console.log(element.getText());
        });
    }

    //direct method to get findelements
    liElements = $$("#main-nav > ul > li:nth-child(1)");
    // get liElements(){
    //     return $$("#main-nav > ul > li:nth-child(1)")
    // }

    get getTextForLiElements(){
        return this.liElements.filter(element => {
            console.log(element.getText());
        });
    }
}

module.exports = new blazePage();