// Define Global Variables
const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const backToTop = document.getElementById('backToTop');

//Start Helper Functions




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navBuild = () => {

    let navBody = '';
    sections.forEach(section => {

        const sectionId = section.id;
        const dataNav = section.dataset.nav;
        
        navBody += `<li><a  class="menu__link" href="#${sectionId}">${dataNav}</a></li>`
        
    });

    //appending to the UL

    navList.innerHTML = navBody;
    
};

navBuild();

// Add class 'active' to section when near top of viewport and hightlight nav items

function activeSection () {
    for (const section of sections) {
        const sectionPos = section.getBoundingClientRect();

        if (sectionPos.top <= 150 && sectionPos.bottom >= 150) {
            section.classList.add('your-active-class');
        } else {
           
            section.classList.remove('your-active-class');
        }
    }
}

document.addEventListener('scroll', function() {
    activeSection();
});

// Scroll to anchor ID usinig scrollTO event

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add a scroll to Top Button that's only visible when the user scrolls bellow the fold of the page 

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.style.display = 'inline-block';
    } else {
        backToTop.style.display = 'none';
    }
}

window.onscroll = function() {
    scrollFunction()
};


// scroll to top

backToTop.addEventListener('click', function(e) {
    e.preventDefault();

    window.scrollTo({
        top: 0, behavior: 'smooth'
    });
});