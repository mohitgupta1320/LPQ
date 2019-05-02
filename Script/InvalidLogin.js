  let browserLogin= Aliases.browser.pageLoanspqXpressAccountsLogin.formAspnetform.table; 
  let browser=Aliases.browser;

  //invalid login
  function InvalidLogin()
{
  
   browserLogin.table.textboxTxtlogin.SetText("ALOKA_QA_BH");
  browserLogin.table.submitbuttonLogin.ClickButton();
  aqUtils.Delay(1000);
  browserLogin.cell.table.table.passwordboxAnswer1.SetText("jhansi");
  browserLogin.cell.table.table.passwordboxAnswer2.Click();
  browserLogin.cell.table.table.passwordboxAnswer2.SetText("jhansi");
  browserLogin.cell.table.submitbuttonContinue.ClickButton();
  aqUtils.Delay(2000);
  browserLogin.cell.table.table2.passwordboxPassword.SetText("pass");
  browserLogin.cell.table.table2.submitbuttonSignIn.ClickButton();
  aqObject.CheckProperty(Aliases.browser.pageLoanspqXpressAccountsLogin.formAspnetform.table.cell.table.table.textnodeLblerror, "contentText", cmpEqual, "An invalid login or password has been entered. After 5 failed attempts, your account will be locked. Please, contact your administrator for further assistance.");
  aqObject.CheckProperty(Aliases.browser.pageMainPage.formAspnetform.tableTable2.cell.table.cell.textnodeLblwelcome, "contentText", cmpEqual, "Welcome, Alok!");
  Log.Message("Verified Invalid Login");
  browser.BrowserWindow.Close();
}

