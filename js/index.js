document.addEventListener("DOMContentLoaded", ()=> {

  //첫 화면 로드 되면 이미지 카드 회전
  const img_card = document.querySelectorAll('.cards');
  window.addEventListener("load", ()=> {
    const movie_name = document.querySelector('.movie_name');
    img_card.forEach(i=> {
        i.style.transform = 'rotateY(180deg)';
        i.style.transition = '0.5s';
        i.style.filter = 'brightness(0.5)';
      });
    setTimeout(()=> {
      img_card.forEach(i=> {
        i.style.transform = 'rotateY(360deg)';
        i.style.transition = '0.5s';
        i.style.filter = 'brightness(1)'
      });
    }, 400);
    const img_card_load = ()=> {
      img_card.forEach(i=> {
        i.style.transform = 'rotateY(180deg)';
        i.style.transition = '0.5s';
        i.style.filter = 'brightness(0.5)'
      });
      setTimeout(()=> {
        img_card.forEach(i=> {
          i.style.transform = 'rotateY(360deg)';
          i.style.transition = '0.5s';
          i.style.filter = 'brightness(1)'
        });
      }, 500);
    }
    setInterval(img_card_load, 7000);
  });

  //슬라이드 하면 right_side 보임
  const right_side = document.querySelector("#right_side");
  window.addEventListener("scroll", ()=> {
    let scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if(scrollPosition >= 300) {
      right_side.style.opacity = 1;
      right_side.style.display = "block";
      right_side.style.transition = "opacity 1s";
    }
    if(scrollPosition < 300 ) {
      right_side.style.opacity = 0;
      right_side.style.display = "none";
      right_side.style.transition = "opacity 0.5s";
    }
  });
  
  
});