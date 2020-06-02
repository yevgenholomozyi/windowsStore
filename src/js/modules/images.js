const images = () => {
    const imgPopup = document.createElement('div'), // element to be created on the click
        workSection = document.querySelector('.works'), // section were the element will be created
        bigImg = document.createElement('img'); // image to be inserted to the imgPopup

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.cssText = `
        justify-content: center;
        align-items: center;
        display: none;
    `;
    bigImg.style.cssText = `
        display: block;
        max-width: 75vw;
        max-height: 75vh;
        border: 4px white solid;
        border-radius: 6px;
        object-fit: cover;
    `
    imgPopup.appendChild(bigImg);

    workSection.addEventListener('click', (e) => {
        e.preventDefault(); // to cancel automatic reload of the page

        const target = e.target;

        if(target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href'); // img with a class 'preview' contains in the link, we must get the value of this link
            bigImg.setAttribute('src', path); // set the link for the popUp
            document.body.style.overflow = 'hidden';
        }
        
        if(target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = 'visible';

        } 
    })
}
export default images;