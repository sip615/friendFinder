console.log("wooooooow")

$(document).ready(function(){
    console.log("Ready!");

    $.ajax({
        method:"GET",
        url:"/api/friends"
    }).done(res => {
        console.log(res)
        res.forEach(e =>{
            $("#friends").append(`<h2>${e.name}</h2><p>${e.score}</p><img src=${e.profile_pic}>`);
        });
    }).catch(err => {
        return err
    })

    $("#submit").on("click", () => {
        let name = $('#name').val().trim();

        $.ajax({
            method: "POST",
            url: "/api/friends",
            data: {
                name: "name"
            },
            done: 
        })
    })
});