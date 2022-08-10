/*
Beatriz Orozco
8/1/2022
*/


//making sure all function are ready when the document is 


$(document).ready(function() {
  let page = 1; //keep track of pages

  $("#searchBtn").on("click", function() { //on click it returns the first page of results of the search terms (movie name and media type)

    //delete table child first
    $("#movieTableBody").children().remove();
    $("#movieTableBody").children().remove();
    $("#moviepages").children().remove();

    //get user input
    let mName = $("#moviename").val();
    let mtype = $("#mediatype").val();
    //Urls to use
    let OMDbUrl = "https://www.omdbapi.com/?s=" + mName + "&type=" + mtype + "&apikey=b5ed8a76&page=" + page; //&page=1 - default

    let IMDbUrl = "https://www.imdb.com/title/";

    $.getJSON(OMDbUrl, function(result) {


      if (!result.hasOwnProperty("Error"))
      {
        //get the length of results
        //create for loop to create a  table html element 
        // - 3 elements columns for each movie 
        // each movie item has 5 data elements (img poster, title, type, year, imbdID url link)
        //determine how many rows is needed 
       console.log(result);
       // console.log(result.Search.length);
       // console.log(result.totalResults);
       // console.log(Math.ceil(result.totalResults / 10));
  
        let counter = 0; //keep track of elements
  
        for (i = 0; i < result.Search.length; i++) { //read value, create tablesss
  
          //read value, create table
          let posterImg = (result.Search[i].Poster);
          let movieTitle = (result.Search[i].Title);
          let movieType = (result.Search[i].Type);
          let movieYear = (result.Search[i].Year);
          let movieImdb = (result.Search[i].imdbID);
  
  
          if (counter < 3)// a row will have three movie elements
          {
            let newMoviecolumn = $("<td>  </td>");
  
            let movieItem1 = $("<li class = 'list-group-item'> </li>");
            let movieItem1_btag = $("<b </b>")
            movieItem1_btag.text(movieTitle);
            movieItem1.append(movieItem1_btag)
  
            let movieItem2 = $("<li class = 'list-group-item'> </li>");
            movieItem2.text("Type: " + movieType);
            let movieItem3 = $("<li class = 'list-group-item'> </li>");
            movieItem3.text("Year: " + movieYear);
            let movieItem4 = $("<li class = 'list-group-item'> </li>");
            let movieItem4_atag = $("<a </a>")
            movieItem4_atag.text("View on IMDb");
            movieItem4_atag.attr("href", IMDbUrl + movieImdb);
            movieItem4.append(movieItem4_atag)
  
            let newMoviePoster = $("<img>");
            newMoviePoster.attr("src", posterImg);
  
  
            newMoviecolumn.append(newMoviePoster)
            newMoviecolumn.append(movieItem1)
            newMoviecolumn.append(movieItem2)
            newMoviecolumn.append(movieItem3)
            newMoviecolumn.append(movieItem4)
  
            $("#movieTableBody").append(newMoviecolumn);
            counter++;
          }
          else {
            counter = 0; //reset counter
            $("#movieTableBody").append("<tr> </tr>"); //creating a new row
            let newMoviecolumn = $("<td>  </td>"); // a row will have three movie elements
  
            let movieItem1 = $("<li class = 'list-group-item'> </li>");
            let movieItem1_btag = $("<b </b>")
            movieItem1_btag.text(movieTitle);
            movieItem1.append(movieItem1_btag)
  
            let movieItem2 = $("<li class = 'list-group-item'> </li>");
            movieItem2.text("Type: " + movieType);
            let movieItem3 = $("<li class = 'list-group-item'> </li>");
            movieItem3.text("Year: " + movieYear);
            let movieItem4 = $("<li class = 'list-group-item'>  </li>");
            let movieItem4_atag = $("<a </a>")
            movieItem4_atag.text("View on IMDb");
            movieItem4_atag.attr("href", IMDbUrl + movieImdb);
            movieItem4.append(movieItem4_atag)
  
  
            let newMoviePoster = $("<img>");
            newMoviePoster.attr("src", posterImg);
  
  
            newMoviecolumn.append(newMoviePoster)
            newMoviecolumn.append(movieItem1)
            newMoviecolumn.append(movieItem2)
            newMoviecolumn.append(movieItem3)
            newMoviecolumn.append(movieItem4)
  
            $("#movieTableBody").append(newMoviecolumn);
            counter++;
          }
  
        }
  
        // create pagnation
        //creating a new row
        for (i = 1; i <= Math.ceil(result.totalResults / 10); i++) {
          let pagenum_a = $("<a  </a>");
          pagenum_a.text(String(i));
          pagenum_a.attr("href", "javascript:gotoPage(" + String(i) + ");");
          pagenum_a.attr("id", "pages" + String(i));
          //console.log(String(i));
          $(".w3-bar").append(pagenum_a);
  
        }
      }
      else //result.Response = "False"
      {
        alert("Error: "+result.Error);
      }
    });

  });





});

function gotoPage(pagenum) { // clears the page and 
  //delete table child first
  page = pagenum;
  $("#movieTableBody").children().remove();
  $("#movieTableBody").children().remove();
  $("#movieTableBody").children().remove();
  //get user input
  let mName = $("#moviename").val();
  let mtype = $("#mediatype").val();
  //Urls to use
  let OMDbUrl = "https://www.omdbapi.com/?s=" + mName + "&type=" + mtype + "&apikey=130d2b6b&page=" + page; //&page=1 - default

  let IMDbUrl = "https://www.imdb.com/title/";

  $.getJSON(OMDbUrl, function(result) {

    //get the length of results
    //create for loop to create a  table html element 
    // - 3 elements columns for each movie 
    // each movie item has 5 data elements (img poster, title, type, year, imbdID url link) //Beatriz Orozco//8/1/2022
    //determine how many rows is needed 
   // console.log(result);
//console.log(result.Search.length);
   // console.log(result.totalResults);
   // console.log(Math.ceil(result.totalResults / 10));

    let counter = 0; //keep track of elements

    for (i = 0; i < result.Search.length; i++) { //each [age]

      //read value, create table
      let posterImg = (result.Search[i].Poster);
      let movieTitle = (result.Search[i].Title);
      let movieType = (result.Search[i].Type);
      let movieYear = (result.Search[i].Year);
      let movieImdb = (result.Search[i].imdbID);


      if (counter < 3)// a row will have three movie elements
      {
        let newMoviecolumn = $("<td>  </td>");

        let movieItem1 = $("<li class = 'list-group-item'> </li>");
        let movieItem1_btag = $("<b </b>")
        movieItem1_btag.text(movieTitle);
        movieItem1.append(movieItem1_btag)

        let movieItem2 = $("<li class = 'list-group-item'> </li>");
        movieItem2.text("Type: " + movieType);
        let movieItem3 = $("<li class = 'list-group-item'> </li>");
        movieItem3.text("Year: " + movieYear);
        let movieItem4 = $("<li class = 'list-group-item'> </li>");
        let movieItem4_atag = $("<a </a>")
        movieItem4_atag.text("View on IMDb");
        movieItem4_atag.attr("href", IMDbUrl + movieImdb);
        movieItem4.append(movieItem4_atag)

        let newMoviePoster = $("<img>");
        newMoviePoster.attr("src", posterImg);


        newMoviecolumn.append(newMoviePoster)
        newMoviecolumn.append(movieItem1)
        newMoviecolumn.append(movieItem2)
        newMoviecolumn.append(movieItem3)
        newMoviecolumn.append(movieItem4)

        $("#movieTableBody").append(newMoviecolumn);
        counter++;
      }
      else {
        counter = 0; //reset counter
        $("#movieTableBody").append("<tr> </tr>"); //creating a new row
        let newMoviecolumn = $("<td>  </td>"); // a row will have three movie elements

        let movieItem1 = $("<li class = 'list-group-item'> </li>");
        let movieItem1_btag = $("<b </b>")
        movieItem1_btag.text(movieTitle);
        movieItem1.append(movieItem1_btag)

        let movieItem2 = $("<li class = 'list-group-item'> </li>");
        movieItem2.text("Type: " + movieType);
        let movieItem3 = $("<li class = 'list-group-item'> </li>");
        movieItem3.text("Year: " + movieYear);
        let movieItem4 = $("<li class = 'list-group-item'>  </li>");
        let movieItem4_atag = $("<a </a>")
        movieItem4_atag.text("View on IMDb");
        movieItem4_atag.attr("href", IMDbUrl + movieImdb);
        movieItem4.append(movieItem4_atag)


        let newMoviePoster = $("<img>");
        newMoviePoster.attr("src", posterImg);


        newMoviecolumn.append(newMoviePoster)
        newMoviecolumn.append(movieItem1)
        newMoviecolumn.append(movieItem2)
        newMoviecolumn.append(movieItem3)
        newMoviecolumn.append(movieItem4)

        $("#movieTableBody").append(newMoviecolumn);
        counter++;
      }

    }


  });
};

