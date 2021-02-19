function doGet() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var lastRow = sheet.getLastRow();
  var randnum = Math.floor(Math.random() * lastRow + 1);

  var range = sheet.getRange(randnum, 1);

  var result = {
    message: range.getValue()
  }

  var out = ContentService.createTextOutput();

  //Mime TypeをJSONに設定
  out.setMimeType(ContentService.MimeType.JSON);

  //JSONテキストをセットする
  out.setContent(JSON.stringify(result));

  Logger.log(range.getValue());

  return out;

}
