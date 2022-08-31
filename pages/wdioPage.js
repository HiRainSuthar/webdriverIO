class wdioPageLocators {
  get searchBox() {
    return $(".DocSearch-Button-Placeholder");
  }
  get contributeBtn() {
    return $(".navbar__items a:nth-child(6)");
  }
}

export default new wdioPageLocators();
