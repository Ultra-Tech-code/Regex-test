

 let input = prompt("Enter your input: ")
// let regex = /.*@.*\.com/
// let result = input.search(regex)


// if (result == "-1") {
//   alert("Incorrect Email");
// } else {
//   alert(input.replace(regex, "************"));
// }


//1. car and cat

// regex = /(car)|(cat)/i
// result = input.match(regex)
// alert(result)


// //2. pop and prop

// // regex = /(pop)|(prop)/
// // result = input.match(regex)
// // alert(result)

// //3. ferret, ferry, and ferrari
// // regex = /\b(ferret)\b|\b(ferry)\b|\b(ferrari) 

// // regex = /(ferret)|(ferry)|(ferrari)/
// // result = input.match(regex)
// // alert(result)

// // 4. Any word ending in ious
// // regex = /\w+(ious)/
// // result = input.match(regex)
// // alert(result)

//5. A whitespace character followed by a period, comma, colon, or semicolon
// regex = /\s+\.\,(:|;)/
// result = input.search(regex)
// alert(result)

// 6. A word longer than six letters
// regex = /\w{6}/
// result = input.search(regex)
// alert(result)

//7. A word without the letter e (or E)

regex = /\b[^e]\w+\b/i
result = input.search(regex)
alert(result)


