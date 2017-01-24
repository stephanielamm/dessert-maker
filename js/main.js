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

var apple = document.querySelector('.Fruit--apple');
apple.addEventListener('click', function() {
  console.log('Apple clicked.');
  var fruitHolder = document.querySelector('.Holder--fruit');
  fruitHolder.innerHTML = "<img src = '" + images.fruits.apple + "'/>"
});

var orange = document.querySelector('.Fruit--orange');
orange.addEventListener('click', function() {
  console.log('Orange clicked.');
  var fruitHolder = document.querySelector('.Holder--fruit');
  fruitHolder.innerHTML = "<img src = '" + images.fruits.orange + "'/>"
});

var banana = document.querySelector('.Fruit--banana');
banana.addEventListener('click', function() {
  console.log('Banana clicked.');
  var fruitHolder = document.querySelector('.Holder--fruit');
  fruitHolder.innerHTML = "<img src = '" + images.fruits.banana + "'/>"
});

var icecream = document.querySelector('.Dessert--icecream');
icecream.addEventListener('click', function() {
  console.log('Ice Cream clicked.');
  var dessertHolder = document.querySelector('.Holder--dessert');
  dessertHolder.innerHTML = "<img src = '" + images.desserts.icecream + "'/>"
});

var cake = document.querySelector('.Dessert--cake');
cake.addEventListener('click', function() {
  console.log('Cake clicked.');
  var dessertHolder = document.querySelector('.Holder--dessert');
  dessertHolder.innerHTML = "<img src = '" + images.desserts.cake + "'/>"
});

var pie = document.querySelector('.Dessert--pie');
pie.addEventListener('click', function() {
  console.log('Pie clicked.');
  var dessertHolder = document.querySelector('.Holder--dessert');
  dessertHolder.innerHTML = "<img src = '" + images.desserts.pie + "'/>"
});
