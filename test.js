function myFunction6(event) {
  var card = event.target.closest(".card6");
  var dots = card.querySelector("#dots6");
  var moreText = card.querySelector("#more6");
  var btnText = card.querySelector("#button6");
  //   var btnText1 = document.getElementById("button6");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show more";
    // btnText1.innerHTML = "Show more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show less";
    // btnText1.innerHTML = "Show less";
    moreText.style.display = "inline";
  }
}
