const panels = document.querySelectorAll('.panel') /*pode ser getelementbyid, mas queryselector pode pegar qualquer outra coisa*/

panels.forEach(function(panel){
    panel.addEventListener('click', function(){
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}