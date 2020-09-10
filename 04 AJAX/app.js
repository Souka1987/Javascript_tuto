// XHR

document.getElementById('button').addEventListener('click', message)

function message(){
    // Objet XHR (XMLHttpRequest), il permet d'interagir avec des serveurs.
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', 'data.text', true)

    xhr.onload = function(){
        if (this.status === 200){
            console.log(this.responseText);

        }
    }
    xhr.send()
    // status HTTP
    // 200: "ok"
    // 404: "la page n'existe pas"
    // 403: "interdit"
}