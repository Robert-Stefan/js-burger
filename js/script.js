//CREATE YOUR BURGER

//REFERENZE
var btn = document.getElementById('button');
var burgerName = document.getElementById('name');
var ingredients = document.getElementsByClassName('ingredient-checkbox');
var displayPrice = document.getElementById('price');
var coupon = document.getElementById('coupon');
var addBtn = document.getElementsByClassName('ingredient-add');
var coupons = ['123456ABCDEF', '59478HUIDDIK', '86921UTVDNIO'];

//CALCOLO PREZZO BURGER

btn.addEventListener('click', function(){
    
    var name = burgerName.value.trim();

    if(name.length === 0) {

        alert('Non hai inserito un nome per il tuo burger');

    } else {

        var price = 50;

        for(var i = 0; i < ingredients.length; i++) {
            var ingredientCheck = ingredients[i];
            //console.log(ingredientCheck.checked);

            if (ingredientCheck.checked === true) {
                console.log(ingredientCheck.value);
                //aggiornare il prezzo
                price += parseInt(ingredientCheck.value);
            }
        }
        console.log(price);

        //COUNPONS PROMOTIONS

        var couponCode = coupon.value;

        //console.log(couponCode);

        if ( coupons.includes(couponCode) ) {
            //console.log('Codice corretto');

            //20% di sconto
            price -= price * 0.2;
        }
        console.log(price.toFixed(2));
        displayPrice.innerHTML = price.toFixed(2);
    }
});

//ADD cliccabili ingredienti

for (var i = 0; i < addBtn.length; i++) {
    var add = addBtn[i];

    add.addEventListener('click', function() {
        console.log('Click!');
        console.log(this); 
        console.log(this.previousElementSibling);

        var thisCheckbox = this.previousElementSibling;
        thisCheckbox.checked = ! thisCheckbox.checked;
    });
};