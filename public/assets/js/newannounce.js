
document.getElementById('submit').onclick = function(){
  document.getElementById('loader').style.display = "block";
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  let location = document.getElementById('location').value;
  let imgsrc = document.getElementById('imgsrc').value; 

  FB.api('/me', response => {
    let author = response.name;
    var firebase = new Firebase();
    var announce = new Announce(title,description,location,imgsrc,author);
    firebase.addAnnounce(announce, callback => {
      document.getElementById("loader").style.display = "none";
      document.getElementById("newAnnounce").style.display = "none";
      document.getElementById("alert").style.display = "block";

    });
  })


}
