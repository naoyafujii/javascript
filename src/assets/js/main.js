class Person {
  constructor(name) {
    this.name = name
    this.id = Person.nextId++
  }
}
Person.nextId = 0

const taro = new Person('taro')
console.log(taro)
const jiro = new Person('jiro')
console.log(jiro)

// p154
const words = [
  'Baseball',
  'Rodeo',
  'Angel',
  'Aardvark',
  'Xylophone',
  'November',
  'Chocolate',
  'Bali',
]

const alphabetical = words.reduce((a, x) => {
  if (!a[x[0]]) a[x[0]] = []
  a[x[0]].push(x)
  return a
}, {})
console.log(alphabetical)

// p158

const animals = ['きじ', '猿', '犬']
const html = `<ul><li>${animals.join('</li><li>')}</li></ul>`
console.log(html)

// const html2 =
//   '<ul>' + animals.forEach(animal => `<li> ${animal} </li>`) + '</ul>'

// console.log(html2)

const members = ['kyosuke', 'takazudo', 'yomotsu']
let html3 = ''

members.forEach(member => {
  html3 += `<li>${member}</li>`
})

document.querySelector('ul').innerHTML = html3

console.log(html3)

const numbers = [1, 2, 3]
const doubleNumbers = []

// for文
for (let i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2)
}
console.log(doubleNumbers)
// map
const doubled = numbers.map(number => {
  return number * 2
})
console.log(doubled)

const images = [
  { height: 10, width: 10 },
  { height: 5, width: 5 },
  { height: 2, width: 2 },
]

const areas = []
images.forEach(image => {
  areas.push(image.height * image.width)
})

console.log(areas)

const trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
]

const speeds = trips.map(trip => {
  return trip.distance / trip.time
})
console.log(speeds)

// color取り出し
const colorObjects = [{ color: '赤' }, { color: '青' }, { color: '黄色' }]

// const aaa = colorObjects.map(object => {
//   return object['color']
// })
// console.log(aaa)

// 関数化
function pluck(array, property) {
  return array.map(item => {
    return item[property]
  })
}

const colorNames = pluck(colorObjects, 'color')
console.log(colorNames)

const products = [
  { name: 'きゅうり', type: '野菜', quantity: 0, price: 2 },
  { name: 'バナナ', type: 'フルーツ', quantity: 10, price: 10 },
  { name: 'パイナップル', type: 'フルーツ', quantity: 20, price: 5 },
  { name: 'ピーマン', type: '野菜', quantity: 15, price: 8 },
]

// const filteredProducts = []
// for文
// for (let i = 0; i < products.length; i++) {
//   if (products[i].type === 'フルーツ') {
//     filteredProducts.push(products[i])
//   }
// }

// console.log(filteredProducts)

const filteredProducts = products.filter(product => {
  return (
    product.type === 'フルーツ' && product.quantity > 0 && product.price < 10
  )
  // const result = product.type === 'フルーツ'
  // return result
})
console.log(filteredProducts)

const post = { id: 4, title: '初めての投稿' }
const comments = [
  { postId: 4, content: 'いい勉強ですね' },
  { postId: 3, content: '勉強になりました' },
  { postId: 4, content: 'なるほど' },
]

function commentsForPost(post, comments) {
  return comments.filter(comment => {
    return comment.postId === post.id
  })
}
console.log(commentsForPost(post, comments))

const o = {
  a: 1,
  b: 2,
  c: 3,
}

const propsArray = Object.keys(o)
console.log(propsArray)

propsArray.forEach(props => {
  console.log(`${props}: ${o[props]}`)
})

const object = {
  apple: 1,
  xochitl: 2,
  balloon: 3,
  guitar: 4,
  xylophone: 5,
}
Object.keys(object)
  .filter(prop => prop.match(/^x/))
  .forEach(prop => {
    console.log(`${prop}: ${object[prop]}`)
  })

const users = [{ name: 'taro' }, { name: 'saburo' }, { name: 'jiro' }]

// let user
// for (let i = 0; i < users.length; i++) {
//   if (users[i].name === 'jiro') {
//     user = users[i]
//     break
//   }
// }
// console.log(user)

const user = users.find(user => {
  return user.name === 'jiro'
})

console.log(user)

// post comment

const postsFind = [{ id: 1, title: '古い投稿' }, { id: 2, title: '新しい投稿' }]

const commentFind = {
  postId: 2,
  content: 'いいね',
}

function postForComment(posts, comment) {
  return posts.find(post => {
    return post.id === comment.postId
  })
}
console.log(postForComment(postsFind, commentFind))

const computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 },
]

// // 16g必要なソフト
// // 全てで動かせるフラグ
// let allComputersCanRun = true
// // どれかでは動かせるフラグ
// let someComputersCanRun = false

// for (let i = 0; i < computers.length; i++) {
//   const computer = computers[i]
//   if (computer.ram < 16) {
//     allComputersCanRun = false
//   } else {
//     someComputersCanRun = true
//   }
// }

// console.log(allComputersCanRun, someComputersCanRun)

// everyとsome
console.log(
  computers.every(computer => {
    return computer.ram >= 16
  }),
  computers.some(computer => {
    return computer.ram >= 16
  }),
)

function Field(value) {
  this.value = value
}

Field.prototype.validate = function () {
  return this.value.length > 0
}

const username = new Field('my_username')
const password = new Field('my_password')
const birthday = new Field('2020/10/30')

// console.log(username.validate() && password.validate() && birthday.validate())

const fields = [username, password, birthday]

const formIsValid = fields.every(field => {
  return field.validate
})
console.log(formIsValid)

if (formIsValid) {
  // サーバーにリクエスト
} else {
  // エラーを表示
}
