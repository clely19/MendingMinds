// loader
loader();
function loader(_success) {
    var obj = document.querySelector('.preloader'),
    inner = document.querySelector('.preloader_inner'),
    page = document.querySelector('.page');
    obj.classList.add('show');
    page.classList.remove('show');
    var w = 0,
        t = setInterval(function() {
            w = w + 1;
            inner.textContent = w+'%';
            if (w === 100){
                obj.classList.remove('show');
                page.classList.add('show');
                clearInterval(t);
                w = 0;
                if (_success){
                    return _success();
                }
            }
        }, 10);
}




// background music
        function playAnimation(){
          document.getElementById("myImage").setAttribute("src","images/musicIcon.gif");
        }
        function pauseAnimation(){
          document.getElementById("myImage").setAttribute("src","images/musicIcon.png");
        }



        function readMore(city) {
          let dots = document.querySelector(`.card[data-city="${city}"] .dots`);
          let moreText = document.querySelector(`.card[data-city="${city}"] .more`); 
          let btnText = document.querySelector(`.card[data-city="${city}"] .myBtn`);
        
          if (dots.style.display === "none") {
              dots.style.display = "inline";
              btnText.textContent = "Read more";
              moreText.style.display = "none";
          } else {
              dots.style.display = "none";
              btnText.textContent = "Read less"; 
              moreText.style.display = "inline";
          }
        }

        
        


        