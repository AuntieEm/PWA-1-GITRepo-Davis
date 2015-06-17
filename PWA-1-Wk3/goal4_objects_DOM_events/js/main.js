/*
    PWA1: Goal 4: Course Material 4

	1. Objects
	2. Document Object Model
	3. Events and Callbacks
*/

// application scope (self-executing function)
(function(){


/*	==================================================================
	Objects
	------------------------------------------------------------------
		
	- objects are collections of keys and values for storing data {KEY : Value} pairings, also 
		known as associative pairing
 
	- arrays and objects are both used to store multiple values 
		arrays vs objects:  
 			1.  arrays store by numerical index
 			2.  objects store by a key index
	
	- keys in objects are names (similar to variables), used to index a value inside the object

	-similar to making an array, we declare the object’s properties inside the literal, separating by comma...
*/
console.log('------Objects ----------');

//{KEY : Value} pairings,
    person = {'name' : 'bond', 'age':35, 'secretAgent' : true};                              //todo     create a new object called person use curly braces with a key of name and value of bond,
                                                                                             //todo     a key of age with a value 35, and a key of secret agent with a value of true close with semi colon

    person ={name:'bond',age:35,secretAgent:true};                                           //todo     you have the choice of using '' around each key



/* accessing object properties
     - below are 3 ways you can access the property information in an object
         1. dot notation
         2. index notation using a variable as the index
         3. index notation using a string

     - also keep in mind that since the keys can be strings, you could access the keys using string variables
 */
    //getter

    var personAge = 'age';                                                                  //todo      create a variable called personAge that uses the age key.
    console.log (person.name, person[personAge], person['secretAgent']);                    //todo      output the object person's name using dot notation, person's age using personAge variable in index notation, and person's secretAgent value using index notation and a string.

// setter

    person['age'] = '40';                                                                   //todo      use the object person and change the age key to 40 using index notation and a string.
    person.name = "JamesBond";                                                              //todo      use the object person and change the name key to JamesBond using dot notation and a string.
    console.log(person);                                                                    //todo      output the object person.



//nested objects

    person = {birthday:{month:02,day:12},name:'bond'};                                      //todo      create a nested object using the person object and set birthday object set month within birthday with a value of 2 and key of day and value of 12. within birthday set name key value to jamesbond.
    console.log(person);                                                                    //todo      output person object
    console.log(person['birthday']['month']);                                               //todo      output person object with birthday & month keys using index notation.
    console.log(person.birthday.month);                                                     //todo      output person object with birthday and month keys using dot notation


//---------------------------------------------

// Object within an object

console.log('------Object within an object, Arrays, Function ----------');

    var thatGuy = {                                                                         //todo      set up an object called thatGuy
        name: 'JamesBond',                                                                  //todo      with in thatGuy object set a key of name with value of james bond   string
        course: 'PWA1',                                                                     //todo      with in thatGuy object set a key of course with value of pwa 1  string
        address: {                                                                          //todo      with in thatGuy object set a new object called address
            num: 330,                                                                       //todo      within address object set a key of num with a value of 3300     number
            street: 'University',                                                           //todo      within address object set a key of street with a value of university    string
            city: 'Orlando',                                                                //todo      within address object set a key of city with a value of orlando         string
            cornerOf: ['University','Semoran']                                              //todo      within address object set a key of cornerOf with vaues of university & semoran  index notation and string.
        },                                                                                  //todo      close address object
        showMyAddress : function(){                                                         //todo      set up a function called showMyAddress that is a value for one of our keys to show the address
            var addr = this.address.street + ',' + this.address.city;                       //todo      create a variable called addr that returns this dot notation with address key and street key as well as address key and city key
            return addr;                                                                    //todo      return the address function
        }
    };

    console.log(thatGuy.showMyAddress());                                                   //todo      output the thatGuy object and run showMyAddress function.
    console.log(thatGuy.address.street + ',' + thatGuy.address.city);                       //todo      output the street and city info without running showMyAddress funciton. use thatGuy object and use address key and street key then thatGuy object with address key and city key.


//properties & methods
/*
	- objects are useful primarily for properties and methods:
		- properties are variable/keys that belong to an object only
		- methods are function/keys that belong to the object only 
		= these members are the foundation of an oop model
*/

console.log('------Objects - properties & methods ----------');

//Method 1 "Basic"

    var fsStudent = {};                                                                     //todo      create an empty object called fsStudent
    fsStudent.age = 22;                                                                     //todo      create a setter that sets up age key with value of 22 within in fsStudent.
    fsStudent.career = 'Web Dev';                                                           //todo      create a setter that sets up career key with value of 'Web Dev' in string notation within fsStudent.
    fsStudent.sayHello = function(){                                                        //todo      create a method called sayHello use fsStudent object and put an item with in called sayHello
        console.log('Hello');                                                               //todo      output string 'Hello' within the method.
    };




// above, we first initialize the object, then we created 2 properties 
//   for the object, and a method called sayHello - notice that the method is 
//	 being created by an assignment operator, just like the properties.

// we can also access the methods and properties of an object using  [ ] , 
// 	by using their name as a string - all of the below are valid:

    fsStudent.sayHello();                                                                   //todo      run a method called sayHello use the object fsStudent and run the method within it. in dot notation.
    fsStudent['sayHello']();                                                                //todo      same as above using index syntax

//output student age in dot notation
    console.log(fsStudent.age);                                                             //todo      use fsStudent object and use the value for age and write in dot notation
    console.log(fsStudent['age']);                                                          //todo      use fsStudent object and use the value for age and write using index format
/* --------------
Method 2 "OBJECT Literal"

	- we can also use the object literal syntax to create a new object and 
		fill it at the same time.

	- below is the same object as in Method 1
*/

    var fsStudent = {                                                                       //todo      create an object called fsStudent
        age: 22,                                                                            //todo      key of age with a value of 22
        career: 'Web Dev',                                                                  //todo      key of career with a value of 'Web Dev' string
        sayHello: function(){                                                               //todo      sayHello method
            console.log('Hello!');                                                          //todo      output 'Hello' string within method
        }
    };

    fsStudent.sayHello();                                                                   //todo      run a method called sayHello use the object fsStudent and run the method within it. in dot notation.
    fsStudent['sayHello']();                                                                //todo      same as above using index syntax
    console.log(fsStudent.age);                                                             //todo      use fsStudent object and use the value for age and write in dot notation
    console.log(fsStudent['age']);                                                          //todo      use fsStudent object and use the value for age and write using index format



//---------------------------------------------


/******************************************************************************
STUDENT ACTIVITY 1:

	PART 1:
	1.  Create an object that has the following keys.
         a. schoolName (i.e "Full Sail")
         b. address  (i.e "123 University Ave")
         c. studentCount (i.e 16000)
         d. students (use an array of objects) - create at least 3 objects in the array)
             i. name (i.e "James Bond")
             ii. GPA (i.e 3.9)
             iii. classes (use an array with the ability to store at least 2 class names)
                    (i.e ['PWA1', 'PWA2'])

        2.	console.log the following
             a. school name in both the dot syntax and index syntax
             b  create a variable name "newCnt" that is equal to studentCount, and console.log
                    the studentCount using the newCnt variable.
             c.  console.log the address using index syntax
             d. one student's GPA using dot syntax and index syntax
 ----------------------------------------------------------------------------- */

console.log('------ STUDENT ACTIVITY - ANSWERS BELOW ----------');

// objects w/ array
// this is integrating multiple data types - object with an array of objects

    var obj1 = {
        schoolName:'Full Sail',
        address: '123 University Blvd',
        studentCount: 16000,
        students:[
            {name:'Jane Doe', GPA:2.6, classes:['PWA1','PWA2']},
            {name: 'Albert Einstein', GPA:4.0},
            {name: 'James Bond', GPA:3.9}
        ]
    };

    console.log(obj1.schoolName);           //dot syntax
    console.log(obj1['schoolName']);        //index syntax

    var newCnt = 'studentCount';
    console.log(obj1[newCnt]);

    var fieldName1 = "address";
    console.log(obj1[fieldName1]);

    console.log("James Bond's GPA: ", obj1.students[2].GPA);
    console.log("James Bond's GPA: ", obj1['students'][2]['GPA']);


/* ----------------------------------------------------------------------------
 STUDENT ACTIVITY 2:

    1.  Using the above code, create a function that will find the average grade
        a. create an anonymous function named "gradeAvg"
        b. the function should accept as a parameter the object above
        c. create a for loop to total up the average grade for ALL students
        d. "return" the average GPA answer to the item that called the function

    2.  console.log the average grade by calling the gradeAvg method.
----------------------------------------------------------------------------- */

var gradeAvg = function(obj){
    var count = 0;
    var total = 0;

    for (var i = 0, j = obj.students.length; i < j; i++) {                   //todo      create a for loop variable i with value of 0 and variable j with value of 'obj' look at student's array and pull out what the length is then use a condition that compares i to j if it's less than. and increase variable i by 1.
        count++;                                                            //todo      increase variable count by 1 to count how many times the loop runs
        total = total + obj.students[i]['GPA'];                             //todo      total       calculate what the toatl is each time if cycles through the loop. get grand total of all the gpas together. total = total plus the student's gpa use index i of students. grab their gpa and add to the accumulating total.
    };
    return total/count;                                                     //todo      return the total but divide it by the count which will give us the average.

};

console.log('Average Grade: ', gradeAvg(obj1));


/* ===============================================================
	The for-in object loop
------------------------------------------------------------------	

	for(var key in obj){
		obj[key]
	}
*/
    console.log("---------- Object - For In Loop ----------------");

    var students = {name: "James Bond", gender: "male", job: "student"};            //todo      variable called students. key of name with value of james bond. key of gender with value of male. key of job with value of student.

    for (var key in students){                                      //todo      variable key and pass into it students
        console.log('Key name: ', key);                             //todo      output each of the key names.
        console.log('Value of the key[',key,']:',students[key]);    //todo      output the value of each key
    };



/*
	===============================================
	MORE Object infomation
	
		- most strictly-typed languages have clear separations in their data types 
			and classical behavior

		- JavaScript is simpler:
			- numbers, strings, and booleans are the only separate data types in JavaScript
			- objects, arrays, regular expressions, and functions are all considered 
				to be objects.
			- in addition, anything that is not an object, acts like an object

			i.e.   "Literal Syntax"
			myStr = ‘James Bond’;
			alert(myStr.length)   //will return a 10


			- previously, we used the most common constructor for creating our 
				variables, which is the literal syntax:

				var myNum = 5;

			- we could also create this variable using its "constructor" equivalent:
	
				var myNum = new Number(5);

			- both have the same result - the literal syntax is preferable	

			- using these constructors, we can also convert from one data type to another.
*/
    console.log('------ Objects - Converting Datatypes ----------');

    var myNum = 1;                                              //todo      creat a variable called myNum with a value of 1
    myString = String(myNum);                                   //todo      convert myNum into a string.
    console.log('myString:', typeof myString, myString);        //todo      output the value type of myString
    myBool = Boolean(myString);                                 //todo      1 = true 0 = false      will it see it as a string?
    console.log('myBool: ,', typeof myBool, myBool);            //todo      output boolean value of myBool.

/*
	- because these values act as objects, the data types also have methods and 
		properties, just like an object...  
	- we’ve already looked at one, the .length property, which can be used on 
		both strings and arrays.
*/

// #1 - shows string length

    myStr = 'OMG';
    console.log(myStr.length);


// #2 - shows array length
	myArr = [6,10];
    console.log(myArr.length);

// #3 - shows and array of objects, inside of an object length
	var obj1 = {
        schoolName: 'Full Sail',
        address: '123 University Blvd',
        studentCount: 16000,
        students: [
            {name: 'Jane Doe', GPA:2.6, classes:['PWA1','ARD']},
            {name: 'Albert Einstein', GPA: 4.0},
            {name: 'James Bond', GPA: 3.9}
        ]
    };

    console.log('number of object fields', obj1.students.length);


console.log('------ MORE Object examples - Objects/Functions ----------');

// showing a function call and creating a method

    var fn = function(name, course){
        return{
            sayHi: function(){
                console.log("My name is " + name + "I am in course " + course);
            }
        }
    };
    fn("JamesBond","PWA1").sayHi();             //todo a method that will call a function and run it right away.


/*
	==================================================================
	DOCUMENT OBJECT MODEL
	------------------------------------------------------------------

	document	// global DOM object
	window		// global DOM object
*/
console.log('------------ DOCUMENT OBJECT MODEL -------------------');

//Window DOM object

 console.log(window);
 console.log(window.location);
 console.log(window.history);
 console.log(window.navigator);

 //Document DOM object
 console.log(document);
 console.log(document.body);
 console.log(document.head);



/*
	==================================================================
	document.getElementById(string);
	------------------------------------------------------------------
	- Finds an html element on the page by it's CSS ID.
	- RETURNS a single DOM object.
	- Requires a string. 
	- If there are more than 1 id, it returns the first.

	------------------------------------------------------------------
	BEST PRACTICE:
	
	- Save the html element to a variable for later reference.
	- Code shouldn't repeat itself. Code shouldn't repeat itself.
*/

console.log('------------ getElementById -------------------');

    var playbox = document.getElementById('playbox');
    console.log(playbox);
    playbox.style.backgroundColor = 'Red';

/*
	==================================================================
	document.getElementsByTagName(string);
	------------------------------------------------------------------
	- Finds all html elements on the page with a matching html tag
	- RETURNS an array (collection) of DOM objects.
*/

console.log('------------ getElementsByTagName -------------------');

    var anchors = document.getElementsByTagName('a');
    console.log(anchors);

    console.log(anchors[1]);

    for (i=0, max=anchors.length; i<max;i++){
        console.log(anchors[i]);
    }


/*
	==================================================================
	document.querySelectorAll(string);
	------------------------------------------------------------------
		- Uses a CSS selector expression to find all html elements that match the expression.
		- Works much like stylesheet declarations (class and ID prefixes)

		- RETURNS an array (collection) of DOM objects. Even if there is 1 object.
			versus the getElementByID (that returns a single DOM element)
*/

console.log('------------ querySelectorAll -------------------');




/*
	==================================================================
	document.querySelector(string);
	------------------------------------------------------------------
		- Works just like querySelectorAll, but only returns the first match,
			If multiple exist, return the first
		
		- RETURNS a single DOM object.
*/
    console.log('------------ querySelector -------------------');





    /*
        ==================================================================
        TRAVERSAL
        ------------------------------------------------------------------
            - "Traversing" means finding other html elements from already selected
                element(s)
            - We use XML nodes for traversing

        Traversing works by parent/child/sibling relationships:

            - firstChild
            - lastChild
            - parentNode
            - nextSibling
            - previousSibling
            - childNodes

        Will be used in ALL future assignments.
    */
    console.log('------------ TRAVERSAL -------------------');

    var apple = document.querySelectorAll('#nav li a')[2];      //todo      document object, query selector all tell it to select the navagitor link for apple and navigate to the item in the 2nd index.
    console.log(apple);
    console.log(apple.parentNode);
    console.log((apple.parentNode.parentNode.parentNode).childNodes);
            //navigate sideways = siblings
    console.log((apple.parentNode.parentNode.parentNode).nextSibling);


    //select something and then move around from there.




/*
	==================================================================
	Manipulating Attributes
	------------------------------------------------------------------
		- HTML elements have attributes, things like "href", "src", "title", etc
		- To access these attributes, there are specific setter/getter methods.

        Syntax:
        - element.setAttribute(attr, value)
            - always initializes an attribute to a new value
        - element.getAttribute(attr)
            - always returns a string

        attr = href, src, class
*/



/*
	==================================================================
	Manipulating CSS Classes
	------------------------------------------------------------------
		- If you use setAttribute to change the "class" attribute of an element,
			that element is immediately redrawn with the new css styles.
		
		- Just like normal, you can set MULTIPLE classes at once.
		
			element.setAttribute('class', 'thumb active')

		- FYI: Elements can have multiple classes.
*/

console.log('------------ Manipulating CSS Classes -------------------');



/*
    ==================================================================
    Manipulating HTML
    ------------------------------------------------------------------
        HTML elements also have a property called "inner HTML"
        .innerHTML is both a getter and a setter property (using strings)
*/

    console.log('------------ Manipulating HTML -------------------');





/*
	==================================================================
	Replacing an HTML container with new HTML
	------------------------------------------------------------------
		- In a later project, you are building a gallery. 
		- You will be targeting the SCR of an image tag.
		- See contentPreview in HTML

Sample Link: http://www.instructables.com/files/deriv/FJI/WGSW/FPIUQQ3K/FJIWGSWFPIUQQ3K.MEDIUM.jpg
*/



/*
	==================================================================
	DOM Events  (lecture slides)
	------------------------------------------------------------------
		- listener and handler
		- there are 2 key aspects to any event, the event listener and the event handler
			1. the event listener is an property associated with the DOM that waits for the event trigger to 
				occur (i.e click, mouseover), and then fires the event handler
			2. the event handler is the function that will execute when the event is fired

		- using dot syntax, the listener for any element is available as a property 

		- An event listener is all lowercase with the prefix "on"
		
			element.onclick		//click listener
			element.onmousemove			//mousemove listener
	

		- The function is the event handler.  Can be anonymous or named.

			elementObj.onclick = myFn;
			element.onclick = function(){};

		- every event listener automatically passes an "event" object with information about the event  
		- the function's only argument is the EVENT OBJECT (e)
		- the handler must receive it as an argument
		- many developers will use the "e" as the function parameter
		- The function's CONTEXT (this) is the html element.	
*/
console.log('------------ DOM Events Ex 1-------------------');

var nav = document.querySelectorAll('#nav li a');


/*
// this just console.log's when a click occurs





*/


/*
	==================================================================
	Browser Defaults
	------------------------------------------------------------------
		- for most events, the browser will trigger a default action -  for example, hovering over 
			any element will create a tooltip out of the “title” or “alt” attribute if it exists

		- the one we care the most about is the <a> default action, which tells the window to go to 
			the anchor’s href location

		- the window waits for a return to take place before calling the default
			- so our event function should always return false , and call preventDefault()

		e.stopPropagation();  - calling this method from inside an event handler will prevent the 
								Bubbling Phase from triggering other events

		e.preventDefault();	  - calling this method from inside an event handler will prevent the 
								browser’s default action (such as following an href or the <form> action)
								- Prevent a submit button from submitting a form
   								- Prevent a link from following the URL
					

*/


console.log('------------ DOM Events Ex 2 -------------------');
/*
// this example changes the clicked link to the active class




*/ 



console.log('------------ DOM Events Ex 3 -------------------');
/*
// a more efficient way to do the above





*/


})(); // end wrapper