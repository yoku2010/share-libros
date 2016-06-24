$(function(){
    var $form = $('#id_login_form');
    $form.find('input.polymer-field, textarea.polymer-field').polymerForm({
        bar_height: '1px',
        base_color: '#CCC',
        active_color: '#F6D641'
    });
});
