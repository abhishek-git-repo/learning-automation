"use strict";
const person = {
    name: 'Raju',
    age: 30,
    hobbies: ['Cricket', 'Table Tanis']
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var RoleWithAssignment;
(function (RoleWithAssignment) {
    RoleWithAssignment["ADMIN"] = "ADMIN";
    RoleWithAssignment[RoleWithAssignment["READ_ONLY"] = 1] = "READ_ONLY";
})(RoleWithAssignment || (RoleWithAssignment = {}));
const enumperson = {
    name: 'Raju',
    age: 30,
    role: Role.AUTHOR
};
const genperson = {
    name: 'Raju',
    age: 30
};
const genpersonobj = {
    name: 'Raju',
    age: 30,
    role: [1, 'Manager']
};
console.log(person.name);
console.log(genpersonobj.role);
genpersonobj.role.push('Lead');
console.log(genpersonobj.role);
let fav_activities;
for (const hobby of person.hobbies) {
    console.log(hobby);
    console.log(hobby.toUpperCase());
}
if (enumperson.role === Role.AUTHOR) {
    console.log('is author');
}
