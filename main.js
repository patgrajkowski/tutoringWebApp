const msgIcon = document.getElementById('msg');
const subCategories = document.getElementsByClassName('subcategories');
const mainCategories = document.getElementsByClassName('main-category');
let msgOpened = false;
const changeMsgIcon = () => {
    if(!msgOpened){
        msgIcon.src = './assets/msgopen.svg';
        msgOpened = !msgOpened;
        return;
    }
    if(msgOpened){
        msgIcon.src = './assets/msgclose.svg';
        msgOpened = !msgOpened;
        return;
    }
};
const changeCategory = (event) => {
    console.log(event.target);
    Array.from(mainCategories).forEach(mainCategory => event.target === mainCategory ? mainCategory.style.borderColor = '#aab1ba' : mainCategory.style.borderColor = '');
    Array.from(subCategories).forEach(subCategory => subCategory.id.substring(2) === event.target.id ? subCategory.style.display = 'flex' : subCategory.style.display = '');
}
msgIcon.addEventListener('mouseover', changeMsgIcon);
msgIcon.addEventListener('mouseout', changeMsgIcon);
Array.from(mainCategories).forEach(item => item.addEventListener('click', changeCategory));