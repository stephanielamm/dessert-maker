console.info('Welcome to the dessert maker v1.0.');

var currentFruit = null;
var currentDessert = null;

var images = {
  fruits: {
    apple: 'img/Apple.jpg',
    orange: 'img/Orange.jpg',
    banana: 'img/Banana.jpg'
  },
  desserts: {
    icecream: 'img/IceCream.jpg',
    cake: 'img/Cake.jpg',
    pie: 'img/Pie.jpg'
  },
  mixes: {
    apple: {
      icecream: 'img/AppleIceCream.jpg',
      cake: 'img/AppleCake.jpg',
      pie: 'img/ApplePie.jpg'
    },
    orange: {
      icecream: 'img/OrangeIceCream.jpg',
      cake: 'img/OrangeCake.jpg',
      pie: 'img/OrangePie.jpg'
    },
    banana: {
      icecream: 'img/BananaIceCream.jpg',
      cake: 'img/BananaCake.jpg',
      pie: 'img/BananaPie.jpg'
    }
  }
};

//Fruit variables and images 

var apple = document.querySelector('.Fruit--apple');
apple.addEventListener('click', function() {
  var fruitHolder = document.querySelector('.Holder--fruit');
  fruitHolder.innerHTML = "<img src = '" + images.fruits.apple + "'/>";
  combine("fruit","apple")
});

var orange = document.querySelector('.Fruit--orange');
orange.addEventListener('click', function() {
  var fruitHolder = document.querySelector('.Holder--fruit');
  fruitHolder.innerHTML = "<img src = '" + images.fruits.orange + "'/>";
  combine("fruit","orange")
});

var banana = document.querySelector('.Fruit--banana');
banana.addEventListener('click', function() {
  var fruitHolder = document.querySelector('.Holder--fruit');
  fruitHolder.innerHTML = "<img src = '" + images.fruits.banana + "'/>";
  combine("fruit","banana")
});

//Dessert variables and images

var icecream = document.querySelector('.Dessert--icecream');
icecream.addEventListener('click', function() {
  var dessertHolder = document.querySelector('.Holder--dessert');
  dessertHolder.innerHTML = "<img src = '" + images.desserts.icecream + "'/>";
  combine("dessert","icecream")
});

var cake = document.querySelector('.Dessert--cake');
cake.addEventListener('click', function() {
  var dessertHolder = document.querySelector('.Holder--dessert');
  dessertHolder.innerHTML = "<img src = '" + images.desserts.cake + "'/>";
    combine("dessert","cake")
});

var pie = document.querySelector('.Dessert--pie');
pie.addEventListener('click', function() {
  var dessertHolder = document.querySelector('.Holder--dessert');
  dessertHolder.innerHTML = "<img src = '" + images.desserts.pie + "'/>";
    combine("dessert","pie")
});

//Combination function

function combine(type,item) {
  if (type==='fruit'){
    var dessertHolder = document.querySelector('.Holder--dessert').innerHTML;
    if (dessertHolder.includes("img")){
      var start = dessertHolder.indexOf("/") + 1;
      var end = dessertHolder.indexOf(".");
      dessertHolder=dessertHolder.substr(start,end-start).toLowerCase();
      var srcData = images.mixes[item][dessertHolder];
        document.querySelector('.Holder--result').innerHTML=('<img src="' + srcData + '"/>');
    }
  }

  if (type==='dessert'){
    var fruitHolder = document.querySelector('.Holder--fruit').innerHTML;
    if (fruitHolder.includes("img")) {
      var start = fruitHolder.indexOf("/") + 1;
      var end = fruitHolder.indexOf(".");
      fruitHolder = fruitHolder.substr(start,end-start).toLowerCase();
      var srcData = images.mixes[fruitHolder][item];
        document.querySelector('.Holder--result').innerHTML=('<img src="' + srcData + '"/>');
    }
  }

}

//Reset function

var reset = document.querySelector('.Reset');
reset.addEventListener('click', function() {
  document.querySelector('.Holder--fruit').innerHTML="";
  document.querySelector('.Holder--dessert').innerHTML="";
  document.querySelector('.Holder--result').innerHTML="";
});
