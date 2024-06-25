//接口
interface Per {
    readonly id: number;   //readonly是只读属性
    name: string;
    age?: number;   //加？后是可选的意思，下方数据可以没有age
}
//约束定义的数据的类型
let sun: Per = {
    id: 11,
    name: 'sunjinyao',
    age: 26
    //id:1  数据不能多也不能少，也不能数据类型不匹配
}

//  sun.id = 22 不可修改   接口中readonly是只读属性
//readonly是用在属性上的，const是用在数据定义时