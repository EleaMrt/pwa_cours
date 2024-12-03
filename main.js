const $articles = document.querySelector('#articles'); // Identifier un element pour aller chercher le deuxieme li
const ajax = ()=> {

    fetch("data.json")
    .then(response => response.json())
    .then(response => {
        console.log(response)
        $articles.innerHTML = ""
        response.forEach(data => {
        const template = `
            <article class="article">
            <div class="" style="height: 200px;">${data.image}</div>
            <img src="${data.image}" alt ="Photo de ${data.title}
            <div class="article-title ">${data.title}</div>
            <div class="article-subtitle ">${data.title2}</div>
            <div class="article-content ">${data.content}</div>
            <div class="article-meta ">${data.date} - ${data.author}</div>
            </article>`
    
        $articles.innerHTML += template
        })
    })

}
setTimeout(e=>{
    ajax()
},5000) // Simuler une requete lente de 5sec


