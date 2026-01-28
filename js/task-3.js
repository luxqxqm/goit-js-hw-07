const nameInp = document.querySelector('#name-input')
const nameOutp = document.querySelector('#name-output')

nameInp.addEventListener('input', handleEvent)



function handleEvent(event) {
    if (nameInp.value.trim().length) {
        nameOutp.innerHTML = nameInp.value.trim()
    }
    else {
        nameOutp.innerHTML = "Anonymous"
        
    }    
}
