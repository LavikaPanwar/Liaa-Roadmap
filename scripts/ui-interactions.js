// Action functions
function updateProgress() {
    const currentProgress = parseInt(document.getElementById('progressBar').style.width) || 0;
    const newProgress = Math.min(currentProgress + 10, 100);
    document.getElementById('progressBar').style.width = newProgress + '%';
    document.getElementById('progressText').textContent = newProgress + '% Complete';
    
    if (newProgress === 100) {
        alert('🎉 Congratulations! You\'ve completed your learning roadmap! You are now ready to take on real-world projects and advance your career!');
    } else {
        alert('✅ Progress updated! Keep going! Every step brings you closer to mastery.');
    }
}

function shareRoadmap() {
    const skill = document.getElementById('metaSkill').textContent;
    const level = document.getElementById('metaLevel').textContent;
    const text = `Check out my ${skill} ${level} learning roadmap on LIAA! 🚀 I'm embarking on an exciting journey to master ${skill}.`;
    
    if (navigator.share) {
        navigator.share({
            title: 'My Learning Roadmap - LIAA',
            text: text,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(text + ' ' + window.location.href);
        alert('🔗 Roadmap link copied to clipboard! Share it with your friends and learning community.');
    }
}

function downloadRoadmap() {
    const skill = document.getElementById('metaSkill').textContent;
    alert(`📥 Preparing your ${skill} roadmap PDF download...\n\nFeature coming soon! For now, you can:\n• Print this page (Ctrl+P)\n• Take screenshots of each phase\n• Save the page as HTML\n• Bookmark this page for easy access`);
}

// Add hover effect to cards
document.querySelectorAll('.feature-card, .action-card, .skill-card, .founder-card, .resource-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Enhanced parallax effect for orbs
document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.orb');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 12;
        const moveX = (x - 0.5) * speed;
        const moveY = (y - 0.5) * speed;
        orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// Add typing effect to hero text
window.addEventListener('load', () => {
    const heroElements = document.querySelectorAll('.hero .fade-in');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 400);
    });
    
    // Add floating animation to skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards and skill cards
document.querySelectorAll('.feature-card, .skill-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    scrollObserver.observe(el);
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        showPage('landing');
    }
});

// Add service worker registration for PWA capabilities (commented out for now)
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
*/
