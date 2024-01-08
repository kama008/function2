// Funoction


// function decloration




// function info(name, age = 'did not write name') {
//     let text = 'My name is ' + name + ' my age is ' + age  
    
//     return text 
// }


// console.log(info('Zafar', 24));


// //function expression

// let info = function info(name, age = 'did not write name') {
//     let text = 'My name is ' + name + ' my age is ' + age  
    
//     return text 
// }

// console.log(info('Zafar', 24));


// function solve(min, max) {
//     if(min > max) {
//         alert('First argument should be less than second')

//     }else {
//         let sum = 0
//         for(let i = min; i <= max; i++) {
//             sum += i
//         }
//         return sum
//     }

   
// }

// console.log(solve(1, 10));

//Math.random() - gives number from 0 to 0.9999
//Math.floor() - Округляет наше число до наименьшего целого наибольшего 
//Math.ceil() - Округляет наше число до наибольшего целого 
//Math.round() - Округляет наше число по матем правилам

// function random(min,max) {
//     return Math.floor(Math.random() *  (max + 1 - min) + min)
// }


// let minD = +prompt('Write min area')
// let maxD = +prompt('Write max area')
// let count = +prompt('Write quanity of ex')

// for(let i = 0; i < count; i++) {
//     let one = random(minD, maxD)
//     let two = random(minD, maxD)
//     let primer = +prompt(one + ' + ' + two + ' =')
//     let word = primer == ( one + two ) ? 'Great' : 'Stupid'
//     alert(one + ' + ' + two + ' = ' + (one + two) + ' Your answer ' + primer + ',' + word)  
    
// }

function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1; // Change 10 to your desired range
}

function generateExamples(numExamples) {
    const examples = [];

    for (let i = 0; i < numExamples; i++) {
        const num1 = generateRandomNumber();
        const num2 = generateRandomNumber();
        const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)]; // Random operator

        examples.push({ num1, num2, operator });
    }

    return examples;
}

function evaluateExample(example) {
    const { num1, num2, operator } = example;

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return NaN; // Invalid operator
    }
}

function quiz() {
    const numExamples = +prompt("Введите количество примеров");
    const examples = generateExamples(numExamples);

    for (const example of examples) {
        const userAnswer = +prompt(`Решите пример: ${example.num1} ${example.operator} ${example.num2}`);
        const correctAnswer = evaluateExample(example);

        if (userAnswer === correctAnswer) {
            console.log('Ваш ответ верный!');
        } else {
            console.log(`Ваш ответ неверный. Правильный ответ: ${correctAnswer}`);
        }
    }
}

quiz();
