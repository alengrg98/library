$(document).ready(function(){

    $('#nv1').click(function(){
        window.location.assign('login.html');
    })

    $('#nv2').click(function(){
        window.location.assign('register.html');
    })

    $('#nv3').click(function(){
        window.location.assign('lib.html');
    })

   
    

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