$(document).ready(function () {
    $("#boton").click(function () { 
        let numero= $('#numero').val();
        $.ajax({
            type: "GET",
            url: "https://swapi.dev/api/films/"+numero,
            data: "",
            dataType: "JSON",
            success: function (response) {
                console.log(response)
                salida="";
                salida+=`<div><h1>Titulo: ${response.title}</h1> 
                <h1>Episodios: ${response.episode_id}</h1>
                </div>`;
                for (let x of response.characters){
                    console.log(x);
                    $.ajax({
                        type: "GET",
                        url: x,
                        data: "data",
                        dataType: "JSON",
                        success: function (response) {
                            console.log(response);
                            salida+=`<h4>${response.name}</h4>`
                            $("#contenedor").html(salida);
                        }
                    });
                };
                $("#contenedor").html(salida);
            }
        });
    }) 
});