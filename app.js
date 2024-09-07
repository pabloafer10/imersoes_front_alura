function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    campoPesquisa = campoPesquisa.toLowerCase();

    //Se campoPesquisa for uma pesquisa vazia
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum resultado foi localizado, preencha o campo e tente novamente!</p>"
        return
    }

    //Armazenar as variaveis 
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    //Cria um loopin gerador de dados ignorando maisculas e minisculas
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        //Condicional para campoPesquisa preenchidos
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //Cria um novo elemento HTML para cada resultado
            resultados += `
        <div class="item-resultado ">
            <h2>
                <a href="# " target="_blank">${dado.titulo}</a>
            </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>         
        </div>
    `;
        }

    }

    //Se nao encontrar resultado para pesquisa solicitada
    if (!resultados) {

        resultados = "Nenhum resultado foi localizado!"

    }

    //Atribui resultado ao conteudo da seção
    section.innerHTML = resultados

}