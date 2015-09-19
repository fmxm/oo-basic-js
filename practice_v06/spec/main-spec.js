//  Your test here

describe('tests of practice 01', function () {

    it("given Persion with age=21 and name is Tom, get introduce", function () {

        var person = new Person(21, "Tom");
        var intro = person.introduce();

        expect(intro).toBe("My name is Tom. I am 21 years old.");
    });
    it("given Student with class 2,get introduce",function(){
        var student=new Student(21,"Tom","Class 2");
        var intro=student.introduce1();

        expect(intro).toBe("My name is Tom. I am 21 years old. I am a Student. I am at Class 2.");
    });
    it("given Worker with a job",function(){
        var teacher=new Teacher(21,"Tom","Class 2");
        var intro=teacher.introduce2();

        expect(intro).toBe("My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.");
    });
    it("teach no Class",function(){
        var teacher=new Teacher(21,"Tom");
        var intro=teacher.introduce2();

        expect(intro).toBe("My name is Tom. I am 21 years old. I am a Teacher. I teach no Class.");
    });
});