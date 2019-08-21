function esPalindromo(palabra){
    if (typeof palabra === "string" && palabra.length !== 0 && isNaN(palabra)){
        var separado = palabra.split("");
        var separadoAlReves = separado.reverse();
        var alReves = separadoAlReves.join("");
        if (alReves === palabra){
            return true;
        } else return false;
    } else return false;
};