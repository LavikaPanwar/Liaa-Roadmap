// Generate stars
function createStars() {
    const starsContainer = document.getElementById('starsContainer');
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 5 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        starsContainer.appendChild(star);
    }
}

createStars();

// Page navigation
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Level selection
let selectedLevel = '';
function selectLevel(level) {
    selectedLevel = level;
    document.getElementById('levelInput').value = level;
    const buttons = document.querySelectorAll('.level-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Skill selection from showcase
function selectSkill(skill) {
    document.getElementById('skillInput').value = skill;
    showPage('form');
}

// Form submission
function generateRoadmap(event) {
    event.preventDefault();
    
    const skill = document.getElementById('skillInput').value;
    const timeframe = document.getElementById('timeframeInput').value;
    const level = document.getElementById('levelInput').value;
    const goals = document.getElementById('goalsInput').value;

    if (!skill || !timeframe || !level) {
        alert('Please fill in all required fields');
        return;
    }

    // Show loading
    document.getElementById('roadmapForm').style.display = 'none';
    document.getElementById('loadingSpinner').classList.add('active');

    // Simulate processing
    setTimeout(() => {
        // Update roadmap meta info
        document.getElementById('roadmapTitle').textContent = `${skill} Mastery Roadmap`;
        document.getElementById('metaSkill').textContent = skill;
        document.getElementById('metaTime').textContent = timeframe.replace('-', ' ');
        document.getElementById('metaLevel').textContent = level;

        // Generate roadmap content
        generateRoadmapContent(skill, level, timeframe, goals);

        // Show roadmap page
        showPage('roadmap');
        
        // Reset form
        document.getElementById('roadmapForm').style.display = 'block';
        document.getElementById('loadingSpinner').classList.remove('active');
        document.getElementById('roadmapForm').reset();
        selectedLevel = '';
        document.querySelectorAll('.level-btn').forEach(btn => btn.classList.remove('active'));

        // Animate progress bar
        animateProgressBar();
    }, 2000);
}

// Generate roadmap content based on selected skill
function generateRoadmapContent(skill, level, timeframe, goals) {
    const timeline = document.getElementById('roadmapTimeline');
    timeline.innerHTML = '';

    const skillData = roadmapData[skill];
    if (!skillData) {
        // Default roadmap if skill not found
        timeline.innerHTML = `
            <div class="timeline-item">
                <div class="timeline-icon glass" style="background: linear-gradient(135deg, #6d67e4, #46c3db);">
                    🎯
                </div>
                <div class="timeline-content glass-strong">
                    <span class="phase-label">Comprehensive Learning Path</span>
                    <h3>${skill} Mastery Roadmap</h3>
                    <p>We're creating an incredibly detailed roadmap for ${skill}. Here's your personalized learning journey:</p>
                    <div class="topics-list">
                        <div class="topic-item">
                            <div class="topic-icon">📚</div>
                            <div class="topic-content">
                                <h4>Fundamental Concepts & Theory</h4>
                                <p>Deep dive into core principles, terminology, and foundational knowledge that forms the basis of ${skill}.</p>
                                <span class="topic-duration">⏱️ Weeks 1-4: Intensive Foundation Building</span>
                            </div>
                        </div>
                        <div class="topic-item">
                            <div class="topic-icon">🛠️</div>
                            <div class="topic-content">
                                <h4>Practical Application & Projects</h4>
                                <p>Hands-on projects and real-world applications to solidify your understanding and build practical skills.</p>
                                <span class="topic-duration">⏱️ Weeks 5-8: Project-Based Learning</span>
                            </div>
                        </div>
                        <div class="topic-item">
                            <div class="topic-icon">🚀</div>
                            <div class="topic-content">
                                <h4>Advanced Techniques & Specialization</h4>
                                <p>Master advanced concepts, specialized tools, and industry best practices in ${skill}.</p>
                                <span class="topic-duration">⏱️ Weeks 9-12: Advanced Mastery</span>
                            </div>
                        </div>
                        <div class="topic-item">
                            <div class="topic-icon">💼</div>
                            <div class="topic-content">
                                <h4>Real-World Implementation</h4>
                                <p>Apply your skills to complex projects, portfolio development, and professional scenarios.</p>
                                <span class="topic-duration">⏱️ Weeks 13-16: Professional Preparation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    const phaseIcons = ['🌱', '🚀', '⚡', '🎯', '🏆'];
    const phaseColors = [
        'linear-gradient(135deg, #6d67e4, #46c3db)',
        'linear-gradient(135deg, #e966a0, #ff6b6b)',
        'linear-gradient(135deg, #46c3db, #6d67e4)',
        'linear-gradient(135deg, #ff6b6b, #e966a0)',
        'linear-gradient(135deg, #6d67e4, #e966a0)'
    ];

    skillData.phases.forEach((phase, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-icon glass" style="background: ${phaseColors[index]};">
                ${phaseIcons[index]}
            </div>
            <div class="timeline-content glass-strong">
                <span class="phase-label">Phase ${index + 1}</span>
                <h3>${phase.title}</h3>
                <p>${phase.description}</p>
                
                <div class="week-expandable">
                    ${phase.weeks.map(week => `
                        <div class="week-header" onclick="toggleWeekContent(this)">
                            <h4>${week.title}</h4>
                            <div class="expand-icon">▼</div>
                        </div>
                        <div class="week-content">
                            <div class="daily-tasks">
                                ${week.tasks.map(task => `
                                    <div class="task-item">
                                        <div class="task-checkbox" onclick="toggleTask(this)"></div>
                                        <div class="task-content">
                                            <h5>${task}</h5>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        timeline.appendChild(timelineItem);
    });

    // Add observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.timeline-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });
}

// Animate progress bar
function animateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 15) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressText.textContent = width + '% Complete';
        }
    }, 30);
}

console.log('🚀 LIAA Learning Roadmap App Loaded Successfully!');
console.log('📊 App Features:');
console.log('• 15+ Detailed Skill Roadmaps');
console.log('• Interactive Progress Tracking');
console.log('• Expandable Weekly Breakdowns');
console.log('• PDF Download Functionality');
console.log('• Responsive Design');
console.log('• Beautiful Animations');
console.log('• Founder: Lavika Panwar');
console.log('• Founder: Ekta Rathore');
console.log('• Founder: Anupriya Kumari');
