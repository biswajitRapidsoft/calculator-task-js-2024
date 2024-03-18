let res = document.getElementById("res");
let exp = "0";


function calculate(e) {
    let id = e.target.id;
    let val = document.getElementById(id).value;
    if (val == "+" || val == "-" || val == "*" || val == "/") {

        eval();
        exp = exp + val;
        res.innerText = exp;
        console.log(typeof (exp));
        console.log((exp));


    }

    else if (val == "c") {
        res.innerText = "0";
        exp = "";

    }
    else if (val == "=") {
        eval();
        console.log(exp);
        res.innerText = exp;
        console.log(exp);
    }
    else {
        if (res.innerText == "0") {
            res.innerHTML = val;
            exp = val;
            console.log(typeof (exp));
            console.log((exp));

        }
        else {
            res.innerText = res.innerText + val;
            exp = exp + val;
            console.log(typeof (exp));
            console.log((exp));
        }


    }


}

function eval() {
    console.log(typeof (exp));
    console.log((exp));
    if (exp.includes("+")) {
        let arr = exp.split("+");
        exp = Number(arr[0]) + Number(arr[1]);

    }
    else if (exp.includes("-")) {
        let arr = exp.split("-");
        exp = Number(arr[0]) - Number(arr[1]);

    }
    else if (exp.includes("*")) {
        let arr = exp.split("*");
        if (arr[1]) {
            exp = Number(arr[0]) * Number(arr[1]);

        }
        else {
            exp = Number(arr[0]) * Number(1);

        }

    }
    else if (exp.includes("/")) {
        let arr = exp.split("/");

        if (arr[1]) {
            if (Number(arr[1]) != 0) {
                exp = Number(arr[0]) / Number(arr[1]);

            }
            else {
                exp = "Infinity";
            }

        }
        else {
  
                exp = Number(arr[0]) / Number(1);       

        }




    }
    exp = exp.toString();
    console.log(typeof (exp));
    console.log((exp)); 
}

