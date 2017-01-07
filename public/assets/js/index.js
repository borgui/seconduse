(function(){
	document.getElementById('loader').style.display = "block";
	var template;

	var firebase = new Firebase();
	firebase.getAllAnnounces(data => {
			var i = 1;
			for(let announcedata of data){
				console.log(announcedata.title);
				var announceBlock = document.createElement('div');
				announceBlock.setAttribute("id", i);
				announceBlock.setAttribute("class", "media");
				announceBlock.innerHTML = `<div class='media-left'><img class='media-object' src='${announcedata.imgsrc}' alt=''>
					  </div>
					  <div class="media-body">
					    <h4 class="media-heading">${announcedata.title}</h4>
					    ${announcedata.description}
					    <br>
					    Location : ${announcedata.location}
					    <br>
					    Posted by : ${announcedata.author}
					  </div>`;
				document.getElementById('announces').appendChild(announceBlock);
				i+=1;
			}
			document.getElementById('loader').style.display = "none";
			document.getElementById("content").style.display = "block";

	});

	})();