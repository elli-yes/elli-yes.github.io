$.inserter(`    
<div class="mainHeader">
<h1 class="mainTitle">Sandbox</h1>
</div>
<div class="mainBody">
    <div><img id="castleMain" src="ico/sand-castle-svgrepo-com.svg" alt="castle"></div>
    <div class="btnGood btnMain" data-btn="login">Login</div>
    <div class="btnSo btnMain" data-btn="createAccount">Create account</div>
</div>`)



function modalLogin(){
    const test = $.modal({
        width: '400px',
        title: 'Login',
        closable: 0,
        footerButtons:[
            {
                text: '    Ok    ',
                type: 'btnGood',
                handler(){
                    checkLoginData(document.getElementById('log').value,
                    document.getElementById('pass').value).then(()=>{
                        console.log('prikol')
                        test.close()
                        $.inserter($.formMainWindow(accountData))
                    }
                    )
                } 
            },
            {
                text: ' Cancel ',
                type: 'btnSo',
                handler(){
                    test.close()
                } 
            }
        ]
    })
    test.setContent(`
    <h7 class="textForm">Login</h7>
    <input id = "log" name="Login" class="inputForm"/>
    <h7 class="textForm">Password</h7>
    <input id =  "pass" name="Password" class="inputForm"/>
    `)
    setTimeout(()=> test.open( ),100)
}

function createAccount(){
    const test = $.modal({
        width: '400px',
        title: 'Registration',
        closable: 0,
        footerButtons:[
            {
                text: 'Registrate me',
                type: 'btnGood',
                handler(){
                    checkCreateAccountData(
                    document.getElementById('logCreate').value,
                    document.getElementById('passCreate').value,
                    document.getElementById('passCreateRep').value).then(()=>{
                        console.log('prikol')
                        test.close()
                        $.inserter($.formMainWindow())
                    }
                    )
                } 
            },
            {
                text: ' Cancel ',
                type: 'btnSo',
                handler(){
                    test.close()
                } 
            }
        ]
    })
    test.setContent(`
    <h7 class="textForm">Take login</h7>
    <input id = "logCreate" name="Login" class="inputForm"/>
    <h7 class="textForm">Take password</h7>
    <input id =  "passCreate" name="Password" class="inputForm"/>
    <h7 class="textForm">Repeat password</h7>
    <input id =  "passCreateRep" name="Password" class="inputForm"/>
    `)
    setTimeout(()=> test.open( ),100)
}
document.addEventListener('click', e=>{
    e.preventDefault()
    const btn = e.target.dataset.btn

    if(btn === 'login'){
        modalLogin()
    }else if(btn === 'createAccount'){
        createAccount()
    }
})