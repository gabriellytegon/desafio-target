function invertString(){
    const string = document.querySelector("input").value
    const textInvertArray = document.querySelector("#newString")    
    const array = string.split("")
    let invertArray = ""
    
    for (let aux = array.length - 1; aux >= 0; aux--) {
        invertArray += array[aux];
    }

    textInvertArray.innerHTML = invertArray
}