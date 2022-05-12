//Esta App permite ingresar usuario y contraseña, poder verlo y poder eliminarlo de una base de datos, obter el ID del usuario y poder modificar informacion
 
const loadInitialTemplate = () => {
    const template = `
      h1>Usuarios</h1>
        <form id="user-form">
            <div>
                <label>Nombre</label>
                <input name="name" />   
            </div>
            <div>
                <label>Apellido</label>
                <input name="  <lastname" />   
            </div>
            <button type="submit">Enviar</button>
        </form>
        <ul id="user-list"></ul>
    `
    const body = document.getElementsByTagName('body')[0]
    body.innerHTML = template
}

const getUsers = async () => {
    const response = await fetch('/users')
    const users = await response.json()
    console.log(users)
}

const addFormListener = () => {
    const userForm = document.getElementById('user-form')
    userForm.onsubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(userForm)
        const data = Object.fromEntries(formData.entries())
        await fetch('/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
            'Content-Type':'application/json'
            }
        })
        userForm.reset()
        getUsers()
    } 
}

window.onload = () => {
    loadInitialTemplate()
    addFormListener()
    getUsers()
}