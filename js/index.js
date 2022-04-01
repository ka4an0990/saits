/*----BURGER------------------------------------*/

function burgerClick(){
	let burger = document.querySelector('.burger');
	let menu = document.querySelector('.header_menu');
	let body = document.querySelector('body');

	burger.addEventListener('click', ()=>{
		burger.classList.toggle('active');
		menu.classList.toggle('active');
		body.classList.toggle('lock');
	});
}
burgerClick()

/*----TABS--------------------------------------*/

function tabs(){
	let elButtons = document.querySelectorAll('.tabs_btn');

	for(let elButton of elButtons){
		elButton.addEventListener('click', function(evt){
			let elParentActive = document.querySelector('.tabs_nav li.activee');
			elParentActive.classList.remove('activee');

			let elParent = evt.target.parentElement.parentElement;
			elParent.classList.add('activee');

			let hashBlock = '#' + elParent.getAttribute('data-block')

			let elBlockActive = document.querySelector('.ourteam_tabs_info.activee');
			elBlockActive.classList.remove('activee');

			let elBlock = document.querySelector(hashBlock);
			elBlock.classList.add('activee');
		});
	}
}
tabs()

/*----NAV---------------------------------------*/

function nav(){
	const anchors = document.querySelectorAll('.header_menu ul li a[href*="#"]');

	for (let anchor of anchors){
		anchor.addEventListener('click', function(event){
			event.preventDefault();

			const blockID = anchor.getAttribute('href');

			document.querySelector('' + blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});

			let headerNavActive = document.querySelector('.header_menu');
			let bodyLock = document.querySelector('body');
			let burgerActive = document.querySelector('.burger');

			if(headerNavActive.classList.contains('active')){
				document.querySelector('' + blockID).scrollIntoView({
					behavior: 'auto',
					block: 'start'
				});

		 		headerNavActive.classList.remove('active');
		 		bodyLock.classList.remove('lock');
		 		burgerActive.classList.remove('active');
		 	}
		});
	}
}
nav()

/*----SWIPER------------------------------------*/

new Swiper('.testimonials_body',{
	grabCursor: true,
	spaceBetween: 500,
	slideToClickedSlide: true,
	loop: true,
	speed: 1500,
	parallax: true,

	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	}
});