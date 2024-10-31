const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/esportes/esportes-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span> ${dados.total_pessoas_mundo} </span> de pessoas. Desse total <span> ${dados.total_praticam_esporte} </span> regularmente. O tempo médio praticado semanalmente é de aproximadamente <span> ${dados.total_tempo_médio} </span> em contra partida temos <span> ${dados.total_tempo_medio} </span> de pessoas que assintem esporte jovens`
    const container = document.getElementById('graficos-container')
    container.app
container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()
