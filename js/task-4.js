
const form = document.querySelector('.login-form')


form.addEventListener('submit', handlerEvent)


function handlerEvent(event) {
    event.preventDefault()
    const elements = event.target.elements
    if (!elements.email.value.trim().length || !elements.password.value.trim().length) {
        alert('All form fields must be filled in')
    }
    else {
        const info = {
            email: elements.email.value.trim(),
            password: elements.password.value.trim()
        }
        console.log(info)
        form.reset()
    }

}