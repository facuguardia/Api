 const mongoose = require('mongoose')

 mongoose.connect('mongodb+srv://facuguar:Facundito12@cluster0.fn5fg.mongodb.net/miapp?retryWrites=true&w=majority')

 const User = mongoose.model('User', {
     username: String,
     edad: Number,
 })

 const crear = async () => {
     const user = new User({username: 'Guardia', edad:35})
     const savedUser = await user.save()
     console.log(savedUser)
 }

 //crear()

 const buscarTodo = async () => {
     const users = await User.find()
         console.log(users)
 }

 //buscarTodo()

 const buscar = async () => {
     const user = await User.find({username: 'Facu'})
     console.log(user)
 }
 //buscar().

 const buscarUno = async () => {
     const user = await User.findOne({username:'Guardia'})
     console.log(user)
 }
 //buscarUno()

 const actualizar = async () => {
     const user = await User.findOne({username:'Facu'})
     user.edad = 35
     await user.save()
     console.log(user)
 }
 //actualizar()

 const eliminar = async () => {
     const user = await User.findOne({username:'Guardia'})
     console.log(user)
     if(user) {
        await user.remove()
     }
     
     
 }
 eliminar()