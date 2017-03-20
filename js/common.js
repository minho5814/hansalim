/*
	최초 작성일 : 2017-03-06
	최초 작성자 : 최민호
	소속 : (주)그레이블루/퍼블리싱팀
	# 최초 작성자 이외 수정시 주석 필수 #
*/

$(window).load(function(){
	// 상단 배너 닫기
	$('.top-banner .btn-close').click(function(){
		$(this).parents('.top-banner').slideUp(300, function(){
			$(this).remove();
		});
	});

	/* 전체보기 레이어에 gnb 복사 */
	var gnb = $('.gnb-list').html();
	$('.gnb-layer .layer-top').append('<ul class="gnb-list">');
	$('.gnb-layer .layer-top .gnb-list').html(gnb);

	/* 전체메뉴 열기 */
	$('.gnb .btn-menu').click(function(){
		$('.head-btm').css({'z-index':'15'});
		$('.gnb-layer').fadeIn(200);
		$('.gnb').append('<div class="gnb-close">');
	});
	$(document).on('click', '.btn-close, .gnb-close', function(){
		$('.head-btm').css({'z-index':'10'});
		$('.gnb-layer').fadeOut(100);
		$('.gnb-close').hide();
	});

	/* 달력 (datepicker) */
	if($('.datepicker').length >= 1){
		$('.datepicker').datepicker({
			showOn:'button',
			dateFormat:'yy/mm/dd',
			monthNames :['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			showMonthAfterYear:true,
			dayNamesMin:['월', '화', '수', '목', '금', '토', '일'],
			firstDay: -1
		});
	}

	/* =============================================================================
		슬라이더
	============================================================================= */
	/* 관련물품 */
	var bxsliderLen = $('.bxslider').length;
	if(bxsliderLen >= 1){
		$('.thumb-slide1 .bxslider').bxSlider({
			//infiniteLoop:false,
			speed:400
		});

		$('.bx-pager').each(function(){
			var len = $(this).find('.bx-pager-item').length;
			if(len <= 1){
				$(this).hide();
			}
		});

		$('.bxslider').animate({'opacity':'1'}, 200);
	}

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
			var winW = $(window).width();
			var gnbW = $('.gnb').outerWidth();
			var right = winW - ($('.gnb').offset().left + gnbW - 20);
			$('.down .head-top .search-box').css({'right':right});
		}else{
			$('html').removeClass('down');
			$('.head-btm .gnb').css({'left':'0'});
			$('.head-top .search-box').css({'right':'0'});
		}
	});
	$(window).scroll();


	/* =============================================================================
		공통
	============================================================================= */
	/* ------------------------------------------------------------------------------------------------------------------------------------
		폼요소
	------------------------------------------------------------------------------------------------------------------------------------ */
	/* 페스워드 (나눔스퀘어폰트가 일부 브라우저에서 인코딩되지 않는 현상 해결) */
	$('input[type=password]').keyup(function(){
		if($(this).val() == 0){
			$(this).removeClass('click');
		}else{
			$(this).addClass('click');
		}
	});
	/* 검색 포커스 */
	$('.search-box input[type=text]').each(function(){
		$(this).focus(function(){
			$(this).parents('.search-box').addClass('focus');
		});
		$(this).blur(function(){
			$(this).parents('.search-box').removeClass('focus');
		});
	});

	/*
		셀렉트 디자인
		++ 셀렉트 선택값(value)은 변수 oVal로 처리 ++
	*/
	$('select.styled1').each(function(){
		var title = $(this).find('option:first-child').html();
		var wid = $(this).outerWidth();
		$(this).wrap('<div class="select-box">');
		$(this).parents('.select-box').css({'width':wid}).append('<div class="select-title">');
		$(this).parents('.select-box').find('.select-title').html(title);

		$(this).parents('.select-box').append('<ul class="select-list">');
		var option = $(this).find('option');
		$(option).each(function(){
			var txt = $(this).html();
			$(this).parents('.select-box').find('.select-list').append('<li class="item">' + txt);
			$(this).parents('.select-box').find('.item:first-child').addClass('on');
		});

		$(this).change(function(){
			var transVal = $(this).val();
			$('.select-title').html(transVal);
		});

		if($(this).attr('disabled')){
			$(this).parents('.select-box').addClass('disabled');
		}
	});

	$('.select-title').click(function(){
		if($(this).parents('.select-box').hasClass('disabled') == false){
			$(this).parents('.select-box').addClass('focus').find('.select-list').slideDown(200);
			$(this).parents('.select-box').append('<div class="select-close" style="position:fixed;left:0;right:0;top:0;bottom:0;">');
		}
	});
	$('.select-box .item').mouseenter(function(){
		$(this).parents('.select-box').find('.item').removeClass('on');
		$(this).addClass('on');
	});
	$('.select-box .item').click(function(){
		var idx = $(this).index();
		var oVal = $(this).parents('.select-box').find('option').eq(idx).val();
		var txt = $(this).html();
		$(this).addClass('on');
		$(this).parents('.select-box').find('select').val(oVal);
		$(this).parents('.select-box').find('.select-title').html(txt);
		$(this).parents('.select-box').removeClass('focus').attr('value', oVal);
		$(this).parents('.select-list').hide();
		$('.select-close').hide();
	});
	$(document).on('click', '.select-close', function(){
		$('.select-close').hide();
		$('.select-list').hide();
		$('.select-box').removeClass('focus');
	});

	/* 체크박스 */
	$('input[type=checkbox].styled1').each(function(){
		$(this).parents('label').addClass('check-radio');
		$(this).wrap('<span class="checkbox">');
		if(this.checked){
			$(this).parents('.checkbox').addClass('checked');
		}
		if(this.disabled){
			$(this).parents('.checkbox').addClass('disabled');
		}
	});
	$('.checkbox input[type=checkbox].styled1').change(function(){
		if(this.checked){
			$(this).parents('.checkbox').addClass('checked');
		}else{
			$(this).parents('.checkbox').removeClass('checked');
		}
	});

	/* 라디오박스 */
	$('input[type=radio].styled1').each(function(){
		$(this).parents('label').addClass('check-radio');
		$(this).wrap('<span class="radiobox">');
		if(this.checked){
			$(this).parents('.radiobox').addClass('checked');
		}
		if(this.disabled){
			$(this).parents('.radiobox').addClass('disabled');
		}
	});
	$('.radiobox input[type=radio].styled1').change(function(){
		var name = $(this).attr('name');
		if(this.checked){
			$('.radiobox input[name='+name+']').parents('.radiobox').removeClass('checked');
			$(this).parents('.radiobox').addClass('checked');
		}
	});

	/* =============================================================================
		로그인 (lo/)
	============================================================================= */
	/* 아이디 찾기 IM-LO0201.html */
	// 인증 라디오 선택시 동작
	$('.id-radio').click(function(){
		var idx = $(this).index();
		$(this).parents('.center-cont').find('.form-area').removeClass('on').eq(idx).addClass('on');
	});
});