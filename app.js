// Review data
const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web Developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },

  {
    id: 2,
    name: "Seam John",
    job: "Designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
    "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },

  {
    id: 3,
    name: "James Scrapper",
    job: "Mechanical Engineer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
    "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },

  {
    id: 4,
    name: "Mathew Ma",
    job: "JavaScript Programmer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  }
  
];

// Assigning variable
const img = document.querySelector('#person-img');
      author = document.querySelector('.author');
      job = document.querySelector('.job');
      info = document.querySelector('.info');
      prevBtn = document.querySelector('.prev-btn');
      nextBtn = document.querySelector('.next-btn');
      randomBtn = document.querySelector('.random-btn');

// Set current review
let currentReview = 0;

// Load HTML image
window.addEventListener("DOMContentLoaded", loadContent);

function loadContent() {
  const item = reviews[currentReview];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
} 

// Show persons
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// activating the next button
nextBtn.addEventListener('click', nextProfile);

function nextProfile() {
  currentReview++;
  if(currentReview > reviews.length - 1) {
    current = 0;
  }

  showPerson(currentReview);
}

// activating the previous button
prevBtn.addEventListener('click', previousProfile);

function previousProfile() {
  currentReview--;
  if(currentReview > reviews.length - 1) {
    current = 0;
  }

  showPerson(currentReview);
} 

// activating random button
randomBtn.addEventListener('click', randomProfile);

function randomProfile() {
  console.log('hello');
  currentReview = Math.floor(Math.random() * reviews.length);

  showPerson(currentReview);
}