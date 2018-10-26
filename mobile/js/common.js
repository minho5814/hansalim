$(document).ready(function(){
	/* 페이지 닫기 */
	$('.header .btn-close').click(function(){
		window.close();
		window.open('about:blank','_self').self.close(); // IE에서 묻지 않고 창 닫기
	});

	/* 검색영역 (customer/MA-08.02.01.html) */
	$('.search-form .btn-delete').click(function(){
		$(this).closest('.search-form').find('input[type=text]').val('');
	});
	$('.search-area .hashtags .tag').click(function(){
		var txt = $(this).text();
		$(this).closest('.search-area').find('.search-form input[type=text]').val(txt);
	});

	/* 탭 스와이퍼 (MA-08.02.01.html) */
	$('.tab-scroll-x').each(function(){
		var tab = $(this).find('.swiper-container');
		new Swiper(tab, {
			slidesPerView: 'auto',
			spaceBetween: 0
		});

		$(this).find('.swiper-slide').click(function(){
			$(this).addClass('on').siblings('.swiper-slide').removeClass('on');
		});
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

	/* 아코디언 리스트 (customer/MA-08.02.01.html) */
	$('.accordion-list1 .list-item').click(function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on').find('.answer').slideUp(100);
		}else{
			$(this).addClass('on').find('.answer').slideDown(200);
		}
	});

	/* 폼요소 호출 */
	form();

	/* 넓이 가변 셀렉트박스 */
	$('.combobox select').change(function(){
		var tit = $(this).val();
		$(this).closest('.combobox').find('.title').text(tit);
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
		if($(this).closest('.wrapper').hasClass('scroll-type2')){
			if(winTop == 0){
				$('.header, .s-title-area').removeClass('fix');
			}else{
				$('.header, .s-title-area').addClass('fix');
			}
		}else{
			var titTop =  $('.s-title-area').offset().top;
			if(winTop > titTop - headH){
				$('.header, .s-title-area').addClass('fix');
			}else{
				$('.header, .s-title-area').removeClass('fix');
			}
		}
	});

	/* 소팅 영역 고정 */
	$('.scroll-fix-tab').each(function(){
		var sotTop =  $(this).offset().top;
		var hei = $(this).find('.fix-tab').outerHeight();

		$(this).css({'height':hei});
		if(winTop > sotTop - headH){
			$(this).find('.fix-tab').addClass('fix').css({'top':headH});
		}else{
			$(this).find('.fix-tab').removeClass('fix').removeAttr('style');
		}
	});
});




/* ======================================================================
		폼 요소
====================================================================== */
function form(){
	/* 인풋 파일 */
	$('input[type=file]').each(function(){
		if(!$(this).parent().is('.filebox')){
			$(this).wrap('<span class="filebox"></span>');
			$(this).before('<span class="filename"></span>');
			$(this).closest('.filebox').find('.filename').text('첨부파일 찾기');// 추 후 베트남어 번역 후 텍스트 교체
		}

		$(this).change(function(){
			var fileVal = $(this).val().split("\\");
			var fileName = fileVal[fileVal.length-1];
			$(this).closest('.filebox').find('.filename').text(fileName);
		});
	});
}