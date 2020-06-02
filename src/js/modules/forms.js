const forms = (state) => {

    // forms and inputs
    const form = document.querySelectorAll('form'), 
    inputs = document.querySelectorAll('input'), 
    phoneInputs = document.querySelectorAll('input[name="user_phone"]'), 

    // messages to show the result 
    message = {
        loading: 'Отправка сообщения',
        sucsess: 'Ваше сообщение отправлено, мы с вами свяжемся',
        failrue: 'Упс, что-то пошло не так'
    }

    // validation of phone inputs 

    phoneInputs.forEach(item => {

        const phoneError = document.createElement('div'), // creating an element to show a message
            parent = item.parentNode,  // phoneError will be added to the parent node
            parentNodes = parent.childNodes, // find all childNodes of the parent to transform it into the array
            parentElements = Array.prototype.slice.call(parentNodes); // childNodes is the collection, not an array, thus it must be transformed to collection

        phoneError.classList.add('status');
        phoneError.textContent = 'Пожалуйста, введите цифцы';
    
        
        item.addEventListener('input', () => {
            
            if(item.value.match(/\D/) && !parentElements.includes(phoneError)) { // only digits must be inserted
                item.style.border = "1px solid red";
                item.value = '';
                parentElements.push(phoneError); // phoneError is array is added to the array 
                parent.appendChild(phoneError);  // phoneError is added to the form
            } else {
                item.style.border = 'none';
                phoneError.remove(); // remove phoneError from the form
                parentElements.pop(); // remove phoneError from array

            }
        });
    });

    // sending message to the server
    const postData = async (url, data) => { // without 'async' the result of the function will be sent empty
        document.querySelector('.status').textContent = message.loading;

        // work with the fetch
        let result = await fetch(url, {         // 'await' is waiting for a response from the server
            method: 'POST',
            body: data
        })

         return await result.text(); // waiting for a response from the server transforms response to the UTF-8 text
    } // end of postData

    // clear inputs

    function clearInputs() {
        inputs.forEach(item => item.value = '');
    }


    // forms enumeration
    form.forEach(item => item.addEventListener('submit', (e) => {
        e.preventDefault; // cancel the reload of the page on sending the data from the form

        let statusMessage = document.createElement('div'); // to show the status of the message
        statusMessage.classList.add('status');
        item.appendChild(statusMessage); 

        const formData = new formData(item);

        if(item.getAttribute('data-calc') === 'end') {
            for (let key in state) {
                formData.append(key, state[key]);
            }
        }

        postData('assets/server.php', formData) // work with the response of the server
        .then(result => statusMessage.textContent.sucsess)
        .catch(result => statusMessage.textContent.failrue)
        .finally(() => {
            clearInputs();
            setTimeout(() => {statusMessage.remove()}, 5000);
        });
    }))
}
export default forms;