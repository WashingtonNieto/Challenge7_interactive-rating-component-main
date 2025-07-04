let numberContainer = document.querySelector('.rating-state__number-container');
let rateNumber = document.querySelector('.thankyou-state__result--number');
let submitBtn = document.querySelector('.rating-state__button');
let ratingState = document.querySelector('.rating-state');
let thankyouState = document.querySelector('.thankyou-state');


numberContainer.addEventListener('click', event=>{
// console.log(numberContainer);
// console.log(event.target.innerText);
    let numberSelected = event.target.innerText;
    rateNumber.innerText = numberSelected;
    // console.log(numberSelected); 
    // aca imprime todos los numero
    // para solucionar...

    if(numberSelected > 0 || numberSelected <= 5){
        submitBtn.addEventListener('click', ()=>{
            // console.log('submit');
            ratingState.style.display = 'none';
            thankyouState.style.display = 'flex';
        })

    }
});

