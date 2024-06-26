//泛型
//  t为泛型，代表数据类型，argue传入的什么类型，就返回什么类型
function echo<t>(arg: t): t {
    return arg
}
const result1 = echo('sun')
const resullt2 = echo(123)
const resullt3 = echo(true)


//多个参数
function swap<t, u>(tuple: [t, u]): [u, t] {
    return [tuple[1], tuple[0]]
}
const tesult4 = ['sunjinyao', 88888888]


//不确定传入值的类型时，但是要使用length()方法
interface IWithLength {
    length: number
}
function echoWithLength<w extends IWithLength>(arg: w): w {
    console.log(arg.length);
    return arg

}
const strstr = echoWithLength('str')
const objobj = echoWithLength({ length: 10, name: 'sun' })
const arrarr = echoWithLength([1, 2, 3, 4])

class Queue<t> {
    private data = [];
    push(item: t) {
        return this.data.push()
    }
    pop() {
        return this.data.shift()
    }
}
const queue = new Queue()

