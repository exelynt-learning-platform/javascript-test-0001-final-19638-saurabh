let n = 5;

// Upper part
for (let i = 1; i <= n; i++) {
    let row = "";

    // spaces before star
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // stars and inner spaces
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1) {
            row += "*";
        } else {
            row += " ";
        }
    }

    console.log(row);
}

// Lower part
for (let i = n - 1; i >= 1; i--) {
    let row = "";

    // spaces before star
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // stars and inner spaces
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1) {
            row += "*";
        } else {
            row += " ";
        }
    }

    console.log(row);
}