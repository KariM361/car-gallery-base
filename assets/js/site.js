//find alle thumbnails

let thumbs = document.querySelectorAll('.imgTile');
console.log(thumbs);

// tilføj en eventlisner til hver thumbnails
thumbs.forEach((element) => {
  element.addEventListener('click', function (e) {
    // find det lille billede
    let smallImg = e.target.src;
    console.log(smallImg);

    // find det store billede
    let BigImage = document.getElementById('BigImage').src;
    console.log(BigImage);

    // sæt det store billed på der lilles source
    e.target.src = BigImage;

    // sæt det lille billed på det stores source
    document.getElementById('BigImage').src = smallImg;
  });
});
