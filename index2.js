
var SPREADSHEET_ID = "1MqhornBHjwSbeYdoSbOt2vGF8cZijsfX8dMwE4iVERQ";
var TAB_NAME = "Sheet1";


$(document).ready(function () {
  $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID + "/" + TAB_NAME, function (data) {
    
    console.log(data); 
    
     // go over everything in data and run the code below
    data.forEach(function (entry, index) {
      
      console.log(entry);
      
      $(`<section> 
            <p>` + entry.age + `</p>
            <p>` + entry.gender + `</p>
            <p>` + entry.question1 + `</p>
            <p>` + entry.question2 + `</p>
            <p>` + entry.question3 + `</p>
         </section>`)
        .appendTo(".grid");
    });
  });  
});