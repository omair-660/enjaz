emailjs.init({
    publicKey: "KMawxaTkCRWrzga88"
});

let contactForm = document.getElementById("contactForm");
let contactName = document.getElementById('contactName')
let contactEmail = document.getElementById('contactEmail')
let contactMessage = document.getElementById('contactMessage')

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
        console.log(error);

        Swal.fire({
            icon: "error",
            title: "أوبس...",
            text: "حدث خطأ أثناء إرسال الرسالة، حاول مرة أخرى.",
        });
    });
});
function validation(input){
        if (input.value.trim() == '') {
            input.classList.add('err')
        }else{
            input.classList.remove('err')
        }
}
