import { Selector,t } from "testcafe";



class loginPage{
    constructor(){
        this.login_Input_Username =Selector('#user-name');
        this.login_Input_Password =Selector('#password');
        this.login_Button =Selector('#login-button');
        
    }
    async loginToApp(username,password){
        await t
        .typeText(this.login_Input_Username,username)
        .typeText(this.login_Input_Password,password)
        .click(this.login_Button)
    }
}

export default new loginPage;