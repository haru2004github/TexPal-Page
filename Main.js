let inputText = document.getElementById('inputText');
let btnOne = document.getElementById('btnOne');
let btnTwo = document.getElementById('btnTwo');
let btnThree = document.getElementById('btnThree');
let btnFour = document.getElementById('btnFour');
let imgContainer = document.getElementById('imgContainer');

// Text
let firstText = document.getElementById('firstText');
let secondText = document.getElementById('secondText');
let thirdText = document.getElementById('thirdText');
let forthText = document.getElementById('forthText');



imgContainer.innerHTML = '<img class=" rounded-3xl w-full md:max-w-[700px] lg:min-w-[1024px]" src="../dist/img/payroll.webp" alt="">'

btnOne.addEventListener('click', ()=>{
    btnOne.classList.add('bg-white/10');
    btnTwo.classList.remove('bg-white/10');
    btnThree.classList.remove('bg-white/10');
    btnFour.classList.remove('bg-white/10');
    imgContainer.innerHTML = '<img class=" rounded-3xl w-full md:max-w-[700px] lg:min-w-[1024px]" src="../dist/img/payroll.webp" alt="">'


})
btnTwo.addEventListener('click', ()=>{
    btnOne.classList.remove('bg-white/10');
    btnTwo.classList.add('bg-white/10');
    btnThree.classList.remove('bg-white/10');
    btnFour.classList.remove('bg-white/10');
    imgContainer.innerHTML = '<img class=" rounded-3xl w-full md:max-w-[700px] lg:min-w-[1024px]" src="../dist/img/second.webp" alt="">'

})
btnThree.addEventListener('click', ()=>{
    btnOne.classList.remove('bg-white/10');
    btnTwo.classList.remove('bg-white/10');
    btnThree.classList.add('bg-white/10');
    btnFour.classList.remove('bg-white/10');
    imgContainer.innerHTML = '<img class=" rounded-3xl w-full md:max-w-[700px] lg:min-w-[1024px]" src="../dist/img/third.webp" alt="">'

})
btnFour.addEventListener('click', ()=>{
    btnOne.classList.remove('bg-white/10');
    btnTwo.classList.remove('bg-white/10');
    btnThree.classList.remove('bg-white/10');
    btnFour.classList.add('bg-white/10');
    imgContainer.innerHTML = '<img class=" rounded-3xl w-full md:max-w-[700px] lg:min-w-[1024px]" src="../dist/img/forth.webp" alt="">'

})


// third-page

let thirdPageImgContainer = document.getElementById('thirdPageImgContainer');
let reporting = document.getElementById('reporting');
let inventory = document.getElementById('inventory');
let contacts = document.getElementById('contacts');
let reportIcon = document.getElementById('reportIcon');
let inventoryIcon = document.getElementById('inventoryIcon');
let contactIcon = document.getElementById('contactIcon');
let reportText = document.getElementById('reportText');
let inventoryText = document.getElementById('inventoryText');
let contactText = document.getElementById('contactText');




thirdPageImgContainer.innerHTML='<img class="rounded-3xl" src="../dist/img/TaxPal - Accounting made simple for small businesses_files/profit-loss.png" alt="">'


reporting.addEventListener('click',()=>{
    thirdPageImgContainer.innerHTML='<img class="rounded-2xl" src="../dist/img/TaxPal - Accounting made simple for small businesses_files/profit-loss.png" alt="">'
    reportIcon.classList.add('bg-blue-500');
    reportIcon.classList.remove('bg-slate-500');
    inventoryIcon.classList.remove('bg-blue-500');
    contactIcon.classList.remove('bg-blue-500')
    inventoryIcon.classList.add('bg-slate-500');
    contactIcon.classList.add('bg-slate-500');

    // text
    reportText.classList.remove('text-slate-700');
    reportText.classList.add('text-blue-500');
    inventoryText.classList.remove("text-blue-500");
    contactText.classList.remove("text-blue-500");
    inventoryText.classList.add("text-slate-700");
    contactText.classList.remove("text-slate-500");




})
inventory.addEventListener('click',()=>{
    thirdPageImgContainer.innerHTML='<img class="rounded-2xl" src="../dist/img/TaxPal - Accounting made simple for small businesses_files/inventory.png" alt="">'
    inventoryIcon.classList.add('bg-blue-500');
    inventoryIcon.classList.remove('bg-slate-500');
    reportIcon.classList.remove('bg-blue-500');
    contactIcon.classList.remove('bg-blue-500');
    reportIcon.classList.add('bg-slate-500');
    contactIcon.classList.add('bg-slate-500');

      // text
      inventoryText.classList.remove('text-slate-700');
      inventoryText.classList.add('text-blue-500');
      reportText.classList.remove("text-blue-500");
      contactText.classList.remove("text-blue-500");
      reportText.classList.add("text-slate-700");
      contactText.classList.remove("text-slate-500");

})

contacts.addEventListener('click',()=>{
    thirdPageImgContainer.innerHTML='<img class="rounded-2xl" src="../dist/img/TaxPal - Accounting made simple for small businesses_files/contacts.png" alt="">'
    contactIcon.classList.add('bg-blue-500');
    contactIcon.classList.remove('bg-slate-500');
    reportIcon.classList.remove('bg-blue-500');
    inventoryIcon.classList.remove('bg-blue-500');
    reportIcon.classList.add('bg-slate-500');
    inventoryIcon.classList.add('bg-slate-500');

      // text
      contactText.classList.remove('text-slate-700');
      contactText.classList.add('text-blue-500');
      reportText.classList.remove("text-blue-500");
      inventoryText.classList.remove("text-blue-500");
      reportText.classList.add("text-slate-700");
      inventoryText.classList.remove("text-slate-500");
})

// Dark Mode

const darkSwitchIcon = document.querySelector("#dark-switch-icon");
const darkSwitch = document.querySelector("#dark-switch")
const darkText = document.querySelector("#dark-text")
const html = document.documentElement;
let isDarkMode = false;

// Switch theme function
const toggleTheme = () => {
    isDarkMode = !isDarkMode;
    switchTheme()
}

const toDark = () => {
    darkSwitchIcon.classList.add('translate-x-full', 'rotate-[360deg]','bg-slate-900')
    darkSwitchIcon.innerHTML = `<i class="fa-solid fa-moon text-slate-100"></i>`
    darkSwitch.classList.remove('bg-slate-800')
    darkSwitch.classList.add('bg-slate-100')
    localStorage.setItem('data-theme', 'dark')
    html.classList.add('dark')
    darkText.classList.add('-translate-x-7')
    darkText.innerText = 'ON'
}

const toLight = () => {
    darkSwitchIcon.classList.remove('translate-x-full', 'bg-slate-900')
    darkSwitch.classList.remove('bg-slate-100')
    darkSwitch.classList.add('bg-slate-800')
    localStorage.removeItem('data-theme')
    html.classList.remove('dark')
    darkText.classList.remove('-translate-x-7')
    darkText.innerText = ''
    darkSwitchIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`
    setTimeout(() => {
        darkSwitchIcon.classList.remove('rotate-[360deg]')
    }, 200)
}

const switchTheme = () => {
    isDarkMode ? toDark() : toLight()
    // or
    // if (isDarkMode) {
    //     toDark()
    // } else {
    //     toLight()
    // }
}


// If you do reload the webpage,
// doesn't change you choose theme.
// This `dataTheme` function save permentaly choose theme.

const dataTheme = localStorage.getItem('data-theme')

dataTheme === 'dark' ? toDark() : toLight();
// or
// if(dataTheme === 'dark') {
//     toDark()
// } else {
//     toLight()
// }



// scroll reval
ScrollReveal().reveal('.headline',{
    origin: 'bottom',
    distance: '60px' ,
    duration : 450,
    interval: 200,
    delay:200,
    reset : true,
   
   });

//    waypoint
const navControl = document.querySelector('.navControl');
const footerUpIcon = document.querySelector('.footer-up-icon')

var waypoint = new Waypoint({
    element: document.getElementById('features'),
    handler: function(direction) {
    if(direction === "down"){
        navControl.classList.add('fixed','w-full','top-0','left-0','shadow-lg','z-30','bg-slate-50');
        navControl.classList.add('animate__fadeInDown');
        


        console.log("down")
    }else{
        navControl.classList.remove('fixed','w-full','top-0','left-0','shadow-lg','z-30','bg-slate-50');
        navControl.classList.remove('animate__fadeInDown');
        console.log("up")
    }
    },
    offset: '50%'
  })

  var waypoint = new Waypoint({
    element: document.getElementById('footer'),
    handler: function(direction) {
    if(direction === "down"){
        footerUpIcon.classList.add('fixed',);
        footerUpIcon.classList.add('animate__fadeInDown');
        console.log("down")
    }else{
        footerUpIcon.classList.remove('fixed',);
        footerUpIcon.classList.remove('animate__fadeInDown');
    }
    },
    offset: '50%'
  })

//   Mobile-menu

const mobileMenu = document.querySelector('.mobile-menu');
const mobileSlide = document.getElementById('mobile-slide');
const cancelBtn= document.getElementById('cancelBtn');

mobileMenu.addEventListener('click',()=>{
    mobileSlide.style.left="0"
})
cancelBtn.addEventListener('click',()=>{
    mobileSlide.style.left="-100%"
})

// scroll-active
 /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
      // Document ထဲမှာရှိသမျှ section အားလုံးကို select လုပ်ထားပါတယ်။
      const sections = document.querySelectorAll("section[id]");

      function scrollActive() {
        // Browser ကို Scroll ဆွဲလိုက်တဲ့အခါ Scroll ရောက်နေတဲ့ Height ကိုရရှိနေမှာဖြစ်ပါတယ်။
        const scrollY = window.pageYOffset;           // scroll height

        // forEach နဲ့ ရှိသမျှ section အကုန်လုံးကို loop လုပ်လိုက်တာဖြစ်ပါတယ်။
        // current.offsetHeight လက်ရှိရောက်နေတဲ့ section ရဲ့ Height ကို ရယူလိုက်တာပါ။
        // current.offsetTop - 58 လက်ရှိရောက်နေတဲ့ section ရဲ့ Top ကို ရယူလိုက်တာပါ။
        // current.getAttribute("id") လက်ရှိရောက်နေတဲ့ section ရဲ့ id ကို ရယူလိုက်တာပါ။
        sections.forEach((current) => {
          const sectionHeight = current.offsetHeight, // get current height
            sectionTop = current.offsetTop - 58,      // get current section of height
            sectionId = current.getAttribute("id");   // get current section id

          // scrollyY သည် sectionTop ထက်ကြီးနေတယ်ဆိုရင် True အနေနဲ့ သတ်မှတ်မှာဖြစ်ပြီး
          // လက်ရှိရောက်နေတဲ့ section ရဲ့ Top နဲ့ လက်ရှိရောက်နေတဲ့ section ရဲ့ Height နှစ်ခုကိုပေါင်းပြီး
          // scrollyY သည် ငယ်နေတယ်(သို့) ညီနေတယ်ဆိုရင် True ကိုရရှိမှာပါ။
          // && သည် Comparsion Operator ဖြစ်ပြီး နှင်းယှဉ်ထားတဲ့ တန်ဖိုးနှစ်ခုလုံး True && True ဖြစ်မှသာ
          // if statement ကိုအလုပ်လုပ်မှာဖြစ်ပါတယ်။ နှိုင်းယှဉ်လိုက်တဲ့ တန်ဖိုးက false ဖြစ်နေလျှင် else ကို အလုပ်လုပ်သွားမှာဖြစ်ပါတယ်။
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
              .querySelector("a[href*=" + sectionId + "]").classList.add("active-link");
          } else {
            document
              .querySelector("a[href*=" + sectionId + "]").classList.remove("active-link");
          }
        });
      }
      // function သည် ကြေညာလိုက်ရုံနဲ့ အလုပ်မလုပ်ပါဘူး။
      // သူ့ကို ပြန်ခေါ်သုံးမှသာ အလုပ်လုပ်တာဖြစ်ပါတယ်။
      // ဒါကြောင့် Browser ကို Scroll လုပ်လိုက်လျှင် scrollActive ကို အလုပ်လုပ်ပေးပါလို့ပြောလိုက်ခြင်းဖြစ်ပါတယ်။
      window.addEventListener("scroll", scrollActive);