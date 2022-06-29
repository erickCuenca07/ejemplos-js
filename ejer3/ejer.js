$(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "https://api.imgflip.com/get_memes",
            data: "",
            dataType: "JSON",
            success: function (response) {
                console.log(response.data.memes);
            let salida="";
                for(let x of response.data.memes){
                     salida += `<h2>${x.name}</h2>
                    <img src="${x.url}"> `
                }
            $("#contenedor").html(salida);
            }
        });  
});