// CHỨC NĂNG LÊN ĐẦU TRANG
const btnUpToTop = document.querySelector('.js_btn_UpToTop');
document.addEventListener('wheel', (event) => {
  // console.log(window.scrollY);
  if (window.scrollY === 0)
    btnUpToTop.style.display = 'none';
  else
    btnUpToTop.style.display = 'block';
});

btnUpToTop.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
  setTimeout(() => {
    btnUpToTop.style.display = 'none';
  }, 200);
});