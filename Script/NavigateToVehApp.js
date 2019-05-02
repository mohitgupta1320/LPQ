let browser=Aliases.browser;
let move=Aliases.browser.pageMainPage;
let pageApp=Aliases.browser.pageShortApplication2.formFrm.tableTable2.cell.table.cell.tableContent.cellMaincontent;

//navigate to vehicle App
  function vehicleForm()
  {
    move.HoverMouse(125, 80);
    aqUtils.Delay(3000);
    move.HoverMouse(135, 200);
    move.formAspnetform.linkLoanmenuhandlerAspxCmdNewVe.Click();
    aqUtils.Delay(6000);
    Log.Message("Vehicle App Launched");
    aqObject.CheckProperty(pageApp.panelVehicleInfo, "contentText", cmpEqual, "Vehicle Info");
    aqUtils.Delay(3000);
    Log.Message("Verified Vehicle App Launched");
  }