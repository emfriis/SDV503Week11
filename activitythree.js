function countdown(num) { // Counts down from a number to one by decrementing.
    for (let i = num; i > 0; i--) { // Counts down while internal variable is greater than zero.
        console.log(i); // Prints current internal variable.
    };
};

countdown(5);


function countdownRec(num) { // Counts down from a number to one by decrementing.
    if (num <= 1) { // Checks if the parameter is less than or equal to one.
        console.log(num) // Prints the parameter.
    };
    console.log(dig); // Prints the parameter.
    return countdown(num - 1); // Recurs the function with a decremented parameter.
};

countdownRec(5);