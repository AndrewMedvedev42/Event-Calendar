//-------------------------
//-------------------------
//-------------------------
// function ID(){
//     let randonId = `${Math.random().toString(36).substr(2, 9)}`
//     return randonId ;
// };

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
        // location.reload()
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

// function deleteBtn(){
//     for(let cont = 0; cont < localStorage.length; cont++){
//         var pen = document.getElementsByClassName("deletebtn")
//         var pens = pen[cont]
//         if(pens.parentNode.id == localStorage.key(cont)){
//             console.log("Gotcha!!!")
//         }else{
//             console.log("nope")
//         }
//     }
// }

var pen = document.getElementsByClassName("deletebtn")


function findImgData(){
    for(let key in pen){
        if(pen[key].parentNode.id != findStoreData()){
            console.log("poop")
        }
    }
}


function findStoreData(){
    for(let key in localStorage){

    }
}






//  pens.addEventListener("click", XDelete)


// const pen = document.getElementsByClassName("deletebtn")
// let pens = pen[4]
// console.log(pens.parentNode.id)


// const XBtn = document.getElementsByClassName(".deletebtn")

// function deleteBtn(){
        
//         console.log(closeBtn)
//         //  const parentClassName = closeBtn.parentNode.className
//         //  console.log(parentClassName)

//         // localStorage.removeItem(closeBtnParentId)
//         // let idName2 = localStorage.key(counter)
//         // let chooseDom = document.getElementById(`${idName2}`)

//         // chooseDom.innerHTML = "_"
//         // chooseDom.style.backgroundColor = "white"
//         // chooseDom.style.justifyContent = "center"
// }
// XBtn.addEventListener("click", deleteBtn);
