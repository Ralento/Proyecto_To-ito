function calcularCalorias() {
    const edad = document.getElementById('edad').value;
    const genero = document.getElementById('genero').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const actividad = document.getElementById('actividad').value;

    let bmr;

    if (genero === 'masculino') {
        bmr = 10 * peso + 6.25 * altura - 5 * edad + 5;
    } else {
        bmr = 10 * peso + 6.25 * altura - 5 * edad - 161;
    }

    let factorActividad;

    switch (actividad) {
        case 'sedentario':
            factorActividad = 1.2;
            break;
        case 'ligero':
            factorActividad = 1.375;
            break;
        case 'moderado':
            factorActividad = 1.55;
            break;
        case 'activo':
            factorActividad = 1.725;
            break;
        case 'muy-activo':
            factorActividad = 1.9;
            break;
    }

    const caloriasDiarias = bmr * factorActividad;

    // Añadir un campo oculto para las calorías diarias
    let caloriasInput = document.getElementById('calorias_value');
    if (!caloriasInput) {
        caloriasInput = document.createElement('input');
        caloriasInput.type = 'hidden';
        caloriasInput.name = 'calorias';
        caloriasInput.id = 'calorias_value';
        document.getElementById('calccc').appendChild(caloriasInput);
    }
    caloriasInput.value = Math.round(caloriasDiarias);

    // Enviar el formulario
    document.getElementById('calccc').submit();
}
