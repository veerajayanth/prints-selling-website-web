

function openModal(abc) {
  var img = abc;
  var modalImg = document.getElementById("img01");
  var p=document.getElementById("proname");	
  var captionText = img.name;
  console.log(captionText);
  document.getElementById("myModal").style.display = "block";

  modalImg.src = img.src;
  p.innerHTML=captionText;
  document.getElementById("myImg").style.display = "block";

 
  // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal

}



function closeModal() {
  document.getElementById("myModal").style.display = "none";
};



//var captionText = document.getElementById("caption");
//img.onclick = function(){
  //modal.style.display = "block";
  //modalImg.src = this.src;
  //captionText.innerHTML = this.alt;//