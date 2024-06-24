let arrOfNumbers: number[] = [1, 2, 3]
arrOfNumbers.push(4)

function test() {
    //内部定义了许多其他类型的数据，arguements等等
    console.log(arguments);
}

let user: [string, number] = ['sun', 26]
user.push('jinyao')
user.push(888)
//只能添加定义类型中的两种数据类型的数据
//user.push(true)