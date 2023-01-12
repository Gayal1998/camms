import { Selector } from "testcafe";
import loginPage from "../page-object/LoginPage";

const add_product_one_name=Selector('#add-to-cart-sauce-labs-fleece-jacket');
const add_product_two_name=Selector("#add-to-cart-sauce-labs-onesie");
fixture('add cart ')
    .page('https://www.saucedemo.com/')
    .beforeEach(async t =>{
          await loginPage.loginToApp('performance_glitch_user','secret_sauce')
    })
    test('add two product to the cart', async t => {
    
        await t
          .click(add_product_one_name)
          .click(add_product_two_name)
          .takeScreenshot({fullPage:true})
       
        
     });