$(function(){
    loadData1();
    $("#btn2").click(loadData2)
    $("#btn1").click(loadData1)
})

function loadData1(){
    $("#btn1").attr('disabled','disabled');
    $("#btn2").removeAttr('disabled');
    $.ajax ({
        url:"https://reqres.in/api/users",
        method:"GET",
        success: function(response){
            console.log(response);
            var temp = $("#Fetch");
            temp.empty();
            for (var i = 0; i < 7; i++){
                var rec = response.data[i]
                temp.append(`<div class = "comingData"><h2>Email</h2> <h3> ${rec.email}</h3><br><h2>First Name</h2><h4>${rec.first_name}</h4><br><h2>Last Name</h2><h4>${rec.last_name}</h4><h2>ID</h2><p>${rec.id}</p></div>`)
            }
        }
    })
}
function loadData2(){
    $("#btn2").attr('disabled','disabled');
    $("#btn1").removeAttr('disabled');
    $.ajax ({
        url:"https://reqres.in/api/users?page=2",
        method:"GET",
        success: function(response){
            console.log(response);
            var temp = $("#Fetch");
            temp.empty();
            for (var i = 0; i < 7; i++){
                var rec = response.data[i]
                temp.append(`<div class = "comingData"><h2>Email</h2> <h3> ${rec.email}</h3><br><h2>First Name</h2><h4>${rec.first_name}</h4><br><h2>Last Name</h2><h4>${rec.last_name}</h4><br><h2>ID</h2><p>${rec.id}</p></div>`)
            }
        }
    })
}