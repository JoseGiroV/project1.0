import app from "./firebase.config.js";
import {  getFirestore, collection, getDocs, addDoc, updateDoc, doc, deleteDoc, } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js';

const emailR = document.getElementById('emailR');
const name = document.getElementById('nameR');
const phone = document.getElementById('phone');
const passwordR = document.getElementById('passwordR');
const btnCreateUser = document.getElementById('btnCreateUser');


const db = getFirestore(app);

async function getUsers(database){
    const usersColletion = collection(database, 'users');
    const result = await getDocs(usersColletion);
    const userList = result.docs.map(doc => doc.data());
    return userList;
    
}

try {
    getUsers(db).then(Response => console.log(Response))
}catch (err){
    console.log(err);
}


////////* Creacion de usuarios *///////

async function createNewUser(database, userDb){
const newUser = await addDoc (collection(database, 'users'), userDb);
return newUser;
}

/////* actualizacion de usuarios *///////

const userRef = doc(db, 'users', 'ad9jLTOO7aFH7FT01Lf1');
async function updateUser(){
    const updateUserRole = await updateDoc(userRef, {
        phone: 'estoy actualizado'
    });
    return updateUserRole;
}

/////////* borrar datos   *////////

async function deleteUser(database, table, userId) {
   const deleteUser = await deleteDoc(doc(database, table, userId));
   return deleteUser;

}




btnCreateUser.addEventListener('click', ()=> {
    try{
        // const userObj = {
        //     email: emailR.value,
        //     name: name.value,
        //     password: passwordR.value,
        //     phone: phone.value,
        // }     
        
        ///* CREAR NUEVO USUARIO *///
        // createNewUser(db,userObj).then(Response => console.log('este es el id de referencia ' + Response.id)); 
        
      /////* ACTUALIZAR USSUARIOS*/////
        // updateUser().then(()=> console.log('se actualizao el campo'));

        //* ELIMINAR USUARIO *////
        // deleteUser(db, 'users', 'v76ckvHTbkiQXLwnM7HT').then(()=> console.log('usuario eliminado'));
    }catch(error){
        console.error(error)
    }
})
