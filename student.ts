export default class Student{
    private name : string; 
    private email : string;

    constructor(name : string, email : string){
        this.name = name;
        this.email = email;
    }

    sayHello() : string{
        return `Hello ${this.name}, My Email ID ${this.email}`
    }
}

export function add(x,y){return x+ y}

// export {add, Student as default}


// TypeScript -> JavaSCript
// Transpilers -> TypeScript Compiler | Babel | Traceur 

// > npm install typescript -g


// sourcemap : true

