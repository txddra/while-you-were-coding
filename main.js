// ##### Introduction #####
//
// The below assignment will require NO functions, except for the challenge banner function in number 1.
//
// Instead, our focus is going to be on console.logging the characters at certain indices of strings.
//



// ##### Challenges #####

// 1.
//
// Write a function that takes in a parameter and prints the string below, with the given paramter place of the $ symbol.
// 
// ###### Challenge $ #####
//
// Call it before EVERY challenge below!
//
// Even though we'll USUALLY be calling this function with a number indicating the challenge we're on, THIS TIME call it with the parameter 'Banner Function Works!'. You should see the below result:
//
// ###### Challenge Banner Function Works #####
function challengeBanner(num0){
console.log('######### Challenge ' + num0 +' ' + '#########')  
}


// 2.
//
// Console out the numbers from 1-20, but only if they're divisible by 3.
challengeBanner(2)
let num = 1;
while (num <= 20){
    console.log(num)
    num = num + 3;
}
// Use `if` and a modulus operation.
if(num % 3 === 0){

}
console.log(num)
// 3.
//
// Same problem as #2, but no `if`s, `mods`, or `but`s (and no, `but` is not a JavaScript tool). There may be more ways to solve this problem without `if` or `%` (there usually are in JavaScript!), but if you did it the way we did, you should run the loop 6 times with console log per loop iteration.
let num1 = 1;
while (num1 <= 20){
    console.log(num)
    num1 = num1 + 3;}
console.log()
// 4.
//
// Console out the numbers from 1-20. BACKWARDS.
challengeBanner(4)

let num2 = 20;
while (num2 >= 1){
console.log(num2)
num2 = num2 - 1;
}



// 5.
//  
// For the string 'Boy howdy am I good at this!', console out the letters
// individually.
challengeBanner(5)
let stri = 'Boy Howdy am I good at this!';
let x = 0;
while(x < stri.length){
console.log(stri[x]);
x = x + 1;
}

// 6.
//
// For the string, 'And getting better every day.', starting with the second
// character, print out every third character.
challengeBanner(6)
let i = 0;
let str = 'And getting better every day.';
while (i < str.length) {
    if (i % 2 === 1) {
        console.log(str[i]);
}
    i = i + 1;
}




// 7. 
//
// For the string 'Am I the best?', console out the letters individually, AND
// UPPERCASED.
challengeBanner(7)
let w = 0;
let sent = 'Am I the best?';

while (w < sent.length) {
    console.log(sent[w].toUpperCase());
        w = w + 1;
}


// 8.
//
// For the string 'Whoa, I am the best!', console out the letters individually,
// but also capitalize the letters in the third word.
challengeBanner(8)
let z = 3;
let words = 'Whoa I am the best!'

while(z < words.length){

        if ( z > 6 && z < 10  ) {
          console.log(words[z].toUpperCase());
        } else {
          console.log(words[z]);
        }
      
    
    z = z + 1;
}

// 9.
//
// For the string 'I am become death, destroyer of worlds.', console out the letters
//  individually, but backwards. That is, the first console log should be
// `.`, followed by `s`, followed by `d`, and so on.


// 10.
//
const names = 'Colin|Mesuara|Denis|Wilson|Michael|Patrick|DeAundre|Jumary|Marc|Bogdan|Sharod|David|LaToddra|Carlos';

// Console out the individual letters of each person in class today, which are
// in the string above. Every time you start a new name (including the first
// one!), console out the string: 'Here today is:'.

// You'll know you're at a new person's name when you hit the pipe character.

// Don't print the pipes!


// 11.
//
// There is no 11. Celebrate! You did it!
