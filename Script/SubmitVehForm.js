let browser=Aliases.browser;
let loanInfo=Aliases.browser.pageShortApplication.formFrm.tableTable2.cell;
let personalInfo=Aliases.browser.pageShortApplication2.formFrm.tableTable2.cell.table.cell.tableContent.cellMaincontent.panelFbgrid;
let check=Aliases.browser.pageShortApplication2.formFrm.tableTable2.cell.table.cell.tableContent.cellMaincontent.tableCustomQuestionTable.cell2.tableChkanswer.cell;
let emptype=Aliases.browser.pageShortApplication2.formFrm.tableTable2.cell.table.cell.tableContent.cellMaincontent;

//vehicle form filling
function formfilling()
  {
    emptype.selectOuEmployeeoflendertype.ClickItem("EMPLOYEE");
    aqUtils.Delay(4000);
    loanInfo.textboxAmountrequested.Keys("^a");
    aqUtils.Delay(1000);
    loanInfo.textboxAmountrequested.SetText("25000");
    loanInfo.panelFbgrid.textboxLoanterm.Keys("^a");
    loanInfo.panelFbgrid.textboxLoanterm.SetText("12");
    var drpDwn=loanInfo.panelFbgrid.selectRequesttypeRequesttype;
    var count=drpDwn.wItemCount;
    Log.Message("DropDown Count  " +count);
    aqObject.CheckProperty(drpDwn, "wItemCount", cmpEqual, "9");
    var values=loanInfo.panelFbgrid.selectRequesttypeRequesttype.wItemList;
    Log.Message("DropDown values " +values);
    loanInfo.panelFbgrid.selectRequesttypeRequesttype.ClickItem("Purchase");
    aqUtils.Delay(6000);  
    personalInfo.textboxSaSsn.Click();
    personalInfo.textboxSaSsn.SetText("000000001");
    personalInfo.textboxSaFname.Click(); 
    aqUtils.Delay(8000); 
    check.checkboxOnline.ClickChecked(true);
    aqUtils.Delay(5000);
    loanInfo.tableCustomQuestionTable.cell.selectDrpanswer.ClickItem("No");
    aqUtils.Delay(1000);
    loanInfo.tableCustomQuestionTable.cell2.selectDrpanswer.ClickItem("No");
    aqUtils.Delay(3000);
    browser.pageShortApplication2.formFrm.tableTable2.cell.table.cell.tableContent.cellMaincontent.buttonPullCreditSave.ClickButton();
    aqUtils.Delay(13000);
    aqObject.CheckProperty(browser.pageQualifyingProducts.formFrm.textnodePreSbLblpagetitle, "contentText", cmpEqual, "UNDERWRITING RESULTS");
    aqUtils.Delay(2000);
    Log.Message("Verified Vehicle App form submitted successfully");
  }