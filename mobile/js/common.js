$(document).ready(function(){
	/* 페이지 닫기 */
	$('.header .btn-close').click(function(){
		window.close();
		window.open('about:blank','_self').self.close(); // IE에서 묻지 않고 창 닫기
	});

	/*
		전체 메뉴 영역
	*/
	$('.quick-menu-area .swiper-container').each(function(){
		var menu = $(this);
		new Swiper(menu, {
			slidesPerView: 'auto',
			spaceBetween: 0
		});
	});
	$('.menu-wrap').css({'opacity':'1', 'display':'none'});
	/* 열기 */
	$('.btn-gnb').click(function(){
		$('.menu-wrap, .menu-list-box .left-menu').show().animate({left:0}, 200);
	});
	/* 닫기 */
	$('.menu-wrap .btn-close').click(function(){
		$('.menu-wrap, .menu-list-box .left-menu').animate({left:'100%'}, 100, function(){
			$('.menu-wrap, .menu-list-box .left-menu').hide();
		});
	});
	/* 탭 영역 */
	$('.menu-tab .item').click(function(){
		var idx= $(this).index();
		$(this).addClass('on').siblings('.item').removeClass('on');
		$(this).closest('.menu-tab-wrap').find('.menu-tab-cont').removeClass('on').eq(idx).addClass('on');
	});
	/* 왼쪽 메뉴 클릭 */
	$('.menu-wrap .left-menu button.item').click(function(){
		var idx = $(this).index();
		var min = $(this).prevAll('a').length;
		$(this).addClass('on').siblings('.item').removeClass('on');
		$(this).closest('.menu-wrap').find('.right-menu .menu').removeClass('on').eq(idx - min).addClass('on');
	});
	/* 오른쪽메뉴 클릭 아코디언 */
	$('.menu-wrap .m-title').click(function(){
		if($(this).closest('.list-item').hasClass('on')){
			$(this).closest('.list-item').removeClass('on').find('.list').slideUp(100);
		}else{
			$(this).closest('.menu-list').find('.list-item').removeClass('on').find('.list').slideUp(100);
			$(this).closest('.list-item').addClass('on').find('.list').slideDown(100);
		}
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
	/*  */
	$('.accordion-list2 .acc-title').click(function(){
		if($(this).closest('.accordion-item').hasClass('on')){
			$(this).closest('.accordion-item').removeClass('on').find('.layer').slideUp(100);
		}else{
			$(this).closest('.accordion-item').addClass('on').find('.layer').slideDown(200);
		}
	});
	/* 마이메뉴설정 (MA-01.02.02.html) */
	$('.accordion-list3 button.a-title').click(function(){
		if($(this).closest('.accordion-item').hasClass('off')){
			$(this).closest('.accordion-item').removeClass('off').find('.layer').slideDown(200);
		}else{
			$(this).closest('.accordion-item').addClass('off').find('.layer').slideUp(100);
		}
	});

	/* 폼요소 호출 */
	form();

	/* 넓이 가변 셀렉트박스 */
	$('.combobox select').change(function(){
		var tit = $(this).val();
		$(this).closest('.combobox').find('.title').text(tit);
	});

	/* 레이어팝업 */
	popup();
	$('.btn-popup').click(function(){
		//$('html, body').css({'overflow':'hidden'});
		var name = $(this).attr('layer-name');
		$('.layer-popup[layer-name=' + name + ']').show();
		popup();
	});

	$('.layer-popup .popClose').click(function(){
		//$('html, body').removeAttr('style');
		$(this).closest('.layer-popup').hide();
		popup();
	});

	/* 레이어팝업 스크롤 다운시 */
	$('.layer-popup .popup .pop-cont').scroll(function(){
		var popTop = $(this).scrollTop();
		if(popTop > 0){
			$(this).closest('.popup').addClass('scroll');
		}else{
			$(this).closest('.popup').removeClass('scroll');
		}
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

/* 리사이징 */
$(window).resize(function(){
	popup();// 레이어팝업
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

/* ======================================================================
	레이어팝업
====================================================================== */
function popup(){
	/*
	$('.layer-popup').each(function(){
		var winH = $(window).height();
		var popH = $(this).find('.popup').outerHeight();
		if(popH + 60 > winH){
			$(this).css({'padding-top':'20px', 'padding-bottom':'20px'});
		}else{
			var padg = (winH - popH) / 2;
			console.log(padg);
			$(this).css({'padding-top':padg + 'px'});
		}
	});
	*/
	$('.layer-popup').each(function(){
		var winH = $(window).height();
		var popH = $(this).find('.popup').outerHeight();
		if(popH + 40 > winH){
			$(this).addClass('h-full');
		}else{
			var padg = (winH - popH) / 2;
			$(this).removeClass('h-full');
		}
	});
}