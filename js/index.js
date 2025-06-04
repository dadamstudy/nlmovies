document.addEventListener("DOMContentLoaded", ()=> {

  //첫 화면 로드 되면 이미지 카드 회전
  const img_card = document.querySelectorAll('.cards');
  window.addEventListener("load", ()=> {
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
  const right_btn = document.querySelector("#right_btn");
  window.addEventListener("scroll", ()=> {
    let scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if(scrollPosition >= 300) {
      right_side.style.right = 0;
      right_side.style.transition = "right 1s";
      right_btn.style.display = "none";
    }
    if(scrollPosition < 300 ) {
      right_side.style.right = "-200px";
      right_side.style.transition = "right 1s";
      right_btn.style.display = "block";
    }
  });
  right_btn.addEventListener("click", ()=> {
    if(right_btn.textContent === 'arrow_back') {
      right_btn.textContent = 'arrow_forward';
      right_btn.classList.add('act');
      right_side.style.right = 0;
      right_side.style.transition = "right 1s";
    } else {
      right_btn.textContent = 'arrow_back';
      right_btn.classList.remove('act');
      right_side.style.right = "-200px";
      right_side.style.transition = "right 1s";
    }
  });
  
  //영화 이미지를 클릭하면 설명 나옴
  const movie_left = document.querySelectorAll('.movie_left img');
  const movie_right = document.querySelectorAll('.movie_right img');
  const movie_left_div = document.querySelectorAll('.movie_left > div');
  const movie_right_div = document.querySelectorAll('.movie_right > div');
  movie_left.forEach(i=> {
    i.addEventListener("click", e=> {
      if(e.currentTarget.style.left = "0px") {
        e.target.style.left = "-300px";
        movie_left_div.forEach(i=> {
        i.style.opacity = 1;
        i.style.left = 0;
        i.style.transition = '0.5s';
      });
      }; 
    });
  });
  movie_right.forEach(i=> {
    i.addEventListener("click", e=> {
      e.target.style.left = "300px";
      movie_right_div.forEach(i=> {
        i.style.opacity = 1;
        i.style.left = 0;
        i.style.transition = '0.5s';
      });

    });
  });
  
});