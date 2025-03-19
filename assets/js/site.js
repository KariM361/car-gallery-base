//find alle thumbnails
let thumbs = document.querySelectorAll('.imgTile');
console.log(thumbs);

// tilføj en eventlisner til hver thumbnails
thumbs.forEach((element) => {
  element.addEventListener('click', function (e) {
    // find det lille billede

    let bigImg = document.querySelector('.bigImg');
    console.log(e.target.src);

    // byt src (source)
  });
});
// når der klikkes på en thumbnail, skal det store billede bytte plads med der lille

// find det lille billede

// find det store billede

// byt src (sources
