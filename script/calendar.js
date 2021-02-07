function setValueSlot(){
    chooseDom.style.backgroundColor = "lightgreen"
    chooseDom.style.display = "flex"
    chooseDom.style.justifyContent = "space-between"
    chooseDom.innerHTML = localStorage.getItem(idName2)
}

function setImg(slotId, slotElement){
    var imageX = document.createElement('img')
    imageX.src = "../img/cancel.png"
    imageX.className = `deletebtn`
    chooseDom.appendChild(imageX)
    imageX.onclick = function(){
        localStorage.removeItem(slotId)
        slotElement.innerHTML = "_"
        slotElement.style.backgroundColor = "white"
        slotElement.style.justifyContent = "center"
    }
};

if(localStorage.length === 0){
    console.log("there is no data in local storage")
}else{
    console.log("you have data to display")
    for(let counter = 0; counter < localStorage.length; counter++){
    var idName2 = localStorage.key(counter)
    var chooseDom = document.getElementById(`${idName2}`)

    setValueSlot()
    
    setImg(idName2, chooseDom)
}}
