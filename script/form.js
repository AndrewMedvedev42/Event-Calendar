const createNewBtn = document.getElementById("createbtn")
const formMessage = document.getElementById("formImputfield")
const selectDay = document.getElementById("selectday")
const selectTime = document.getElementById("sectecttime")
const selectPerson = document.getElementById("selecperson")

//makes a key for local storage in result of combinig input data

function idNameMaker(){
    let keyName= selectDay.value + selectTime.value
    return keyName
}

//makes object out of filled data for key in localStorage

function valueObject(){
    return  {eventName:formMessage.value, person:selectPerson.value}
}

//checks is slot is avalible or filled to prevent rewriting

function isIdAvailable(){
    let isIdAvailable = true
        for(var key in localStorage){
            if(idNameMaker() === key){
                alert("Sorry this slot is taken")
                isIdAvailable = false
            }
        }
    return isIdAvailable
}

//function to combine filled data and store it in localStore
// checks if the input field is filled
function storeObjectData(){
    if(formMessage.value === ""){
        alert("There is no value in input field")
    }else{
        
        if(isIdAvailable()){
                localStorage.setItem(idNameMaker(), JSON.stringify(valueObject()));
                window.open("../calendar/index.html", "_self");
        }
    }
}
createNewBtn.addEventListener("click",storeObjectData)

