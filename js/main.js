$(document).ready(function(){
// looking for buttons
    var $bshow = $('.mvshow');
    var $bhide = $('.mvhide');
    var $mvinfo = $('.contact');
// hiding info field    
    $mvinfo.hide();
// telling what to do when button are clicked     
    $bshow.click(function(){
        $mvinfo.fadeIn(3000);
    });
    
    $bhide.click(function(){
        $mvinfo.fadeOut(3000);
    });
});