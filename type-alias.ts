//类型别名
type Direction = 'up' | 'down' | 'left' | 'right'
let toWhere: Direction = 'left'

interface IName {
    name: string
}
type IPerson = IName & { age: number }
let person: IPerson = { name: 'sun', age: 100 }