$(document).ready(function(){
	/*
		Gnb
	*/
	$('.gnb-area .gnb-list .item').click(function(){
		if($(this).closest('.gnb-item').hasClass('on')){
			
		}else{
			$('.gnb-item').removeClass('on').find('.gnb-depth').hide();
			$(this).closest('.gnb-item').addClass('on').find('.gnb-depth').slideDown(200);
		}
	});
});


$(window).load(function(){
	
});

$(window).scroll(function(){
	var winTop = $(window).scrollTop();
	var winLft = $(window).scrollLeft();

	/* 가로 스크롤시 해더도 같이 이동 */
	$('.header').css({'left':-winLft});

	if(winTop > 10){
		$('html').addClass('scroll');
	}else{
		$('html').removeClass('scroll');
	}
});

/* 리사이징 */
$(window).resize(function(){
	
});



/* ======================================================================
	폼 요소
====================================================================== */
function form(){
	
}

/* ======================================================================
	레이어팝업
====================================================================== */
function popup(){
	
}