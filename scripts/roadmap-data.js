// Enhanced roadmap data with 15+ skills and detailed content
const roadmapData = {
    "Web Development": {
        phases: [
            {
                title: "Foundation Building (Weeks 1-6)",
                description: "Establish a solid foundation with core web technologies and fundamental principles that will serve as the bedrock for your entire development journey.",
                topics: [
                    { 
                        icon: "📖", 
                        title: "HTML5 & Semantic Structure", 
                        description: "Master modern HTML5 elements, semantic markup, accessibility standards (WCAG), SEO fundamentals, and proper document structure. Learn about forms, tables, and multimedia elements.",
                        duration: "Week 1-2" 
                    },
                    { 
                        icon: "🎨", 
                        title: "CSS3 & Responsive Design", 
                        description: "Learn CSS Grid, Flexbox, animations, transitions, transforms, and mobile-first responsive design principles. Master CSS variables, pseudo-classes, and advanced selectors.",
                        duration: "Week 2-4" 
                    },
                    { 
                        icon: "⚡", 
                        title: "JavaScript Fundamentals", 
                        description: "Master ES6+ features, DOM manipulation, event handling, asynchronous programming (callbacks, promises, async/await), and basic algorithms.",
                        duration: "Week 4-6" 
                    },
                    { 
                        icon: "🛠️", 
                        title: "Developer Tools & Git", 
                        description: "Set up development environment, learn Chrome DevTools, Git version control, basic CLI commands, and package management with npm/yarn.",
                        duration: "Week 1-2" 
                    },
                    { 
                        icon: "📱", 
                        title: "Responsive Projects", 
                        description: "Build 3-5 responsive websites using pure HTML, CSS, and JavaScript. Focus on cross-browser compatibility and mobile optimization.",
                        duration: "Week 5-6" 
                    }
                ]
            },
            {
                title: "Frontend Mastery (Weeks 7-14)",
                description: "Build dynamic, interactive user interfaces with modern frameworks and tools that power today's web applications.",
                topics: [
                    { 
                        icon: "⚛️", 
                        title: "React.js Ecosystem", 
                        description: "Learn React components, hooks, state management, context API, and build single-page applications. Understand virtual DOM and component lifecycle.",
                        duration: "Week 7-10" 
                    },
                    { 
                        icon: "🎯", 
                        title: "State Management", 
                        description: "Master Redux, Context API, and modern state management patterns for complex applications. Learn about middleware and state normalization.",
                        duration: "Week 10-12" 
                    },
                    { 
                        icon: "📦", 
                        title: "Build Tools & Package Management", 
                        description: "Understand Webpack, Vite, npm/yarn, and modern build processes. Learn about code splitting, tree shaking, and bundle optimization.",
                        duration: "Week 12-13" 
                    },
                    { 
                        icon: "🧪", 
                        title: "Testing & Debugging", 
                        description: "Learn Jest, React Testing Library, and advanced debugging techniques. Master unit testing, integration testing, and end-to-end testing.",
                        duration: "Week 13-14" 
                    },
                    { 
                        icon: "🚀", 
                        title: "Frontend Projects", 
                        description: "Build 2-3 complete React applications with state management, routing, and API integration. Implement authentication and real-time features.",
                        duration: "Week 13-14" 
                    }
                ]
            },
            {
                title: "Backend Development (Weeks 15-22)",
                description: "Create robust server-side applications and APIs with modern backend technologies that can handle real-world business logic.",
                topics: [
                    { 
                        icon: "🟢", 
                        title: "Node.js & Express.js", 
                        description: "Build RESTful APIs, middleware, authentication, and server-side rendering. Learn about error handling, logging, and security best practices.",
                        duration: "Week 15-18" 
                    },
                    { 
                        icon: "🗄️", 
                        title: "Database Management", 
                        description: "Master MongoDB, PostgreSQL, database design, and ORM/ODM tools. Learn about database normalization, indexing, and query optimization.",
                        duration: "Week 18-21" 
                    },
                    { 
                        icon: "🔐", 
                        title: "Authentication & Security", 
                        description: "Implement JWT, OAuth, password hashing, and security best practices. Learn about CORS, CSRF protection, and input validation.",
                        duration: "Week 21-23" 
                    },
                    { 
                        icon: "🚀", 
                        title: "API Development", 
                        description: "Build GraphQL APIs, REST best practices, documentation, and API testing. Learn about rate limiting, caching, and API versioning.",
                        duration: "Week 23-25" 
                    },
                    { 
                        icon: "🛡️", 
                        title: "Backend Security", 
                        description: "Master security principles including SQL injection prevention, XSS protection, and secure authentication flows.",
                        duration: "Week 25-26" 
                    }
                ]
            },
            {
                title: "Full-Stack Integration (Weeks 27-34)",
                description: "Combine frontend and backend skills to build complete, production-ready applications that solve real-world problems.",
                topics: [
                    { 
                        icon: "🌐", 
                        title: "Full-Stack Frameworks", 
                        description: "Master Next.js, Nuxt.js, or similar frameworks for full-stack development. Learn about SSR, SSG, and hybrid rendering approaches.",
                        duration: "Week 27-29" 
                    },
                    { 
                        icon: "☁️", 
                        title: "Deployment & DevOps", 
                        description: "Learn Docker, CI/CD, cloud platforms (AWS, Vercel, Netlify), and deployment strategies. Master environment configuration and monitoring.",
                        duration: "Week 29-32" 
                    },
                    { 
                        icon: "📱", 
                        title: "Performance Optimization", 
                        description: "Master lazy loading, code splitting, caching strategies, and performance monitoring. Learn about Core Web Vitals and optimization techniques.",
                        duration: "Week 32-34" 
                    },
                    { 
                        icon: "🔍", 
                        title: "SEO & Analytics", 
                        description: "Implement SEO best practices, Google Analytics, and performance tracking. Learn about meta tags, structured data, and search console.",
                        duration: "Week 34-35" 
                    },
                    { 
                        icon: "🏗️", 
                        title: "Full-Stack Project", 
                        description: "Build a complete full-stack application with authentication, database, API, and deployment. Focus on scalability and maintainability.",
                        duration: "Week 33-35" 
                    }
                ]
            },
            {
                title: "Advanced Specialization (Weeks 36-44)",
                description: "Explore advanced topics and specialize in cutting-edge web technologies that will make you stand out in the job market.",
                topics: [
                    { 
                        icon: "⚡", 
                        title: "Progressive Web Apps", 
                        description: "Build offline-capable, installable web applications with service workers. Learn about push notifications and background sync.",
                        duration: "Week 36-38" 
                    },
                    { 
                        icon: "🎮", 
                        title: "WebAssembly & Advanced APIs", 
                        description: "Explore WebAssembly, WebGL, and advanced browser APIs. Learn about Web Workers and performance-intensive applications.",
                        duration: "Week 38-40" 
                    },
                    { 
                        icon: "🧩", 
                        title: "Microservices & Architecture", 
                        description: "Learn microservices architecture, message queues, and distributed systems. Understand domain-driven design and system design principles.",
                        duration: "Week 40-42" 
                    },
                    { 
                        icon: "🌟", 
                        title: "Open Source Contribution", 
                        description: "Contribute to web development projects and build your professional network. Learn about open-source workflows and community engagement.",
                        duration: "Week 42-44" 
                    },
                    { 
                        icon: "💼", 
                        title: "Career Preparation", 
                        description: "Prepare for technical interviews, build your portfolio, and learn about industry best practices and career advancement strategies.",
                        duration: "Week 43-44" 
                    }
                ]
            }
        ]
    },
    "Data Science": {
        phases: [
            {
                title: "Mathematics Foundation (Weeks 1-8)",
                description: "Build strong mathematical foundation essential for data science and machine learning with practical applications.",
                topics: [
                    { 
                        icon: "📊", 
                        title: "Statistics & Probability", 
                        description: "Master descriptive statistics, probability distributions, hypothesis testing, Bayesian inference, and statistical modeling techniques.",
                        duration: "Week 1-4" 
                    },
                    { 
                        icon: "📈", 
                        title: "Linear Algebra", 
                        description: "Learn vectors, matrices, eigenvalues, linear transformations, and their applications in machine learning and data analysis.",
                        duration: "Week 4-6" 
                    },
                    { 
                        icon: "🧮", 
                        title: "Calculus & Optimization", 
                        description: "Understand derivatives, gradients, optimization algorithms, and their role in model training and machine learning.",
                        duration: "Week 6-8" 
                    },
                    { 
                        icon: "🐍", 
                        title: "Python Programming", 
                        description: "Master Python fundamentals, NumPy, Pandas, and scientific computing libraries for data manipulation and analysis.",
                        duration: "Week 1-3" 
                    }
                ]
            }
        ]
    },
    "Artificial Intelligence": {
        phases: [
            {
                title: "AI Fundamentals & Python (Weeks 1-8)",
                description: "Build the foundation for AI development with essential programming and mathematical skills.",
                topics: [
                    { 
                        icon: "🐍", 
                        title: "Python for AI", 
                        description: "Master Python programming, NumPy, Pandas, Matplotlib, and scientific computing libraries essential for AI development.",
                        duration: "Week 1-3" 
                    },
                    { 
                        icon: "📊", 
                        title: "Mathematics for AI", 
                        description: "Comprehensive coverage of linear algebra, calculus, probability, and statistics with AI applications and implementations.",
                        duration: "Week 3-6" 
                    },
                    { 
                        icon: "🧮", 
                        title: "Data Structures & Algorithms", 
                        description: "Understand essential algorithms and data structures optimized for AI applications and large-scale data processing.",
                        duration: "Week 6-8" 
                    },
                    { 
                        icon: "📈", 
                        title: "Data Preprocessing", 
                        description: "Master data cleaning, normalization, feature engineering, and data augmentation techniques for machine learning.",
                        duration: "Week 8-10" 
                    }
                ]
            }
        ]
    }
    // Continue with other skills...
};
