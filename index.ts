// interface user {
//   id: number;
//   name: string;
//   email: string;
//   gender?: string;
// }

// function getUser(obj: user) {
//   return console.log(`User ID: ${obj.id}, Name: ${obj.name}, Email: ${obj.email}`);
// }

// getUser({ id: 1, name: "John Doe", email: "john.doe@example.com" });




// function add(x: number, y: string): number | string {
//   return x + y;
// }

// console.log(add(10, "20"));


// function showInfo(name: string): void;
// function showInfo(age: number): void;
// function showInfo(value: string | number): void {
//   if (typeof value === "string") console.log(`Name: ${value}`);
//   else console.log(`Age: ${value}`);
// }



// interface User {
//   Name: string;
//   email: string;
//   age?: number
// }

// function abcd(obj: User) {
//   // obj.Name = "hfhfdf"
// }

// console.log(abcd({Name:"name",email:"name@gmail.com"}));



class User{
  constructor(public name:string,public ageee:number,public gender:string){}


  use(){
    this.name="fjkin";
  }
}


const u = new User("yash", 20, "male");

// u.use();

class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  // ✅ Getter
  get name(): string {
    return this._name;
  }

  // ✅ Setter
  set name(newName: string) {
    this._name = newName;
  }
}

const p = new Person("Yash");