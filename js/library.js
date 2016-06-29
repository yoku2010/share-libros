$(function(){
    var $form = $('#id_library_form'), $view = $('ul.tab-menu>li>a').last();
    $form.find('input.polymer-field, textarea.polymer-field, select.polymer-field').polymerForm({
        bar_height: '1px',
        base_color: '#CCC',
        active_color: '#F6D641'
    });
    $('#cancel_btn').click(function(){
        $view.click();
    });
});
