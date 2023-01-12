import { Selector } from "testcafe";
import loginPage from "../page-object/LoginPage";

fixture('chek price ')
    .page('https://www.saucedemo.com/')
    .beforeEach(async t =>{
          await loginPage.loginToApp('performance_glitch_user','secret_sauce')
    })


    test('Check the price of product', async t => {
    
        await t.expect(Selector('#item_5_title_link').innerText).contains('Sauce Labs Fleece Jacket')
        await t.expect(Selector('.inventory_item_price').innerText).contains('29.99')
        .takeScreenshot({fullPage:true})
        
     });