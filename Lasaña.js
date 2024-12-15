const COOKING_TIME = 40; 

function calcularTiempoLasaña(layers, timeInOven) {
    if (layers <= 0 || timeInOven < 0) {
        return "Por favor, ingresa valores válidos.";
    }

    const remainingTime = COOKING_TIME - timeInOven;
    const preparationTime = layers * 2;
    const totalWorkTime = preparationTime + timeInOven;

    return {
        tiempoRestante: Math.max(remainingTime, 0),
        tiempoPreparacion: preparationTime,
        tiempoTotalTrabajo: totalWorkTime
    };
}

document.getElementById('calculateButton').onclick = function() {
    const layers = parseInt(document.getElementById('layers').value);
    const timeInOven = parseInt(document.getElementById('timeInOven').value);

    const resultados = calcularTiempoLasaña(layers, timeInOven);

    if (typeof resultados === 'string') {
        document.getElementById('results').innerText = resultados; // Mensaje de error
    } else {
        document.getElementById('results').innerHTML = `
            <h2>Resultados:</h2>
            <p>Tiempo restante en el horno: ${resultados.tiempoRestante} minutos</p>
            <p>Tiempo total de preparación: ${resultados.tiempoPreparacion} minutos</p>
            <p>Tiempo total de trabajo: ${resultados.tiempoTotalTrabajo} minutos</p>
        `;
    }
};