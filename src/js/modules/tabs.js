const tabs = (headerSelector, tabSelector, contentSelector, activeClass,  display = 'block') => {

    // selectors
    const header = document.querySelector(headerSelector), 
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        })
        tab.forEach(item => item.classList.remove(activeClass)); // tabs contains activity class which should be removed by default
    }

    hideTabContent();

    function showTabContent(num = 0) {
        content[num].style.display = display; //block by default
        tab[num].classList.add(activeClass);

    }

    showTabContent();

    header.addEventListener('click', (e) => {

        const target = e.target;

        if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};
export default tabs;