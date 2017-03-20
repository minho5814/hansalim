/*
	최초 작성일 : 2017-03-06
	최초 작성자 : 최민호
	소속 : (주)그레이블루/퍼블리싱팀
*/

$(window).load(function(){
	/* =================================================================
		상단 비주얼 슬라이드
	================================================================= */
	// 마우스 오버시 탭 변환
	$('.title-item .text').mouseenter(function(){
		var idx = $(this).parents('.title-item').index();
		$(this).parents('.visual-banner').find('.title-item').removeClass('on').eq(idx).addClass('on');
		$(this).parents('.visual-banner').find('.img-item').removeClass('on').eq(idx).addClass('on');
	});
	// 마우스 클릭시 탭 변환 (자동 슬라이드 전용 클릭)
	$('.title-item').click(function(){
		var idx = $(this).index();
		$(this).parents('.visual-banner').find('.title-item').removeClass('on').eq(idx).addClass('on');
		$(this).parents('.visual-banner').find('.img-item').removeClass('on').eq(idx).addClass('on');
	});

	// 다음 버튼
	$('.btn-next').click(function(){
		var idx = $(this).parents('.visual-banner').find('.title-item.on').index();
		var len = $(this).parents('.visual-banner').find('.title-item').length - 1;
		if(idx >= len){
			$(this).parents('.visual-banner').find('.title-item:first-child').click();
		}else{
			$(this).parents('.visual-banner').find('.title-item.on').next('.title-item').click();
		}
	});
	// 이전 버튼
	$('.btn-prev').click(function(){
		var idx = $(this).parents('.visual-banner').find('.title-item.on').index();
		var len = $(this).parents('.visual-banner').find('.title-item').length - 1;
		if(idx <= 0){
			$(this).parents('.visual-banner').find('.title-item:last-child').click();
		}else{
			$(this).parents('.visual-banner').find('.title-item.on').prev('.title-item').click();
		}
	});

	// 자동 슬라이드
	var sSpeed = 4000;// 슬라이드 속도
	visualTimer = setInterval(function(){
		$('.btn-next').click();
	}, sSpeed);

	// 재생/멈춤 버튼
	$('.btn-stop').click(function(){
		if($(this).hasClass('play')){
			$(this).removeClass('play');
			visualTimer = setInterval(function(){
				$('.btn-next').click();
			}, sSpeed);
		}else{
			$(this).addClass('play');
			clearInterval(visualTimer);
		}
	});

	// 마우스 오버시 자동 슬라이드 먼춤
	$('.visual-banner').mouseenter(function(){
		clearInterval(visualTimer);
	});
	// 마우스 아웃시 자동 슬라이드 시작
	$('.visual-banner').mouseleave(function(){
		if($('.btn-stop').hasClass('play')){
			clearInterval(visualTimer);
		}else{
			$(this).removeClass('play');
			visualTimer = setInterval(function(){
				$('.btn-next').click();
			}, sSpeed);
		}
	});

	/* =================================================================
		새로 공급하는 물품
	================================================================= */
	// 슬라이드
	$('.thumb-box .bxslider').bxSlider({
		controls:false,
		speed:400
	});

	// 상품갯수 버튼
	$('.btn-plus').click(function(){
		var defaultN = $(this).parents('.volume').find('.text-box').val()*1;
		$(this).parents('.volume').find('.text-box').val(defaultN+1);
	});
	$('.btn-minus').click(function(){
		var defaultN = $(this).parents('.volume').find('.text-box').val()*1;
		if(defaultN <= 1){
			$(this).parents('.volume').find('.text-box').val('1');
		}else{
			$(this).parents('.volume').find('.text-box').val(defaultN-1);
		}
	});

	/* =================================================================
		슬라이드 띠배너
	================================================================= */
	$('.slide-banner .bxslider').bxSlider({
		controls:false,
		speed:400
	});

	/* =================================================================
		맞춤형 추천 물품
	================================================================= */
	$('.tab-item').click(function(){
		var idx = $(this).index();
		$(this).parents('.tab-content').find('.tab-item').removeClass('on').eq(idx).addClass('on');
		$(this).parents('.tab-content').find('.thumb-list2').removeClass('on').eq(idx).addClass('on');
	});

	/* =================================================================
		이즈음 밥상
	================================================================= */
	$('.slide-cont .bxslider').bxSlider({
		//infiniteLoop:false,
		speed:400
	});

	/* =================================================================
		한살림 소식
	================================================================= */
	$('.news-list').masonry({
		itemSelector: '.news-item'
	});


	/* =================================================================
		공통
	================================================================= */
	/* 슬라이드가 하나일 경우 페이저 히든처리 */
	$('.bx-pager').each(function(){
		var len = $(this).find('.bx-pager-item').length;
		if(len <= 1){
			$(this).parents('.bx-controls').hide();
		}
	});
});