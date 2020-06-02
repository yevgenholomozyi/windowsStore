const checkSubmitForm = (form) => {
    form.addEventListener('submit', (e) => {
        const inputForms = form.querySelectorAll('input'), 
        errorMessage = document.createElement('div');
        errorMessage.classList.add('status');
        errorMessage.textContent = 'Пожалуйста, введите цифры';
        
        if(inputForms.length > 0) {
            inputForms.forEach(item => {
                if(item.value.match(/\D/) || item.value == '') {
                e.preventDefault;
                item.style.border = '1px solid red';
                form.appendChild(errorMessage);
                }
            })
        }
    });
}
export default checkSubmitForm;