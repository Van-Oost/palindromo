function esPalindromo(palabra){
    if (typeof palabra === "string" && palabra.length !== 0 && isNaN(palabra)){
        var palabraMinusculas = palabra.toLowerCase();
        var separado = palabraMinusculas.split("");
        var separadoAlReves = separado.reverse();
        var alReves = separadoAlReves.join("");
        if (alReves === palabraMinusculas){
            return true;
        } else return false;
    } else return false;
};