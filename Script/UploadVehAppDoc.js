let browser=Aliases.browser;
let documentRequest=Aliases.browser.pageDocumentSupportRequest.formAspnetform;
let login=Aliases.browser.pageLoanspqXpressAccountsLogin.formAspnetform.table.cell.table.cellBlack;

//uploading a Document
function fileUpload()
{
   browser.pageQualifyingProducts.formFrm.linkPreLabLbtnletters.Click();
   aqUtils.Delay(4000);
   browser.pageLettersList.formFrm.buttonRequestDocSupport.ClickButton();
   browser.ToUrl("https://beta.loanspq.com/Lender/Tools/DocSupportForm.aspx?LenderID=c558111164da4533aff1a66b4582caf0&AppNumber=2608");
   aqUtils.Delay(4000);
   documentRequest.selectRequesttype.ClickItem("Enable ESIG Integration for your Organization");
   aqUtils.Delay(1000);
   documentRequest.table.selectEsigntypes.ClickItem("Xpress Sign Pro (iPad)");
   aqUtils.Delay(1000);
   documentRequest.table.cell.textareaInstructions.Click();
   documentRequest.table.cell.textareaInstructions.Keys("Uploading new document");
   documentRequest.table.fileAttachment1.Click();
   browser.dlgChooseFileToUpload.OpenFile("C:\\doubts\\upload.txt", "All Files (*.*)");
   documentRequest.submitbuttonSubmitRequest.ClickButton();
   aqUtils.Delay(2000);
   aqObject.CheckProperty(browser.pageDocumentSupportRequest.Alert, "Message", cmpEqual, "Your request has been successfully submitted.");
   Log.Message("File Uploaded Successfully");
   aqUtils.Delay(2000);
   browser.pageDocumentSupportRequest.Alert.buttonOk.ClickButton();
   aqUtils.Delay(2000);
   browser.pageLettersList.formFrm.imagebuttonIbtnlogout.Click();
   browser.pageLettersList.Confirm.buttonOk.ClickButton();
   aqUtils.Delay(3000);
   aqObject.CheckProperty(login.textnodeLogin, "contentText", cmpEqual, "Login:");
   Log.Message("Successfully Logged Out");
   browser.BrowserWindow.Close();
   Log.Message("Browser Closed");
}