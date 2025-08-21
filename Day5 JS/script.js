const employee = {
    name: "John Doe",   
    age: 30,
    position: "Software Engineer",
    department: "Development",
    planguage:{
        name: "JavaScript",
        version: "ES6"
    },
    skills: ["JavaScript", "React", "Node.js"],
    isActive: true,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    },
}
console.log(employee);
employee.name = "Jitendra Kumar Chauhan";
console.log(employee.name);
employee.skills[1] = "Angular";
console.log(employee.skills);
delete employee.age;
console.log(employee);