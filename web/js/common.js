$(document).ready(function(){
	/* ------------------------------------------------------------------------------------------------------------------
		언어변환 버튼
	------------------------------------------------------------------------------------------------------------------ */
	$(document).on('click', '.btn-leng', function(){
		if($(this).hasClass('en')){
			$(this).removeClass('en').text('ENGLISH');
			$('.wrapper').removeClass('leng-english');
		}else{
			$(this).addClass('en').text('Tiếng Việt');
			$('.wrapper').addClass('leng-english');
		}
	});

	/* ------------------------------------------------------------------------------------------------------------------
		Gnb
	------------------------------------------------------------------------------------------------------------------ */
	$('html').each(function(){
		var color = $(this).attr('class');
		$(this).attr('data', color);
	});

	// 스크롤시다운시 사용할 전체메뉴 버튼 생성
	$('.header .breadcrumbs').append('<button type="button" class="btn-allmenu"><span class="icon">All Menu</span></button>');

	// 메뉴 레이어 열기
	$('.gnb-area .gnb-list .item').mouseenter(function(){
		scrollX();
		// 전체메뉴 닫기
		$('.all-menu-layer .inner-box').css({'opacity':'0'});
		$('.all-menu-layer').hide();
		$('.btn-allmenu').removeClass('close');
		$('.menu-dimmed').hide();

		var color = $(this).closest('.gnb-item').attr('data');
		$('html').attr('class', color);

		$('.gnb-close').show();
		if($('.gnb-item').hasClass('on')){
			$('.gnb-item').removeClass('on').find('.gnb-depth').hide();
			$(this).closest('.gnb-item').addClass('on').find('.gnb-depth').show();
		}else{
			$('.gnb-item').removeClass('on').find('.gnb-depth').hide();
			$(this).closest('.gnb-item').addClass('on').find('.gnb-depth').slideDown(200);
		}
	});

	// 메뉴 레이어 닫기
	$('.gnb-close').mouseenter(function(){
		scrollO();
		$('.gnb-item').removeClass('on').find('.gnb-depth').hide();
		$('.gnb-close').hide();
		var bg = $('html').attr('data');
		$('html').attr('class', bg);
	});

	/* ------------------------------------------------------------------------------------------------------------------
		전체메뉴
	------------------------------------------------------------------------------------------------------------------ */
	// 스크롤 디자인
	$('.all-menu-layer .inner-box').each(function(){
		var allH = $(this).closest('.all-menu-layer').outerHeight();
		$(this).closest('.all-menu-layer').attr('data', allH).css({'max-height':allH});

		$(this).wrap('<div class="all-menu-box"></div>');
		$(this).enscroll({
			verticalHandleClass: 'handle',
			minScrollbarLength: 28
		});

		$(this).next('div').addClass('handle-box');
	});

	// 열기/닫기
	$('.btn-allmenu').click(function(){
		allMenu();// 전체메뉴 리사이징시 스크롤 생성
		if($(this).hasClass('close')){
			scrollO();
			$('.all-menu-layer .inner-box').css({'opacity':'0'});
			$('.all-menu-layer').slideUp(200, function(){
				$('.btn-allmenu').removeClass('close');
				$('.menu-dimmed').hide();
			});
		}else{
			scrollX();
			$('.menu-dimmed').show();
			$('.all-menu-layer').slideDown(300, function(){
				$('.btn-allmenu').addClass('close');
				$(this).find('.inner-box').animate({scrollTop:0}, 1, function(){
					$(this).css({'opacity':'1'});
				});
			});
		}
	});

	/* ------------------------------------------------------------------------------------------------------------------
		로케이션
	------------------------------------------------------------------------------------------------------------------ */
	// 넓이 제한
	$('.breadcrumbs .menu-list').each(function(){
		var wid = $(this).outerWidth();
		if(wid > 260){
			$(this).addClass('max-w');
		}else{
			$(this).removeClass('max-w');
		}
	});
	// 열기
	$('.breadcrumbs span.crumb').click(function(){
		if($(this).closest('.crumb-item').hasClass('on')){
			$('.crumb-item').removeClass('on').find('.menu-list').slideUp(100);
		}else{
			$('.crumb-item').removeClass('on').find('.menu-list').slideUp(100);
			$(this).closest('.crumb-item').addClass('on').find('.menu-list').slideDown(200);
		}
	});
	// 닫기
	$(document).mouseup(function(e){
		var bread = $('.breadcrumbs .crumb-item');
		if (!bread.is(e.target) && bread.has(e.target).length === 0){
			$('.breadcrumbs .crumb-item').removeClass('on').find('.menu-list').slideUp(100);
		}
	});

	/* ------------------------------------------------------------------------------------------------------------------
		페이지 타이틀
	------------------------------------------------------------------------------------------------------------------ */
	// 넓이 제한
	$('.page-title-area .layer').each(function(){
		var wid = $(this).outerWidth();
		if(wid > 400){
			$(this).addClass('max-w');
		}else{
			$(this).removeClass('max-w');
		}
	});
	// 열기
	$('.page-title-area .page-title').click(function(){
		if($(this).closest('.inner-box').hasClass('on')){
			$('.page-title-area .inner-box').removeClass('on').find('.layer').slideUp(100);
		}else{
			$('.page-title-area .inner-box').removeClass('on').find('.layer').slideUp(100);
			$(this).closest('.inner-box').addClass('on').find('.layer').slideDown(200);
		}
	});
	// 닫기
	$(document).mouseup(function(e){
		var page = $('.page-title-area .inner-box');
		if (!page.is(e.target) && page.has(e.target).length === 0){
			$('.page-title-area .inner-box').removeClass('on').find('.layer').slideUp(100);
		}
	});

	/* ------------------------------------------------------------------------------------------------------------------
		푸터
	------------------------------------------------------------------------------------------------------------------ */
	/* 공지사항 */
	$('.notice-list').each(function(){
		var tit = $(this).find('.title').outerWidth();
		$(this).css({'padding-left':tit + 8});
	});

	/* 패밀리사이트, 언어 */
	// 열기
	$('.leng-select .btn').click(function(){
		if($(this).closest('.leng-select').hasClass('on')){
			$(this).removeAttr('style');
			$(this).closest('.leng-select').removeClass('on');
		}else{
			$('.leng-select').removeClass('on').find('.btn').removeAttr('style');
			var wid = $(this).closest('.leng-select').find('.layer').outerWidth();
			$(this).css({'width':wid});
			$(this).closest('.leng-select').addClass('on');
		}
	});
	// 닫기
	$(document).mouseup(function(e){
		var select = $('.leng-select');
		if (!select.is(e.target) && select.has(e.target).length === 0){
			$('.leng-select').removeClass('on').find('.btn').removeAttr('style');
		}
	});

	/* ------------------------------------------------------------------------------------------------------------------
		탭
	------------------------------------------------------------------------------------------------------------------ */
	$('.tab-list1').each(function(){
		var len = $(this).find('.tab-item').length;
		var wid = 100/len + '%';
		$(this).find('.tab-item').css({'width':wid});
	});

	$('.tab-item').click(function(){
		var idx = $(this).index();
		$(this).addClass('on').siblings('.tab-item').removeClass('on');
		$(this).closest('.tab-wrap').find('.tab-cont').removeClass('on').eq(idx).addClass('on');
		formArea();// 폼 라벨 넓이 자동 조절
	});

	/* ------------------------------------------------------------------------------------------------------------------
		버튼
	------------------------------------------------------------------------------------------------------------------ */
	/* 하단에 고정 버튼 영역이 있을경우 */
	$('.fix-btm-area').each(function(){
		var fHei = $(this).outerHeight();
		$('.wrapper').css({'padding-bottom':fHei})
	});

	/* 리스트 소팅 */
	$('.sorting-list .btn').click(function(){
		$(this).addClass('on').siblings('.btn').removeClass('on');
	});

	$('.sortingChange').each(function(){
		var onText = $(this).find('.tab-item.on').text();
		$(this).closest('.sortingChange').find('.sorting-select .title').html(onText);
		$(this).find('.tab-item').click(function(){
			var text = $(this).text();
			$(this).closest('.sortingChange').find('.sorting-select .title').html(text);
			form();
		});
	});

	/* 휴대폰 번호 변경하기 (Web-02.03.03.1.html) */
	$('.phone-change .btn').click(function(){
		$(this).closest('.phone-change').find('.form-area2').show();
	})

	/* ------------------------------------------------------------------------------------------------------------------
		폼
	------------------------------------------------------------------------------------------------------------------ */
	form();

	/* ------------------------------------------------------------------------------------------------------------------
		데이트피커
	------------------------------------------------------------------------------------------------------------------ */
	/*
	$('.datepicker').each(function(){
		var data = $(this).closest('.popup-datepicker').attr('data-name');
		if(!$(this).hasClass('afterDis')){
			// 기본
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
					
				},
			});
		}else{
			// 오늘날짜 이후 선택금지
			$(this).datepicker({
				yearRange: '1900:',// 연도 법위
				changeMonth: true,
				changeYear: true,
				firstDay: 0,
				dateFormat: 'dd.mm.yy',
				showOtherMonths: true,
				monthNames : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
				monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
				maxDate:'0',
			});
		}

		$(this).find('td').removeClass('ui-datepicker-current-day');
	});
	*/

	monthData();

	/* 조회기간 설정 (Web-03.02.01.html) */
	$('.search-date .btn-text2').click(function(){
		var data= $(this).attr('data');
		$(this).addClass('on').siblings('.btn-text2').removeClass('on');
		$('.change-month').removeClass('month-1 month-3 month-6').addClass(data);
		monthData();
	});

	/* ------------------------------------------------------------------------------------------------------------------
		슬라이더
	------------------------------------------------------------------------------------------------------------------ */
	/* 휠 제어 
	$('.bxslider').on('mousewheel', function(e) {
		if(event.deltaY > 0){
			wheelSlider.goToNextSlide();
		} else {
			wheelSlider.goToPrevSlide();
		}
		console.log(event.deltaY);
	});
	*/


	/* ------------------------------------------------------------------------------------------------------------------
		레이어팝업
	------------------------------------------------------------------------------------------------------------------ */
	popup();
	$('.btn-popup').click(function(){
		$('html, body').css({'overflow':'hidden'});
		var name = $(this).attr('layer-name');
		$('.layer-popup[layer-name=' + name + ']').addClass('show');
		popup();
	});

	$(document).on('click', '.layer-popup .popClose', function(){
		$('html, body').removeAttr('style');
		$(this).closest('.layer-popup').removeClass('show');
		popup();
	});

	formArea();// 폼 라벨 넓이 자동 조절
	contHei();// 컨텐츠 최소 높이
	allMenu();// 전체메뉴 리사이징시 스크롤 생성
});


$(window).load(function(){
	/* ------------------------------------------------------------------------------------------------------------------
		아코디언
	------------------------------------------------------------------------------------------------------------------ */
	accordion();
	$(document).on('click', 'div.btn-tog, span.btn-tog', function(){
		if($(this).parent().hasClass('on')){
			$(this).parent().removeClass('on').find('.layer').slideUp(100);
		}else{
			$(this).parent().addClass('on').find('.layer').slideDown(200);
		}
	});

	formArea();// 폼 라벨 넓이 자동 조절
	contHei();// 컨텐츠 최소 높이
});

$(window).scroll(function(){
	var winTop = $(window).scrollTop();
	var winLft = $(window).scrollLeft();

	/* 가로 스크롤시 전체메뉴도 같이 이동 */
	$('.all-menu-layer').css({'left':-winLft});


	var headH = $('.head-inner').outerHeight();
	if(winTop > headH){
		$('html').addClass('scroll');
	}else{
		$('html').removeClass('scroll');
	}

	$('.gnb-area .gnb-list .gnb-item .gnb-depth').css({'margin-top':- winTop});
});

/* 리사이징 */
$(window).resize(function(){
	popup();// 레이어팝업
	contHei();// 컨텐츠 최소 높이
	allMenu();// 전체메뉴 리사이징시 스크롤 생성
});

/* 전체메뉴 리사이징시 스크롤 생성 */
function allMenu(){
	var winH = $(window).height();
	var headH = $('.header').outerHeight();
	var fixH = $('.head-fix-box').outerHeight();

	if($('html').hasClass('scroll')){
		$('.all-menu-layer').css({'height':winH - fixH});
	}else{
		$('.all-menu-layer').css({'height':winH - headH});
	}
}

/* 컨텐츠 최소 높이 */
function contHei(){
	var winH = $(window).height();
	var footH = $('.footer').outerHeight();

	$('.container').css({'min-height':winH - footH});

	$('.fix-btm-area').each(function(){
		var hei = $(this).outerHeight();
		$('.container').css({'min-height':winH - footH - hei});
	});
}


/* ======================================================================
	폼 요소
====================================================================== */
function form(){
	$('select.styled1').each(function(){
		if(!$(this).parent().is('.selectbox')){
			var sel = $(this).find('option:selected').text();
			if($(this).hasClass('full')){
				$(this).wrap('<span class="selectbox full"></span>');
			}else{
				$(this).wrap('<span class="selectbox"></span>');
			}
			$(this).closest('.selectbox').prepend('<em class="sel-text">' + sel + '</em>');
		}

		$(this).change(function(){
			var sel = $(this).find('option:selected').text();
			$(this).closest('.selectbox').find('.sel-text').html(sel);
		});
		$(this).focus(function(){
			$(this).closest('.selectbox').addClass('focus');
		}).blur(function(){
			$(this).closest('.selectbox').removeClass('focus');
		});
	});
}

/* ======================================================================
	데이트피커
====================================================================== */
function getDateStr(myDate){
	return (myDate.getDate() + '.' + (myDate.getMonth() + 1) + '.' + myDate.getFullYear());
}

/* 오늘날짜 */
function today(){
	var d = new Date()
	return getDateStr(d)
}

/* 1개월전 */
function month01(){
	var d = new Date();
	var monthOfYear = d.getMonth();
	d.setMonth(monthOfYear - 1);
	return getDateStr(d);
}

/* 3개월전 */
function month03(){
	var d = new Date();
	var monthOfYear = d.getMonth();
	d.setMonth(monthOfYear - 3);
	return getDateStr(d);
}

/* 6개월전 */
function month06(){
	var d = new Date();
	var monthOfYear = d.getMonth();
	d.setMonth(monthOfYear - 6);
	return getDateStr(d);
}

function monthData(){
	$('.datepicker').each(function(){
		var data = $(this).closest('.popup-datepicker').attr('data-name');
		if(!$(this).hasClass('afterDis')){
			// 기본
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
					
				},
			});
		}else{
			// 오늘날짜 이후 선택금지
			$(this).datepicker({
				yearRange: '1900:',// 연도 법위
				changeMonth: true,
				changeYear: true,
				firstDay: 0,
				dateFormat: 'dd.mm.yy',
				showOtherMonths: true,
				monthNames : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
				monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
				maxDate:'0',
			});
		}

		$(this).find('td').removeClass('ui-datepicker-current-day');
	});

	/* 오늘 */
	$('.today').each(function(){
		$(this).val(today());
	});
	/* 1개월전 */
	$('.month-1').each(function(){
		$(this).val(month01());
	});
	/* 3개월전 */
	$('.month-3').each(function(){
		$(this).val(month03());
	});
	/* 6개월전 */
	$('.month-6').each(function(){
		$(this).val(month06());
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
	$('.layer-popup .popup').each(function(){
		var popW = $(this).outerWidth();
		var popH = $(this).outerHeight();
		$(this).css({'margin-left':-popW/2, 'margin-top':-popH/2}).attr('data', popH);

		var winH = $(window).height();
		var data = $(this).attr('data');
		if(data > winH){
			$(this).closest('.layer-popup').addClass('h-full');
		}else{
			$(this).closest('.layer-popup').removeClass('h-full');
		}
	});
}


/* ======================================================================
	기타
====================================================================== */
/* 아코디언 패딩 (Web-08.02.01.html) */
function accordion(){
	$('div.btn-tog, span.btn-tog').each(function(){
		if($(this).parent().hasClass('on')){
			$(this).parent().find('.layer').show();
		}
	});

	$('.accordion-item .btn-tog .value-text').each(function(){
		var len = $(this).text().length;
		var wid = $(this).outerWidth() - len;
		$(this).closest('.btn-tog').css({'padding-left':wid});
	});
}




/* 페이지 스크롤 막기 */
function scrollX(){
	$('.wrapper').on('scroll touchmove mousewheel', function(event) {
		event.preventDefault();
		event.stopPropagation();
		return false;
	});
}

/* 페이지 스크롤 허용 */
function scrollO(){
	$('.wrapper').off('scroll touchmove mousewheel');
}


/* 폼 라벨 넓이 자동 조절 */
function formArea(){
	$('.form-area').each(function(){
		var $item = $(this).find('.form-item label');
		var boxArray = $item.map(function(){
			return $(this).outerWidth();
		});
		var moreWid = Math.max.apply(Math , boxArray);
		$item.closest('.form-item').css('padding-left', moreWid + 20);
		$item.closest('.login-box').find('.error-text').css('padding-left', moreWid + 20);
	});
}