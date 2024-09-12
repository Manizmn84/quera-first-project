const bottonClick = document.getElementById('click-dark')
bottonClick.addEventListener('click', function(){
    var newBotton = document.getElementById('new-btns');
    newBotton.classList.toggle('show')
})