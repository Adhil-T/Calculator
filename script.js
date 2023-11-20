let scn = document.getElementById('screen');

function addMod() {
    let l = scn.innerHTML.length;
    if(scn.innerHTML.charAt(l-1) == "+" || scn.innerHTML.charAt(l-1) == "-" || scn.innerHTML.charAt(l-1) == "*" || scn.innerHTML.charAt(l-1) == "/" || scn.innerHTML.charAt(l-1) == "%") {

    }
    else {
        scn.innerHTML += "%";
    }
}

function addPls() {
    let l = scn.innerHTML.length;
    if(scn.innerHTML.charAt(l-1) == "+" || scn.innerHTML.charAt(l-1) == "-" || scn.innerHTML.charAt(l-1) == "*" || scn.innerHTML.charAt(l-1) == "/" || scn.innerHTML.charAt(l-1) == "%") {

    }
    else {
        scn.innerHTML += "+";
    }
}

function addMin() {
    let l = scn.innerHTML.length;
    if(scn.innerHTML.charAt(l-1) == "+" || scn.innerHTML.charAt(l-1) == "-" || scn.innerHTML.charAt(l-1) == "*" || scn.innerHTML.charAt(l-1) == "/" || scn.innerHTML.charAt(l-1) == "%") {

    }
    else {
        scn.innerHTML += "-";
    }
}

function addMul() {
    let l = scn.innerHTML.length;
    if(scn.innerHTML.charAt(l-1) == "+" || scn.innerHTML.charAt(l-1) == "-" || scn.innerHTML.charAt(l-1) == "*" || scn.innerHTML.charAt(l-1) == "/" || scn.innerHTML.charAt(l-1) == "%") {

    }
    else {
        scn.innerHTML += "*";
    }
}

function addDiv() {
    let l = scn.innerHTML.length;
    if(scn.innerHTML.charAt(l-1) == "+" || scn.innerHTML.charAt(l-1) == "-" || scn.innerHTML.charAt(l-1) == "*" || scn.innerHTML.charAt(l-1) == "/" || scn.innerHTML.charAt(l-1) == "%") {

    }
    else {
        scn.innerHTML += "/";
    }
}