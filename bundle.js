(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("learnenough-palindrome");

function palindromeTester() {
  let string = prompt("Please enter a palindrome!");
  let phrase = new Phrase(string);
  let palindromeResult = document.querySelector("#palindromeResult");


  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is not a palindrome`;
  }
}




//   alert(`"${phrase.content}" is a palindrome!!!`);
// } else {
//   alert(`"${phrase.content}" is not a palindrome.`);
// }

document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("click", function() {
    palindromeTester();
  });
});

},{"learnenough-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;



// Reverses a string.
// function reverse(string) {
//   return Array.from(string).reverse().join("")
// }
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

// defines a Phrase Object
// its important to note the next 2 lines about parameters and properties
// Phrase(content) this is the parameter
// this.content = content;  this.content is  the named property
// let greeting = new Phrase("greetings to you!");  this is the constructor


function Phrase(content) {
  this.content = content;

// Returns content processed for palindrome testing.

this.processedContent = function processedContent() {
  return this.letters().toLowerCase();
}

// returns translation processed for palindrome testing.
  // this.processedContent = function processedContent() {
  //   return this.translation.toLowerCase();
  // }


// Returns true for a palindrome, false otherwise
// essentially this.palendrome is a property that becomes a function ***
// Returns true for a palindrome, false otherwise. (see below)
// (string) *this.palendrome knows that the parameter is a string so you can
// take sting out of the parameter and also replace string.toLowerCase with
// this.content.toLowerCase
//
//function palindrome(string) {
//   let processedContent = string.toLowerCase();
//   return processedContent === reverse(processedContent);
// }

// returns the letters in the content
// starting to refactor this loop this is partially refactored but want to keep
// this below for reference.
  // this.letters = function letters() {
  //   let theLetters = [];
  //   const letterRegEx = /[a-z]/i;  // i is for case insensetive for regex
  //   for (let i = 0; i < this.content.length; i++) {
  //     let charecter = this.content.charAt(i);
  //     if (charecter.match(letterRegEx)) {
  //       theLetters.push(charecter);
  //     }
  //   }
  //   return theLetters.join("");
  // }

// Refactored version of the above code
this.letters = function letters() {
  const letterRegEx = /[a-z]/i
  return Array.from(this.content).filter(c => c.match(letterRegEx)).join("");
}
  // this.content = "Madam, I'm Adam"

  // all the code below is broken down into 1 line with the above code
  // this.letters = function letters() {
  // let theLetters = [];
  // const letterRegEx = /[a-z]/i;  // i is for case insensetive for regex
  // Array.from(this.content).forEach(function(charecter) {
  //   if (charecter.match(letterRegEx)) {
  //     theLetters.push(charecter);
  //   }
  // });
  // return theLetters.join("");

// broken down the furthest so far. below is the refactored code above refactor
// of the refactor.
this.letters = function letters() {
  return (this.content.match(/[a-z]/gi) || []).join("");
}


  this.palindrome = function palindrome() {
    //let processedContent = this.content.toLowerCase();
    return this.processedContent() === this.processedContent().reverse();
  }
}

// Defines a TranslatedPhrase object.
// function TranslatedPhrase(content, translation) {
//   this.content = content;
//   this.translation = translation;
// }
//
// TranslatedPhrase.prototype = new Phrase();


// Add a blank method to the String object prototype that returns true if
// the string is empty or consists solely of whitespace (spaces, tabs, or
// newlines). Hint: Use a regular expression. You will need the
// regex syntax for the start and end of a string.


// String.prototype.blank = function blank() {
//   return !!(this.match(/^\s*$/g));
// }
// console.log("foobar" .blank());
// console.log("    foobar".blank())
// console.log("   foobar   ".blank());
// console.log("".blank());
//
//
// // Using whichever method you prefer (direct indexing or slicing), add a last
// // method to the Array object prototype that returns the last element of an
// // array. Hint: Refer to Section 3.3.
//
//
// a = [56, 60, 100, 110]
//
// Array.prototype.last = function() {
// 	return this[this.length-1];
// }
//
// a.last();

},{}]},{},[1]);
