$(document).ready(function () 
{
    $('.submit').click(function (event) 
    {
        console.log('Clicked');

        var name = $('.name').val();
        var email = $('.email').val();
        var subject = $('.subject').val();
        var message = $('.message').val();
        var statusElm = $('.status');
        statusElm.empty();

        if (!(email.length > 5 && email.includes('@') && email.includes('.')))
        {
            event.preventDefault();
            statusElm.append('<div>Email is invalid</div>');
        }

        if (message.length < 2)
        {
            event.preventDefault();
            statusElm.append('<div>Message is invalid</div>')
        }
    })
})