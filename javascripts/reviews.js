//Testimonial Data
const testimonials = [
    {
      name: "Sarah Okeke",
      job: "In-Patient, Limi Hospital",
      image: "img 3.jpg",
      testimonial:
        "After carefully reading the reviews on this website, I can say it is 99.9% accurate, the hopital I visted from this page was worth it, the reviews here helped me decide on the best Hospital to take my kids to, a big thank you to life-link!.",
    },
    {
      name: "Cynthia Musa",
      job: "Out-patient, Cedercrest Hospital",
      image: "img 5.jpg",
      testimonial:
        " Through life-link, I have been able to make informed decisions health decisions for me and my family, and getting more accurate health news to help me stay informed.",
    },
    {
      name: "Abdul Salihu",
      job: "In-patient, Duchess Hospital",
      image: "verve coffee.png",
      testimonial:
        "After carefully reading the reviews on this website, I can say it is 99.9% accurate, the hopital I visted from this page was worth it, the reviews here helped me decide on the best Hospital to take my kids to, a big thank you to life-link!.",
    },
    {
      name: "Joe Rocks",
      job: "Consultation, Niziyime Hospital",
      image: "img 5.jpg",
      testimonial:
        "As a foeigner living in Abuja Nigeria, I don't always know the best place to get accurate health informaations, the reviews here helped me decide on the best Hospital to use, Amazing work to life-link team!",
    },
  ];
  
  //Current Slide
  let i = 0;
  //Total Slides
  let j = testimonials.length;
  
  let testimonialContainer = document.getElementById("testimonial-container");
  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");
  
  nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
  });
  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
  });
  
  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
      <img src=${testimonials[i].image}>
      <h3>${testimonials[i].name}</h3>
      <h6>${testimonials[i].job}</h6>
    `;
  };
  window.onload = displayTestimonial;