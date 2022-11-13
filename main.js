const logoSlide = document.getElementById('logo-slide');
const slideLeft = document.getElementById('slide-left');
const slideRight = document.getElementById('slide-right');

// const slideLeft() {
//     logoSlide.scrollLeft = logoSlide.scrollLeft - 500;
// }

// const slideRight() {
//     logoSlide.scrollLeft = logoSlide.scrollLeft + 500;
// }

slideLeft.addEventListener('click', () => {
    logoSlide.scrollLeft = logoSlide.scrollLeft - 500;
})
slideRight.addEventListener('click', () => {
    logoSlide.scrollLeft = logoSlide.scrollLeft + 500;
})

// var faqToggle = document.getElementsByClassName('faq-toggle');

// for (let i = 0; i < faqToggle.length; i++) {
    
//     faqToggle[i].addEventListener('click', () => {

//     // var toggletext = document.getElementsByClassName('.toggle-text');
//     // toggletext.createAttribute('id', 'toggle-text-[i]');
//     var titleBox = faqToggle[i].firstElementChild;
//     var infoText = faqToggle[i].lastElementChild;
//     var titleText = titleBox.firstElementChild;
//     var titleIcon = titleBox.lastElementChild;
//     // var text = titleBox.firstElementChild;

//     if(titleBox.classList.contains('bg-lightBlue'))
//     {
//         titleBox.classList.remove('bg-lightBlue');
//         titleBox.classList.add('bg-gray-100');
//     }
//     else
//     {
//         titleBox.classList.add('bg-lightBlue');
//         titleBox.classList.remove('bg-gray-100');
//     };

//     // titleBox.classList.toggle('bg-gray-100');
//     titleText.classList.toggle('text-white');
//     titleIcon.classList.toggle('text-white');

//     // icon.classList.toggle('text-white');
//     // h1Text.classList.toggle('text-white');
 
//     if(titleIcon.classList.contains('fa-chevron-up'))
//     {
//         titleIcon.classList.remove('fa-chevron-up');
//         titleIcon.classList.add('fa-chevron-down');
//     }
//     else
//     {
//         titleIcon.classList.add('fa-chevron-up');
//         titleIcon.classList.remove('fa-chevron-down');
//     };
    
//     if(infoText.classList.contains('h-auto', 'opacity-1', 'py-4'))
//     {
//         infoText.classList.remove('h-auto', 'opacity-1', 'py-4');
//         infoText.classList.add('h-0', 'opacity-0', 'py-0');
//     }
//     else
//     {
//         infoText.classList.remove('h-0', 'opacity-0', 'py-0');
//         infoText.classList.add('h-auto', 'opacity-1', 'py-4');
//     };

//     console.log(titleText);
//     })
    
// }

// let showText = () => {

//     var faqToggle = document.querySelector('.faq-toggle');
//     var toggletext = document.querySelector('.toggle-text');
//     var h1Text = faqToggle.firstElementChild;
//     var icon = faqToggle.lastElementChild;

//     console.log(icon);

//     icon.classList.toggle('text-white');
//     // icon.classList.toggle('fa-chevron-down');
//     h1Text.classList.toggle('text-white');
 
//     if(icon.classList.contains('fa-chevron-up'))
//     {
//         icon.classList.remove('fa-chevron-up');
//         icon.classList.add('fa-chevron-down');
//     }
//     else
//     {
//         icon.classList.add('fa-chevron-up');
//         icon.classList.remove('fa-chevron-down');
//     };
//     if(faqToggle.classList.contains('bg-gray-100'))
//     {
//         faqToggle.classList.remove('bg-gray-100');
//         faqToggle.classList.add('bg-lightBlue');
//     }
//     else
//     {
//         faqToggle.classList.remove('bg-lightBlue');
//         faqToggle.classList.add('bg-gray-100');
//     };
    
//     if(toggletext.classList.contains('h-auto', 'opacity-1', 'py-4'))
//     {
//         toggletext.classList.add('h-0', 'opacity-0');
//         toggletext.classList.remove('h-auto', 'opacity-1', 'py-4');
//     }
//     else
//     {
//         toggletext.classList.add('h-auto', 'opacity-1', 'py-4');
//         toggletext.classList.remove('h-0', 'opacity-0'); 
//     };
    

// };
