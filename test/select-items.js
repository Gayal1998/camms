import { Selector } from "testcafe";
import loginPage from "../page-object/LoginPage";
import faker from 'faker';

const add_product_one_name=Selector('#add-to-cart-sauce-labs-fleece-jacket');
const add_product_two_name=Selector("#add-to-cart-sauce-labs-onesie");
const cart_icon =Selector('#shopping_cart_container');
const  item_1_verify = Selector('#item_5_title_link');
const  item_2_verify = Selector('#item_2_title_link');
const  check_out = Selector('#checkout');
const first_name_input=Selector('#first-name')
const last_name_input=Selector('#last-name')
const zip_code_input=Selector('#postal-code')
const continue_bttn=Selector('#continue')
const finish_bttn=Selector('#finish')




fixture('click cart and tests ')
    .page('https://www.saucedemo.com/')

    .beforeEach(async t =>{
          await loginPage.loginToApp('performance_glitch_user','secret_sauce')
    })
    test('click cart icon veryfy selected item are in the cart and other testing in assignment', async t => {
        const first_name = faker.Name.firstName()
        const last_name = faker.Name.lastName()
        const postal_code = faker.Address.zipCode()
        
        await t
          .click(add_product_one_name)
          .click(add_product_two_name)
          .click(cart_icon)
          .expect(item_1_verify.innerText).eql('Sauce Labs Fleece Jacket')
          .expect(item_2_verify.innerText).eql('Sauce Labs Onesie')
          .click(check_out)
          .typeText(first_name_input,first_name)
          .typeText(last_name_input,last_name)
          .typeText(zip_code_input,postal_code)
          .click(continue_bttn)
          .click(finish_bttn)
          .takeScreenshot({fullPage:true})
       
        
     });

    