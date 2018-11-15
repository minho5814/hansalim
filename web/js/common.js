$(document).ready(function(){
	/* ------------------------------------------------------------------------------------------------------------------
		Gnb
	------------------------------------------------------------------------------------------------------------------ */
	$('html').each(function(){
		var color = $(this).attr('class');
		$(this).attr('data', color);
	});

	// 메뉴 레이어 열기
	$('.gnb-area .gnb-list .item').mouseenter(function(){
		// 전체메뉴 닫기
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
		$('.gnb-item').removeClass('on').find('.gnb-depth').hide();
		$('.gnb-close').hide();
		var bg = $('html').attr('data');
		$('html').attr('class', bg);
	});

	/*
		전체메뉴
	*/
	$('.btn-allmenu').click(function(){
		if($(this).hasClass('close')){
			$('.all-menu-layer').slideUp(200, function(){
				$('.btn-allmenu').removeClass('close');
				$('.menu-dimmed').hide();
			});
		}else{
			$('.menu-dimmed').show();
			$('.all-menu-layer').slideDown(300, function(){
				$('.btn-allmenu').addClass('close');
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
	$(document).mouseup(function (e){
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
	$(document).mouseup(function (e){
		var page = $('.page-title-area .inner-box');
		if (!page.is(e.target) && page.has(e.target).length === 0){
			$('.page-title-area .inner-box').removeClass('on').find('.layer').slideUp(100);
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
	});

	/* ------------------------------------------------------------------------------------------------------------------
		아코디언
	------------------------------------------------------------------------------------------------------------------ */
	$('div.btn-tog, span.btn-tog').click(function(){
		if($(this).parent().hasClass('on')){
			$(this).parent().removeClass('on').find('.layer').slideUp(100);
		}else{
			$(this).parent().addClass('on').find('.layer').slideDown(200);
		}
	});

	/* ------------------------------------------------------------------------------------------------------------------
		버튼
	------------------------------------------------------------------------------------------------------------------ */
	/* 하단에 고정 버튼 영역이 있을경우 */
	$('.fix-btm-area').each(function(){
		$('.container').css({'padding-bottom':'220px'})
	});

	/* 리스트 소팅 */
	$('.sorting-list .btn').click(function(){
		$(this).addClass('on').siblings('.btn').removeClass('on');
	});

	/* 휴대폰 번호 변경하기 (Web-02.03.03.1.html) */
	$('.phone-change .btn').click(function(){
		$(this).closest('.phone-change').find('.form-area2').show();
	})

	/* ------------------------------------------------------------------------------------------------------------------
		폼
	------------------------------------------------------------------------------------------------------------------ */
	form();

	/* 데이트피커 */
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
				
			}
		});
		$(this).find('td').removeClass('ui-datepicker-current-day');
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

	$('.bxslider').on('mousewheel DOMMouseScroll', function(event) {
		if(event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
			wheelSlider.goToPrevSlide();
		}
		else {
			wheelSlider.goToNextSlide();
		}
		return false;
	});

	// 슬라이더 위에서 스크롤 금지
	$('.bxslider').on('scroll touchmove mousewheel', function(event) {
		event.preventDefault();
		event.stopPropagation();
		return false;
	});
	/* 스크롤 허용
	$('.bxslider').off('scroll touchmove mousewheel');
	*/


	/* ------------------------------------------------------------------------------------------------------------------
		레이어팝업
	------------------------------------------------------------------------------------------------------------------ */
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
	popup();// 레이어팝업
});



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
		console.log(winH);
	});
}