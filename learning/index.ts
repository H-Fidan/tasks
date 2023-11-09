interface User{
    name:string ,
    age:number,
    occupation:string,
};

const users: User[]= [
{
    name: "jbjk",
    age:25,
    occupation: "sjdsnj",
},
{
    name:"jsjsj",
    age:23,
    occupation:"sss",

}
]
function logPerson(user: User) {
    console.log( `${users.name}`,` ${users.age}`, `${users.occupation}`)
}
users.forEach(logPerson);