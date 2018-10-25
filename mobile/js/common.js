$(document).ready(function(){
	/* 페이지 닫기 */
	$('.header .btn-close').click(function(){
		window.close();
		window.open('about:blank','_self').self.close(); // IE에서 묻지 않고 창 닫기
	});

	/* 소팅 영역 */
	// 버튼 넓이
	$('.sorting-box').each(function(){
		var len = $(this).find('.btn').length;
		$(this).find('.btn').css({'width':100/len + '%'});
	});
	// 클릭 이벤트
	$('.sorting-box .btn').click(function(){
		$(this).addClass('on').siblings('.btn').removeClass('on');
	});

	/* 하단 고정영역이 있을경우 */
	$('.bottom-fixed-area').each(function(){
		var hei = $(this).find('.height').outerHeight();
		$('.container').css({'padding-bottom':hei + 35});
	});
});


$(window).scroll(function(){
	var winTop = $(window).scrollTop();
	var headH = $('.header').outerHeight();

	/* 스크롤다운시 해더 */
	if(winTop == 0){
		$('.header').removeClass('fix');
	}else{
		$('.header').addClass('fix');
	}

	/* 타이틀 스크롤시 고정 */
	$('.s-title-area').each(function(){
		var titTop =  $('.s-title-area').offset().top;
		if(winTop > titTop - headH){
			$('.header, .s-title-area').addClass('fix');
		}else{
			$('.header, .s-title-area').removeClass('fix');
		}
	});

	/* 소팅 영역 고정 */
	$('.sorting-box-area').each(function(){
		var sotTop =  $('.sorting-box-area').offset().top;
		if(winTop > sotTop - headH){
			$('.sorting-box').addClass('fix').css({'top':headH});
		}else{
			$('.sorting-box').removeClass('fix').removeAttr('style');
		}
	});
});