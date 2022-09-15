import LoginPage from '../pages/loginpage';

describe('Login to saucelabs', function(){

    this.beforeEach(async function(){
        browser.url('https://www.saucedemo.com/');
    })

    const credentials = [
        {
            username:'standard_user',
            password:'secret_sauce'
        },
        {        
            username:'locked_out_user',
            password:'secret_sauce'
        }
    ]

    credentials.forEach(function(credential){
        it('Successful login with valid credentials', async function(){
            await LoginPage.login(credential.username, credential.password);
            if((await browser.getUrl()).includes('inventory')){
                expect(await browser.getUrl()).toContain('inventory');
            }
            else {
                expect(await LoginPage.errorMessage.getText()).toEqual('Epic sadface: Sorry, this user has been locked out.')
            }
        }) 
    })
})