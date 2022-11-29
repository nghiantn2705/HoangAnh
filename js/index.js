$(document).ready(function () {
    $(document).scroll(function () {
      const header = document.querySelector(".header");
      if (window.scrollY > 20) {
        header.classList.add("header-active");
      } else {
        header.classList.remove("header-active");
      }
    });
    $(".show").click(function () {
      const product = document.querySelector(".product-2");
      product.style.overflow = "none";
    })
   
  });
  