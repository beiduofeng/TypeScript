//枚举 
//常量
enum Direction {
    Up = 10,
    Down,
    Left,
    Right,
}
console.log(Direction.Up);
console.log(Direction[0]);

//常量枚举
const enum Pwds {
    pwd1 = '111',
    pwd2 = '222',
    pwd3 = '333',
}
const value = '222'
if (value === Pwds.pwd2) {
    console.log('pass');

}