var person = {
    name: 'Raju',
    age: 30,
    hobbies: ['Cricket', 'Table Tanis']
};
// ENUM Type
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; // Default it assign numbers like 0,1,2
var RoleWithAssignment;
(function (RoleWithAssignment) {
    RoleWithAssignment["ADMIN"] = "ADMIN";
    RoleWithAssignment[RoleWithAssignment["READ_ONLY"] = 1] = "READ_ONLY";
})(RoleWithAssignment || (RoleWithAssignment = {})); // Custom behaviour of dev choice
var enumperson = {
    name: 'Raju',
    age: 30,
    role: Role.AUTHOR
};
// Generic object type
var genperson = {
    name: 'Raju',
    age: 30
};
// Specific object type - not good practise
var genpersonobj = {
    name: 'Raju',
    age: 30,
    role: [1, 'Manager']
};
console.log(person.name);
console.log(genpersonobj.role);
genpersonobj.role.push('Lead');
console.log(genpersonobj.role);
// Array of string
var fav_activities;
// Using for loop on array
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
    console.log(hobby.toUpperCase()); // All methods available of type string
}
// Enum check
if (enumperson.role === Role.AUTHOR) {
    console.log('is author');
}
