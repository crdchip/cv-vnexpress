const rightBtn = document.querySelector('.fa-chevron-circle-right');
const leftBtn = document.querySelector('.fa-chevron-circle-left');
const imgNumber = document.querySelectorAll('.slides-sub-tuvan span');
// console.log(imgNumbe
let index =0;
// slider tu van covid
rightBtn.addEventListener("click", function(){
	index = index +1
	if(index > imgNumber.length -1){
		index=0;
	}
	document.querySelector(".slides-sub-tuvan").style.right = index*100+"%"
})
leftBtn.addEventListener("click", function(){
	index = index - 1
	if (index<0) {
		index = imgNumber.length;
	}
	document.querySelector(".slides-sub-tuvan").style.right = index*100+"%"
})
const btntoTop = document.querySelector('.btn-to-top');
btntoTop.addEventListener("click",function(){
	$('html').animate({
		scrollTop: 0
	}, 500);
});
$(document).ready(function() {
	alert(123);
	// $(window).scroll(function() {
	// 	/* Act on the event */
	// 	if($(this).scrollTop(200)){
	// 		$('nav').addClass('sticky');
	// 	}
	// });
});
// $('.btn-to-top').click(function(){
// 					/* Act on the event */
// 					alert(oke);
// 					
// 				});				