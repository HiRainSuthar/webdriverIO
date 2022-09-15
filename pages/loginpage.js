class LoginPage{
    get username(){
        return $("#user-name");
    }

    get password(){
        return $('#password')
    }

    get loginBtn(){
        return $('#login-button')
    }

    get logoutBtn(){
         return $('#react-burger-menu-btn')
    }

    get errorMessage(){
      return $("//h3[@data-test='error']") 
    }

    async login(usernamevalue, passwordvalue){
        await this.username.setValue(usernamevalue);
        await this.password.setValue(passwordvalue)
        await this.loginBtn.click();
    }

    async logout(){
        await this.logoutBtn.click();
    }
}

export default new LoginPage();