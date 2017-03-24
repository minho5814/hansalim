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
		$('.gnb-close').hide();
		$('.gnb-layer').fadeOut(100, function(){
			$('.lnb-item, .menu-box .gnb-depth').removeClass('on');
			$('.lnb-item:first-child, .menu-box .gnb-depth:first-child').addClass('on');
		});
	});

	/* gnb 레이어 LNB 오버 */
	$('.lnb-item').mouseenter(function(){
		var idx = $(this).index();
		$('.lnb-item').removeClass('on').eq(idx).addClass('on');
		$('.menu-box .gnb-depth').removeClass('on').eq(idx).addClass('on');
	});

	/* 달력 (datepicker) */
	$('.datepicker').each(function(){
		$(this).datepicker({
			showOn:'button',
			dateFormat:'yy/mm/dd',
			monthNames :['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			showMonthAfterYear:true,
			dayNamesMin:['일', '월', '화', '수', '목', '금', '토'],
			firstDay: 0,
			onSelect: function(e){
				if($(this).parents('.calendar').hasClass('term') == false){
					var date = new Date($(this).datepicker({ dateFormat:'yy/mm/dd'}).val()),
					week = new Array('일', '월', '화', '수', '목', '금', '토');
					if (week[date.getDay()]!= undefined){
						$(this).val($(this).val() + '(' + (week[date.getDay()]) + ')');
					}
				}
			}
		});

		var now = new Date();
		var year= now.getFullYear();
		var mon = (now.getMonth()+1)>9 ? ''+(now.getMonth()+1) : '0'+(now.getMonth()+1);
		var day = now.getDate()>9 ? ''+now.getDate() : '0'+now.getDate();
		var week = new Array('일', '월', '화', '수', '목', '금', '토');
		var dateVal = year + '/' + mon + '/' + day + '(' + week[now.getDay()] + ')';

		var newDay = new Date( year, mon, "");
		var lastDay = newDay.getDate();
		var firstVal = year + '/' + mon + '/' + '01'; // 이번달 시작일
		var lastVal = year + '/' + mon + '/' + lastDay; // 이번달 마지막일

		if($(this).parents('.calendar').hasClass('term')){
			if($(this).hasClass('start')){
				// 이번달 시작일 호출
				$(this).val(firstVal);
			}else{
				// 이번달 마지막일 호출
				$(this).val(lastVal);
			}
		}else{
			// 오늘 날짜 호출
			$(this).val(dateVal);
		}
	});

	// 캘린더 개월 설정
	$('.btn-term').click(function(){
		$(this).parents('.btn-area').find('.btn-term').removeClass('on');
		$(this).addClass('on');

		var now = new Date();
		var year= now.getFullYear();
		var mon1 = (now.getMonth()+1)>9 ? ''+(now.getMonth()+1) : '0'+(now.getMonth()+1);
		var mon3 = (now.getMonth()+3)>9 ? ''+(now.getMonth()+3) : '0'+(now.getMonth()+3);
		var mon6 = (now.getMonth()+6)>9 ? ''+(now.getMonth()+6) : '0'+(now.getMonth()+6);
		var day = now.getDate()>9 ? ''+now.getDate() : '0'+now.getDate();

		var newDay = new Date( year, mon3, "");
		var lastDay = newDay.getDate();
		var firstVal = year + '/' + mon1 + '/' + '01'; // 이번달 시작일
		var lastVal = year + '/' + mon3 + '/' + lastDay; // 이번달 마지막일

		var endMon3 = '0' + (mon3 - 12);
		var endMon3 = '0' + (mon6 - 12);

		$(this).parents('.search-form').find('.datepicker.start').val(firstVal);
		// 1개월
		if($(this).hasClass('month1')){
			var lastVal = year + '/' + mon1 + '/' + lastDay;
			$(this).parents('.search-form').find('.datepicker.end').val(lastVal);
		}
		// 3개월
		if($(this).hasClass('month3')){
			if(mon3 >= 13){
				var lastVal = (year+1) + '/' + endMon3 + '/' + lastDay;
				$(this).parents('.search-form').find('.datepicker.end').val(lastVal);
			}else{
				var lastVal = year + '/' + mon3 + '/' + lastDay;
				$(this).parents('.search-form').find('.datepicker.end').val(lastVal);
			}
		}
		// 6개월
		if($(this).hasClass('month6')){
			if(mon3 >= 13){
				var lastVal = (year+1) + '/' + endMon6 + '/' + lastDay;
				$(this).parents('.search-form').find('.datepicker.end').val(lastVal);
			}else{
				var lastVal = year + '/' + mon6 + '/' + lastDay;
				$(this).parents('.search-form').find('.datepicker.end').val(lastVal);
			}
		}
	});

	/* ===========================================================================================================
		슬라이더
	=========================================================================================================== */
	/* 관련물품 */
	var bxsliderLen = $('.bxslider').length;

	$('.thumb-slide1 .bxslider').each(function(){
		$(this).bxSlider({
			//infiniteLoop:false,
			speed:400
		});
	});

	$('.thumb-slide2 .bxslider').each(function(){
		$(this).bxSlider({
			//infiniteLoop:false,
			speed:400,
			pagerType:'short'
		});
	});

	$('.bx-pager').each(function(){
		var len = $(this).find('.bx-pager-item').length;
		if(len <= 1){
			$(this).hide();
		}
	});
	$('.bxslider').animate({'opacity':'1'}, 200);

	/* ===========================================================================================================
		탭메뉴
	=========================================================================================================== */
	/*상세 탭*/
	$('.tab-item').click(function(){
		var idx = $(this).index();
		var cont_height = $('.cont-wrap').offset().top - $('.tab-wrap').outerHeight() - $('.head-btm').outerHeight() ;

		$('.tab-item').removeClass('on').eq(idx).addClass('on');
		$('.tab-content').removeClass('on').eq(idx).addClass('on');
		$('html, body').animate({scrollTop:cont_height});
	});

	/*방사성물질 검사 탭*/
	$('.test-term .year > li').click(function(){
		if($(this).hasClass('on')){
			$(this).addClass('on').children('.month').show();
		}else{
			$('.test-term .year > li').removeClass('on').children('.month').hide().find('li').removeClass('on');
			$(this).addClass('on').children('.month').show();
		}
	});

	$('.month li').click(function(){
		$(this).addClass('on').siblings('li').removeClass('on');
	});

	/* ===========================================================================================================
		상품상세 faq
	=========================================================================================================== */
	//아코디언
	$('.faq-list .question').click(function(){
		if($(this).parents('li').hasClass('on')){
			$(this).parents('li').removeClass('on').find('.answer').slideUp(100);
		}else{
			$('.faq-list .question').parents('li').removeClass('on').find('.answer').slideUp(100);
			$(this).parents('li').addClass('on').find('.answer').slideDown(200);
		}
	});

	//글자수
	$('#text-write').keyup(function (e){
		var content = $(this).val();
		//$(this).height(((content.split('\n').length + 1) * 1.5) + 'em');
		$('.text-leng').html(content.length + '/500자');
	});

	/* ===========================================================================================================
		스크롤 이벤트
	=========================================================================================================== */
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

		if($('.tab-wrap').length >= 1){
			var tabTop = $('.tab-wrap').offset().top;
			if(winTop >= tabTop){
				$('html').addClass('tab');
			}else{
				$('html').removeClass('tab');
			}
		}

	});
	$(window).scroll();


	/* ===========================================================================================================
		공통
	=========================================================================================================== */
	/* -----------------------------------------------------------------------------------------------------------
		폼요소
	----------------------------------------------------------------------------------------------------------- */
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

	/* 수량체크 */
	$('body').click(function(){
		$('.volume-box').removeClass('on');
	});
	$('.volume-box').click(function(){
		$('.volume-box').removeClass('on');
		$(this).addClass('on');
		return false;
	});
	$('.volume-box .btn').each(function(){
		if($(this).parents('.volume-box').hasClass('disabled')){
			$(this).parents('.volume-box').find('.volume').prop('disabled', true).val('0');
		}
		$(this).click(function(){
			if($(this).parents('.volume-box').hasClass('disabled') == false){
				if($(this).hasClass('btn-plus')){
					var defaultN = $(this).parents('.volume-box').find('.volume').val()*1;
					$(this).parents('.volume-box').find('.volume').val(defaultN+1);
				}else{
					var defaultN = $(this).parents('.volume-box').find('.volume').val()*1;
					if(defaultN <= 1){
						$(this).parents('.volume-box').find('.volume').val('1');
					}else{
						$(this).parents('.volume-box').find('.volume').val(defaultN-1);
					}
				}
			}
		});
	});

	/* 인풋 셀렉트 레이어 타입 */
	$('.input-select input').mouseenter(function(){
		$(this).parents('.input-select').find('.list').show();
	});
	$('.input-select input').keyup(function(){
		var byte = $(this).val().length;
		$(this).parents('.input-select').find('.byte-text .byte').html(byte);
	});
	$('.input-select .list .item').click(function(){
		var txt = $(this).html();
		var byte = $(this).text().length;
		$(this).parents('.input-select').find('input').val(txt);
		$(this).parents('.input-select').find('.list').hide();
		$(this).parents('.input-select').find('.byte-text .byte').html(byte);
	});
	$('.input-select').mouseleave(function(){
		$(this).find('.list').hide();
	});

	/* ===========================================================================================================
		로그인 (lo/)
	=========================================================================================================== */
	/* 아이디 찾기 IM-LO0201.html */
	// 인증 라디오 선택시 동작
	$('.id-radio').click(function(){
		var idx = $(this).index();
		$(this).parents('.center-cont').find('.form-area').removeClass('on').eq(idx).addClass('on');
	});


	/* ===========================================================================================================
		회원가입 (jo/)
	=========================================================================================================== */
	/* 약관 전체 동의 체크박스 (IM-JO0301.html) */
	$('.all-check input[type=checkbox]').change(function(){
		if(this.checked){
			$(this).parents('.terms-wrap').find('input[type=checkbox]').prop('checked', true);
			$(this).parents('.terms-wrap').find('.checkbox').addClass('checked');
		}else{
			$(this).parents('.terms-wrap').find('input[type=checkbox]').prop('checked', false);
			$(this).parents('.terms-wrap').find('.checkbox').removeClass('checked');
		}
	});
	$('.terms-box input[type=checkbox]').change(function(){
		var boxLen = $(this).parents('.terms-wrap').find('.terms-box input[type=checkbox]').length;
		var ckeckLen = $(this).parents('.terms-wrap').find('.terms-box input[type=checkbox]:checked').length;
		if(ckeckLen >= boxLen){
			$(this).parents('.terms-wrap').find('.all-check input[type=checkbox]').prop('checked', true);
			$(this).parents('.terms-wrap').find('.all-check .checkbox').addClass('checked');
		}else{
			$(this).parents('.terms-wrap').find('.all-check input[type=checkbox]').prop('checked', false);
			$(this).parents('.terms-wrap').find('.all-check .checkbox').removeClass('checked');
		}
	});


	/* 이메일 셀렉트박스 (IM-JO0401.html) */
	$('.e-mail-form .select-list .item').click(function(){
		var mailTxt = $(this).html();
		if($(this).index() <= 0){
			$(this).parents('.e-mail-form').find('.transTxt').val('').focus();
		}else{
			$(this).parents('.e-mail-form').find('.transTxt').val(mailTxt);
		}
	});

	/* 도움말 보기 (IM-JO0301.html) */
	$('.btn-hint').click(function(){
		if($(this).parents('.btn-layer').hasClass('on')){
			$('.btn-layer').removeClass('on').find('.hint-layer').slideUp(100);
		}else{
			$('.btn-layer').removeClass('on').find('.hint-layer').slideUp(100);
			$(this).parents('.btn-layer').addClass('on').find('.hint-layer').slideDown(200);
		}
	})
	$('.btn-layer .btn-close').click(function(){
		$('.btn-layer').removeClass('on').find('.hint-layer').slideUp(100);
	});

	/* ===========================================================================================================
		장바구니 (sh/)
	=========================================================================================================== */
	/* 장바구니 (IM-SH01.html) */
	// 아코디언
	$('.list-group.on .list-content').slideDown(200);
	$('.list-title .btn-list-close').click(function(){
		if($(this).parents('.list-group').hasClass('on')){
			$(this).parents('.list-group').removeClass('on').find('.list-content').slideUp(100);
		}else{
			$(this).parents('.list-group').addClass('on').find('.list-content').slideDown(200);
		}
	});
	// 테이블 안 체크박스 전체 선택
	$('th input[type=checkbox]').change(function(){
		if(this.checked){
			$(this).parents('table').find('tr').not('.bg').find('input[type=checkbox]').prop('checked', true).parents('.checkbox').addClass('checked');
			$(this).parents('table').find('input[type=checkbox]:disabled').prop('checked', false).parents('.checkbox').removeClass('checked');
		}else{
			$(this).parents('table').find('tr').not('.bg').find('input[type=checkbox]').prop('checked', false).parents('.checkbox').removeClass('checked');
		}
	});
	$('td input[type=checkbox]').change(function(){
		var boxLen = $(this).parents('table').find('td input[type=checkbox]').length;
		var disLen = $(this).parents('table').find('td input[type=checkbox]:disabled').length;
		var bgLen = $(this).parents('table').find('.bg td input[type=checkbox]').length;
		var len = boxLen - (disLen + bgLen);
		var checkLen = $(this).parents('table').find('td input[type=checkbox]:checked').length;
		var bgCheckLen = $(this).parents('table').find('.bg td input[type=checkbox]:checked').length;
		if(checkLen - bgCheckLen >= len){
			$(this).parents('table').find('th input[type=checkbox]').prop('checked', true).parents('.checkbox').addClass('checked');
		}else{
			$(this).parents('table').find('th input[type=checkbox]').prop('checked', false).parents('.checkbox').removeClass('checked');
		}
	});

	/* ===========================================================================================================
		레이어 팝업
	=========================================================================================================== */
	$('.btn-popup').click(function(){
		var zIdx = $('.layer-popup').css('z-index');
		$('body').append('<div class="popup-close">');
		$('.popup-close').css({'z-index':zIdx-1});
	});
	$(document).on('click', '.layer-popup .btn-close, .popup-close', function(){
		$('.layer-popup').fadeOut(200);
		$('.popup-close').remove();
		if($(this).parents().hasClass('long')){		
			$('body').css('overflow-y','inherit');
		}

	});
});
