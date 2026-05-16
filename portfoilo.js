// 1. Daktilo Efekti (Typewriter Effect)
const typewriterText = ["Junior DevOps Engineer", "AWS Cloud Enthusiast", "CI/CD Automation Specialist"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.getElementById("typewriter");

function type() {
    const currentWord = typewriterText[textIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Kelime bittiğinde bekleme süresi
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typewriterText.length;
        typeSpeed = 500; // Diğer kelimeye geçmeden önce kısa bekleme
    }

    setTimeout(type, typeSpeed);
}

// Sayfa yüklendiğinde daktiloyu başlat
document.addEventListener("DOMContentLoaded", () => {
    type();
});


// 2. Fare Hareketine Göre 3D Kart Eğme Efekti (Tilt Effect - Yalnız skill card'lara)
const cards = document.querySelectorAll('.skill-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        
        // Kartın merkezini viewport'a göre hesapla (sabit nokta)
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Fare ile merkez arasındaki mesafe
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        // Eğilme dereceleri
        const rotateX = (-(mouseY / (rect.height / 2)) * 10).toFixed(2);
        const rotateY = ((mouseX / (rect.width / 2)) * 10).toFixed(2);
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
});

// 3. İletişim Bölümü Etkileşimleri (Contact Section Interactions)
document.addEventListener("DOMContentLoaded", () => {
    const emailBtn = document.getElementById('email-btn');
    const linkedinBtn = document.getElementById('linkedin-btn');
    const githubBtn = document.getElementById('github-btn');

    emailBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        alert('E-posta adresi: fthsltn23@gmail.com\nMail uygulamasına yönlendiriliyorsunuz...');
        window.location.href = 'mailto:fthsltn23@gmail.com';
    });

    linkedinBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        alert('LinkedIn profilime yönlendiriliyorsunuz...');
        window.open('https://www.linkedin.com/in/fatih-saltan/', '_blank');
    });

    githubBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        alert('GitHub profilime yönlendiriliyorsunuz...');
        window.open('https://github.com/MuhammedFatihSaltan', '_blank');
    });
});