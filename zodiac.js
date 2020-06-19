


// The createRow function takes data returned by OMDB and appends the table data to the tbody
var createRow = function(data) {
    // Create a new table row element
    var tRow = $("<tr>");

    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    var titleTd = $("<td>").text(data.name);
    var yearTd = $("<td>").text(data.compatibility);
    var iconTd = $("<td>").text(data.ruling_planet);
    var actorsTd = $("<td>").text(data.good_traits);

    // var iconToUse = data.list[0].weather[0].icon;

    // var iconURL = "http://openweathermap.org/img/wn/" + icontoUse + ".png";
   
      
    // Append the newly created table data to the table row
    tRow.append(titleTd, yearTd, iconTd, actorsTd);
    // Append the table row to the table body
    $("tbody").append(tRow);
    $("")
  };


  var gogetit = function() {
    var queryURL = "https://zodiacal.herokuapp.com/aries";
    console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET",
      dataType: "json",
      headers: {
        "origin,x-requested-with": "xhr"}
    }).then(function(response) {
      createRow(response);
    });
  };
  
  gogetit();

  // The search OMDB function takes a movie, searches the omdb api for it, and then passes the data to createRow
  // var gogetit = function() {
  //   var queryURL = "http://numbersapi.com/02/13/date";
  //   console.log(queryURL);
  //   $.ajax({
  //     url: queryURL,
  //     method: "GET"
  //   }).then(function(response) {
  //     createRow(response);
  //   });
  // };
  
  // gogetit();


// var d = new Date(1974, 04, 16);
// function _calculateAge(d) { // birthday "d" is a date
//     var ageDifMs = Date.now() - d.getTime();
//     var ageDate = new Date(ageDifMs); // miliseconds from epoch
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// _calculateAge(d);
// console.log(_calculateAge(d))

// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = "http://numbersapi.com/02/13/date"; // site that doesn’t send Access-Control-*
// fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
// .then(response => response.text())
// .then(contents => console.log(contents))
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
// // createRow(response.text());


const url2 = "https://zodiacal.herokuapp.com/aries"; // site that doesn’t send Access-Control-*
fetch(proxyurl + url2) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
.then(contents => console.log(contents))
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
