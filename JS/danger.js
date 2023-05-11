
//  ============== TRYING OPENIENG ANIMATION FOR LOGO =============




//  ============== TRYING OPENIENG ANIMATION FOR LOGO =============

/* ================ NAVBAR =============== */

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    //Toggle Nav
    burger.addEventListener('click', ()=>{
      nav.classList.toggle('nav-active');
      
      //Animate Links
      navLinks.forEach((link, index)=>{
        if(link.style.animation){
          link.style.animation = ''
        }else{
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
  
        }
      });
      
      //burger animation
      burger.classList.toggle('toggle');
    });
  }
  
  navSlide();

  /* ================ NAVBAR =============== */

  // ============== javascript fucntions ================

function add (number1, number2) {
  var result = number1 + number2;
  return result;

}

var answer = add( 2 , 3);
console.log( answer );

// ============== javascript fucntions ================

var newListItem = document.createElement ("li");
var entireUnorederedList = document.getElementById ("mainSiteList");
var newListTest = document.createTextNode("List item number 5");

newListItem.appendChild( newListText )
entireUnorederedList.appendChild( NewListItem );

console.log ( entireUnorederedList.innerHTML )
