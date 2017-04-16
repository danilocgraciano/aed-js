function log(array, groupName = 'log') {

    console.groupCollapsed(groupName);

    // for (var index = 0; index < array.length; index++)
    //     console.log(array[index]);

    array.forEach(function (element) {
        console.log(element);
    });

    console.groupEnd();
}

var fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (var i = 3; i <= 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

log(fibonacci, 'create modify and log an array (fibonacci)');

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers[numbers.length] = 10;//ADICIONA UM ELEMENTO
numbers.push(11);//ADICIONA UM ELEMENTO
numbers.push(12, 13);//ADICIONA MAIS DE UM ELEMENTO
log(numbers, 'add elements');

numbers.unshift(-2);//ADICIONA UM ELEMENTO NO INICIO DO ARRAY
numbers.unshift(-4, -3);//ADICIONA MAIS DE UM ELEMENTO NO INICIO DO ARRAY
log(numbers, 'drop elements');

numbers.pop();//REMOVE O ULTIMO ELEMENTO DO ARRAY;
log(numbers, 'drop last element');

numbers.shift();
log(numbers, 'drop first element');

//5 = indice
//3 = remover 3 elementos
numbers.splice(5, 3);
log(numbers, 'remove 3 elements from ftfth');

//5 = indice
//0 = qtde a remover
//2,3,4 = elements to add
numbers.splice(5, 0, 2, 3, 4);
log(numbers, 'add 3 elements from ftfth');

numbers.splice(5, 3, 2, 3, 4);
log(numbers, 'drop 3 elements from fifth and add 3 elements from ftfth');

//ARRAYS MULTIDIMENSIONAIS
var matrix2x2 = [];
for (var i = 0; i < 2; i++) {
    matrix2x2[i] = [];
    for (var j = 0; j < 2; j++) {
        matrix2x2[i][j] = i + j;
    }
}

console.groupCollapsed("multidimensional arrays");
console.table(matrix2x2);
for (var i = 0; i < matrix2x2.length; i++) {
    for (var j = 0; j < matrix2x2[i].length; j++) {
        console.log("[%i][%i] = %i", i, j, matrix2x2[i][j]);
    }
}
console.groupEnd();

var zero = 0;
var positiveNumbers = [1, 2, 3];
var negativeNumbers = [-3, -2, -1];
numbers = negativeNumbers.concat(zero, positiveNumbers);
log(numbers, "concat arrays")

//ARROW FUNCTION
var isEven = (x) => {
    console.log(x);
    return (x % 2 == 0)
};

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.groupCollapsed("first even (every function)");
console.log(numbers);
//itera em cada elemento do array até que a função devolva false
numbers.every(isEven);
console.groupEnd();

console.groupCollapsed("first odd (some function)");
console.log(numbers);
//itera em cada elemento do array até que a função devolva true
numbers.some(isEven);
console.groupEnd();

var even = (x) => {
    if (x % 2 == 0)
        return x;
};

console.groupCollapsed("even numbers");
//Filter = devolve um novo array para os quais a função retornou true
numbers.filter(even).forEach((e) => {
    if (e)
        console.log(e);
});
console.groupEnd();

var bin = (x) => {
    return x.toString(2);
};

console.groupCollapsed("binary numbers");
//MAP = mapeará valores quando receber uma função
numbers.map(bin).forEach((e) => {
    if (e)
        console.log(e);
});
console.groupEnd();

console.groupCollapsed("sum of numbers");
//MAP = mapeará valores quando receber uma função
console.log(numbers.reduce((previous, current, index) => previous + current));
console.groupEnd();

numbers.reverse();
numbers.sort();//falta comparator = [1,10,11,12,13,14,15,2,3,4,5,6,7,8,9]
numbers.sort((a, b) => a - b);
log(numbers, "sorting arrays");

var friends = [
    { name: 'Maria', age: 30 },
    { name: 'Ana', age: 20 },
    { name: 'Cris', age: 25 }
];

function pessoaCompare(a, b) {
    if (a.age < b.age)
        return -1;
    if (a.age > b.age)
        return +1;
    return 0;
}

log(friends.sort(pessoaCompare), 'sorting arrays of objects');

console.groupCollapsed("Array to CSV");
console.log(numbers.join(";"));
console.groupEnd();