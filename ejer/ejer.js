$(document).ready(function () {
    $("#boton").click(function () {
        let dolares = $("#dolares").val();
        $.ajax({
            type: "GET",
            url: "https://api.exchangerate-api.com/v4/latest/USD",
            data: "data",
            dataType: "JSON",
            success: function (response) {
                console.log(response);
                let euros =(response.rates.EUR)
                let salida=""
                salida= "Son "+dolares*euros+" euros"
                console.log(salida);
                $("#resultado").html(salida);
            }
        });
    }) 
});

$(document).ready(function () {
    $("#boton2").click(function () {
        let euros = $("#euros").val();
        $.ajax({
            type: "GET",
            url: "https://api.exchangerate-api.com/v4/latest/USD",
            data: "data",
            dataType: "JSON",
            success: function (response) {
                console.log(response);
                let dolares =(response.rates.USD)
                let salida=""
                salida= "Son "+euros*dolares+" dolares"
                console.log(salida);
                $("#resultado2").html(salida);
            }
        });
    }) 
});