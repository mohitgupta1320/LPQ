  
  let browserLogin= Aliases.browser.pageLoanspqXpressAccountsLogin.formAspnetform.table; 
  
  //launching Application
  function LaunchApplication()
{
  var env="qa";
  
  if(env=="qa")
  {  

  var url = "https://beta.loanspq.com/login.aspx?enc2=36aNbmudSLCCMdjJoYQn6iT9nG7GRjqBbkIAMYcy9aM";
  Browsers.Item(btIExplorer).Run(url);
  Log.Message("Application Launched");
  aqObject.CheckProperty(browserLogin.cell.table.cellBlack.textnodeLogin, "contentText", cmpEqual, "Login:");
  Log.Message("Application Launched Verified");
  }
  else if(env=="production")
  {
    var url = "https://www.google.com/";
  Browsers.Item(btIExplorer).Run(url);
  Log.Message("Application Launched");
  aqObject.CheckProperty(browserLogin.cell.table.cellBlack.textnodeLogin, "contentText", cmpEqual, "Login:");
  Log.Message("Application Launched Verified");
  }
} 

  //export statement
module.exports.LaunchApplication=LaunchApplication;