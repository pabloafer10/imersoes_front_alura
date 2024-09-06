// ARQUIVO PARA DADOS 

// CRIANDO VARIÁVEIS - LISTAS E OBJETOS 
let dados = [{
        titulo: "Atlético Goianiense",
        descricao: "O Atlético Goianiense é um clube de futebol brasileiro com sede na cidade de Goiânia, Goiás. Fundado em 4 de abril de 1933, o clube possui uma grande rivalidade com o Goiás Esporte Clube.",
        link: "https://pt.wikipedia.org/wiki/Atlético_Goianiense",
        tags: "Goiânia Goiás Abril"
    },
    {
        titulo: "Atlético Mineiro",
        descricao: "O Clube Atlético Mineiro, popularmente conhecido como Galo, é um clube poliesportivo brasileiro com sede na cidade de Belo Horizonte, Minas Gerais. Fundado em 14 de março de 1908, é um dos clubes mais populares do Brasil.",
        link: "https://pt.wikipedia.org/wiki/Clube_Atlético_Mineiro",
        tags: "Mineiro Galo Minas Março"
    },
    {
        titulo: "Athletico Paranaense",
        descricao: "O Clube Atlético Paranaense, conhecido como Athletico, é um clube poliesportivo brasileiro com sede na cidade de Curitiba, Paraná. Fundado em 26 de março de 1924, o clube é um dos maiores do estado do Paraná.",
        link: "https://pt.wikipedia.org/wiki/Athletico_Paranaense",
        tags: "Paranaense Curitiba Paraná Março"
    },
    {
        titulo: "Bahia",
        descricao: "O Esporte Clube Bahia, conhecido como Bahia, é um clube de futebol brasileiro com sede na cidade de Salvador, Bahia. Fundado em 14 de janeiro de 1931, é um dos clubes mais populares do Nordeste.",
        link: "https://pt.wikipedia.org/wiki/Esporte_Clube_Bahia",
        tags: "Bahia Salvador Nordeste Janeiro"
    },
    {
        titulo: "Botafogo",
        descricao: "O Botafogo de Futebol e Regatas, conhecido como Botafogo, é um clube poliesportivo brasileiro com sede na cidade do Rio de Janeiro, Rio de Janeiro. Fundado em 12 de agosto de 1894, é um dos clubes mais tradicionais do Brasil.",
        link: "https://pt.wikipedia.org/wiki/Botafogo_de_Futebol_e_Regatas",
        tags: "Rio Regatas Agosto"
    },
    {
        titulo: "Bragantino",
        descricao: "O Red Bull Bragantino, conhecido como Bragantino, é um clube de futebol brasileiro com sede na cidade de Bragança Paulista, São Paulo. Fundado em 18 de abril de 1928, o clube passou por uma reformulação em 2019 com a entrada da Red Bull como patrocinadora.",
        link: "https://pt.wikipedia.org/wiki/Red_Bull_Bragantino",
        tags: "Bragança Red Bull Abril"
    },
    {
        titulo: "Corinthians",
        descricao: "O Sport Club Corinthians Paulista, ou simplesmente Corinthians, é um clube poliesportivo brasileiro fundado em 1 de setembro de 1910 por operários do bairro do Bom Retiro, em São Paulo. O nome do clube foi inspirado no time inglês Corinthian Football Club, que estava em excursão pelo Brasil na época.A ideia era disputar um campeonato de várzea, pois o campeonato oficial só permitia a participação de times elitistas.",
        link: "https://pt.wikipedia.org/wiki/Sport_Club_Corinthians_Paulista",
        tags: "Club Operários Football Várea Elitista Setembro"
    },
    {
        titulo: "Criciúma",
        descricao: "O Criciúma Esporte Clube é um clube de futebol brasileiro com sede na cidade de Criciúma, Santa Catarina. Fundado em 13 de maio de 1948, o Tigre, como é conhecido, possui uma grande rivalidade com o Joinville Esporte Clube.",
        link: "https://pt.wikipedia.org/wiki/Criciúma_Esporte_Clube",
        tags: "Santa Catarina Tigre Joinville Maio"
    },
    {
        titulo: "Cruzeiro",
        descricao: "O Cruzeiro Esporte Clube é um clube poliesportivo brasileiro com sede na cidade de Belo Horizonte, Minas Gerais. Fundado em 2 de janeiro de 1921, a Raposa é um dos clubes mais populares do Brasil e possui uma das maiores torcidas do país.",
        link: "https://pt.wikipedia.org/wiki/Cruzeiro_Esporte_Clube",
        tags: "Belo Horionte Minas Raposa Janeiro"
    },
    {
        titulo: "Cuiabá",
        descricao: "O Cuiabá Esporte Clube é um clube de futebol brasileiro com sede na cidade de Cuiabá, Mato Grosso. Fundado em 1 de abril de 2009, o Dourado, como é conhecido, tem crescido rapidamente no cenário nacional e conquistou a Série A do Campeonato Brasileiro em 2020.",
        link: "https://pt.wikipedia.org/wiki/Cuiabá_Esporte_Clube",
        tags: "RMato Grosso Dourado Abril"
    },
    {
        titulo: "Flamengo",
        descricao: "O Clube de Regatas do Flamengo, popularmente conhecido como Flamengo, é um clube poliesportivo brasileiro com sede na cidade do Rio de Janeiro. Fundado em 17 de novembro de 1895, é um dos clubes mais populares do Brasil.",
        link: "https://pt.wikipedia.org/wiki/Clube_de_Regatas_do_Flamengo",
        tags: "Rio Janeiro Regatas Novembro"
    },
    {
        titulo: "Fluminense",
        descricao: "O Fluminense Football Club, conhecido popularmente como Fluminense, é um clube poliesportivo brasileiro com sede na cidade do Rio de Janeiro. Fundado em 21 de julho de 1902, é um dos quatro grandes clubes do Rio de Janeiro.",
        link: "https://pt.wikipedia.org/wiki/Fluminense_Football_Club",
        tags: "Rio Janeiro Club"
    },
    {
        titulo: "Fortaleza",
        descricao: "O Fortaleza Esporte Clube é um clube poliesportivo brasileiro com sede na cidade de Fortaleza, Ceará. Fundado em 18 de outubro de 1918, é um dos principais clubes do futebol cearense.",
        link: "https://pt.wikipedia.org/wiki/Fortaleza_Esporte_Clube",
        tags: "Ceará Cearense Outubro"
    },
    {
        titulo: "Grêmio",
        descricao: "O Grêmio Foot-Ball Porto Alegrense, conhecido simplesmente como Grêmio, é um clube poliesportivo brasileiro com sede na cidade de Porto Alegre, Rio Grande do Sul. Fundado em 15 de fevereiro de 1903, é um dos clubes mais tradicionais do Brasil.",
        link: "https://pt.wikipedia.org/wiki/Grêmio_Foot-Ball_Porto_Alegrense",
        tags: "Porto Alegre Sul Fevereiro"
    },
    {
        titulo: "Internacional",
        descricao: "O Sport Club Internacional, conhecido como Internacional ou Inter, é um clube poliesportivo brasileiro com sede na cidade de Porto Alegre, Rio Grande do Sul. Fundado em 4 de abril de 1925, é um dos maiores rivais do Grêmio.",
        link: "https://pt.wikipedia.org/wiki/Sport_Club_Internacional",
        tags: "Porto Alegre Sul Inter Abril"
    },
    {
        titulo: "Juventude",
        descricao: "O Esporte Clube Juventude é um clube de futebol brasileiro com sede na cidade de Caxias do Sul, Rio Grande do Sul. Fundado em 14 de setembro de 1913, o clube possui uma grande rivalidade com o Caxias.",
        link: "https://pt.wikipedia.org/wiki/Esporte_Clube_Juventude",
        tags: "Caxias Sul Setembro"
    },
    {
        titulo: "Palmeiras",
        descricao: "O Sociedade Esportiva Palmeiras, popularmente conhecido como Palmeiras, é um clube poliesportivo brasileiro com sede na cidade de São Paulo. Fundado em 14 de agosto de 1914, é um dos clubes mais populares do Brasil.",
        link: "https://pt.wikipedia.org/wiki/Sociedade_Esportiva_Palmeiras",
        tags: "Esportiva Agosto"
    },
    {
        titulo: "São Paulo",
        descricao: "O São Paulo Futebol Clube é um clube de futebol brasileiro com sede na cidade de São Paulo. Fundado em 25 de janeiro de 1930, o clube é um dos mais tradicionais do Brasil.",
        link: "https://pt.wikipedia.org/wiki/São_Paulo_Futebol_Clube",
        tags: "Futebol janeiro"
    },
    {
        titulo: "Vasco da Gama",
        descricao: "O Club de Regatas Vasco da Gama, popularmente conhecido como Vasco, é um clube poliesportivo brasileiro com sede na cidade do Rio de Janeiro. Fundado em 21 de agosto de 1898, é um dos clubes mais antigos do Brasil.",
        link: "https://pt.wikipedia.org/wiki/Club_de_Regatas_Vasco_da_Gama",
        tags: "Regatas Rio Janeiro Agosto"
    },
    {
        titulo: "Vitória",
        descricao: "O Esporte Clube Vitória é um clube de futebol brasileiro com sede na cidade de Salvador, Bahia. Fundado em 13 de maio de 1899, o clube possui uma grande rivalidade com o Bahia.",
        link: "https://pt.wikipedia.org/wiki/Esporte_Clube_Vitória",
        tags: "Salvador Bahia Maio"
    }
];