import Card from './Card.js'

export default class Deck {
  cards: Card[]
  constructor() {
    let c: Card[] = []
    for (let i = 0; i < 4; i++) {
      const suits = ['Spades', 'Diamonds', 'Clubs', 'Hearts']
      for (let j = 1; j <= 13; j++) {
        c.push(new Card(suits[i], j))
      }
    }

    this.cards = c
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
    }
  }
}
