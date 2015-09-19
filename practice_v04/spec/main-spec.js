//  Your test here

describe('tests of practice 01', function () {

    it("given Persion with age=21 and name is Tom, get introduce", function () {

        var person = new Person(21, "Tom");
        var intro = person.introduce();

        expect(intro).toBe("My name is Tom. I am 21 years old.");
    })
    it("given Student with class 2,get introduce",function(){
        var student=new Student("Class 2");
        var intro=student.introduce();

        expect(intro).toBe("My name is Tom. I am 21 years old. I am a Student. I am at Class 2.");
    })
    it("given Worker with a job",function(){
        var worker=new Worker("Worker","job");
        var intro=worker.introduce();

        expect(intro).toBe("My name is Tom. I am 21 years old. I am a Worker. I have a job.");
    })
});