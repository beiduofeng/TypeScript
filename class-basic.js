//
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.eat = function () {
        return "".concat(this.name, "\u516C\u5171\u65B9\u6CD5");
    };
    Person.prototype.skill = function () {
        return '私有方法';
    };
    Person.prototype.what = function () {
        return '受保护';
    };
    return Person;
}());
var person1 = new Person('sun');
console.log(person1.eat());
//调用不了skill() console.log(person1.skill());
// 调用不了what()  console.log(person1.what());
