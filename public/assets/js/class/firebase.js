class Firebase {
	constructor(){
		 var config = {
		    apiKey: "AIzaSyAoEbmFDpO6GDe34XTdm2os7NtHm1n6RsI",
		    authDomain: "seconduse-b93b4.firebaseapp.com",
		    databaseURL: "https://seconduse-b93b4.firebaseio.com",
		    storageBucket: "seconduse-b93b4.appspot.com",
		    messagingSenderId: "869603126949"
  		};
  		firebase.initializeApp(config);
	}
	addAnnounce(announce, callback){
		let title = announce.title;
		let description = announce.description;
		let location = announce.location;
		let imgsrc = announce.imgsrc;
		let author = announce.author;
		var item = {title, description, location, imgsrc, author};
		console.log("add ok");
		firebase.database().ref('announces').push(item)
		.once("value", function(snapshot){
			callback(snapshot);
		})
	}
	getAllAnnounces(callback){
		var data = firebase.database().ref("announces");
		data.once("value", function(snapshot){
			let ar = Object.keys(snapshot.val()).map(key =>snapshot.val()[key]);
			callback(ar);
		});

	}
}