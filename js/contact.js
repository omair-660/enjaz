emailjs.init({
    publicKey: "KMawxaTkCRWrzga88"
});

let contactForm = document.getElementById("contactForm");
let contactName = document.getElementById('contactName')
let contactEmail = document.getElementById('contactEmail')
let contactMessage = document.getElementById('contactMessage')
let errContact = document.querySelector('.errContact')
let btn = document.querySelector('.btn-submit')
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    validation(contactName);
    validation(contactEmail);
    validation(contactMessage);

    if (
        contactName.value.trim() === '' ||
        contactEmail.value.trim() === '' ||
        contactMessage.value.trim() === ''
    ) {
        return;
    }
     btn.innerHTML = 'جاري الإرسال <i class="fa-solid fa-spinner fa-spin"></i>';
    btn.disabled = true;

    emailjs.sendForm(
        "service_og7a9aq",
        "template_31yspef",
        contactForm
    )
    .then(() => {
        Swal.fire({
            title: "تم الإرسال!",
            text: "تم إرسال رسالتك بنجاح ❤️",
            icon: "success"
        });
        contactForm.reset();
    })
    .catch((error) => {
        Swal.fire({
            icon: "error",
            title: "أوبس...",
            text: "حدث خطأ أثناء إرسال الرسالة، حاول مرة أخرى.",
        });
    })
        .finally(() => {
                btn.innerHTML = ' إرسال الرسالة <i class="fa-solid fa-paper-plane"></i>'
    btn.disabled = true;

    });

});
function validation(input){
        if (input.value.trim() == '') {
            input.classList.add('err')
            errContact.innerHTML = 'يرجاء ملئ الحقول'
            errContact.style.display = 'block'
        }else{
            input.classList.remove('err')
            errContact.style.display = 'none'
        }
}