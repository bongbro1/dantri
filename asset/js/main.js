const btn_prev = document.querySelector('.js_btn_prev');
const btn_next = document.querySelector('.js_btn_next');
const post_slider = document.querySelector('.js_post_slider'); // frame chứa các post
const listPost = document.querySelectorAll('.js_post_slider .col-md-3'); // danh sách các post
var value = 0;
var maxValue = Math.max(0, (listPost.length - 4)) * (-289.5);

btn_prev.addEventListener('click', () => {
  if (value < 0) {
    value += 289.5;
    post_slider.style.transform = 'translateX(' + value + 'px)';
    btn_next.style.opacity = '1';
  }
  else { // vô hiệu hóa button khi quá cửa số post
    btn_prev.disable = true;
    btn_prev.style.opacity = '0.8';
  }
})
btn_next.addEventListener('click', () => {
  if (value > maxValue) {
    value -= 289.5;
    post_slider.style.transform = 'translateX('+ value + 'px)';
    btn_prev.style.opacity = '1';
  }
  else { // vô hiệu hóa button khi quá cửa số post
    btn_next.disable = true;
    btn_next.style.opacity = '0.8';
  }
})

// btn_prev.addEventListener('click', () => {
//   const list = document.querySelectorAll('.post_slider .col-md-3');
//   post_slider.prepend(list[list.length-1]);
// })
// btn_next.addEventListener('click', () => {
//   const list = document.querySelectorAll('.post_slider .col-md-3');
//   post_slider.appendChild(list[0]);
// })

// xử lý đổi màu vị trí current page
const listNumberPage = document.querySelectorAll('.js_post_slider_indexCurrent i');
var index = 0;
btn_prev.addEventListener('click', () => {
  index --;
  index = Math.max(index, 0);
  listNumberPage[index+1].classList.remove('active');
  listNumberPage[index].classList.add('active');
})
btn_next.addEventListener('click', () => {
  index ++;
  index = Math.min(2, index);
  listNumberPage[index-1].classList.remove('active');
  listNumberPage[index].classList.add('active');
})




// var a = () => {
//   console.log("function a");
// }
// function funcb () {
//   console.log("function b");
// }
// var c = function () {
//   console.log("function c");
// }
// a();
// funcb();
// c();