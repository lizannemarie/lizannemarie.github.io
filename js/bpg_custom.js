//Expand and collapse boxes
$('#leftBody .boxHead').on("click", function(){
    $('#leftBody .boxContainer').removeClass('open');
    $(this).parent('.boxContainer').addClass('open');
});
// checkSelector is checked styling
$('.checkSelector').on("click",function(){
    $(this).addClass('checked');
    $('.checkSelector').not(this).removeClass('checked');
    $(this).children('input[type=radio]').prop('checked',true);
    if($(this).children('input[type=radio]').attr('id') == 'UserSelect'){
        $('#inspectorSelect').show();
    }
    else if($(this).children('input[type=radio]').attr('id') == 'AutoSelect'){
        $('#inspectorSelect').hide();
    }
});
// show next section, hide current section
$('.boxCTA').click(function(){
    var tParent = $(this).parent();
    var tNext = $(this).parent().next();
    $(tParent).removeClass('open');
    $(tNext).addClass('open');
});
//Update Address click to open step one and focus in address line
$('#UpdateAddress').on('click',function(){
    $('#leftBody .boxContainer:eq(0)').addClass('open');
    $('#leftBody .boxContainer').not(':eq(0)').removeClass('open');
    $('#address').focus();
});
//Force mobile right box dd
$('#rightBody .boxHead.visible-xs').on("click", function(){
    var target = $(this).attr('data-target');
    if( $(this).hasClass("collapsed")){
        $(target).slideDown('slow').removeClass('in');
        $(this).removeClass("collapsed");
    }
    else{
        $(target).slideUp('fast').addClass('in');
        $(this).addClass('collapsed');
    }
});