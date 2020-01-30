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
