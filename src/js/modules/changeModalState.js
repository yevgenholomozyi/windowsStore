import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'), // a chosen form of a window
        windowWidth = document.querySelectorAll('#width'), // set width of the window
        windowHeight = document.querySelectorAll('#height'), // height of the window
        windowType = document.querySelectorAll('#view_type'), // wooden, metal etc
        windowProfile = document.querySelectorAll('.checkbox'); // cold or worm. Checkbox can not be styled, therefore the layout contains spans with a class 'checkbox'

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems(event, elem, prop) { // function to remember the state of choosen options
        elem.forEach((item, i) => {                     
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':            // choose the value of founded checkbox
                        state[prop] = i;
                        break;
                    case 'INPUT':         // remeber the value of inputs
                        if (item.getAttribute('type') === 'checkbox') { // choose the windowProfile, as only they have checkboxes
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое"; // remember the value of the windowProfile
                            elem.forEach((box, j) => { // clear inputs exept choosen
                                box.checked = false; 
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value; // remember the value of width and height
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value; // rembeber the value of wooden, metal, etc.
                        break;
                }

            });
        });
    }


    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');

}
export default changeModalState;