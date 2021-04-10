const menuBtn=document.querySelector('.menu-btn');
let menuOpen=false;
menuBtn.addEventListener('click', ()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
    menuOpen=true;
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen=false;
    }
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("image");		
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}

function inverter(id) {
  var arrow = document.getElementById(id);
  arrow.style.transform = "rotate(-135deg)";
  }
  function converter(id) {
    var arrow = document.getElementById(id);
    arrow.style.transform = "rotate(45deg)";
    }

    const firebaseConfig = {
      apiKey: "AIzaSyBSnUCGbFwZKUqdxV4UBAXxqDTNq0OmfPk",
      authDomain: "midas-web-app-task.firebaseapp.com",
      projectId: "midas-web-app-task",
      storageBucket: "midas-web-app-task.appspot.com",
      messagingSenderId: "769601529217",
      appId: "1:769601529217:web:eedb90a7d884c86e023480",
      measurementId: "G-VTXP9SDLNB"
    };
    firebase.initializeApp(firebaseConfig);
    var provider = new firebase.auth.GoogleAuthProvider();
    
    function userLogin(){
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
      firebase.auth.Auth.Persistence.SESSION;
      showUserDetails(result.user);
      }).catch((error) => {
        console.log(error);
       
      });}
      
      firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
    } else {
        // No user is signed in.
      }
    });

     function checkAuthState(){
      firebase.auth().onAuthStateChanged(user=>{
        if(user){
          document.getElementById('login').style.display="none"
          document.getElementById('signout').style.display="block"
          showUserDetails(user)
          document.getElementById('hello').style.display = "block";
        }else{
          document.getElementById('login').style.display="block";
          document.getElementById('signout').style.display="none";
        }
      })
    }

    function LogoutUser(){
      firebase.auth().signOut().then(()=>{
        document.getElementById('login').style.display="block";
        document.getElementById('signout').style.display="none";
        document.getElementById('hello').style.display = "none";
        deleteAllCookies();
      }).catch(e=>{
        console.log(e);
      });
    }
    checkAuthState();

    function showUserDetails(user){
      var name = user.displayName + " ";
      name = name.substr(0, name.indexOf(' '));
      document.getElementById('hello').innerHTML = `
        <h3>${name}</h3>
      `
    }

    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("square").style.display = "block";
  } else {
    document.getElementById("square").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
}

function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

function hamburger() {
	var check = document.getElementById('check');
	
	if (check.checked == true) {
		document.getElementById('menu').style.display = "block";
	} else {
		document.getElementById('menu').style.display = "none";
	}
}