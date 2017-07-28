export default [
  {
    _id: "c_1",
    closesAt: Date.now() + 6000000,
    amountRaised: 100,
    restaurant: {
      _id: 'r_1',
      name: 'KFC',
      minimumOrder: 150,
      imageURL: '/images/kfc.png',
    },
    host: {
      _id: 'h_1',
      name: 'John Doe',
      reputation: 123,
    }
  },
  {
    _id: "c_2",
    closesAt: Date.now() + 60000000,
    amountRaised: 60,
    restaurant: {
      _id: 'r_2',
      name: 'McDonalds',
      minimumOrder: 150,
      imageURL: '/images/mcdonalds.png',
    },
    host: {
      _id: 'h_1',
      name: 'John Doe',
      reputation: 123,
    }
  }
]
