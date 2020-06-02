const checkNumInputs = (selector) => {
    const numbInputs = document.querySelectorAll(selector);


    numbInputs.forEach(item => {
        item.addEventListener('input', () => {
            if(item.value.match(/\D/g)) {
            item.value = item.value.replace(/\D/, '');
            item.style.border = '1px solid red';
            } else {
                item.style.border = 'none';
            }
        });
        item.addEventListener('blur', () => {
            item.style.border = 'none';
        })
    });
}

export default checkNumInputs;