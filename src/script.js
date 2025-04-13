const mobiletoggle =document.querySelector(".mobile-nav");
const mobilemenu =document.querySelector(".mobile-menu");


mobiletoggle.addEventListener('click', ()=>{
    mobilemenu.classList.toggle('hidden')
})




// review


const swiper = new Swiper(".reviewSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 5
      }
    },
    on: {
      init: function () {
        updateSlideEffects(this); // استخدم الكائن swiper الحالي
      },
      slideChangeTransitionEnd: function () {
        updateSlideEffects(this);
      },
    },
  });
  
  function updateSlideEffects(swiperInstance) {
    swiperInstance.slides.forEach((slide, index) => {
      // نحذف كل التأثيرات (بما فيها responsive ones)
      slide.classList.remove('scale-125', 'sm:scale-125', 'blur-sm', 'sm:blur-sm');
  
      if (index === swiperInstance.activeIndex) {
        slide.classList.add('sm:scale-125');  
      } else {
        slide.classList.add('sm:blur-sm');    
      }
    });
  }
  
//   review




// article 
const swipper = new Swiper(".articleSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 3
      }
    },
    
  });
  
  

// article 


// contact form 

function submitform(){

  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const message = document.querySelector('.message');


  var data ={
    email:email,
    phone:phone
  }
  var url="https://script.google.com/macros/s/AKfycby-72NOv2VbO06pi_H9K5ROQ_h68AeIEf2k2Ezk2TlReP6W55BUQ0faCJg7Om5cQnEzrg/exec";

  fetch(url, {
    method: 'post',
    body: new URLSearchParams(data),
    headers: {
      'content-type' : 'application/x-www-form-urlencoded'
    },
    mode: "no-cors",
  })

  .then(response => response.text())
  .then(result => {
    message.innerHTML = `<p> ${result} Data Sent Successfully! </p>`;
    setTimeout(function() {
      document.querySelector('#email').value = "";
     document.querySelector('#phone').value = "";
      message.innerHTML = "";
    }, 3000);
    

  })
  .catch(error => {
    message.innerHTML = `<p> ${error} </p>`;
  })
 
}

