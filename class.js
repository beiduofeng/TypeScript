//类  ：定义了一切事物的抽象特点
//对象 ：类的实例
//面向对象 ：封装 继承 多态
class Animal {

    constructor(name) {
        this.name = name
    }
    run() {
        return `${this.name} is running`
    }
}
const snake = new Animal('lily')
console.log(snake.run());

//继承
class Dog extends Animal {
    bark() {
        return `${this.name} is barking`
    }
}
const laifu = new Dog('laifu')
console.log(laifu.bark());
console.log(laifu.run());