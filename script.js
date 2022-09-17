function ligar(){
    document.body.style.color = 'red'
}
function pokemon(){
    var res = document.getElementById('res')
    res.innerHTML = ''//esse código visivelmente vazio conserta um bug por incrível que pareça.
    var img = document.createElement('img')
        img.setAttribute('id','foto')
        img.setAttribute('src','imagens/pokemon yellow2.jpg')
        res.appendChild(img)  
}
function mario(){
    var res = document.getElementById('res')
    res.innerHTML = ''//esse código visivelmente vazio conserta um bug por incrível que pareça.
    var img = document.createElement('img')
        img.setAttribute('id','foto')
        img.setAttribute('src','imagens/super mario land2.jpg')
        res.appendChild(img)  
}
function tetris(){
    var res = document.getElementById('res')
    res.innerHTML = ''//esse código visivelmente vazio conserta um bug por incrível que pareça.
    var img = document.createElement('img')
        img.setAttribute('id','foto')
        img.setAttribute('src','imagens/tetris2.jpg')
        res.appendChild(img)  
}