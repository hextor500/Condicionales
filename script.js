let ejercicio = prompt("Que ejercicio quieres ver?")

if (ejercicio == 1){
    let pregunta1 = prompt("¿Eres bellisimo/a?")
    if (pregunta1 == "si"){
        alert("Ciertamente");
    } else {
        alert("No te creo");
    }
} else if (ejercicio == 2){
    let pregunta2 = prompt("Dame un numero");
    let numero_1 = parseInt(pregunta2);
    if (numero_1 % 2 === 0)
    {
        alert(`El numero ${numero_1} es divisible entre 2`);
    } else {
        alert(`El numero ${numero_1} no es divisible entre 2`);
    }
} else if (ejercicio == 3){
    let pregunta3 = prompt("Dame un numero");
    let numero_1 = parseInt(pregunta3);
    if (numero_1 % 2 === 0)
    {
        alert(`El numero ${numero_1} es par`);
    } else {
        alert(`El numero ${numero_1} es impar`);
    }
} else if (ejercicio == 4){
    let pregunta4 = prompt("Numero de cliente?");
    if (pregunta4 == 1000)
    {
        alert("Ganaste un premio");
    } else {
        alert(`Cliente numero ${pregunta4} no has ganado lo sentimos, sigue participando`);
    }
} else if (ejercicio == 5){
    let pregunta_5_1 = prompt("Dame un numero");
    let numero_1 = parseInt(pregunta_5_1);
    let pregunta_5_2 = prompt("Dame otro numero");
    let numero_2 = parseInt(pregunta_5_2);

    if (numero_1 > numero_2){
        alert(`El numero ${numero_2} es menor que ${numero_1}`);
    } else {
        alert(`El numero ${numero_1} es menor que ${numero_2}`);
    }
}else if(ejercicio == 6){
    let numero_mayor = null;
    let pregunta6_1 = prompt("Dame un numero");
    let numero_1 = parseInt(pregunta6_1);
    let pregunta6_2 = prompt("Dame un segundo numero");
    let numero_2 = parseInt(pregunta6_2);
    let pregunta6_3 = prompt("Dame un tercer numero");
    let numero_3 = parseInt(pregunta6_3);

    if (numero_1 >= numero_2){
        numero_mayor = numero_1;
    } else {
        numero_mayor = numero_2;
    }

    if (numero_mayor >= numero_3)
    {
        alert(`El numero mayor entre los tres numeros es ${numero_mayor}`);
    } else {
        numero_mayor = numero_3;
        alert(`El numero mayor entre los tres numeros es ${numero_mayor}`);
    }
} else if (ejercicio == 7){
    let pregunta7 = prompt("Dia de la semana?");
    if (pregunta7 == "Lunes"){
        alert("Primer dia de la semana");
    } else if (pregunta7 == "Viernes" || pregunta7 == "viernes"){
        alert("Ultimo dia de trabajo");
    } else if (pregunta7 == "Sabado" || pregunta7 == "Domingo" || pregunta7 == "sabado" || pregunta7 == "domingo"){
        alert("Dia de descanso");
    } else if (pregunta7 == "Martes" || pregunta7 == "Miercoles" || pregunta7 == "Jueves" || pregunta7 == "martes" || pregunta7 == "miercoles" || pregunta7 == "jueves")
    {
        alert("Dia entre semana");
    } else {
        alert("No es un dia de la semana");
    }
} else if (ejercicio == 8){
    let pregunta8 = prompt("Por favor, dame una calificacion con numeros entre el 1 al 10");
    let numero_1 = parseInt(pregunta8);

    if (pregunta8 < 6)
    {
        alert("Reprobado");
    } else if (pregunta8 >= 6 && pregunta8 <= 8){
        alert("Regular");
    } else if (pregunta8 == 9){
        alert("Bien");
    } else if (pregunta8 == 10){
        alert("Excelente");
    } else {
        alert("La calificacion dada no esta entre 1 al 10");
    }
} else if (ejercicio == 9){
    let pregunta9 = prompt("Que topping quiere para su helado?")
    if (pregunta9 == "oreo" || pregunta9 == "Oreo")
    {
        alert("El costo del topping de Oreo es 10 MXN + 50 MXN");
    } else if (pregunta9 == "KitKat" || pregunta9 == "kitkat")
    {
        alert("El costo del topping de KitKat es 15 MXN + 50 MXN");
    } else if (pregunta9 == "brownie" || pregunta9 == "Brownie"){
        alert("El costo del topping de brownie es de 20 MXN + 50 MXN");
    } else {
        alert("No tenemos este topping, lo sentimos. El costo del helado sin topping es de 50 MXN");
    }
} else if (ejercicio == 10){
    let costocurso = null;
    let porcentaje = null;
    let pregunta10_1 = prompt("En que programa educativo esta interesado (Course, Carrera o Master)?");
    let pregunta10_2 = prompt("Cuenta con alguna beca (Beca Facebook, Beca Google, Beca Jesua)?");
    
    if (pregunta10_1 == "Course" || pregunta10_1 == "course"){
        costocurso = 4990;
        alert(`El costo mensual del curso es ${costocurso} MXN`)
    } else if (pregunta10_1 == "Carrera" || pregunta10_1 == "carrera"){
        costocurso = 3999;
        alert(`El costo mensual del curso es ${costocurso} MXN`)
    } else if (pregunta10_1 == "Master" || pregunta10_1 == "master"){
        costocurso = 2999;
        alert(`El costo mensual del curso es ${costocurso} MXN`)
    }

    if (pregunta10_2 == "Facebook" || pregunta10_2 == "facebook"){
        porcentaje = costocurso * (20/100);
        costocurso = costocurso - porcentaje;
        costocurso.toFixed(2);
        alert(`Tienes un descuento del 20% por lo tanto el costo mensual baja a ${costocurso} MXN`)
    } else if (pregunta10_2 == "Google" || pregunta10_2 == "google"){
        porcentaje = costocurso * (15/100);
        costocurso = costocurso - porcentaje;
        costocurso.toFixed(2);
        alert(`Tienes un descuento del 15% por lo tanto el costo mensual baja a ${costocurso} MXN`)
    } else if (pregunta10_2 == "Jesua" || pregunta10_2 == "jesua"){
        porcentaje = costocurso * (50/100);
        costocurso = costocurso - porcentaje;
        costocurso.toFixed(2);
        alert(`Tienes un descuento del 50% por lo tanto el costo mensual baja a ${costocurso} MXN`)
    }

    if (pregunta10_1 == "Course" || pregunta10_1 == "course"){
        costocurso = costocurso * 2;
        costocurso.toFixed(2);
        alert(`Recuerda este curso tiene una duracion de dos meses. El costo total de tu curso con descuentos es de ${costocurso} MXN`)
    } else if (pregunta10_1 == "Carrera" || pregunta10_1 == "carrera"){
        costocurso = costocurso * 6;
        costocurso.toFixed(2);
        alert(`Recuerda este curso tiene una duracion de seis meses. El costo total de tu curso con descuentos es de ${costocurso} MXN`)
    } else if (pregunta10_1 == "Master" || pregunta10_1 == "master"){
        costocurso = costocurso * 12;
        costocurso.toFixed(2);
        alert(`Recuerda este curso tiene una duracion de doce meses. El costo total de tu curso con descuentos es de ${costocurso} MXN`)
    }
} else if (ejercicio == 11){
    let pregunta11_1 = prompt("Que tipo de vehiculo usas (coche, moto, autobus)?");
    let pregunta11_2 = prompt("Que distancia recorriste?");
    let pregunta11_3 = prompt("Cuantos litros gastaste?")
    let costototal = null;

    if (pregunta11_1 == "coche" || pregunta11_1 == "Coche"){
        costototal = 0.20 * pregunta11_2;
    } else if (pregunta11_1 == "moto" || pregunta11_1 == "Moto"){
        costototal = 0.10 * pregunta11_2;
    } else if (pregunta11_1 == "autobus" || pregunta11_1 == "Autobus"){
        costototal = 0.5 * pregunta11_2;
    }

    if (pregunta11_3 >= 0 && pregunta11_3 <= 100){
        costototal = costototal + 5;
    } else {
        costototal = costototal + 10;
    }
    alert(`El total a pagar es de ${costototal}`)
}





