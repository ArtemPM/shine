(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "12/25/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's open!";
          document.getElementById("countdown").style.display = "none";
          // document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());



  function changeGalleryItemNameClass(){
    document.getElementById("gallery_item_name").className = "item_name active";
  } 

  function removeGalleryItemNameClass(){
    document.getElementById("gallery_item_name").className = "item_name";
  } 

  function changeGalleryItemClass1(){
      document.getElementById("gallery_phrase1").className = "item_phrase active";
      document.getElementById("gallery_author1").className = "item_author active";
  }
  function removeGalleryItemClass1(){
    document.getElementById("gallery_phrase1").className = "item_phrase";
    document.getElementById("gallery_author1").className = "item_author";
  } 

  function changeGalleryItemClass2(){
    document.getElementById("gallery_phrase2").className = "item_phrase active";
    document.getElementById("gallery_author2").className = "item_author active";
  }
  function removeGalleryItemClass2(){
    document.getElementById("gallery_phrase2").className = "item_phrase";
    document.getElementById("gallery_author2").className = "item_author";
  } 

  function changeGalleryItemClass3(){
    document.getElementById("gallery_phrase3").className = "item_phrase active";
    document.getElementById("gallery_author3").className = "item_author active";
  }
  function removeGalleryItemClass3(){
  document.getElementById("gallery_phrase3").className = "item_phrase";
  document.getElementById("gallery_author3").className = "item_author";
  } 

  function changeGalleryItemClass4(){
    document.getElementById("gallery_phrase4").className = "item_phrase active";
    document.getElementById("gallery_author4").className = "item_author active";
  }
  function removeGalleryItemClass4(){
  document.getElementById("gallery_phrase4").className = "item_phrase";
  document.getElementById("gallery_author4").className = "item_author";
  } 

  
  const button = document.getElementById("menuBtn");
  const menuTablet = document.getElementById("menu_tablet");

  menuTablet.style.display = "none";
  button.addEventListener("click", (event) =>{
    if (menuTablet.style.display == "none"){
      menuTablet.style.display = "block";
    } else {
      menuTablet.style.display = "none";
    }
  })