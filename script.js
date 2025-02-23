function AddNum(){
    let num1 = document.getElementById('fristname').value
    let num2 = document.getElementById('secondname').value
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let h1 = document.getElementById('result')
    res = num1+num2
    h1.innerHTML="Result:" + res
}
function SubNum(){
    let num1 = document.getElementById('fristname').value
    let num2 = document.getElementById('secondname').value
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let h1 = document.getElementById('result')
    res = num1-num2
    h1.innerHTML="Result:" + res

}
function MunNum(){
    let num1 = document.getElementById('fristname').value
    let num2 = document.getElementById('secondname').value
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let h1=document.getElementById('result')
    res= num1*num2
    h1.innerHTML="Result:" + res
}
function DivNum(){
    let num1 = document.getElementById('fristname').value
    let num2 = document.getElementById('secondname').value
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let h1=document.getElementById('result')
    res = num1/num2
    h1.innerHTML="Result:" + res
}
function PowNum(){
    let num1 = document.getElementById('fristname').value
    let num2 = document.getElementById('secondname').value
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let h1=document.getElementById('result')
    res = num1**num2
    h1.innerHTML="Result:" + res
}

function emty(){
    location.replace(location.href);
}