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
	$('.tab-item').click(function(){
		var idx = $(this).index();
		$(this).addClass('on').siblings('.tab-item').removeClass('on');
		$(this).closest('.tab-wrap').find('.tab-cont').removeClass('on').eq(idx).addClass('on');
	});

	/* ------------------------------------------------------------------------------------------------------------------
		아코디언
	------------------------------------------------------------------------------------------------------------------ */
	$('.btn-tog').click(function(){
		if($(this).parent().hasClass('on')){
			$(this).parent().removeClass('on').find('.layer').slideUp(100);
		}else{
			$(this).parent().addClass('on').find('.layer').slideDown(200);
		}
	});

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
	$('select.styled1').each(function(){
		if(!$(this).parent().is('.selectbox')){
			var sel = $(this).find('option:selected').text();
			$(this).wrap('<span class="selectbox"></span>');
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
	
}