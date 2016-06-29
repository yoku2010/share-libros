$(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('ul.tab-menu>li>a').click(function(e){
        e.preventDefault();
        var $this = $(this), $li = $this.parent(), $ul = $li.parent(),
            $tabPanel = $('div.tab-panel');
        $ul.find('>li').removeClass('active');
        $li.addClass('active');
        $tabPanel.hide();
        $($this.attr('href')).show();
    }).last().click();
});
