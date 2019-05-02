//import statement
var LaunchApp=require("LaunchApplication");

let browserLogin= Aliases.browser.pageLoanspqXpressAccountsLogin.formAspnetform.table; 
let browser=Aliases.browser;


//valid Login
function validLogin()
{
//launching browser
  LaunchApp.LaunchApplication();
 
  browserLogin.table.textboxTxtlogin.SetText("ALOKA_QA_BH");
  browserLogin.table.submitbuttonLogin.ClickButton();
  aqUtils.Delay(1000);
  browserLogin.cell.table.table.passwordboxAnswer1.SetText("jhansi");
  browserLogin.cell.table.table.passwordboxAnswer2.Click();
  browserLogin.cell.table.table.passwordboxAnswer2.SetText("jhansi");
  browserLogin.cell.table.table2.radiobuttonYesRegisterTheCompute.ClickButton();
  browserLogin.cell.table.submitbuttonContinue.ClickButton();
  aqUtils.Delay(2000);
  browserLogin.cell.table.table2.passwordboxPassword.SetText("password@2");
  browserLogin.cell.table.table2.submitbuttonSignIn.ClickButton();
  aqUtils.Delay(12000);
  aqObject.CheckProperty(Aliases.browser.pageMainPage.formAspnetform.tableTable2.cell.table.cell.textnodeLblwelcome, "contentText", cmpEqual, "Welcome, Alok!");
  Log.Message("Verified Valid Login");
}