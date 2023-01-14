let prices = document.querySelectorAll(".price");

prices.forEach((price) => {
  price.innerHTML = price.innerHTML.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});
