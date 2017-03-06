$(window).load(function(){
	/* =============================================================================
		해더
	============================================================================= */
	// gnb에 검색 복사
	var search = $('.head-top .search-area').html();
	$('.head-btm .gnb').append('<div class="search-area">');
	$('.head-btm .search-area').html(search);

	$(window).scroll(function(){
		var winTop = $(window).scrollTop();
		var gnbTop = $('.head-top').offset().top + $('.head-top').outerHeight();
		if(winTop >= gnbTop){
			$('html').addClass('down');
		}else{
			$('html').removeClass('down');
		}
	});
	$(window).scroll();
});