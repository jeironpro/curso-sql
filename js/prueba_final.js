function verificarRespuestas() {
    let puntuacion = 0;
    const formulario = document.getElementById('formulario-prueba');
    const divResultado = document.getElementById('resultado');
    const totalPreguntas = 25;
    
    const respuestas = {
        q1: 'b', q2: 'c', q3: 'c',
        q4: 'b', q5: 'c', q6: 'b',
        q7: 'b', q8: 'c', q9: 'b', q10: 'c',
        q11: 'b', q12: 'b', q13: 'c',
        q14: 'b', q15: 'b', q16: 'a', q17: 'b',
        q18: 'b', q19: 'c', q20: 'a',
        q21: 'b', q22: 'b', q23: 'a', q24: 'b', q25: 'b'
    };

    for (let i = 1; i <= totalPreguntas; i++) {
        if (formulario['q' + i].value === respuestas['q' + i]) {
            puntuacion++;
        }
    }

    const porcentaje = (puntuacion / totalPreguntas) * 100;
    divResultado.textContent = `Has acertado ${puntuacion} de ${totalPreguntas} preguntas (${porcentaje.toFixed(0)}%).`;
    divResultado.style.backgroundColor = '#f3f4f6';
    
    if (puntuacion === totalPreguntas) {
        divResultado.style.color = 'green';
        divResultado.textContent += ' ¡PERFECTO! 🏆 Eres un verdadero Maestro SQL.';
    } else if (puntuacion >= 22) {
        divResultado.style.color = '#2563eb';
        divResultado.textContent += ' ¡Excelente! 🌟 Dominas SQL a nivel experto.';
    } else if (puntuacion >= 18) {
        divResultado.style.color = '#059669';
        divResultado.textContent += ' ¡Muy bien! 👍 Tienes un nivel sólido.';
    } else if (puntuacion >= 13) {
        divResultado.style.color = 'orange';
        divResultado.textContent += ' Buen trabajo, pero repasa algunos temas. 📚';
    } else {
        divResultado.style.color = 'red';
        divResultado.textContent += ' Sigue estudiando, ¡tú puedes! 💪';
    }
}

const botonVerificar = document.getElementById('boton-verificar');
botonVerificar.addEventListener('click', verificarRespuestas);