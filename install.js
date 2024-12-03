const instalBtn = document.querySelector("#installButton")

window.addEventListener('beforeinstallprompt',event =>{
    event.preventDefault()
    deferrePrompt=event
    instalBtn.style.display="block"
})

instalBtn.addEventListener('click',async( event )=>{
    event.preventDefault()
    if(deferrePrompt){ // Ajout pour avoir le choix entre accepter et annuler et on le recepte
        deferrePrompt.prompt()
        const choiceUser = await deferrePrompt.userChoice
        if(choiceUser === 'accepted'){
            instalBtn.style.display="none"
        }
        deferrePrompt = null
    }
    

})

window.addEventListener('appinsyalled', e=>{
    instalBtn.style.display = "none"
})
