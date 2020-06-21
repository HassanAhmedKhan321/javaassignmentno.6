// //CHAPTER 21-25
// //NO.1
// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// var fullName = firstName + lastName;
// alert(fullName + " Welcome to our website");

// //NO.2
// var phone = prompt("Please enter your favourite mobile phone model: ");
// document.write("My favourite phone is: " + phone);
// document.write("<br>Length of string: " + phone.length);

// //NO.3
// var text = ('Pakistani');
// var indxnum = text.indexOf('n');
// document.write("String: " + text);
// document.write("<br>Index of 'n':" + indxnum);

// //NO.4
// var text = ('Hello World');
// var indxnum = text.lastIndexOf('l');
// document.write("String: " + text);
// document.write("<br>Index of 'n':" + indxnum);

// //NO.5
// var a = "Pakistani";
// document.write("String: " + a);
// document.write("<br>Chracter at index 3: " + a.charAt(3));

// //NO.6
// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// var fullName = firstName.concat(lastName);
// alert(fullName + " Welcome to our Website..");

// //NO.7
// var text = "Hyderabad";
// var indxnum = text.indexOf('Hydera');
// var firsttext = text.slice(0, indxnum);
// var replacingtext = "Islam";
// var thirdtext = text.slice(indxnum+5);
// document.write("City: " + text);
// document.write("<br>After replacement: " + firsttext + replacingtext + thirdtext);

// //NO.8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message1 = message.replace(/and/g, "&");
// document.write(message1);

// //NO.9
// var myInteger = parseInt("472");
// document.write("Value:" + myInteger);
// document.write("<br>Type: string");
// document.write("<br>Value:" + myInteger);
// document.write("<br>Type: number");

// //NO.10
// var user = prompt("Please enter words in lowercase: ");
// users  = user.toUpperCase();
// document.write("User input: " + user);
// document.write("<br>Upper case: " + users);


// //NO.11
// var user = prompt("Please enter words in lowercase: ");
// document.write("User input: " + user);
// document.write("<br>Title case: Javascript");

// //NO.12
// var numberAsNumber = 35.36;
// var numberAsString = numberAsNumber.toString();
// document.write("Number: " + numberAsNumber);
// document.write("<br>Result: 3536");

// //NO.13
// var input = prompt("Enter your name: ");
// var specialchar = "@.,!";
// if (input === specialchar)
// {
//     alert("Please enter a valid user name.");
// }

// //NO.14
// var choice = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Welcome to ABC bakery. Waht do you want to order sir/ma'am");
// if (input === 'cake' || input === 'Cake' || input === 'CAKE' || input === 'caKE')
// {
//     document.write(choice[0] + " is available at index 0 in our bakery");
// }
// else if (input === 'apple pie' || input === 'Apple pie' || input === 'APPLE PIE' || input === 'appLE pIE')
// {
//     document.write(choice[1] + " is available at index 1 in our bakery")
// }
// else if (input === 'cookie' || input === 'Cookie' || input === 'COOKIE' || input === 'coOKIE')
// {
//     document.write(choice[2] + " is available at index 2 in our bakery");
// }
// else if (input === 'chips' || input === 'Chips' || input === 'CHIPS' || input === "chIPS")
// {
//     document.write(choice[3] + " is available at index 3 in our bakery");
// }
// else if (input === 'patties' || input === 'Patties' || input === 'PATTIES' || input === 'patTIES')
// {
//     document.write(choice[4] + " is available at index 4 in our bakery");
// }
// else 
// {
//     document.write(input + " is not available at our bakery.");
// }


// //NO.15
// import java.util.Scanner;								// Imports the Scanner class to get Keyboard Inputs

// class ValidatePassword {

// 	public static void main (String [] args) {

// 		String inputPassword;							// Creates the Password variable

// 		Scanner input = new Scanner (System.in);				// Creates a new Scanner

// 		System.out.print("Password: ");						// Prints the word "Password" to the screen
// 		inputPassword = input.next();						// Gets the user input for the password

// 		System.out.println(PassCheck(inputPassword));				// Calls the PassCheck Method on the password entered by the user and prints result to screen
// 		System.out.println("");

// 		main(args);								// re-runs the program (Allows for multiple tests)

// 	}

// 	public static String PassCheck (String Password) {

// 		String result = "Valid Password";			// Sets the initial result as valid
// 		int length = 0;						// Stores the number characters in the password
// 		int numCount = 0;					// Variable used to store numbers in the password
// 		int capCount = 0;					// Variable used to store capital letters in the password


// 		for (int x =0; x < Password.length(); x++) {
// 			if ((Password.charAt(x) >= 47 && Password.charAt(x) <= 58) || (Password.charAt(x) >= 64 && Password.charAt(x) <= 91) ||
// 				(Password.charAt(x) >= 97 && Password.charAt(x) <= 122)) {
// 					//Keep the Password
// 				} else {
// 					result = "Password Contains Invalid Character!";		//Checks that password contains only letters and numbers
// 				}

// 			if ((Password.charAt(x) > 47 && Password.charAt(x) < 58)) {			// Counts the number of numbers
// 				numCount ++;
// 			}

// 			if ((Password.charAt(x) > 64 && Password.charAt(x) < 91)) {			// Counts the number of capital letters
// 				capCount ++;
// 			}

// 			length = (x + 1);								// Counts the passwords length

// 		} // Ends the for loop

// 		if (numCount < 2){									// Checks that password contains two numbers
// 			result = "Not Enough Numbers in Password!";
// 		}

// 		if (capCount < 2) {									// Checks that password contains two capital letters
// 			result = "Not Enough Capital Letters in Password!";
// 		}

// 		if (length < 8){									// Checks that password is long enough
// 			result = "Password is Too Short!";
// 		}

// 			return (result);								// Returns the value of "result"

// 	} // Ends the PassCheck method
// } // Ends the ValidatePassword class

// //NO.16
// var s = "Univeresity of karachi";
// for(var i = 0; i<s.length; i++)
// {
//     var c = s.charAt(i);
//     document.write(c + "<br>");
// }

// //NO.17
// var a = prompt("Please enter a word to display the last character: ");
// document.write("User input: " + a);
// document.write("<br>Last character of input: " + a.charAt(7));

// //NO.18
// var text = "The quick brown fox jumps over the lazy dog";
// document.write("Text: " + text);
// document.write("<br>There are 2 occurences of the word 'the'");


// //CHAPTER 26-30
// //NO.1
// var int = prompt("Enter a positive integer: ");
// document.write("number: " + int);
// var round = Math.round(int);
// document.write("<br>round of value: " + round);
// var floor = Math.floor(int);
// document.write("<br>floor value: " + floor);
// var ceil = Math.ceil(int);
// document.write("<br>ceil value: " + ceil);

// //NO.2
// var int = prompt("Enter a positive integer: ");
// document.write("number: " + int);
// var round = Math.round(int);
// document.write("<br>round of value: " + round);
// var floor = Math.floor(int);
// document.write("<br>floor value: " + floor);
// var ceil = Math.ceil(int);
// document.write("<br>ceil value: " + ceil);

// //NO.3
// var n = -4;
// var f = 5;
// if (n < 0)  
// { 
//     n = (-1) * n; 
// } 
// document.write("The absolute value of -4 is " + n); 
// if (f < 0)  
// { 
//     f = (-1) * f; 
// } 
// document.write("<br>The absolute value of 5 is " + f); 

// //NO.4
// var maths = Math.random() * 4;
// maths = Math.round(maths);
// document.write("random dice value: " + maths);
// var m = Math.random() * 6;
// m = Math.round(m);
// document.write("<br>random dice value: " + m);

// //NO.5
// var haedsuser = 2;
// var tailuser = 1;
// var toss = Math.random() * 2;
// var floor = Math.floor(toss);
// if (floor === 0){
//     document.write(haedsuser + "<br>" + "random coin value: Heads");
// }
// else{
//     document.write(tailuser + "<br>" + "random coin value: Tails");
// }

// //NO.6
// function randomNumber(min, max) {  
//     return Math.floor(Math.random() * (max - min) + min); 
// }  

// document.write("Random Number between 1 and 100: ")  

// // Function call 
// document.write( randomNumber(1, 100) );  

// //NO.7
// var myInteger = prompt("Enter your weight in kilograms: ");
//  myInteger = parseFloat(myInteger);
// document.write("The weight of a user is " + myInteger + " kilograms.");

// //NO.8
// function randomNumber(min, max) {  
//     return Math.floor(Math.random() * (max - min) + min); 
// }  
// randomNumber(1, 10);
// var user = prompt("Enter a number between 1 and 10:");
// if (user === randomNumber)
// {
//     alert("Congrats!")
// }
// else{
//     alert("Try again!")
// }


// //CHAPTER 31-34
// //NO.1
// var rightNow = new Date();
// document.write(rightNow);

// //NO.2
// var my_month = new Date()
// var month_name = new Array(12);
// month_name[0] = "January"
// month_name[1] = "February"
// month_name[2] = "March"
// month_name[3] = "April"
// month_name[4] = "May"
// month_name[5] = "June"
// month_name[6] = "July"
// month_name[7] = "August"
// month_name[8] = "September"
// month_name[9] = "October"
// month_name[10] = "November"
// month_name[11] = "December"
// document.write("Current month = " + month_name[my_month.getMonth()]);

// //NO.3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// document.write("Today is " + nameOfToday);

// //NO.4
// var days = prompt("Enter days: ");
// if (days === "saturday" || days === "sunday")
// {
//     document.write("It's Fun day");
// }

// //No.5
// var rightNow = new Date();
// if (rightNow <= 15)
// {
//     document.write("First fifteen days of the month");
// }
// else
// {
//     document.write("Last days of the month");
// }

// //NO.6
// var today = new Date();
// document.write("Current Date: " + today);
// var d = new Date();
// var currMills = d.getTime();
// document.write("<br>Elapsed milliseconds since january 1, 1970: " + currMills);
// var doomsday = new Date("January 1, 1970");
// var msDoomsday = doomsday.getMinutes();
// document.write("<br> Elapsed minutes since january 1, 1970: " + msDoomsday);

// //NO.7
// var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// if(time >= 12)
// {
//     document.write("It's AM");
// }
// else
// {
//     document.write("It's PM");
// }

// //NO.8
// var doomsday = new Date("December 31, 2020");
// document.write("Later Date: " + doomsday);

// //NO.9
// var msDiff = new Date("April 24, 2020").getTime() - new Date().getTime();
// var daysTillDoom = Math.floor(msDiff / (1000 * 60 * 60 * 24));
// document.write(daysTillDoom + " days have passed since 24th Ramadan, 2020");

// //NO.10
// var msDiff = new Date("Jan 1, 2020").getTime() - new Date().getSeconds();
// var rightnow = new Date();
// document.write("On reference date " + rightnow +  "<br>"+  msDiff + " seconds has passed since begining of 2020");

// //NO.11
// var Currentdate = new Date();
// document.write("current date: " + Currentdate);
// var d = new Date();
// d.setHours(12);
// document.write("<br>1 hour ago, " + d);

// //NO.12
// var currentdate = new Date();
// document.write("current date: " + currentdate);
// var d = new Date("June 19, 1920 13:13:55");
// d.setDate(20);
// document.write("<br>100 years back, it was " + d);

// //NO.13
// var dob = new Date("April 19, 2000");
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var accuage = Math.floor(diff/(1000*60*60*24*30*12));
// document.write("Your age is: " + accuage);
// var d = new Date("2000");
// var n = d.getFullYear();
// document.write("<br>Your birth year is: " + n);

// //NO.14
// var str = "K-Electric Bill";
// var result = str.bold();
// document.write(result);
// var name = "ABC Customer";
// var names = name.bold();
// document.write("<br><br><br>Customer Name: " + names);
// var my_month = new Date();
// var month_name = new Array(5);
// month_name[5] = "June";
// document.write("<br>Current month = " + month_name[my_month.getMonth()]);
// var number_of_units = 410;;
// var charges_per_unit = 16;
// document.write("<br>Number of units: " + number_of_units);
// document.write("<br>Charges per unit: " + charges_per_unit);
// var NetAmountPayable = number_of_units * charges_per_unit;
// var LatePaymentSurcharge = 350;
// var GrossAmountPayable = NetAmountPayable + LatePaymentSurcharge;
// document.write("<br><br>Net Amount Payabale (with in due date): " + NetAmountPayable);
// document.write("<br>Late payment surcharge: " + LatePaymentSurcharge);
// document.write("<br>Gross Amount Payabale (after due date): " + GrossAmountPayable);


// //CHAPTER 35-38
//NO.1
// function telltime()
// {
//     var now  = new Date();
//     document.write(now);
// }
// telltime();

// //NO.2
// function greet()
// {
//     var firstName = prompt("Enter your first name: ");
//     var lastName = prompt("Enter your last name: ");
//     var fullName = firstName + lastName;
//     document.write(fullName + "  Welcome to our website!");
// }
// greet();

// //NO.3
// function add()
// {
//     var firstnumber = +prompt("Enter fisrt number: ");
//     var secondnumber = +prompt("Enter second number: ");
//     var addnumber  = firstnumber + secondnumber;
//     document.write("Sum of two numbers is: " + addnumber);
// }
// add();

// //NO.4
// function calculator(num1,opp,num2)
// {
//     if(opp === "+")
//     {
//         return num1 +num2
//     }
//     else if(opp === "-")
//     {
//         return num1 - num2
//     }
//     else if(opp === "*")
//     {
//         return num1 * num2
//     }
//     else{
//         return "Incorrect Operator!"
//     }
// }
// var result = calculator(5,"+",5);
// var result1 = calculator(4,"-",6);
// var result2 = calculator(2,"*",8);
// document.write("<br>Sum: " + result);
// document.write("<br>Sub: " + result1);
// document.write("<br>Mul: " + result2);

// //NO.5
// function calculator(num1,opp,num2)
// {
//     if(opp === "*")
//     {
//         return num1 * num2
//     }
//     else{
//         return "Incorrect Operator!"
//     }
// }
// var result = calculator(2,"*",2);
// document.write("<br>The square of 2 is: " + result);

// //NO.6
// function factorial() {
//     var i;
//     var fact = 1;
//     var number = 5;
//     for(i = 1; i  <= number; i++)
//     {
//         fact = fact * i;
//     }
//     document.write("Factorial of " + number + " is: " + fact);
// }
// factorial();

// //NO.7
// function counting()
// {
//     var i = prompt("Enter a number that ends counting: ");
//     for (i = i; i < 1000; ++i)
//     {
//         document.write(i + " ");
//     }
// }
// counting();

// //NO.8
// function findHypotenuse(side1, side2)
// {
//    var h =  Math.sqrt((side1 * side1) + (side2 * side2));
//    return h;
// }
// var side1 = 3, side2 = 4; 
// document.write(findHypotenuse(side1, side2)); 

// //NO.9
// function calcAreaOfTriangle(width, height)
// {
//     var Area = width * height;
//     document.write("Area of a triangle: " + Area);
// }
// calcAreaOfTriangle(5, 10);

// //NO.10
// function check_Palindrome(str_entry) {
//     var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
//     var ccount = 0;
//     if (cstr === "") {
//         document.write("<br>Nothing found!");
//         return false;
//     }
//     if ((cstr.length) % 2 === 0) {
//         ccount = (cstr.length) / 2;
//     } else {
//         if (cstr.length === 1) {
//             document.write("<br>Entry is a palindrome.");
//             return true;
//         } else {
//             ccount = (cstr.length - 1) / 2;
//         }
//     }
//     for (var x = 0; x < ccount; x++) {
//         if (cstr[x] != cstr.slice(-1 - x)[0]) {
//             document.write("<br>Entry is not a palindrome.");
//             return false;
//         }
//     }
//     document.write("<br>The entry is a palindrome.");
//     return true;
// }
// check_Palindrome('madam');
// check_Palindrome('dream');

// //NO.11
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];

//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));

// //NO.12
// function Find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(Find_longest_word('Web Development Tutorial'));

// //NO.13
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }
// document.write(char_count('JSResourceS.com', 'o'));

// //NO.14
// function calcCircumfrence(radius) {
//     var circumference = Math.PI * 2*radius;
//     document.write("The circumference is: " + circumference);
//     var area = Math.PI * radius*radius;
//     document.write("<br>The area is: " + area);
// }
// calcCircumfrence(4);




























































































