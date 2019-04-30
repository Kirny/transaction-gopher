function myFunction() {
  var threads = GmailApp.search("in:Transactions");
  for (var i = 0; i < threads.length; i++) {
     var messages = threads[i].getMessages();
     for (var m = 0; m < messages.length; m++) {
       var msg = messages[m].getPlainBody();
       var reg = /\$\d*.\d*/;
       var transactionAmount = reg.exec(msg);
       //Logger.log(msg);
       Logger.log(transactionAmount)

     }
  }
}
