const bankBtn = document.getElementById('bankBtn');
const bankInfo = document.getElementById('bankInfo');

bankBtn.addEventListener('click', () => {
    bankInfo.classList.toggle('hidden');
    console.log(true);
    
});

let ibanValue = document.querySelector('#ibanValue')
let copyP = document.querySelector('.copy p')
let copyIbanBtn = document.querySelector('#copyIbanBtn')


copyIbanBtn.addEventListener('click' ,()=>{
    navigator.clipboard.writeText(ibanValue.textContent);
    copyP.textContent = 'تم نسخ الايبان بنجاح'
    setTimeout(()=>{
        copyP.textContent = 'نسخ الايبان'
    },2000)

})
