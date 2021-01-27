function checkCreateAccountData(login, password, pass2){
    if(password === pass2){
        const ref = dataBase.ref(`users/${login}`)
        const check = new Promise((resolve,reject)=>{
            ref.on(
                'value',
                (data) => {
                    recData = data.val()
                    console.log(recData)
                    if(recData != null){
                        alert('Login taken')
                        ref.off()
                    } 
                    else{
                        ref.off()
                        ref.set({password:`${password}`})
                        resolve()
                    }
                      
                }
            )
        })
        return check
    }else{
        alert('Password don\'t matches')
    }
}