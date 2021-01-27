$.inserter = function (html) {
    document.body.innerHTML = html
}
$.formMainWindow = function(data){
    console.log(data)
    DEF_IMG = "ico/desert.svg"
    return `
    <div class="mainWindow">
        <div class="leftBar">
            <div class="leftBarTitle textCenter"> 
                <div> <h3 class="titleHeader">Chats</h3> </div>
                
                <div class="newChat textCenter btnGood">
                    <img src="ico/pen.svg" id="ncSvg"alt="">
                </div>
            </div>
            <div class="leftBarBody">
                <div class="chat btnGood">
                    <div class="avatarChat">
                        <img class="avatarImage" src="${data.avatar || DEF_IMG}" alt="${data.name[0]}">
                        
                    </div>
                    <h4 class="chatName"> Boris Eltsin</h4>
                    
                </div>
            </div>
            <div class="leftBarFooter">
                <div class="accountBtn btnGood"> 
                    <img class ="accountBtnImg" src="${data.avatar || DEF_IMG}" alt="${data.name[0]}">
                </div>
                <div class="accountSetting btnGood">
                    <img class="accountSettingIco" src="ico/gear.svg" alt="">
                </div>
            </div>
        </div>
        <div class="mainBar">
            <div class="mainBarHeader">
                <div class="avatarMain">
                    <img class="avatarImage"src="${data.avatar || DEF_IMG}" alt="${data.name[0]}">
                </div>
                <div class="mainHeaderTitle textCenter">
                    <h3>Boris Eltsin</h3>
                </div>
            </div>
            <div class="mainBarBody textCenter">
                No messages yet
            </div>
            <div class="mainBarFooter textCenter">
                <div class="addDocument footerBar btnGood">
                    <img class="addBtnIco textCenter"src="ico/attached-file.svg" alt="">
                </div>
                    <input class="mainMessageBox footerBar" type="text">
                <div class="sendBtn footerBar btnGood">
                    <img class="sendBtnIco textCenter"src="ico/triangle.svg" alt="">
                </div>
            </div>
        </div>
    </div>

    `
}