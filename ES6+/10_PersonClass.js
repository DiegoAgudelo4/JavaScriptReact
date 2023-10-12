class Person{
    //constructor
    constructor(name, age, job){
        this.name=name, this.age=age, this.job=job;
    }
    //metodo
    saludar(){
        return `Hola ${this.name}`;
    }
}

const persona=new Person("ana cecilia", 20, "profesora");
console.log(persona);