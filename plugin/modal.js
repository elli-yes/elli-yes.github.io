Element.prototype.appendAfter = function(element){
    element.parentNode.insertBefore(this, element.nextSibling)
}
function noop(){}
function _createModalFooter(buttons = []){
    if(buttons.length === 0){
        return document.createElement('div')
    }
    const wrap = document.createElement('div')
    wrap.classList.add('modalFooter')
    buttons.forEach(btn=>{
        const $btn = document.createElement('button')
        $btn.textContent = btn.text
        $btn.classList.add(btn.type)
        $btn.onclick = btn.handler || noop

        wrap.appendChild($btn)
    })
    return wrap
}
function _createModal(options) {
        const DEFAULT_WIDTH = '600px'
        const modal = document.createElement('div')
        modal.classList.add('vmodal')
        modal.insertAdjacentHTML('afterbegin',`
        <div class="modalOverlay" data-close="true">
            <div class="modalBackground" style="width: ${options.width || DEFAULT_WIDTH}">
                <div class="modalHeader">
                    <span>${options.title||'Window'}</span>
                    ${options.closable ? '<span class="ix" data-close = "true">&times;</span>' : ''}
                </div>
                <div class="modalBody" data-content >
                ${options.content || ''}
                </div>
            </div> 
        </div>`
        )
        const footer = _createModalFooter(options.footerButtons)
        footer.appendAfter(modal.querySelector('[data-content]'))
        document.body.appendChild(modal)
        return modal
}
$.modal = function(options){
    const $modal = _createModal(options)
    const SPEED = 200
    let destroyed = false

    const modal = {
        open(){
            if(destroyed){
                console.log('Destroyed element')
            }
            $modal.classList.add('open')
        },
        close(){
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(()=>{
                $modal.classList.remove('hide')
                if(typeof options.onClose() === 'function'){
                    options.onClose()
                }
            },SPEED)
        }
    }
    const listener = e=>{
        if(e.target.dataset.close){
            modal.close()
        }
    }
    $modal.addEventListener('click', listener)

    return Object.assign(modal, {
        destroy(){
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
            destroyed = true
        },
        setContent(html){
            $modal.querySelector('[data-content]').innerHTML = html
        }
    })
}