function searchNumber(){
    const number = parseInt(document.querySelector("input").value)
    const answer = document.querySelector("#answer")
    let firstNumber = 0
    let secondNumber = 1
    let result = 0

    if (!number){
        answer.innerHTML = 'Número pertencente a sequência'
        return
    } 

    while(result<=number){
        result = firstNumber + secondNumber;
        firstNumber = secondNumber
        secondNumber = result
    }
    
    if (firstNumber === number){
        answer.innerHTML = 'Número pertencente a sequência'
        return
    } 
    
    answer.innerHTML = 'Número não pertencente a sequência'
}