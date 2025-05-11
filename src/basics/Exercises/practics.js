const arr = [1,2,3,4]

const newar = arr.filter(item =>item == 2);
console.log(newar)

const newar2 = arr.reduce((acc,item) =>acc = item + 2,0);
console.log(newar2)