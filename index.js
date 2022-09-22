const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const words = [
    'accent',
    'accept',
    'acceptable',
    'acceptance',
    'accepted',
    'accepting',
    'accepts',
    'access',
    'accessed',
    'accessibility',
    'accessible',
    'accessing',
    'accessories',
    'accessory',
    'accident',
    'accidents',
    'accommodate',
    'accommodation',
    'accommodations',
    'accompanied',
    'accompanying',
    'accomplish',
    'accomplished'
]


// DOM Content
const wordBox = document.querySelector('.words')
const board = document.querySelector('.board')
const letter = document.querySelectorAll('.letter')

// Functions
function ranGen(arg){
    const length = arg.length
    const index = Math.floor(Math.random() * length)
    
    return index
}

// Request a random word
const guessWord = requestSelection(words[ranGen(words)])
function requestNewWord(){
    const guessWord = requestSelection(words[ranGen(words)])
}

// Change the letter and replace with a under score _
function changeLetterPos(word,index){
    const length = word.length
    let newWord = ''

    for(let i = 0; i < length; i++){
        if(i === index){
            newWord += '_'
        }else{
            newWord += word[i]
        }
    }

    return {'guess': newWord, 'word': word, 'letter': word[index]}
}

// request a selection of a letter
function requestSelection(word){

    answer = changeLetterPos(word,ranGen(word))

    return answer

}


function play(){

}

// function addWords(){

//     const letter = letters.split('')
//     const span = letter.map(item => `<button type = "button" class='letter'>${item}</button>`)

//     let spanA = span.join("")
//     if (wordBox) {
//         wordBox.innerHTML = spanA
//     }

//     showWordGuess()

// }

function showWordGuess(){

    board.textContent = guessWord.guess

}

function resetBtn(){
    letter.forEach((item) => [
        item.style.backgroundColor = 'aquamarine'
    ])
}


showWordGuess()

let wrong = 0

letter.forEach((item) => {
  
    item.addEventListener('click', (e) => {
    
        const x = e.target.textContent.toLowerCase()
        if(wrong === 5){
            board.textContent = "You Lose!!!"
            resetBtn()
        }
        if(wrong > 5){
            location.reload()
        }
        if(guessWord.letter === x){
            location.reload()
        }else{
            e.target.style.backgroundColor = 'red'
            wrong++
        }
    
    })

})
// addWords()

// event functions
// window.onload = addWords


