function Person(age, name) {
    this._age = age;
     this._name = name;
     //Person.prototype._age=age;
     //Person.prototype._name=name ;

};
Person.prototype.basic_introduce=function(){
    return "My name is Tom. I am 21 years old.";
};

function Student(grade){
    this._grade=grade;
};

function extend(Child,Parent){
    var F=function(){};
    F.prototype=Parent.prototype;
    Child.prototype=new F();
    Child.prototype.constructor=Child;
    Child.uber=Parent.prototype;
}

extend(Student,Person);

Student.prototype.introduce=function(){
    return this.basic_introduce()+" I am a Student. I am at "+this._grade+".";
};

Person.prototype.introduce= function() {
    return  "My name is " + this._name + ". I am " + this._age + " years old.";
};
var Worker=function(){
};
extend(Worker,Person);
Worker.prototype.introduce=function(){
    return this.basic_introduce()+" I am a Worker"+". I have a job.";
};
