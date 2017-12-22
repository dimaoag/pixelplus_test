'use strict';
/*[ onset ]control of feedback*/
$(function() {
$('.feedback_link > p').click(function() {
      $('.overall_section').css('opacity', '0.5');
      $('#feedback_position').css('display', 'block');
      $('#feedback_position').hide().show('9000');
    });
$('.feedback_close_button > img').click(function() {
       $('#feedback_position').hide('9000');
       $('.overall_section').css('opacity', '1');
    });
$('#sending').click(function() {
    function controlOfFilling(id_form){
        var user_string;
        user_string = document.getElementById(id_form).value; 
        if(user_string.length < 1) {
            $('#' + id_form).addClass('blank_field_none');
            $('#' + id_form).attr('placeholder', 'поле должно быть заполнено'); 
        }
        else{
            $('#' + id_form).addClass('blank_field');
        }
    }
    controlOfFilling('name_of');  
    controlOfFilling('cellphone_of');  
    controlOfFilling('email_of');
});
    $('#name_of').focus(function() {
    $('#name_of').attr( 'placeholder', '');
    $('#name_of').css( 'box-shadow','rgba(228, 106, 106, 0.75) 0px 0px 0px 0px inset');
    });
    $('#cellphone_of').focus(function() {
    $('#cellphone_of').attr( 'placeholder', '');
    $('#cellphone_of').css( 'box-shadow','rgba(228, 106, 106, 0.75) 0px 0px 0px 0px inset');
    });
    $('#email_of').focus(function() {
    $('#email_of').attr( 'placeholder', '');
    $('#email_of').css( 'box-shadow','rgba(228, 106, 106, 0.75) 0px 0px 0px 0px inset');
    });
    function focusBlur(id_form){
        var user_string;
        user_string = document.getElementById(id_form).value;
        if(user_string.length < 1){
        $('#' + id_form).css( 'box-shadow','rgba(228, 106, 106, 0.75) 0px 0px 13px 0px inset');    
        $('#' + id_form).attr('placeholder', 'поле должно быть заполнено'); 
        }
    }
    $('#name_of').blur(function() { focusBlur('name_of') });
    $('#cellphone_of').blur(function() { focusBlur('cellphone_of') });
    $('#email_of').blur(function() { focusBlur('email_of') });
/*[the end]control of feedback*/    
/*[ onset ]control menu's blocks*/    
    function openMenu(numberof){
        $(numberof).css('display', 'block');
        $(numberof).hide().show('9000');
    for(var i = 1; i <= 6 ; i++){
        var id_block = '#sub_' + i;
        (i != +numberof[5]) ? $(id_block).hide('9000'):
                              $(id_block).show('9000');  
        (i != +numberof[5]) ? $(id_block).css('display', 'none'): id_block;
        }
    }
$('#cars').click(function() {
    if($('#sub_1').css('display') === 'none') openMenu('#sub_1');
    $('.catalog_nav_element_3').text('Автомобили');
    });
$('#appliances').click(function() {
    if($('#sub_2').css('display') === 'none') openMenu('#sub_2');
    $('.catalog_nav_element_3').text('Бытовая техника'); 
   });
$('#mobile').click(function() {
    if($('#sub_3').css('display') === 'none') openMenu('#sub_3');
    $('.catalog_nav_element_3').text('Мобильная техника'); 
    });
$('#computers').click(function() { 
    if($('#sub_4').css('display') === 'none') openMenu('#sub_4');
    $('.catalog_nav_element_3').text('Компьютеры'); 
    });
$('#clothes').click(function() { 
    if($('#sub_5').css('display') === 'none')openMenu('#sub_5');
    $('.catalog_nav_element_3').text('Одежда'); 
    });
$('#property').click(function() { 
    if($('#sub_6').css('display') === 'none')openMenu('#sub_6');
    $('.catalog_nav_element_3').text('Недвижимость'); 
    });
});
/*[the end]control menu's blocks*/ 
/*[ onset ]this function changes images of slider*/
     $(document).ready(function() {
        var blink = $('img[alt=harley]');
        var imgWay = $('img[alt=harley]').attr('src');
        var imgNumber = +imgWay[14];
        var flag = true;
    function moveRight() {
            (imgNumber == 2) ? imgNumber = 0 : imgNumber;
                imgWay ='images/harley_' + ++imgNumber + '_mini.png';
                    blink.hide().attr('src', imgWay).show(800); 
    }
    function moveLeft() {
            (imgNumber == 1) ? imgNumber = 3 : imgNumber;
                imgWay ='images/harley_' + --imgNumber + '_mini.png';
                    blink.hide().attr('src', imgWay).show(800); 
    }
    var monitor_extension = true;
        (window.innerWidth <= 1250) ? monitor_extension = false :
                                      monitor_extension;
    var timerId = 0;
    (monitor_extension === true) ? timerId = setInterval(moveRight, 4000):
                                   timerId;
    $('.right').click(function() {
        setTimeout(function() {
                clearInterval(timerId);
            moveRight();
            flag = false;
            timerId = 0;
        });
    });
    $('.left').click(function() {
        setTimeout(function() {
                clearInterval(timerId);
            moveLeft();
            flag = false;
            timerId = 0;
        });
    });    
    $('.catalog').click(function(){
            if(flag === false)
            timerId = setInterval(moveRight, 4000);
            flag = true;
        });
    });
    
    









