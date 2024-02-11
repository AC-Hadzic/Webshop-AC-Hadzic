// iFrame for Header/Footer
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

// Clear shop page
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

// Reload page
function refresh()
{
    location.reload();
}


// Toggle Card payment display on/off
function pop_me()
{
    const oznaceno = document.getElementById('card');
    const pokazi = document.getElementById('show_up');

    if (oznaceno.checked) 
    {
        pokazi.style.display = 'block';
    } 
    
    else 
    {
        pokazi.style.display = 'none';
    }
}

// Toggle filters in product page
function showToggle()
{
    const aside = document.getElementById('aside');

    if (aside.style.display == 'none') 
    {
        aside.style.display = 'block';
    } 
    
    else 
    {
        aside.style.display = 'none';
    }
}

// Definitions for themes
const light = "/images/icons/light_icon.svg";
const night = "/images/icons/night_icon.svg";
const icon = document.getElementById("theme_icon");
const body = document.body;  
const header = document.getElementById("header_iframe");
const footer = document.getElementById("footer_iframe");

// Toggle light/dark theme & save user preference in cookies
function theme_toggle() 
{
    if (body.classList == "")
    {
        body.classList = "light_mode";
        document.cookie = "theme=light_mode; path=/";

        // Check if header & footer exists or else many null errors :c
        if (header && header.contentWindow && header.contentWindow.document.body &&
            footer && footer.contentWindow && footer.contentWindow.document.body)
        {
            header.contentWindow.document.body.classList = "light_mode";
            footer.contentWindow.document.body.classList = "light_mode";
        }
        icon.src = night;
    }

    else if (body.classList == "light_mode")
    {
        body.classList = "";
        document.cookie = "theme=dark_mode; path=/";

        if (header && header.contentWindow && header.contentWindow.document.body && 
            footer && footer.contentWindow && footer.contentWindow.document.body)
        {
            header.contentWindow.document.body.classList = "";
            footer.contentWindow.document.body.classList = "";
        }
        icon.src = light;
    }
} 

// Load theme from cookies on page load
window.onload = function()
{
    if (document.cookie == "theme=light_mode")
        {
            body.classList = "light_mode";

            // Check if header & footer exists or else many null errors :c
            if (header && header.contentWindow && header.contentWindow.document.body && 
                footer && footer.contentWindow && footer.contentWindow.document.body)
            {
                header.contentWindow.document.body.classList = "light_mode";
                footer.contentWindow.document.body.classList = "light_mode";

                icon.src = night;
            }
        }

    else if (document.cookie == "theme=dark_mode")
    {
        body.classList = ""
    
        // Check if header & footer exists or else many null errors :c
        if (header && header.contentWindow && header.contentWindow.document.body && 
        footer && footer.contentWindow && footer.contentWindow.document.body)
        {
            header.contentWindow.document.body.classList = "";
            footer.contentWindow.document.body.classList = "";

            icon.src = light;
        }
    }    
}

// Page Loader
var aaa = document.getElementById("loader");

function loader() {
    aaa.style.opacity = '0';
    setTimeout();

}

setTimeout(() => {
    if (aaa)
    {
        aaa.remove(); 
    }
  }, 400)