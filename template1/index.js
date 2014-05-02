$(document).ready(function(){

    //$(window).on('scroll', function(){
        //console.log(window.scrollY);
        //if (window.scrollY > 600) {
            //console.log('> 600');
            //$('.service-1').removeClass('hidden').addClass('animated slideInLeft');

        //}
        //if (window.scrollY > 1000) {
            //console.log('> 1000');
            //$('.service-2').removeClass('hidden').addClass('animated slideInRight');
        //}
    //});

    $(function(){
        $('#Container').mixItUp();  
    });

    $('div').waypoint(function(direction) {
        $(this).css('opacity', '1');
        var delay = $(this).data('animate-delay');
        $(this).css({
            'animation-delay': delay + 's',
            '-webkit-animation-delay': delay + 's',
            '-moz-animation-delay': delay + 's',
            '-ms-animation-delay': delay + 's',
            '-o-animation-delay': delay + 's',
        });
        var animate = $(this).data('animate');
        $(this).addClass('animated ' + animate);
        }, { offset: "80%" }
    );
});
