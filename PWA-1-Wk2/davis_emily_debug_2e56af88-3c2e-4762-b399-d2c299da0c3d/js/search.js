/*
Name:  Emily Davis
Date:  June 12, 2015
Class & Section:  PWA1-c201506
Assignment: Goal 3: Assignment: Debug
*/


// Create privatized scope using a self-executing function
(function(){                                                                        // self executing function meant to execute what's in parenthesis immediately
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),                            // declares resultsDiv as a variable and assigns it the value from "results" and the
		searchInput = document.forms[0].search,                                     // the searchInput function is given the value of document index 0, the .search should work
		currentSearch = ''                                                          // currentSearch variable not declared using the "var" and the line doesn't end with a semicolon
	;
	
	// Validates search query
	var validate = function(query){                                    //*** fixed spelling error & operator *** variable validate spelled incorrectly, and this variable is assigned the value of the query function
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){                                               // starts a while loop for the query function using the .charat method which returns the character count
			query = query.substring(1, query.length);                               // returns the extracted character in that position from the string, and the length of the query
		};
		while(query.charAt(query.length-1) === "") {                                 // while loop that uses the .charat method and .length - 1 to see how long the entered search term is
            query = query.substring(0, query.length - 1);
        };                                                             //*** added closing curly brace
		
		// Check search length, must have 3 characters
		if(query.length < 3){                                                       // if statement that checks the query length is less than 3 characters
			alert("Your search query is too small, try again.");        //*** added " at the end of string *** the line about is missing a quotation and prompts the user using the alert feature

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();                                                    // sets the focus on the searchInput box for the user
			return;                                                                 // returns the result of the function
		};
		
		search(query);                                                              // calls the function
	};
	
	// Finds search matches
	var search = function(query){                                      //*** added opening curly brace *** declares the variable search with the value of the function query missing closing curly brace
		
		// split the user's search query string into an array
		var queryArray = query.join(" ");                                           // declares the array, and sets the users entered string into an array
		
		// array to store matched results from database.js
		var results = [];                                                           // creates the results array

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++) {                                        // for loop that loops through the index of the database array

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');                                    // var dbTitleEnd that is assigned the value of the db index value i (a video item)
            var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);              //  assigns the var dbItem (not camel case) the value of the current db index #

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {               // for loop that assigns the variable ii to 0 and jj the array length in a numeric value
                var qitem = queryArray[ii].tolowercase();                           // stores the ii variable into the queryarray as lowercase in the qitem variable

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbitem.indexOf(qitem);
                if (compare !== -1) {
                    results.push(db[i]);
                };                                                  //*** fixed tabbing added closing curly brace
            };                                                      //*** fixed tabbing added closing curly brace
        };                                                          //*** added closing curly brace
		
		results.sort();
		
		// Check that matches were found, and run output functions
		if(results.length = 0){                                                   //*** added opening curly brace
			noMatch();
		}else{
			showMatches(results);
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>';    ///*** moved semicolon

		resultsDIV.innerHTML = html;
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', 
			title, 
			url;                                                                ///*** moved semicolon
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {
        var query = searchInput.value;
        validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;
    };                                                                          //*** added closing curly brace

})();