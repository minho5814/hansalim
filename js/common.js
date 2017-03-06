/*
	최초 작성일 : 2017-03-06
	최초 작성자 : 최민호
	소속 : (주)그레이블루/퍼블리싱팀
*/

$(window).load(function(){
	/* =============================================================================
		해더
	============================================================================= */
	// gnb에 검색영역 복사
	var search = $('.head-top .search-area').html();
	$('.head-btm .gnb').append('<div class="search-area">');
	$('.head-btm .search-area').html(search);

	/* =============================================================================
		스크롤 이벤트
	============================================================================= */
	$(window).scroll(function(){
		var winTop = $(window).scrollTop();
		var winLeft = $(window).scrollLeft();
		/* 스크롤 다운시 해더 변경 */
		var gnbTop = $('.head-top').offset().top + $('.head-top').outerHeight();
		if(winTop >= gnbTop){
			$('html').addClass('down');
			$('.head-btm .gnb').css({'left':-winLeft});
		}else{
			$('html').removeClass('down');
			$('.head-btm .gnb').css({'left':'0'});
		}
	});
	$(window).scroll();
});