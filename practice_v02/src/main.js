//
var Person = function (age, name) {
    this._age = age;
    this._name = name;
};

Person.prototype.introduce = function () {
    return "My name is " + this._name + ". I am " + this._age + " years old.";
};

var Student=function (grade){
    this._grade=grade;
    Person.apply(this.arguments);
};

Student.prototype.introduce=function(){
    return  "I am a Student. I am at "+this._grade+".";
};