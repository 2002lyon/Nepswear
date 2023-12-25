let MainImg = document.getElementById("MainImg");
let smallImg = document.querySelectorAll(".small-img");

smallImg.forEach(function (img, index) {
  img.onclick = function () {
    MainImg.src = img.src;
  };
});

let smallImgCols = document.querySelectorAll(".small-img-col");
let numberOfSmallImages = smallImgCols.length;

if (numberOfSmallImages == 1) {
  smallImgCols.forEach(function (col) {
    // let flexBasisValue = 100 / numberOfSmallImages + "%";
    col.style.display = "none";
  });
}

if (numberOfSmallImages > 0) {
  let flexBasisValue = 100 / numberOfSmallImages + "%";

  smallImgCols.forEach(function (col) {
    col.style.flexBasis = flexBasisValue;
  });
}
