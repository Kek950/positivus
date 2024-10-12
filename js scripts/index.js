let forms = document.querySelectorAll(".form")
let inputblocks = document.querySelectorAll(".inputblock")

function changestate(input) {
    inputblocks.forEach(i => {
        if (i.classList.contains(input.id)) {
            i.querySelector(".circle2").classList.remove('dn')
        }
        else{
            i.querySelector(".circle2").classList.add('dn')
        }
    });
    
    forms.forEach(i => {
        if (i.classList.contains(input.id)) {
            i.classList.remove('dn')
            i.classList.add('active')
        }
        else{
            i.classList.add('dn')
            i.classList.remove('active')
        }
    });

}




let nav = document.querySelector("nav")
let burger = document.querySelector('.burger')
let links = document.querySelector("nav .links")
let button  = document.querySelector("nav .button ")
let body = document.querySelector('body')


burger.addEventListener('click', () => {
    links.classList.add("showe")
    setTimeout(() => {
        body.classList.add('oh')
    }, 300);
})

document.addEventListener('click', (e) => {
    document.querySelectorAll(".links a").forEach(el => {
        if (e.target != el && e.target != burger) {
            links.classList.remove("showe")
            body.classList.remove('oh')
        }
    })
})

let header = document.querySelector('header .container')
let header_left_side = document.querySelector('header .container .left_side')
let header_right_side = document.querySelector('header .container .right_side')
let lernMore = document.querySelectorAll('.lernMore .text')
let right_side_img = document.querySelectorAll('.card .right_side')



function checkScreenSize() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth > 998) {
      // 'Экран больше 1124px';
        header.append(header_right_side)
        for (let i = 0; i < right_side_img.length; i++) {
            const e = right_side_img[i];
            for (let ine = 0; ine < lernMore.length; ine++) {
                const el = lernMore[ine];
                if (ine == i) {
                    lernMore[ine].innerHTML = `learn more`
                }
                
            }
        }
    } else {
      // 'Экран меньше или равен 1124px';
      header_left_side.append(header_right_side)
      for (let i = 0; i < right_side_img.length; i++) {
          const e = right_side_img[i];
          for (let ine = 0; ine < lernMore.length; ine++) {
              const el = lernMore[ine];
              if (ine == i) {
                  lernMore[ine].innerHTML = right_side[i]
                  console.log(lernMore[ine]);
                  
              }
              
          }
      }
    }
  }
  
  // Обработчик события изменения размера окна
  window.addEventListener('resize', () => {
    const screenSizeMessage = checkScreenSize();
    console.log(screenSizeMessage);
  });
  
  // Вызов функции при загрузке страницы
  const initialScreenSizeMessage = checkScreenSize();



