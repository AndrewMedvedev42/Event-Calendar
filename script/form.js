const createNewBtn = document.getElementById("createbtn")
const formMessage = document.getElementById("formImputfield")
const selectDay = document.getElementById("selectday")
const selectTime = document.getElementById("sectecttime")
const checkBtn = document.getElementById("checkbtn")

function idnameMaker(){
    let idName = selectDay.value + selectTime.value
    return idName
}

function isIdAvailable(){
    let isIdAvailable = true
        for(var key in localStorage){
            if(idnameMaker() === key){
                alert("Sorry this slot is taken")
                isIdAvailable = false
            }
        }
    return isIdAvailable
}

function storeObjectData(){
    if(formMessage.value === ""){
        alert("There is no value in input field")
    }else{
        
        if(isIdAvailable()){
                localStorage.setItem(idnameMaker(), formMessage.value);
                window.open("../calendar/index.html", "_self");
        }
    }
}
createNewBtn.addEventListener("click",storeObjectData)

// function displValConsl(){



        
//         // }else{
    // localStorage.setItem(idnameMaker(), formMessage.value);
    // window.open("../calendar/index.html", "_self");
//         // }
//     } 
// }
// checkBtn.addEventListener("click", displValConsl)


// let objectTest = formMessage

// console.log(`Value of input :${formMessage.value}`)

// function consleLoging(){
//     alert(formMessage.value)
//     localStorage.setItem('testObject', JSON.stringify(objectTest))

// }

// createNewBtn.addEventListener("click", consleLoging)