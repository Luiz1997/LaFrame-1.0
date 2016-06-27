$(function(){
    $('.slider').cycle({
    timeout: 4500,
    pager: $('.pager'),
    pagerAnchorBuilder: function(index,DOMelement){
        return '<a></a>';
    },
    activePagerClass: 'sliderAtivado'
  });
});
