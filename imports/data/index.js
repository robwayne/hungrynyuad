import { generateID } from '../utils'

const restaurants = [
  {
    id: generateID("r"),
    name: 'KFC',
    minimumOrder: 150,
    imageURL: '/images/kfc.png',
  },
  {
    id: generateID("r"),
    name: 'McDonalds',
    minimumOrder: 150,
    imageURL: '/images/mcdonalds.png',
  },
  {
    id: generateID("r"),
    name: 'Burger King',
    minimumOrder: 100,
    imageURL: '/images/burger_king.png',
  },
  {
    id: generateID("r"),
    name: 'Cha Time',
    minimumOrder: 150,
    imageURL: '/images/cha_time.png',
  },
  {
    id: generateID("r"),
    name: 'Pizza Hut',
    minimumOrder: 150,
    imageURL: '/images/pizza_hut.png',
  },
]

const randomRestaurant = () => (
  restaurants[Math.floor(Math.random()*restaurants.length)]
)

const hosts = [
  {
    _id: generateID('u'),
    name: 'John Doe',
    reputation: 123,
  },
  {
    _id: generateID('u'),
    name: 'Jane Doe',
    reputation: 123,
  },
]

const randomHost = () => (
  hosts[Math.floor(Math.random()*hosts.length)]
)

const randomTime = () => (
  Date.now() + Math.floor(Math.random()*1000000+1000000)
)
const randomAmount = () => (
  Math.floor(Math.random()*200+50)
)

export const randomCampaign = () => ({
  _id: generateID('c'),
  closesAt: randomTime(),
  amountRaised: randomAmount(),
  restaurant: randomRestaurant(),
  host: randomHost(),
})
