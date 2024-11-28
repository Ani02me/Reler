let sandar = [];
while (true) {
    let san = parseInt(prompt("San engizigiz (тоқтату үшін 0 енгізіңіз):"), 10);
    if (san === 0) {
        break;
    }
    if (san % 2 === 0) {
        sandar.unshift(san);
    } else {
        sandar.push(san);
    }
}
console.log("Massip:", sandar);
console.log("Massip uzindgy:", sandar.length);