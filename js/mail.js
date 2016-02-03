<!-- Start jQuery code -->
$(document).ready(function() {
    $("#submit_btn").click(function() { 
       
        var proceed = true;
        //simple validation at client's end
        //loop through each field and we simply change border color to red for invalid fields       
        $("#contact_form input[required=true], #contact_form textarea[required=true]").each(function(){
            $(this).css('border-color',''); 
            if(!$.trim($(this).val())){ //if this field is empty 
                $(this).css('border-color','red'); //change border color to red   
                proceed = false; //set do not proceed flag
            }
            //check invalid email
            var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
            if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
                $(this).css('border-color','red'); //change border color to red   
                proceed = false; //set do not proceed flag              
            }   
        });
       
        if(proceed) //everything looks good! proceed...
        {
            //get input field values data to be sent to server
            post_data = {
                'user_name'     : $('input[name=name]').val(), 
                'user_email'    : $('input[name=email]').val(), 
                'phone_number'  : $('input[name=phone]').val(), 
                'website'       : $('input[name=website]').val(),
                'msg'           : $('textarea[name=message]').val()
            };
            
            //Ajax post data to server
            $.post('mail.php', post_data, function(response){  
                if(response.type == 'error'){ //load json data from server and output message     
                        $('#mail_status').html('<div class="alert alert-danger"><strong>Error!</strong> '+response.text+'</div>');
                }else{
                        $('#mail_status').html('<div class="alert alert-success"><strong>Success!</strong> '+response.text+'</div>');
                        $('input[name=name]').val("");
                        $('input[name=email]').val("");
                        $('input[name=phone]').val("");
                        $('input[name=website]').val("");
                        $('input[name=comment]').val(),
                        $('textarea[name=message]').val("");
                }
            }, 'json');
        }
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form  input[required=true], #contact_form textarea[required=true]").keyup(function() { 
        $(this).css('border-color',''); 
    });
});