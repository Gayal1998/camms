import { Selector} from "testcafe";
import loginPage from "../page-object/LoginPage";

fixture('Getting Started')
    .page('https://www.saucedemo.com/')
    .before(async t=>{
        //test  setup goes here
        //await runDatbaseReset()
        //await seeTest Data 
     })
     .beforeEach(async t=>{
         //Runs before each test 
         await t.setTestSpeed(1)
      })
      .after(async t=>{
         //cleaning test data 
         //logging and sending data to monitoring systems
         
      })
      .afterEach(async t=>{
         //Runs after each test 
      })
   
test('valid login ', async t => {
        
   
        loginPage.loginToApp('performance_glitch_user','secret_sauce');
        await t
        .expect(Selector('.title').innerText).eql('PRODUCTS')
        .takeScreenshot({fullPage:true})
     });
    
