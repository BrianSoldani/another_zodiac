


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

  // The search OMDB function takes a movie, searches the omdb api for it, and then passes the data to createRow
  var searchSign = function(sign) {
    var queryURL = "https://zodiacal.herokuapp.com/" + sign;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      createRow(response);
    });
  };

  // Search the OMDB API for the following movies, and append table rows for each
  searchSign("Aries");
//   searchOMDB("The Little Mermaid");
//   searchOMDB("The Lion King");
