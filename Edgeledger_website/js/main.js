// // initiable and add the map
// function initMap() {
//     // yout location
//     const loc = {lat: 10.002748, lng: 76.306342};
//     // centered map on location
//     const map = new google.maps.Map(document.getElementById('map'), {

//     center: loc,
//     zoom: 10
//   });
// //   Marker position at location
//     const marker = new google.maps.Marker({ position: loc, map:
//     map });
// }

// // var map;
// // function initMap() {
// //   map = new google.maps.Map(document.getElementById('map'), {
// //     center: {lat: -34.397, lng: 150.644},
// //     zoom: 8
// //   });
// // }


$('#navbar a, .btn').on('click',function(event){
  if(this.hash !== ''){
    event.preventDefault();

    const hash = this.hash;

    $('html,body').animate(
      {
        scrollTop: $(hash).offset().top -100
      },
      800
    );
  }
});

window.addEventListener('scroll',function() {
  if(window.scrollY>150){
    document.querySelector('#navbar').style.opacity = 0.9;

  }else{
    document.querySelector('#navbar').style.opacity=1;
    
  }
});