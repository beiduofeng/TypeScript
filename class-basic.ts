//
class Person {
    name: string
    constructor(name) {
        this.name = name
    }
    public eat() {
        return `${this.name}公共方法`
    }
    private skill() {
        return '私有方法'
    }
    protected what() {
        return '受保护'
    }
}
const person1 = new Person('sun')
console.log(person1.eat());
//调用不了skill() console.log(person1.skill());
// 调用不了what()  console.log(person1.what());

