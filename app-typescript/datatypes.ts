const person = {
    name: 'Raju',
    age: 30,
    hobbies: ['Cricket', 'Table Tanis']
};

// ENUM Type
enum Role {ADMIN, READ_ONLY, AUTHOR}; // Default it assign numbers like 0,1,2
enum RoleWithAssignment {ADMIN = 'ADMIN', READ_ONLY = 1} // Custom behaviour of dev choice
const enumperson = {
    name: 'Raju',
    age: 30,
    role: Role.AUTHOR
};

// Generic object type
const genperson: object = {
    name: 'Raju',
    age: 30
};

// Specific object type - not good practise
const genpersonobj: {
    name: string;
    age: number;
    role: [number, string] // tuple type
} = {
    name: 'Raju',
    age: 30,
    role: [1, 'Manager']
};
console.log(person.name);
console.log(genpersonobj.role);
genpersonobj.role.push('Lead');
console.log(genpersonobj.role);

// Array of string
let fav_activities : string[];

// Using for loop on array
for (const hobby of person.hobbies){
    console.log(hobby);
    console.log(hobby.toUpperCase()); // All methods available of type string
}

// Enum check
if(enumperson.role === Role.AUTHOR){
    console.log('is author');
}