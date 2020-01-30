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
