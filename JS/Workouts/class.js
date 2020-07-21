class Person
{
    constructor(name)
    {
        this.name = name;
        // name = this.name;
    }
}

let personOne = new Person("rahul");
console.log(personOne.name);