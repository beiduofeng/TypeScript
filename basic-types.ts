//原始数据类型

// 数据名：数据类型=数据值
let isDone: boolean = false

let age: number = 10

let firstName: string = 'sun'
let message: string = `hello,${firstName}`

let u: undefined = undefined
let n: null = null

// 避免使用any容易数据错乱
let notSure: any = undefined
notSure = `maybe a string`
notSure = true
notSure.myName
notSure.getName()

let object: object = { name: `sun`, age: 26 }