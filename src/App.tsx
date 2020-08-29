import React, { useState } from 'react'
import './App.css'

import makeDeck, { TCard } from './deck'

const fullDeck = makeDeck()
const initialCard = fullDeck[0]
const initialDeck = fullDeck.filter((c) => c.id !== initialCard.id)

function App() {
  const [deck, setDeck] = useState(initialDeck)
  const [{ value, suit }, setCard] = useState<TCard>(initialCard)

  const handleClickCard = () => {
    const card = deck.length ? deck[0] : null

    if (!card) {
      return
    }

    const newDeck = deck.filter((c) => c.id !== card.id)

    setDeck(newDeck)
    setCard(card)
  }

  return (
    <div className="App">
      <div className="table">
        <div className="card-count">Cards remaining {deck.length}</div>
        <div onClick={handleClickCard}>
          <Card value={value} suit={suit} />
        </div>
      </div>
    </div>
  )
}

interface Props {
  value: TCard['value']
  suit: TCard['suit']
}

function Card({ value, suit }: Props) {
  const makeSuite = (suit: TCard['suit']) => {
    switch (suit) {
      case 'hearts': {
        return '♥'
      }

      case 'diamonds': {
        return '♦'
      }

      case 'spades': {
        return '♠'
      }

      case 'clubs': {
        return '♣'
      }
    }
  }

  return (
    <div className="card-container">
      <div className="card">
        <div className={`value ${suit}`}>{value}</div>
        <div className={`suit ${suit}`}>{makeSuite(suit)}</div>
      </div>
    </div>
  )
}

export default App
