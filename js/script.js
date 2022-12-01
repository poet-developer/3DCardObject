(function(){

    const blueCard = new Card("cardBody-blue","tema-blue","img1","Hope");
    const pinkCard = new Card("cardBody-pink","tema-pink","img2","Love");
    const yellowGreenCard = new Card("cardBody-yellowGreen","tema-yellowGreen","img3","Brave");
    
    const objElem = document.querySelectorAll('.cardBody');
    const worldElem = document.querySelector('.world');
    const flyElem = document.querySelectorAll('.fly');
    
    let selectObj;
    let objParentState

  

    objElem[0].addEventListener('mousemove', function(e){
      blueCard.xPos = -1 + ((e.clientX-objElem[0].offsetLeft)/objElem[0].offsetWidth*2);

      blueCard.yPos = 1 - ((e.clientY-objElem[0].offsetTop)/objElem[0].offsetHeight*2);
      
      objElem[0].style.transform = 'rotateX('+blueCard.yPos*15+'deg)' + 'rotateY('+blueCard.xPos*20+'deg)';
    });

    objElem[1].addEventListener('mousemove', function(e){
      pinkCard.xPos = -1 + ((e.clientX-objElem[1].offsetLeft)/objElem[1].offsetWidth*2);

      pinkCard.yPos = 1 - ((e.clientY-objElem[1].offsetTop)/objElem[1].offsetHeight*2);
      
      objElem[1].style.transform = 'rotateX('+pinkCard.yPos*15+'deg)' + 'rotateY('+pinkCard.xPos*20+'deg)';
    });

    objElem[2].addEventListener('mousemove', function(e){
      yellowGreenCard.xPos = -1 + ((e.clientX-objElem[2].offsetLeft)/objElem[2].offsetWidth*2);

      yellowGreenCard.yPos = 1 - ((e.clientY-objElem[2].offsetTop)/objElem[2].offsetHeight*2);
      
      objElem[2].style.transform = 'rotateX('+yellowGreenCard.yPos*15+'deg)' + 'rotateY('+yellowGreenCard.xPos*20+'deg)';
    });


    worldElem.addEventListener('mouseover',function(e){
      for(var i = 0; i<objElem.length; i++){
        objElem[i].style.transform = 'rotate('+ 0 +')';
      }
      // objElem[0].childNodes[6].style.opacity = 0.8;

        if(e.target.parentNode.classList.contains('cardBody')){
          objParentState = e.target.parentNode;
          objParentState.childNodes[4].classList.add('float');
          objParentState.childNodes[5].classList.add('float');
          objParentState.childNodes[6].classList.add('float');
        }else if(e.target.parentNode.classList.contains('world')){
          e.target.childNodes[4].classList.add('float');
          e.target.childNodes[5].classList.add('float');
          e.target.childNodes[6].classList.add('float');
        }
    });

    objElem[0].addEventListener('click',function(e){
      
      if(e.target == flyElem[0]){
        objElem[0].childNodes[6].style.transform = 'translateX('+130+'px)'+'translateY('+(-100) +'px)';
        objElem[0].childNodes[6].style.opacity = 0;
      }
    
          setTimeout(function(){
            objElem[0].childNodes[6].style.transform = 'translateX('+0+'px)'+'translateY('+0 +'px)'+ 'translateZ(' + 50 + 'px)';
          },1000);
    });

    objElem[1].addEventListener('click',function(e){
      
      if(e.target == flyElem[1]){
        objElem[1].childNodes[6].style.transform = 'translateX('+130+'px)'+'translateY('+(-100) +'px)';
        objElem[1].childNodes[6].style.opacity = 0;
      }
    
       setTimeout(function(){
        objElem[1].childNodes[6].style.transform = 'translateX('+0+'px)'+'translateY('+0 +'px)'+ 'translateZ(' + 50 + 'px)';
       },1000);
    });

    objElem[2].addEventListener('click',function(e){
      
      if(e.target == flyElem[2]){
        objElem[2].childNodes[6].style.transform = 'translateX('+130+'px)'+'translateY('+(-100) +'px)';
        objElem[2].childNodes[6].style.opacity = 0;
      }
    
        setTimeout(function(){
        objElem[2].childNodes[6].style.transform = 'translateX('+0+'px)'+'translateY('+0 +'px)'+ 'translateZ(' + 50 + 'px)';
        },1000);
    });

    worldElem.addEventListener('mouseout',function(e){
      if(e.target.parentNode.classList.contains('cardBody')){
          objParentState.childNodes[4].classList.remove('float');
          objParentState.childNodes[5].classList.remove('float');
          objParentState.childNodes[6].classList.remove('float');
        }else if(e.target.parentNode.classList.contains('world')){
          e.target.childNodes[4].classList.remove('float');
          e.target.childNodes[5].classList.remove('float');
          e.target.childNodes[6].classList.remove('float');
        }

        if(e.target.classList.contains('world')){
          for(var i =0; i<objElem.length; i++){
          objElem[i].childNodes[6].style.opacity = '';
          }
        }
    });
}());