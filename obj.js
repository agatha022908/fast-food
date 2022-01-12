function cartObj() {
   let rand = randomNumbers(1, 2)

   const priceList = {
      1: {
         'Lavash': {
            info: 'big cheese',
            price: 15000
         },
         'Hot-dog': {
            info: 'mini',
            price: 15000
         },
         'Cola': {
            info: '1.5 L',
            price: 9000
         },
      },
      2: {
         'Sushi': {
            info: 'max-roll',
            price: 32000
         },
         'Soya': {
            info: '200ml',
            price: 5000
         },
      }
   }

   return priceList[rand]
}

function randomNumbers(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

const cart = cartObj();
console.log(cart);

let i = 9000;
let menu = 'Sizning buyurtmangiz ';
for(const key in cart) {
    menu = menu + `${key}`;
    for(const newKey in cart[key]) {
        menu = newKey == 'info' ? menu + ` ${cart[key][newKey]},` : menu + '';
        i = newKey == 'price' ? i + cart[key][newKey] : i;
    }
}
console.log(`${menu} | Ularning qiymati ${i} yetkazish haqqi (9000)`);
