const middlewareWrapper = require("cors");

const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const navs = document.querySelectorAll('a')

navs[0].textContent = 'Services'
navs[1].textContent = 'Product'
navs[2].textContent = 'Vision'
navs[3].textContent = 'Features'
navs[4].textContent = 'About'
navs[5].textContent = 'Contact'

navs.forEach( a => {
  a.setAttribute('class', 'italic')
})

const firstPic = document.querySelector('img')

firstPic.setAttribute('src', 'http://localhost:9000/img/logo.png')

const h1 = document.querySelector('h1')
h1.textContent = 'DOM Is Awesome'

const button = document.querySelector('button')
button.textContent = 'Get Started'

const bigImage = document.querySelector('#cta-img')
bigImage.setAttribute('src', 'http://localhost:9000/img/cta.png')

const h4 = document.querySelectorAll('h4')
h4[0].textContent = 'Features'

const p = document.querySelectorAll('p')
p[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

h4[1].textContent = 'About'
p[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const middleImage = document.querySelector('#middle-img')
middleImage.setAttribute('src', 'http://localhost:9000/img/accent.png')
  
h4[2].textContent = 'Services'
h4[3].textContent = 'Product'
h4[4].textContent = 'Vision'

const bottomContent_p = document.querySelectorAll('.bottom-content p')
bottomContent_p[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
bottomContent_p[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
bottomContent_p[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

h4[5].textContent = 'Contact'

const contactPs = document.querySelectorAll('.contact p')

contactPs[0].textContent = '123 Way 456 Street Somewhere, USA'
contactPs[1].textContent = '1 (888) 888-8888'
contactPs[2].textContent = 'sales@greatidea.io'

const footer = document.querySelector('footer a')
footer.setAttribute('class' , 'bold')
footer.textContent = 'Copyright Great Idea! 2021'