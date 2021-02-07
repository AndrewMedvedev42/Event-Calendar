const calendarFilterSelect = document.getElementById("calendarFilterSelectId")
const initialFilter = calendarFilterSelect.value

console.log('initial select value',initialFilter)

// sets event description to the slot

function setValueSlot(slotId, slotElement){
    slotElement.style.backgroundColor = "lightgreen"
    slotElement.style.display = "flex"
    slotElement.style.justifyContent = "space-between"
    // console.log()
    let rawStorageValue = localStorage.getItem(slotId)

    let value = JSON.parse(rawStorageValue)
    slotElement.innerHTML = value.eventName
}

// makes slot empty

function resetSlot(slotElement){
    slotElement.innerHTML = "_"
    slotElement.style.backgroundColor = "white"
    slotElement.style.justifyContent = "center"
}

// sets delete icon that deletes the value of the slot
// and removes object from localStorage (related to the slot)

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

//renders visuals for the filled slot

function renderCalendar(selectedFilter){
    if(localStorage.length === 0){
        console.log("there is no data in local storage")
    }else{
        console.log("you have data to display")
        for(let counter = 0; counter < localStorage.length; counter++){
            var idForSlot = localStorage.key(counter)
            var chooseDom = document.getElementById(`${idForSlot}`)
            
            let slotData = JSON.parse(localStorage.getItem(idForSlot))
            let assignedFilter = slotData.person
            console.log({selectedFilter})
            console.log({assignedFilter})
            if(selectedFilter === assignedFilter || selectedFilter === 'all'){
                
            
                setValueSlot(idForSlot, chooseDom)
                
                setDeleteIcon(idForSlot, chooseDom)
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
