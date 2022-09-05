const insert = (number) => {
    let numberValue = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numberValue + number;
}

const deleteValues = () => {
    document.getElementById('result').innerHTML = '';
}

const backSpace = () => {
    let resultCalc = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultCalc.substring(0, resultCalc.length - 1);
}

const calcNumbers = () => {
    let resultCalc = document.getElementById('result').innerHTML;
    if (resultCalc) {
        document.getElementById('result').innerHTML = eval(resultCalc);
        } 
    }