

// Navbar toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const productBtn = document.getElementById('productBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  dropdownMenu.classList.remove('active');
});

productBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdownMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    dropdownMenu.classList.remove('active');
  }
});
//hero section  
// ===== Simple Auto-Slider Script =====
  const slides = document.querySelectorAll(".banner-slider img");
  let currentIndex = 0;

  function changeSlide() {
    slides[currentIndex].classList.remove("active-banner");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active-banner");
  }

  setInterval(changeSlide, 3500); // change image every 4 seconds
// clothing idea 
// Scroll animation
const revealEls = document.querySelectorAll(".text h2, .text p, .info, .contact-btn");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.3 });

revealEls.forEach(el => observer.observe(el));

// review 
const reviews = document.querySelectorAll(".review-box");
let index = 0;

function showNextReview() {
  reviews[index].classList.remove("active");
  reviews[index].classList.add("exit");

  index = (index + 1) % reviews.length;

  reviews[index].classList.remove("exit");
  reviews[index].classList.add("active");
}

setInterval(showNextReview, 3000);

// footer 
document.addEventListener("DOMContentLoaded", () => {
  // Dynamic Year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Newsletter form
  const form = document.getElementById("newsletterForm");
  const message = document.getElementById("message");
  const emailInput = document.getElementById("emailInput");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    const isValid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);

    if (email === "") {
      message.textContent = "Please enter your email!";
      message.style.color = "orange";
    } else if (!isValid) {
      message.textContent = "Enter a valid email address!";
      message.style.color = "red";
    } else {
      message.textContent = "Thank you for subscribing!";
      message.style.color = "lightgreen";
      emailInput.value = "";

      // Small fade animation
      message.style.opacity = "0";
      setTimeout(() => {
        message.style.transition = "opacity 0.4s ease";
        message.style.opacity = "1";
      }, 80);
    }
  });
});

// clothing 
// Open/close filter panel
filterBtn.addEventListener("click", () => {
  filterPanel.classList.toggle("active");
});

// Close filter if clicked outside
window.addEventListener("click", (e) => {
  if (!filterPanel.contains(e.target) && e.target !== filterBtn) {
    filterPanel.classList.remove("active");
  }
});

// Filter functionality
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const checked = Array.from(checkboxes)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value);

    products.forEach((product) => {
      const category = product.dataset.category;
      if (checked.length === 0 || checked.includes(category)) {
        product.style.display = "block";
        product.style.opacity = "1";
      } else {
        product.style.display = "none";
        product.style.opacity = "0";
      }
    });
  });
});

// <script>
// ===== Navbar =====

// Navbar open/close
// Navbar toggle
// const hamburger = document.getElementById('hamburger');
// const navLinks = document.getElementById('navLinks');
// const productBtn = document.getElementById('productBtn');
// const dropdownMenu = document.getElementById('dropdownMenu');
//  manu 
// founder 
// Add smooth fade-in animation when section appears
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".founder-wrapper");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) section.classList.add("visible");
    });
  }, { threshold: 0.2 });
  observer.observe(section);
});


// const revealElements = document.querySelectorAll(".founder-container, .team-member");

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

revealElements.forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease-out";
  observer.observe1(el);
});
// faqs 

document.addEventListener("DOMContentLoaded", () => {
  const thoughts = [
    "Style is a way to say who you are without having to speak.",
    "Clothes mean nothing until someone lives in them.",
    "Fashion fades, but style is eternal.",
    "Dress like you’re already famous.",
    "Simplicity is the ultimate sophistication.",
    "Your outfit can change your mood — so choose confidence.",
    "Every day is a fashion show, and the world is your runway.",
    "Elegance is not standing out, but being remembered.",
    "Luxury is when it looks just as good on the inside as it does on the outside.",
    "Trends change, but good taste never goes out of style."
  ];

  const thoughtText = document.getElementById("thoughtText");
  if (!thoughtText) return; // Prevent errors if element doesn't exist

  let index = 0;

  function typeText(text, callback) {
    thoughtText.textContent = "";
    thoughtText.style.opacity = 1;
    let i = 0;

    function typing() {
      if (i < text.length) {
        thoughtText.textContent += text.charAt(i);
        i++;
        setTimeout(typing, 50);
      } else if (callback) {
        setTimeout(callback, 2000);
      }
    }
    typing();
  }

  function changeThought() {
    thoughtText.style.opacity = 0;
    setTimeout(() => {
      index = (index + 1) % thoughts.length;
      typeText(`"${thoughts[index]}"`, changeThought);
    }, 500);
  }

  typeText(`"${thoughts[index]}"`, changeThought);
});


const faqData = {
  "getting-started": {
    title: "Getting Started",
    qna: [
      {
        q: "What is RareDeer and how does it work?",
        a: "RareDeer is a premium clothing platform that connects you directly with manufacturers, ensuring high-quality products and transparent pricing without middlemen."
      },
      {
        q: "How do I create an account?",
        a: "Click on the ‘Sign Up’ button at the top-right corner, enter your email, password, and other details, then verify your email to activate your account."
      },
      {
        q: "Is there any membership fee?",
        a: "No, creating an account on RareDeer is completely free."
      },
      {
        q: "How can I reset my password?",
        a: "Go to the login page, click on ‘Forgot Password’, and follow the link sent to your registered email to reset it."
      },
      {
        q: "Can I update my personal details after signing up?",
        a: "Yes, you can edit your personal or contact details anytime from your account dashboard under 'Profile Settings'."
      }
    ]
  },
  "payments": {
    title: "Payments",
    qna: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major debit/credit cards, UPI, Paytm, Google Pay, and net banking."
      },
      {
        q: "Is it safe to save my card details?",
        a: "Yes, we use encrypted payment gateways that follow PCI-DSS compliance for data protection."
      },
      {
        q: "What should I do if my payment fails?",
        a: "If your payment fails, wait a few minutes and try again or contact our support team at support@raredeer.com."
      },
      {
        q: "How do I request a refund?",
        a: "Refunds can be requested through the order page by selecting ‘Request Refund’. It’s processed within 5–7 business days."
      },
      {
        q: "Can I use UPI or wallet payments?",
        a: "Yes, UPI and leading wallet options like Paytm, PhonePe, and Amazon Pay are supported."
      }
    ]
  },
  "business": {
    title: "Business",
    qna: [
      {
        q: "How can I collaborate with RareDeer as a partner?",
        a: "You can email us at partnerships@raredeer.com with your proposal or business idea."
      },
      {
        q: "What are the benefits of becoming a business customer?",
        a: "Business customers enjoy bulk discounts, priority support, and early access to new collections."
      },
      {
        q: "Do you provide bulk order discounts?",
        a: "Yes, we offer custom pricing based on order volume and product category."
      },
      {
        q: "How do I request a business quote?",
        a: "Fill out the ‘Request a Quote’ form on our website or contact our business team directly."
      },
      {
        q: "Can I get a customized solution for my company?",
        a: "Yes, we specialize in tailor-made apparel solutions for corporate and fashion brands."
      }
    ]
  },
  "online-sellers": {
    title: "Online Sellers",
    qna: [
      {
        q: "How do I register as a seller on RareDeer?",
        a: "Click on ‘Sell with Us’ on the homepage and fill out the seller registration form."
      },
      {
        q: "What are the commission charges?",
        a: "Commission varies depending on the product type, typically ranging from 5–15%."
      },
      {
        q: "How are orders and payments managed?",
        a: "Once your product sells, payment is transferred directly to your bank account after the return period ends."
      },
      {
        q: "How can I track my sales performance?",
        a: "You can access detailed sales analytics in your seller dashboard under 'Reports'."
      },
      {
        q: "Can I sell internationally through RareDeer?",
        a: "Yes, we support cross-border selling through our global logistics partners."
      }
    ]
  }
};

const boxes = document.querySelectorAll('.faq-box');
const faqContent = document.getElementById('faq-content');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    boxes.forEach(b => b.classList.remove('active'));
    box.classList.add('active');

    const category = box.getAttribute('data-category');
    const data = faqData[category];

    faqContent.innerHTML = `
          <h3>${data.title}</h3>
          ${data.qna.map(item => `
            <div class="faq-item">
              <div class="faq-question">${item.q} <span>+</span></div>
              <div class="faq-answer">${item.a}</div>
            </div>
          `).join('')}
        `;

    // FAQ toggle animation
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const dropdownBtn = document.getElementById("productBtn");
  const dropdownMenu = document.getElementById("dropdownMenu");

  // ✅ Toggle Navbar Menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // ✅ Dropdown inside navbar
  dropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle("active");
  });

  // ✅ Close dropdown when clicking outside
  document.addEventListener("click", () => {
    dropdownMenu.classList.remove("active");
  });
});


// contact 
const aboutTexts = document.querySelectorAll(".about-info p");
window.addEventListener("scroll", () => {
  aboutTexts.forEach((p) => {
    const rect = p.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      p.style.opacity = "1";
      p.style.transform = "translateY(0)";
    }
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const popup = document.getElementById("popup");
  popup.style.display = "block";
  setTimeout(() => popup.style.display = "none", 3000);
});