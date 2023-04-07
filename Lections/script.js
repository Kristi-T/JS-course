const a = 0;
if (a) {
  console.log(a);
} else {
  console.log("a is not truthy");
}
if (a === 0) {
  console.log(a);
}

const hour = 23;
if (hour < 11) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good day!");
} else {
  console.log("Good evening!");
}

switch (new Date().getDay()) {
  case 0:
    console.log("It's Sunday");
    break;
  case 1:
    console.log("It's Monday!");
    break;
  case 2:
    console.log("It's Tuesday!");
    break;
  case 3:
    console.log("It's Wednesday!");
    break;
  case 4:
    console.log("It's Thursday!");
    break;
  case 5:
    console.log("It's Friday!");
    break;
  case 6:
    console.log("It's Saturday!");
    break;
  default:
    console.log("It's not a day!");
}

switch (new Date().getDay()) {
  case 0:
  case 6:
    console.log("It's a weekend!");
    break;
  default:
    console.log("It's a work day :( ");
}

let x = 16,
  b = 15;
const c = x >= b ? x : b;
console.log(c);
