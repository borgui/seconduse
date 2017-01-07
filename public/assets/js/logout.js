var logout = document.getElementById('logout');
logout.onclick = function(){
  FB.logout(function(response) {
    console.log('déconnecté');
    localStorage.removeItem("accessToken");
    window.location.href = '/login';
});
}