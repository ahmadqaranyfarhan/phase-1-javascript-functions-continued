// code your solution here
function saturdayFun(arg = "roller-skate") {
  return `This Saturday, I want to ${arg}!`;
}
console.log(saturdayFun());

function mondayWork(arg = "go to the office") {
  return `This Monday, I will ${arg}.`;
}
console.log(mondayWork());

function wrapAdjective(arg) {
  return function (adj) {
    return `You are ${arg}${adj}${arg}!`;
  };
}
/*let result = wrapAdjective('*')
let emphatic = result("a hard worker")
console.log(emphatic)*/

let result = wrapAdjective("||");
let emphatic = result("a dedicated programmer");
console.log(emphatic);
