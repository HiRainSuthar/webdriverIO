class CheckoutYourInfoPage {
  get firstNameTextbox () {
    return $('#first-name')
  }

  get lastNameTextbox () {
    return $('#last-name')
  }

  get zipCodeTextbox () {
    return $('#postal-code')
  }

  get continueBtn () {
    return $('#continue')
  }

  async fillupInformation (firstnameValue, lastnameValue, zipcodeValue) {
    await this.firstNameTextbox.setValue(firstnameValue)
    await this.lastNameTextbox.setValue(lastnameValue)
    await this.zipCodeTextbox.setValue(zipcodeValue)
    await this.continueBtn.click()
  }
}

export default new CheckoutYourInfoPage()
