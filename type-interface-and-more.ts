//不写类型时TS会自动给分配一个数据类型
let str = 'sunjinyao'  //此时str是string类型

//定义数据时也可以是 多种类似
//此时要调用方法时，只能调用他们公共都可用的方法 ，此时字符串length()就不可用
let numberOrString: number | string
numberOrString = 'sjy'
numberOrString = 123

//解决不公共的方法的调用 比如下面字符串中length()的调用
//类型断言 union types 方法
function getLength(input: string | number): number {
    const str = input as string
    if (str.length) {  //如果为真，则说明为string类型，length()方法可用
        return str.length
    } else {    //如果为假 则为number类型 转换为string类型再调用length()方法
        const number = input as number
        return number.toString().length
    }
}

//type guard  方法  typeof
function getLength2(input: string | number): number {
    if (typeof input === 'string') {
        return input.length
    } else {
        return input.toString().length
    }
}