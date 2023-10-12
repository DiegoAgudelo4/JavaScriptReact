class Animal{
    constructor(name){
        this.name=name;
    }
    print(){
        return "Print class Animal "+this.name;
    }
}

//solo puede existir una exportacion por default
export default Animal;