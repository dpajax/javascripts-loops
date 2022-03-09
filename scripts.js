// // while
// let start = 0
// let end = 20
// while (start <= end){
//     console.log('Hello World', start)
//     start++


// }

// let nums = [20, 30, 40, 50, 60]
// let index = 0
// // index+
// // index++
// // index+++
// // index+++
// // console.log(nums[index])

// while (index < nums.length) {
//     console.log(nums[index] *2)
//     index++ 
// }

// let word = 'keyboard'
// let newWord = " "
// let index = 0
// // while (index < word.length){
// //     console.log(word.length) 
// //     index++
// // }

// while (index < word.length){
//     newWord += word[index].toUpperCase()
//     index++
//     console.log(newWord);
// }

// let original = 'kelechi'
// let reversed = ''
// let index = original.length - 1
// while (index >= 0){
//     reversed += original[index]
//     index--
// }


// let realPasscode ='test123'
// // retries = 0
// retries = 3
// while(true){
//     let userInput = prompt('Enter the correct password')
//     if (userInput === realPasscode){
//         alert('Login Success')
//         break
//     } else{
//         // retries += 1
//         retries -= 1
//         // retries < 3 ? alert(`login failed.. You have ${3 - retries} tries left`): null
//         retries > 0 ? alert(`login failed.. You have ${3 - retries} tries left`): null
//         // if (retries ===3){
//         if (retries ===0){
//             alert('You have been banned.. You silly scammer')
//             break
//         }
//         continue
//     }
// }

let score = 0
let retries = 3                                             //nullish coalescing operator
let userName = prompt('Enter your name to start the game ') ?? 'Anonymous'

// Start game loop
while (true){
    let computerGuess = Math.floor(Math.random()  * 10 + 1)
    // console.log(computerGuess);          shit
    let userGuess = prompt('Guess the number i have in mind.I bet you cant\'t.')

    if (computerGuess === parseInt(userGuess)){
        score += 10
        continue
    }else{
        retries--
        alert('Wrong ..Try Again')
        if (retries === 0){
            alert(`GAME OVER! You earned a total of ${score}guessCoins`)
            break
        }
    }
}
