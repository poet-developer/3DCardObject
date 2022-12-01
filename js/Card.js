    function Card(bodyColor,color,img,text){
        this.bodyColor = bodyColor;
        this.color = color;
        this.img = img;
        this.text = text;
        this.init();
        
    }
    Card.prototype = {
        constructor: Card,
        init : function(){
            console.log(this);
            const cardElem = document.createElement('div');
            cardElem.innerHTML = ''
            +' <div class="circle"></div>'
            +' <div class="backText"></div>'
            +'<h2 class="meaning"></h2>'
            +'<button class="fly">FLY</button>'
            +'<figure class="paper"></figure>'

            cardElem.classList.add('cardBody');
            cardElem.classList.add(this.bodyColor);
            cardElem.querySelector('div').classList.add(this.color);
            cardElem.querySelector('button').classList.add(this.color);
            cardElem.querySelector('figure').classList.add(this.img);
            cardElem.querySelector('h2').innerHTML = this.text;
            document.querySelector('.world').appendChild(cardElem);
        }
    }