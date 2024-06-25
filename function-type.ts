function add1(x: number, y: number): number {
    return x + y
}
let result = add1(2, 3)   //result为number数据类型
//    此时的add是函数类型           z为可选参数  可选放最后
function add2(x: number, y: number, z?: number): number {
    if (typeof z === 'number') {
        return x + y + z
    } else {
        return x + y
    }
}


//     冒号后面都是在定义类型，与逻辑无关
let add3: (x: number, y: number, z?: number) => number = add2


//interface还可以定义函数类型
interface ISum {
    (x: number, y: number, z?: number): number
}
let add4: (x: number, y: number, z?: number) => number = add1