// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery

window.onload = function() {

    burger =  document.getElementById('hamburger'); 
	menu = document.getElementById('mobileMenu');

    burger.addEventListener("click", btnTransform);

    function btnTransform() {
		burger.classList.toggle('change');

		 if (menu.classList.contains('contract')) {
			menu.classList.remove("contract");
			menu.classList.add("expand");
		} else {
			menu.classList.remove("expand");
			menu.classList.add("contract");
        }
    }

    $("a").on('click', function(event) {
        
        if (this.hash !== "") {
          event.preventDefault();
    
          var hash = this.hash;
    
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 600, function(){
       
            window.location.hash = hash;
          });
        }
      });
}