$.inserter = function (html) {
    document.body.innerHTML = html
}
$.formMainWindow = function(html){
    return `
    <div class="mainWindow">
        <div class="leftBar">
            <div class="leftBarTitle textCenter"> Chats </div>
            <div class="leftBarBody">
                <div class="chat">
                    <div class="avatar">

                    </div>
                    
                </div>
            </div>
            <div class="leftBarFooter">
                <div class="accountBtn btnGood"> acc</div>
                <div class="accountBtn btnGood"> acc</div>
            </div>
        </div>
        <div class="mainBar">

        </div>
    </div>
    `
}