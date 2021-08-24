//functions
function updateAmount(product,price,isIncreasing){
    const phoneInput=document.getElementById(product+'-number');
    let productNumber=phoneInput.value;
    if(isIncreasing==true){
    productNumber=parseInt(productNumber)+1;
    }else if(productNumber>0){
        productNumber=parseInt(productNumber)-1;
    }
    //update phone total
    phoneInput.value=productNumber;
    const productTotal = document.getElementById(product+'-total');
    productTotal.innerText= parseInt(productNumber) * price;
    calcTotal();
}


function getInputValue(product){
    const productInput=document.getElementById(product+'-number');
    const productNumber=parseInt(productInput.value);
    return productNumber;
}
function calcTotal(){
    const phoneTotal= getInputValue('phone')*1219;
    const caseTotal= getInputValue('case')*59;
    const subTotal= phoneTotal+caseTotal;
    const tax=subTotal/10;
    const totalPrice= subTotal+tax;
    document.getElementById('sub-total').innerText=subTotal;
    document.getElementById('tax-total').innerText=tax;
    document.getElementById('main-total').innerText=totalPrice;
}
//button functionalities
document.getElementById('phone-plus').addEventListener('click',function(){
    updateAmount("phone",1219,true);
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateAmount("phone",1219,false);
})
//updating case buttons
document.getElementById('plus-case').addEventListener('click',function(){
    updateAmount("case",59,true);
})
document.getElementById('minus-case').addEventListener('click',function(){
    updateAmount("case",59,false);
})
