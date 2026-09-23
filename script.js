function mostrarCuriosidade() {

    const curiosidades = [
        "A Bacia Amazônica é a maior bacia hidrográfica do mundo.",
        "Os rios são fundamentais para o abastecimento das cidades e para diversas atividades econômicas.",
        "Uma bacia hidrográfica é formada pelo rio principal, seus afluentes e a área que contribui para o escoamento da água."
    ];

    const numero = Math.floor(Math.random() * curiosidades.length);

    document.getElementById("curiosidade").textContent =
        curiosidades[numero];
}


function responder(resposta) {

    const resultado = document.getElementById("resultado");

    if (resposta === 1964) {
        resultado.textContent = "✅ Correto! A Ditadura Militar começou em 1964.";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "❌ Não foi dessa vez! Tente novamente.";
        resultado.style.color = "red";
    }
}
