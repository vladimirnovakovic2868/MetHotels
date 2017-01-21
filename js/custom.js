$(document).ready(function() {
    $('.nav.nav-pills li').on('click', function(event){
        event.preventDefault();
        $('.nav.nav-pills li').removeClass("active");
        $(this).addClass("active");
        $(".registration-forms").hide();
        $("."+$(this).attr('role')).show();

        console.log();
    });

    $("#register-form").on('submit', function(event){
        event.preventDefault();

        var formData = {
            'email': $(this).find('input[name=email]').val(),
            'firstName': $(this).find('input[name=firstName]').val(),
            'lastName': $(this).find('input[name=lastName]').val(),
            'password': $(this).find('input[name=password]').val(),
            'confirmPassword': $(this).find('input[name=confirmPassword]').val()
        };

        console.log(formData)

        if(formData['password']==formData['confirmPassword']) {

            $.ajax({
                type: 'POST',
                url: 'register.php',
                data: formData,
                dataType: 'json',
                encode: true
            }).done(function(data) {
                console.log(data);
            });
        }else {
            alert('Password and confirm password missmatch');
        }

    });

    $("#login-form").on('submit', function(event){
        event.preventDefault();

        var formData = {
            'email': $(this).find('input[name=email]').val(),
            'password': $(this).find('input[name=password]').val()
        };

        console.log('login-form', formData)


        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: formData,
            dataType: 'json',
            encode: true,
        }).done(function(data) {
            console.log(data.username);
            window.location.reload()
        });
    });
});