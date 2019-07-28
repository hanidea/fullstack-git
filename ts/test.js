"use strict";
var Person = /** @class */ (function () {
    function Person(hobby) {
        this.hobby = hobby;
    }
    Person.prototype.echo = function () {
        return '我就喜欢：' + this.hobby;
    };
    return Person;
}());
var person = new Person('看书，习武，书法，旅游');
var hobby = person.echo();
console.log(hobby);
