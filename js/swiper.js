/* slider01 */
const slider01 = new Swiper('.slider01', {
    // Optional parameters
   // スライドの間隔ー単位はpx
	spaceBetween: 30,
	// 表示されるスライドの枚数
	slidesPerView: 1,
	// スライドの高さに合わせてSwiperの高さを変える
	autoHeight: true,
	// ループする
	loop: true,

	/*自動で再生する*/
	autoplay: {
		// スライドが動く間隔。(これなら3秒)
		delay: 3000,
		// trueなら最後のスライドまで行ったら停止する。falseなら最初に戻る
		stopOnLastSlide: false,
		// trueなら触った後停止falseなら再生され続ける
		disableOnInteraction: false,
		// trueなら最後のスライドまで行ったら停止する。falseなら最初に戻る
		reverseDirection: false
	},

	/*スライドボタン*/
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	/*ページネーション*/
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});

/* slider02 */
const slider02 = new Swiper('.slider02', {
	spaceBetween: 10,
	centeredSlides: true, // 両端見切れにする
	slidesPerView: 1.8,
	autoHeight: true, // スライドの高さに合わせてSwiperの高さを変える
	loop: true,	// ループする
	speed: 6000,
	allowTouchMove: false, // スワイプ無効
	autoplay: {
		delay: 0
	},
	breakpoints: {
		768: {
			slidesPerView: 3,
		},
		1024: {
			spaceBetween: 20,
			slidesPerView: 4,
		},
		1440: {
			spaceBetween: 20,
		  	slidesPerView: 5,
		}
	  },
});
  