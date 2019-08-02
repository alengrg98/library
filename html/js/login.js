$(document).ready(function(){

    $('#nv1').click(function(){
        window.location.assign('login.html');
    })

    $('#nv2').click(function(){
        window.location.assign('register.html');
    })

    $('#nv3').click(function(){
        alert("Select a Category of Book");
        window.location.assign('lib.html');
    })

    $('#b2').click(function(){
        window.location.assign('login.html');
    })

   // $("#cat li").click(function(){
   //     window.location.assign('lib.html');
   // })
    /*function validation(tuser,tpass,callback)
    {
        if((tuser!="admin")||(tpass!="12345"))
        {
            alert("Incorrect Username or Password");
        }
        else
        {
            callback();
        }
    }
    
    $('#b1').click(function()
    {
        var user=$('#inp1').val();
        var pass=$('#inp2').val();
        validation(user,pass,()=>{
            window.location.assign('main.html');
        })
        
        
    })*/
});