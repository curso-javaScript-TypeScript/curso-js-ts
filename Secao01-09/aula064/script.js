const aray1 = [1, 2, 3];
const aray2 = [4, 5, 6];
const aray3 = [...aray1, 'Magno',...aray2, ...[7, 8, 9]];
// const aray3 = [...aray1, 'Magno',...aray2, [7, 8, 9]];
// ...rest -> ... spread;
console.log(aray3);



/*
const aray1 = [1, 2, 3];
const aray2 = [4, 5, 6];
const aray3 = aray1.concat(aray2, [7, 8, 9], 'Magno');
const aray3 = aray1.concat(aray2);
console.log(aray3);

*****************************************

const aray1 = [1, 2, 3];
const aray2 = [4, 5, 6];
const aray3 = aray1 + aray2;
console.log(typeof aray3);
console.log(aray3);
*/