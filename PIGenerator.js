const readLine = require('readline');

// define a function that will handle the calculation

const piGenerator = (numDecimals) => {
    if(numDecimals < 0 || numDecimals > 15) {
        return "Please enter number between 0 and 15";
    }
    return parseFloat(Math.PI.toFixed(numDecimals));
}

const r1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
//ask for user input
r1.question("Enter the number of decimal places: ", (userInput) => {
    const numDecimals = parseInt(userInput);

    const piResult = piGenerator(numDecimals);
    console.log(`Pi to ${numDecimals} decimal places: ${piResult}`);

    r1.close();
})