//  Task one: replacing mails with *****
function gmailConveter(e){
 e.preventDefault;

let input = document.getElementById("textInput").value
let gmailResult = document.getElementById('gmailResult')


let regex = /.*@.*\.com/
let result = input.search(regex)

    if (result == "-1") {
    gmailResult.innerHTML = `<p>Incorrect Email</p>`
    } else {
        gmailResult.innerHTML = `<div>
        <p>Successful</p>
        <p>${input.replace(regex, "************")}</p>
        </div>`
    }
}

let result = {}
let testResult = document.getElementById('test-result')

//1. car and cat
regex = /(car)|(cat)/i
result['carAndCat'] = regex.test("The cat sat in the car")


//2. pop and prop
regex = /(pop)|(prop)/
result['popAndprop'] = regex.test('The prop was pop at the party')

//3. ferret, ferry, and ferrari
// regex = /\b(ferret)\b|\b(ferry)\b|\b(ferrari) 
regex = /(ferret)|(ferry)|(ferrari)/
result['ferretFerryAndFerrari'] = regex.test('The ferry ferrai was ferret')



// 4. Any word ending in ious
regex = /\w+(ious)/
result['AnyWordEndinginIous'] = regex.test("almost all gaseous element are hidious in nature")

//5. A whitespace character followed by a period, comma, colon, or semicolon
regex = /\s+\.\,(:|;)/
result[' .,:;'] = regex.test(" .,:;")

// 6. A word longer than six letters
regex = /\w{6}/
result['AWordLongerThanSixLetters'] = regex.test("hello Mr kehinde")


//7. A word without the letter e (or E)
regex = /\b[^e]+\b/i
// result.push(["A word without the letter e (or E)", regex.test("Mr Kenny has letter E in his name")])
result['AWordWithoutTheLetter-e-or-E)'] = regex.test("Mr Kenny has letter E in his name")

alert(JSON.stringify(result))

for (const key in result) {

    testResult.innerHTML += `<div>
        <p>${key}: ${result[key]}</p>
        </div>`

}


//8 

// Imagine you have written a story and used single quotation marks throughout
// to mark pieces of dialogue. Now you want to replace all the dialogue quotes
// with double quotes, while keeping the single quotes used in contractions like
// aren’t.
// Think of a pattern that distinguishes these two kinds of quote usage and
// craft a call to the replace method that does the proper replacement.

// regex =  /'([^']+)'/g;
// result = input.replace(regex, '"$1"')

// const replacedText = text.replace(regex, (match, capturedText) => `"${capturedText}"`);
// alert(result)



