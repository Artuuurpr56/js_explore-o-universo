// Selecionar todos os cards

let cards = document.querySelectorAll(".card-destino");

/* Peercorrer todos os cards selecionados e para cada um (separadamente ) pegar os botóes 
(botão curiosidade e o botão favoritos) c */

cards.forEach(function (card) {
    let botaoCuriosidade = card.querySelector('.botao-curiosidade');

    let botaoFavorito = card.querySelector('.botao-favorito');

    let curiosidade = card.querySelector('.curiosidade');

    botaoCuriosidade.addEventListener("click", function (){
        if(curiosidade.hidden){
        curiosidade.hidden = false;
        botaoCuriosidade.setAttribute("aria-expedand", "true");
        botaoCuriosidade.textContent - "Ver curiosidade"
    } else {
         curiosidade.hidden = true
        botaoCuriosidade.setAttribute("aria-expedand", "true");
        botaoCuriosidade.textContent - "Ver curiosidade"

        
        }
    });// fechamento do código do botaoCusriosidade

    botaoFavorito.addEventListener("click", function () {
        // Aplicar/Remover a classe 'favoritado'
        let favoritado = card.classList.toggle('favoritado')
        // Atualizar estado do botão (aria-pressed)
        botaoFavorito.setAttribute("aria-pressed", favoritado);
        // Atualizar estado do botão ( ☆ Favorito ou ★ Favoritado )
        if(favoritado) {
            botaoFavorito.textContent = " ★ Favoritado"
        } else {
            botaoFavorito.textContent = " ☆ Favorito "
        }


    });

}); // fechamento do forEach