function ligar(){
    document.body.style.color = 'red'
}

function a(){
    var res = document.getElementById('res')

    var img = document.createElement('img')
        img.setAttribute('id','foto')
        img.setAttribute('src','imagens/tetris.jpg')

        res.appendChild(img)
}