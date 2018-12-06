$(document).ready(function(){
	/* 페이지 닫기 */
	$('.header .btn-close').click(function(){
		window.close();
		window.open('about:blank','_self').self.close(); // IE에서 묻지 않고 창 닫기
	});

	/* 페이지 타이틀 영역 태그 생성 */
	$('.s-title-area').each(function(){
		var tit = $(this).text();
		$(this).html('<div class="s-title"><span class="text">' + tit + '</span></div>');
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

	/* 탭 */
	$('.tab-item').click(function(){
		$(this).addClass('on').siblings('.tab-item').removeClass('on');
	});

	$('.tab-warp .tab-item').click(function(){
		var idx = $(this).index();
		$(this).closest('.tab-warp').find('.tab-cont').removeClass('on').eq(idx).addClass('on');
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
	$(document).on('click', '.accordion-list1 .list-item .inquiry', function(){
		if($(this).closest('.list-item').hasClass('on')){
			$(this).closest('.list-item').removeClass('on').find('.answer').slideUp(100);
		}else{
			$(this).closest('.list-item').addClass('on').find('.answer').slideDown(200);
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
	/* 지점안내 (MA-08.04.html) */
	$('.accordion-list4 .accordion-item.on .layer').show();
	$('.accordion-list4 .acc-title').click(function(){
		if($(this).closest('.accordion-item').hasClass('on')){
			$(this).closest('.accordion-item').removeClass('on').find('.layer').slideUp(100);
		}else{
			$(this).closest('.accordion-item').addClass('on').find('.layer').slideDown(200);
		}
	});

	/* 폼요소 호출 */
	form();

	/* 넓이 가변 셀렉트박스 */
	$('.combobox select').change(function(){
		var tit = $(this).val();
		$(this).closest('.combobox').find('.title').text(tit);
	});

	/* 핀 입력 */
	$('.pin-area').each(function(){
		$(this).find('.write-box').click(function(){
			$(this).closest('.pin-area').find('.pin-filed').focus();
		});
		$(this).find('.pin-filed').keyup(function(){
			var len = $(this).val().length;
			if(len < 7){
				$(this).closest('.pin-area').find('.point').removeClass('on').eq(len - 1).addClass('on').prevAll('.point').addClass('on');
			}
			if(len == 0){
				$(this).closest('.pin-area').find('.point').removeClass('on');
			}
		});
	});

	/* 데이트피커 */
	$('.date-form').each(function(){
		var data = $(this).attr('data-name');
		$('body').append('<div class="popup-datepicker" data-name="' + data + '"><div class="dimmed"></div><div class="datepicker"></div></div>');
	});
	$('.date-form').focus(function(){
		var data = $(this).attr('data-name');
		$('.popup-datepicker[data-name=' + data + ']').show();
	});
	$('.datepicker').each(function(){
		var data = $(this).closest('.popup-datepicker').attr('data-name');
		$(this).datepicker({
			yearRange: '1900:2030',// 연도 법위
			changeMonth: true,
			changeYear: true,
			firstDay: 0,
			//altField: '.date-form[data-name=' + data + ']',
			dateFormat: 'dd.mm.yy',
			showOtherMonths: true,
			monthNames : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
			monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
			onSelect: function(dateText, inst) {
				$('.popup-datepicker').hide();
				$('.date-form[data-name=' + data + ']').val(dateText);
			}
		});
		$(this).find('td').removeClass('ui-datepicker-current-day');
	});
	$('.popup-datepicker .dimmed').click(function(){
		$('.popup-datepicker').hide();
	});

	/* 공유하기 버튼 */
	share();
	$('.btn-share').click(function(){
		share();
		$('.share-layer').show().animate({left:0}, 200);
	});
	$('.share-layer .btn-s-close').click(function(){
		$('.share-layer').animate({left:'-100%'}, 100, function(){
			$(this).hide();
		});
	});

	/* 스위치 (on/off) */
	$('.btn-switch').click(function(){
		if(!$(this).hasClass('btn-popup')){
			$(this).toggleClass('on');
		}
	});
	// 스위치 레이어 팝업으로 제어
	$('.btnConfirm').click(function(){
		var name = $(this).closest('.layer-popup').attr('layer-name');
		$('.btn-switch[layer-name=' + name + ']').addClass('on');
	});

	/* 레이어팝업 */
	popup();
	$('.btn-popup').click(function(){
		//$('html, body').css({'overflow':'hidden'});
		var name = $(this).attr('layer-name');
		$('.layer-popup[layer-name=' + name + ']').addClass('show');
		popup();
	});

	$('.layer-popup .popClose').click(function(){
		//$('html, body').removeAttr('style');
		$(this).closest('.layer-popup').removeClass('show');
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

	/* 툴팁 레이어 */
	toolLayer();// 툴팁 레이어 위치 조정
	$('.btn-tool').click(function(){
		var name = $(this).attr('tool-name');
		var btnT = $(this).offset().top + 32;
		toolLayer();


		$('.tooltip-layer[tool-name=' + name + ']').show();


		var docH =  $(document).height();
		var layerT = $('.tooltip-layer[tool-name=' + name + ']').offset().top;
		var layerH = $('.tooltip-layer[tool-name=' + name + ']').outerHeight();

		console.log(layerT + layerH);
		if(layerT + layerH > docH){
			$('.tooltip-layer[tool-name=' + name + ']').addClass('bottom').css({'margin-top':-(layerH+32)});
		}
	});
	$('.tooltip-layer .btn-close').click(function(){
		$(this).closest('.tooltip-layer').hide();
	});

	scrollEvent();// 스크롤 이벤트
});


$(window).on('load', function(){
	/* 화면 로드시 노출되는 팝업 */
	$('.loadPopup').addClass('show');

	scrollEvent();// 스크롤 이벤트
});

$(window).scroll(function(){
	scrollEvent();// 스크롤 이벤트
});

/* 리사이징 */
$(window).resize(function(){
	popup();// 레이어팝업
	share();// 공유하기 레이어 높이 설정
});



/* ======================================================================
	폼 요소
====================================================================== */
function form(){
	/* 인풋 파일 */
	$('input[type=file].styled1').each(function(){
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

/* 공유하기 (event/MA-07.01.02.html, event/MA-07.02.02.html) */
function share(){
	$('.top-visual-box').each(function(){
		var hei = $(this).outerHeight();
		$('.share-layer').css({'height':hei});
	});
}

/* 툴팁 레이어 위치 조정 */
function toolLayer(){
	$('.btn-tool').each(function(){
		var name = $(this).attr('tool-name');
		var btnT = $(this).offset().top + 32;
		var winTop = $(window).scrollTop();
		$('.tooltip-layer[tool-name=' + name + ']').css({'top':btnT - winTop});
	});
}



/* 앱으로 접근시 사용될 구문 
function app(){
	$('input[type=text], input[type=number], input[type=tel], input[type=password]').focus(function(){
		$('.header, .s-title-area.fix .s-title, .bottom-fixed-area').css({'position':'absolute'});
	}).blur(function(){
		$('.header, .s-title-area.fix .s-title, .bottom-fixed-area').css({'position':'fixed'});
	});
}
*/


/* 스크롤 이벤트 */
function scrollEvent(){
	var winTop = $(window).scrollTop();
	var headH = $('.header').outerHeight();

	/* 스크롤다운시 해더 */
	if(winTop > 0){
		$('html').addClass('scroll');
		$('.header').addClass('fix');
	}else{
		$('html').removeClass('scroll');
		$('.header').removeClass('fix');
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

	toolLayer();// 툴팁 레이어 위치 조정
}