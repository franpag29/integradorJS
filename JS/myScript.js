const precioTicket = 200;
const descuentoEstudainte = 80;
const descuentoTrainee = 50;
const descuentoJunior = 15;

function goToForm() {

    window.location.href = "purchaseForm.html";

}


function resumir() {
    var cantidad = document.getElementById("quantity").value;
    var categoria = document.getElementById("category").value;
    var total = total = precioTicket * cantidad;;

    
    switch (categoria) {
        case "Estudiante":
            total = total - total * descuentoEstudainte / 100;
            break;
        case "Trainee":
            total = total - total * descuentoTrainee / 100;
            break;
        case "Junior":
            total = total - total * descuentoJunior / 100;
            break;
    }

    var text=document.getElementById("compraTotal").value="Total a Pagar: $"+total;



}