// let array_main = [30, 30, 40, 5, 223, 2049, 3034, 5];
// let new_array = new Set(array_main);

// console.log(array_main);
// console.log(new_array);

function getAdmins(array_main) {
  let admins = [];
  for ([keys, value] of array_main) {
    if (value == "Admin") {
      admins.push(keys);
    }
  }
  return admins;
}

const users = new Map();

users.set("Gustavo", "Admin");
users.set("Jose", "User");
users.set("Mylleni", "Admin");
users.set("Jusbiscreu", "Admin");

console.log(getAdmins(users));
