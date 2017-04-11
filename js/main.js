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
	$('.title-item .text').click(function(){
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
	var sSpeed = 3000;// 슬라이드 속도
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

	/* 주요 카테고리/테마관/서브브랜드 */
	$('.category-slide .bxslider').each(function(){
		$(this).bxSlider({
			infiniteLoop:false,
			hideControlOnEnd: true,
			slideWidth: 215,
			minSlides: 1,
			maxSlides: 5,
			moveSlides: 5,
			speed:400
		});
	});
	$('.category-slide').each(function(){
		if($(this).hasClass('on')){
			$(this).css({'opacity':'1'}).show()
		}else{
			$(this).hide().css({'opacity':'1'});
		}
	});

	$('.category-tab .item').click(function(){
		var idx = $(this).index();
		if($(this).hasClass('on') == false){
			$('.category-tab .item').removeClass('on').eq(idx).addClass('on');
			$('.category-slide').removeClass('on').fadeOut(200).eq(idx).addClass('on').fadeIn(200);
		}
	});

	/* 띠 배너 */
	$('.line-banner .bxslider').bxSlider({
		controls:false,
		speed:400
	});

	/* 조합원 추천 물품 */
	$('.recommend-tab .right-slide .thumb-slide1').hide().css({'opacity':'1'});
	$('.recommend-tab .right-slide .thumb-slide1.on').show();
	$('.tab-text').click(function(){
		var idx = $(this).index();
		$('.tab-text').removeClass('on').eq(idx).addClass('on');
		$('.recommend-tab .right-slide .thumb-slide1').removeClass('on').hide().eq(idx).addClass('on').show();
	});

	/* 이즈음 밥상 */
	$('.recipe-cont .bxslider').each(function(){
		$(this).bxSlider({
			infiniteLoop:false,
			adaptiveHeight: true,
			hideControlOnEnd: true,
			speed:400
		});

		var dHei = $('.goods-wrap').outerHeight();
		$('.btn-goods-more').click(function(){
			$('.goods-wrap').css({'height':'auto'});
		});
	});

	$('.grid').masonry({
		itemSelector:'.grid-item',
		columnWidth:366,
		gutter:11
	});
});
