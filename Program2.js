let n = 5;

for (let i = 0; i < n; i++) {

    // print spaces
    let spaces = " ".repeat(i);

    let num = 1;
    let row = "";

    for (let j = 0; j < n - i; j++) {
        row += num + " ";
        num = num * (n - i - j - 1) / (j + 1);
    }

    console.log(spaces + row.trim());
}