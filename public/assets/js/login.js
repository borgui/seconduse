window.fbAsyncInit = function() {
    FB.init({
      appId      : '218925255234316',
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
    FB.Event.subscribe('auth.login', function(){
      window.location.href = '../';
    });
    FB.getLoginStatus(response => {
      console.log(window.location.href);

      // REDIRECTION RULES //

      if (response.status === 'connected') {
        console.log("Connecté");
        if(window.location.pathname == "/login"){
          window.location.href = "../"
        }

        // FOR HOME PATH, ONLY PRINT CONTENT WHEN USER CONNECTED TO FIREBASE //
        if(window.location.pathname != "/"){
          console.log(window.location.pathname);
          document.getElementById("content").style.display = "block";
          document.getElementById("loader").style.display = "none";
        }
      }
      else{
        console.log("Déconnecté");
        if(window.location.pathname != "/login"){
          window.location.href = "/login" ;
        }

      }


    }
)};
(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.8&appId=218925255234316";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
