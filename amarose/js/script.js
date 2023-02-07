$(document).ready(function(){
    $('.ajax-popup-link').magnificPopup({
        type: 'ajax'
    });

    $('.cart-item').click(function(){
        $('.cart-item').removeClass('cart_active');
        $('.selected').text('Select Package');
        $(this).addClass('cart_active');
        $(this).find('.selected').text('Selected');
    });
});