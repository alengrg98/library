$(document).ready(function(){             

 $('#nv1').click(function(){
        window.location.assign('login.html');
    })

    $('#nv2').click(function(){
        window.location.assign('register.html');
    })
    

    $("#cat li").click(function(){
        var cat = $(this).text();
        if(cat=="All")
        {
            cat='Books';
        }
        console.log(cat);
        
        $.ajax({                        
            type:"GET",                  
            url :"books.json",         
            beforeSend : function(){
                $("#load").show();
            },
            success : function(data){
                $("#load").hide();              
                var card="<div class='card-deck'>";
                for (var j in data){
                    if (cat == data[j].category || cat == 'Books')
                    {
                        card+="<div class='col-4 col-sm-4 col-md-4'> <div class='card'> <img class='card-img-top' src=" + data[j].urltoimage + " height='400px' width='325px'>";
                        card+="<div class='card-body'> <h5 class='card-title'>"+ data[j].title +"</h5>";
                        card+="<h6 class='card-subtitle mb-2 text-muted'>" + data[j].author +"</h6> ";
                        card+="<p class='card-text text-justify'>"+ data[j].description + "</p> </div>";
                        card+="<div class='card-text text-center'> <p>Price: "+ data[j].price+"</p><p>Genre: "+ data[j].category+"</p></div></div></div> <br>";
                    }
                }
                card+="</div>";
                $(".results").html(card);
            }         
        });
    });
});