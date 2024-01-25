document.addEventListener("DOMContentLoaded", function () 
    {
        function adjustIframeHeight(iframe) {
            iframe.onload = function () {
                var frameContent = iframe.contentDocument || iframe.contentWindow.document;
                var object = frameContent.querySelector("object");
                var frameBody = frameContent.querySelector("body");
                var height = object.offsetHeight;
                frameBody.style.margin = 0;
                iframe.style.height = height + 'px';
            };
        }
        var iframes = document.querySelectorAll('.auto-height-iframe');
        iframes.forEach(adjustIframeHeight);
    }
);

function delete_all()
{
    var naslov = document.getElementById("naslov");
    var kosarica = document.getElementById("u_kosarici");
    var cijena = document.getElementById("cijena");
    var prazno = document.getElementById("empty_basket");

    naslov.remove();
    kosarica.remove();
    cijena.remove();

    prazno.style.display = "block";
}

function refresh()
{
    location.reload();
}

function pop_me()
{
    const oznaceno = document.getElementById('card');
    const pokazi = document.getElementById('show_up');

    if (oznaceno.checked) {
        pokazi.style.display = 'block';
    } else {
        pokazi.style.display = 'none';
    }
}

window.onload = function(){
    pay_form.reset();
}