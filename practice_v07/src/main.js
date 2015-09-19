//  Your code here
var Person= function(age, name) {
    this._age = age;
    this._name = name;
    //Person.prototype._age=age;
    //Person.prototype._name=name ;
    //this.introduce= function() {
    //    return  "My name is " + this._name + ". I am " + this._age + " years old.";
    //};
};
Person.prototype.introduce= function() {
    return  "My name is " + this._name + ". I am " + this._age + " years old.";
};

function Student(age,name,grade){
    Student.prototype._grade=function(number){
        this._number=number;
    };
    Person.call(this,age,name);
    //this.introduce=function(){
    //
    //};
};
//
//function extend(Child,Parent){
//    var F=function(){};
//    F.prototype=Parent.prototype;
//    Child.prototype=new F();
//    Child.prototype.constructor=Child;
//    Child.uber=Parent.prototype;
//}
//
//extend(Student,Person);
Student.prototype=new Person();
Student.prototype.introduce1=function(){
    return this.introduce()+" I am a Student. I am at "+this._grade+".";
};
//function extend2(Child,Parent){
//    var p=Parent.prototype;
//    var c=Child.prototype;
//    for (var i in p){
//        c[i]=p[i];
//    }
//    c.uber=p;
//}
Teacher=function(age,name,grade){
    this._grade=grade;
    Person.call(this,age,name);
};
Teacher.prototype=new Person();
//extend2(Worker,Person);
Teacher.prototype.introduce2=function(){
    if(this._grade) {
        return this.introduce()+" I am a Teacher"+". I teach "+this._grade+".";}
    else{
        return this.introduce()+" I am a Teacher"+". I teach no Class"+".";
    }
};
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}