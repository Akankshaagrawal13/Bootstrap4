 $(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
             $("#carousel-button").click(function(){
                if ($("#carousel-button").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carousel-button").children("span").removeClass('fa-pause');
                    $("#carousel-button").children("span").addClass('fa-play');
                }
                else if ($("#carousel-button").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carousel-button").children("span").removeClass('fa-play');
                    $("#carousel-button").children("span").addClass('fa-pause');                    
                }
             });

			 // JavaScript code has been added to the page to trigger the Reserve Table modal.
            $("#reservebtn").click(function(){
                $("#reserveform").modal('show')
            });
// JavaScript code has been added to the page to trigger the Reserve Login modal.
            $("#loginbtn").click(function(){
                $("#loginModal").modal('show')
            });
        });