

function squares() {
    let result = '';
    var i = document.getElementById('squares').value;
    console.log(i);
    for (k = 1; k <= i; k++)   {
        var newResult = `${k} x ${k} = ${k*k}`;
        result += `${newResult}\n <br>`
    }
    console.log(result);
    document.getElementById("squaresResults").innerHTML = result;
}

function tables() {
    let result1 = '';
    var n = document.getElementById('tables').value;
    console.log(n);
    for (k = 1; k <= 10; k++)   {
        var newResult1 = `${n} x ${k} = ${n*k}`;
        result1 += `${newResult1}\n <br>`
    }
    console.log(result1);
    document.getElementById("tablesResults").innerHTML = result1;
}
