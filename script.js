const tabsItems = document.querySelectorAll('.tabs-item');
const tabsContentItems = document.querySelectorAll('.tabs-content-item')

function selectItem(e) {
    removeBorder();
    removeShow();
    this.classList.add('tabs-border');

    const tabsContentItem1 = document.querySelector('.tabs-1-content');
    const tabsContentItem2 = document.querySelector('.tabs-2-content');
    const tabsContentItem3 = document.querySelector('.tabs-3-content');

    if (this.id === tabsContentItem1.id) {
        tabsContentItem1.classList.add('show');
    }
    if (this.id === tabsContentItem2.id) {
        tabsContentItem2.classList.add('show');
    }
    if (this.id === tabsContentItem3.id) {
        tabsContentItem3.classList.add('show');
    }

}

function removeBorder() {
    tabsItems.forEach(item => item.classList.remove('tabs-border'))
}

function removeShow() {
    tabsContentItems.forEach(item => item.classList.remove('show'))
}



tabsItems.forEach(item => item.addEventListener('click', selectItem));
