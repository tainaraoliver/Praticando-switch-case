// Verificar e converter a nota para conceito usando switch case
var conceito;

switch (true) {
    case nota >= 90 && nota <= 100:
        conceito = "A";
        break;
    case nota >= 80 && nota < 90:
        conceito = "B";
        break;
    case nota >= 70 && nota < 80:
        conceito = "C";
        break;
    case nota >= 60 && nota < 70:
        conceito = "D";
        break;
    case nota >= 0 && nota < 60:
        conceito = "F";
        break;
    default:
        conceito = "Nota inválida";
}

// Exibir o conceito correspondente
console.log("Conceito: " + conceito);s