// video player

$('div').on('click', '.closeDiv', function() {
  $(this).prev().remove();
  $(this).remove();
  $('#upload-file').val("");
});
let fileDiv = document.getElementById("upload");
let fileInput = document.getElementById("upload-file");

fileInput.addEventListener("change", function(e) {

  let filesVAR = this.files;

  showThumbnail(filesVAR);

}, false);


function showThumbnail(files) {

  debugger

  for (let i = 0; i < files.length; i++) {

    let file = files[i];

    let thumbnail = document.getElementById("thumbnail");
    let pDiv = document.createElement("div");
    let video = document.createElement("video");
    let div = document.createElement("div");


    pDiv.setAttribute('class', 'pDiv');
    thumbnail.appendChild(pDiv);


    video.setAttribute('class', 'imgKLIK5');
    pDiv.appendChild(video)

    div.innerHTML = "";
    div.setAttribute('class', 'closeDiv');
    pDiv.appendChild(div)

    video.file = file;
    let reader = new FileReader()
    reader.onload = (function(aImg) {
      return function(e) {
        let blobURL = URL.createObjectURL(file);
        aImg.src = blobURL;
        aImg.setAttribute("controls", "")
      };
    }(video))
    let ret = reader.readAsDataURL(file);
    let canvas = document.createElement("canvas");
    ctx = canvas.getContext("2d");
    video.onload = function() {
      ctx.drawImage(video, 100, 100);
    }
  }
}


