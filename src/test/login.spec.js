import LoginPage from '../pages/loginpage'

describe('Login to saucelabs', function () {
  this.beforeEach(async function () {
    browser.url('https://www.saucedemo.com/')
  })

  const credentials = [
    {
      username: 'standard_user',
      password: 'secret_sauce'
    },
    {
      username: 'locked_out_user',
      password: 'secret_sauce'
    }
  ]

  credentials.forEach(function (credential) {
    it('Login tests', async function () {
      await LoginPage.login(credential.username, credential.password)
      if ((await browser.getUrl()).includes('inventory')) {
        expect(browser).toHaveUrlContaining('inventory')
      } else {
        expect(await LoginPage.errorMessage.getText()).toHaveText(
          'Epic sadface: Sorry, this user has been locked out.'
        )
      }
    })
  })
})
