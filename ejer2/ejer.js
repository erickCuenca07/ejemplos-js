$(document).ready(function () {
    $("#boton").click(function () { 
        // alert("xd")
        let busca=$("#texto").val();
        $.ajax({
            type: "GET",
            url: "https://www.omdbapi.com/",
            data: {
                'apikey':'e58057c7',
                's':busca
            },
            dataType: "JSON",
            success: function (response) {
                console.log(response);
            let salida="";
            for(let x of response.Search){
                salida += `<div><h1>${x.Title}</h1>
                <img src="${x.Poster}> "
                Año:<h3>${x.Year}</h3> </div>`
            }
            $("#contenedor").html(salida);
            }
        });  
    });
});