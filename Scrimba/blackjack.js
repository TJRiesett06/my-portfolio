let player = {
  name: "Per",
  chips: 200
}

let cards = []
let sum = 0
let dealerSum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let dealerCardsEl = document.getElementById("dealerCards-el")
let dealerSumEl = document.getElementById("dealerSum-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let randomNumber = Math.floor( Math.random()*13 ) + 1
  if (randomNumber > 10) {
      return 10
  } else if (randomNumber === 1) {
      return 11
  } else {
      return randomNumber
  }
}

function getRandomCardDealer() {
  let randomNumber = Math.floor( Math.random()*13 ) + 1
  if (randomNumber > 10) {
      return 10
  } else if (randomNumber === 1) {
      return 11
  } else {
      return randomNumber
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  let dealerFirstCard = getRandomCardDealer()
  let dealerSecondCard = getRandomCardDealer()
  cards = [firstCard, secondCard]
  dealerCards = [dealerFirstCard, dealerSecondCard]
  sum = firstCard + secondCard
  dealerSum = dealerFirstCard + dealerSecondCard
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
      cardsEl.textContent += cards[i] + " "
  }

  dealerCardsEl.textContent = "Dealer Cards: "
  for (let i = 0; i < dealerCards.length; i++) {
    dealerCardsEl.textContent += dealerCards[i] + " "
}

  sumEl.textContent = "Sum: " + sum
  dealerSumEl.textContent = "Dealer Sum: " + dealerSum

  if (dealerSum > 21) {
    message = "Dealer bust"
  } 
  else if (sum <= 20 && dealerSum < 21) {
      message = "Do you want to draw a new card?"
      isAlive = true
  } 
  else if (sum === 21) {
      message = "You've got Blackjack!"
      hasBlackJack = true
  } 
  else if (dealerSum === 21) {
    message = "Dealer has won"
  } else {
      message = "You're out of the game!"
      isAlive = false
  }
  messageEl.textContent = message
}

function stand() {
  if (sum > dealerSum) {
    let dealerCard = getRandomCard()
    dealerSum += dealerCard
    dealerCards.push(dealerCard)
    renderGame()

    
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
      let card = getRandomCard()
      sum += card
      cards.push(card)
      renderGame()        
  }
}