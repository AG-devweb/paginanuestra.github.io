          // Obtener el botón
          var btnToTop = document.getElementById("btn-to-top");

          // Cuando el usuario desplaza 20px desde la parte superior de la página, mostrar el botón
          window.onscroll = function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              btnToTop.style.display = "block";
            } else {
              btnToTop.style.display = "none";
            }
          };

          // Cuando el usuario hace clic en el botón, volver al principio de la página
          function topFunction() {
            document.body.scrollTop = 0; // Para Safari
            document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
          }