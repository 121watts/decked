type Suite = 'spades' | 'diamonds' | 'clubs' | 'hearts'
type Value =
  | 'A'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'J'
  | 'Q'
  | 'K'

export interface TCard {
  id: string
  suit: Suite
  value: Value
}

const suits: Suite[] = ['spades', 'diamonds', 'clubs', 'hearts']
const values: Value[] = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
]

const makeDeck = () => {
  let deck: TCard[] = []
  suits.forEach((suit) => {
    values.forEach((value) => {
      deck.push({ id: `${suit}-${value}`, suit, value })
    })
  })

  return deck
}

const shuffle = (deck: TCard[]) => {
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }

  return deck
}

export default (): TCard[] => {
  return shuffle(makeDeck())
}
