// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyBnf7cUmuWWhDgMozqCpBWeuqczANGnVtk",
    authDomain: "sandbox-f1bbc.firebaseapp.com",
    databaseURL: "https://sandbox-f1bbc-default-rtdb.firebaseio.com",
    projectId: "sandbox-f1bbc",
    storageBucket: "sandbox-f1bbc.appspot.com",
    messagingSenderId: "695537264633",
    appId: "1:695537264633:web:8b9757e37f47d125bdbf28"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let dataBase = firebase.database()


// .on(
//     'value',
//     (gotData) => {
//       let recData = gotData.val()
//       if(recData.test === "true")
//       {

//       }
//       console.log(recData.password)
//     },
//     (errData) => console.error('Error:' + errData)
//   )
let accountData
function checkLoginData(login, password){
    const ref = dataBase.ref(`users/${login}`)
    let recData
    const check = new Promise((resolve,reject)=>{
        ref.on(
            'value',
            (data) => {
                recData = data.val() 
                if(recData == null){
                    alert('Pls register')
                }
                else if(recData.password === password){
                    accountData = recData
                    resolve()
                    ref.off()
                }
                else{
                    alert('nO')
                    reject()
                }   
            }
        )
    })
    return check 
}