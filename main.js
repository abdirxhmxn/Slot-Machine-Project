// 1. Minimum bet is $25
// 2. Maximum bet is $100
// 3. If you win on Minimum bet then your prize 10x, and if you win on max bet then your prize is 100x
// 4.Jackpot is worth 1000x

//listen for min bet button --> min bet function
document.querySelector('#button1').addEventListener('click', minBet)
//listen for max bet button --> max bet function
document.querySelector('#button2').addEventListener('click', maxBet)
let wallet = 1000
document.querySelector('span').innerText = `Wallet: ${wallet}`

function getRandomIndex(range){
    return Math.ceil(Math.random() * range)
}
function minBet() {
    //array
    const reels = document.querySelectorAll('#reel-1 p')
    const symbols = ['🍒','🍇', '🍐', '🥭', '⚽️']
    
    reels[0].innerText = symbols[getRandomIndex(4)]
    reels[1].innerText = symbols[getRandomIndex(4)]
    reels[2].innerText = symbols[getRandomIndex(4)]

    if (!wallet <= 0 && reels[0].innerText === reels[1].innerText && reels[1].innerText === reels[2].innerText) {
        wallet += 250
        document.querySelector('span').innerText = `Wallet: ${wallet}`
        document.querySelector('h2').innerText = "Congratulations you have won $250!"
    } else if (!wallet <= 0 && (reels[0].innerText === reels[1].innerText && reels[1].innerText === reels[2].innerText) && reels[0] === 3) {
        wallet += 25000
        document.querySelector('span').innerText = `Wallet: ${wallet}`
        document.querySelector('h2').innerText = "You a sucka!"
    } else if (wallet < 1) {
        document.querySelector('h2').innerText = "Game Over! You Broke!"

    } else {
        wallet -= 25
        document.querySelector('span').innerText = `Wallet: ${wallet}`
        document.querySelector('h2').innerText = "You a sucka!"
    }

}

function maxBet() {
    const reels = document.querySelectorAll('#reel-1 p')
    const symbols = ['🍒','🍇', '🍐', '🥭', '⚽️']
    
    reels[0].innerText = symbols[getRandomIndex(4)]
    reels[1].innerText = symbols[getRandomIndex(4)]
    reels[2].innerText = symbols[getRandomIndex(4)]

    if (!wallet <= 0 && reels[0].innerText === reels[1].innerText && reels[1].innerText === reels[2].innerText) {
        wallet += 10000
        document.querySelector('span').innerText = `Wallet: ${wallet}`
        document.querySelector('h2').innerText = "Congratulations you have won $10000!"
    } else if (!wallet <= 0 && (reels[0].innerText === reels[1].innerText && reels[1].innerText === reels[2].innerText) && reels[0] === 3) {
        wallet += 100000
        document.querySelector('span').innerText = `Wallet: ${wallet}`
        document.querySelector('h2').innerText = "You won the Jackpot!!!!"
    } else if (wallet < 1) {
        document.querySelector('h2').innerText = "Game Over! You Broke!"

    } else {
        wallet -= 100
        document.querySelector('span').innerText = `Wallet: ${wallet}`
        document.querySelector('h2').innerText = "You a sucka!"
    }
}