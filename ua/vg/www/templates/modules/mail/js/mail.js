let captchas = document.querySelectorAll('.g-recaptcha');

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener('submit', function(event) {
        var $this = event.target;
        if ($this.classList.contains("SendMail")) {
            var http = new XMLHttpRequest();
            http.open("POST", 'vg/www/templates/modules/mail/php/sendmail.php');
            http.onreadystatechange = function() {//Call a function when the state changes.
                if(http.readyState == 4 && http.status == 200) {
                    var res1 = JSON.parse(http.responseText);
                    if(res1.error==0){
                        let h2 = document.createElement("h2");
                        h2.textContent = res1.data;
                        $this.children[1].remove();
                        $this.appendChild(h2);
                        let closeOverlay = () => {
                            overlay.style.display = 'none';
                            overlayPackage.style.display = 'none';
                            document.body.style.overflow = 'auto';
                        };
                        setTimeout(closeOverlay, 2000);
                    } else {
                        // debugger;
                        alert(res1.data);
                        captchas.forEach(e => {
                            if(e.length){
                                grecaptcha.reset();
                            }
                        })
                    }
                }
            }
            http.send(new FormData($this));

            event.preventDefault();
            return false;
        } else {
            return true;
        }
    });
});