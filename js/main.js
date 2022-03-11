const tabItems = document.querySelectorAll('.tab-item');
//console.log(tabItems);
const tabContentItems = document.querySelectorAll('.tab-content-item');
//console.log(tabContentItems);

// Select tab content item
function selectItem(e){
    // Remove border from all tabs
    removeBorder();

    // Add border to current tab
    this.classList.add('tab-border');

    // Do not show any tab content
    removeShow();

    // Grab content item from the DOM
    // console.log(this.id);
    const tabContentItem = document.querySelector(`#${this.id}-content`)

    // Show selected tab content
    tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listem for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem))