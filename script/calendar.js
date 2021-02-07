const calendarFilterSelect = document.getElementById("calendarFilterSelectId")
const initialFilter = calendarFilterSelect.value

console.log('initial select value',initialFilter)

function setValueSlot(slotId, slotElement){
    slotElement.style.backgroundColor = "lightgreen"
    slotElement.style.display = "flex"
    slotElement.style.justifyContent = "space-between"
    // console.log()
    let rawStorageValue = localStorage.getItem(slotId)

    let value = JSON.parse(rawStorageValue)
    slotElement.innerHTML = value.one
}

function resetSlot(slotElement){
    slotElement.innerHTML = "_"
    slotElement.style.backgroundColor = "white"
    slotElement.style.justifyContent = "center"
}

function setDeleteIcon(slotId, slotElement){
    var imageX = document.createElement('img')
    imageX.src = "../img/cancel.png"
    imageX.className = `deletebtn`
    slotElement.appendChild(imageX)
    imageX.onclick = function(){
        localStorage.removeItem(slotId)
        resetSlot(slotElement)
        // slotElement.innerHTML = "_"
        // slotElement.style.backgroundColor = "white"
        // slotElement.style.justifyContent = "center"
    }
};

function renderCalendar(selectedFilter){
    if(localStorage.length === 0){
        console.log("there is no data in local storage")
    }else{
        console.log("you have data to display")
        for(let counter = 0; counter < localStorage.length; counter++){
            var idName2 = localStorage.key(counter)
            var chooseDom = document.getElementById(`${idName2}`)
            
            let slotData = JSON.parse(localStorage.getItem(idName2))
            let assignedFilter = slotData.two
            console.log({selectedFilter})
            console.log({assignedFilter})
            if(selectedFilter === assignedFilter || selectedFilter === 'all'){
                
            
                setValueSlot(idName2, chooseDom)
                
                setDeleteIcon(idName2, chooseDom)
            } else {
                resetSlot(chooseDom)
            }
        }
    }
}


renderCalendar(initialFilter)


calendarFilterSelect.onchange = function(selectedItem){
    console.log('target value from select', selectedItem.target.value)
    let filter = selectedItem.target.value
    renderCalendar(filter)
}
