// Enhanced roadmap data with 15+ skills and detailed weekly breakdowns
const roadmapData = {
    "Web Development": {
        phases: [
            {
                title: "Foundation Building (Weeks 1-6)",
                description: "Establish a solid foundation with core web technologies and fundamental principles that will serve as the bedrock for your entire development journey.",
                weeks: [
                    {
                        title: "Week 1-2: HTML5 & Semantic Structure",
                        tasks: [
                            "Learn HTML5 document structure and basic tags",
                            "Master semantic HTML elements (header, nav, section, article, footer)",
                            "Practice creating forms with different input types",
                            "Build a simple personal portfolio page",
                            "Learn about accessibility basics (alt text, ARIA labels)"
                        ]
                    },
                    {
                        title: "Week 3-4: CSS3 & Responsive Design",
                        tasks: [
                            "Master CSS Box Model and positioning",
                            "Learn Flexbox for layout design",
                            "Practice CSS Grid for complex layouts",
                            "Implement responsive design with media queries",
                            "Build a responsive landing page"
                        ]
                    },
                    {
                        title: "Week 5-6: JavaScript Fundamentals",
                        tasks: [
                            "Learn JavaScript syntax and data types",
                            "Master DOM manipulation techniques",
                            "Practice event handling and listeners",
                            "Understand ES6+ features (arrow functions, destructuring)",
                            "Build an interactive to-do list application"
                        ]
                    }
                ]
            },
            {
                title: "Frontend Mastery (Weeks 7-14)",
                description: "Build dynamic, interactive user interfaces with modern frameworks and tools that power today's web applications.",
                weeks: [
                    {
                        title: "Week 7-10: React.js Ecosystem",
                        tasks: [
                            "Learn React components and JSX syntax",
                            "Master state management with hooks",
                            "Practice component lifecycle methods",
                            "Build a single-page application with routing",
                            "Implement context API for global state"
                        ]
                    },
                    {
                        title: "Week 11-12: State Management",
                        tasks: [
                            "Learn Redux for complex state management",
                            "Practice middleware implementation",
                            "Understand state normalization techniques",
                            "Build a shopping cart application",
                            "Implement authentication flow"
                        ]
                    },
                    {
                        title: "Week 13-14: Build Tools & Testing",
                        tasks: [
                            "Master Webpack configuration",
                            "Learn testing with Jest and React Testing Library",
                            "Practice debugging techniques",
                            "Build and deploy a complete React application",
                            "Implement performance optimization"
                        ]
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
                weeks: [
                    {
                        title: "Week 1-4: Statistics & Probability",
                        tasks: [
                            "Learn descriptive statistics (mean, median, mode)",
                            "Master probability distributions",
                            "Practice hypothesis testing",
                            "Understand Bayesian inference",
                            "Complete statistical analysis projects"
                        ]
                    },
                    {
                        title: "Week 5-6: Linear Algebra",
                        tasks: [
                            "Learn vector operations and properties",
                            "Master matrix multiplication and transformations",
                            "Practice eigenvalue decomposition",
                            "Understand SVD applications",
                            "Implement linear algebra in Python"
                        ]
                    },
                    {
                        title: "Week 7-8: Calculus & Optimization",
                        tasks: [
                            "Learn derivatives and gradients",
                            "Master optimization algorithms",
                            "Practice gradient descent implementation",
                            "Understand backpropagation in neural networks",
                            "Complete optimization projects"
                        ]
                    }
                ]
            }
        ]
    },
    "Mobile Development": {
        phases: [
            {
                title: "Cross-Platform Development (Weeks 1-8)",
                description: "Learn to build mobile applications that work seamlessly across iOS and Android platforms.",
                weeks: [
                    {
                        title: "Week 1-3: React Native Fundamentals",
                        tasks: [
                            "Learn React Native components and styling",
                            "Master navigation between screens",
                            "Practice state management in mobile apps",
                            "Build a simple weather application",
                            "Learn about mobile-specific UI patterns"
                        ]
                    },
                    {
                        title: "Week 4-6: Advanced Mobile Features",
                        tasks: [
                            "Implement camera and gallery access",
                            "Master push notifications",
                            "Practice offline storage with AsyncStorage",
                            "Build a social media app prototype",
                            "Learn about performance optimization"
                        ]
                    },
                    {
                        title: "Week 7-8: Deployment & Testing",
                        tasks: [
                            "Learn app store submission process",
                            "Master testing with Jest and Detox",
                            "Practice CI/CD for mobile apps",
                            "Build and deploy a complete application",
                            "Implement analytics and crash reporting"
                        ]
                    }
                ]
            }
        ]
    },
    "UI/UX Design": {
        phases: [
            {
                title: "Design Fundamentals (Weeks 1-6)",
                description: "Master the principles of user-centered design and create intuitive, beautiful interfaces.",
                weeks: [
                    {
                        title: "Week 1-2: Design Principles",
                        tasks: [
                            "Learn color theory and psychology",
                            "Master typography fundamentals",
                            "Practice layout and composition",
                            "Create a design system from scratch",
                            "Learn about accessibility in design"
                        ]
                    },
                    {
                        title: "Week 3-4: User Research",
                        tasks: [
                            "Conduct user interviews and surveys",
                            "Create user personas and journey maps",
                            "Practice usability testing techniques",
                            "Analyze and synthesize research findings",
                            "Create research reports and presentations"
                        ]
                    },
                    {
                        title: "Week 5-6: Prototyping & Testing",
                        tasks: [
                            "Master Figma or Adobe XD tools",
                            "Create interactive prototypes",
                            "Practice design iteration based on feedback",
                            "Build a complete app design from scratch",
                            "Prepare design handoff for developers"
                        ]
                    }
                ]
            }
        ]
    },
    "Digital Marketing": {
        phases: [
            {
                title: "Marketing Fundamentals (Weeks 1-6)",
                description: "Learn to create effective digital marketing strategies and campaigns that drive results.",
                weeks: [
                    {
                        title: "Week 1-2: SEO & Content Strategy",
                        tasks: [
                            "Learn keyword research and analysis",
                            "Master on-page SEO techniques",
                            "Practice content planning and creation",
                            "Build a content calendar for a business",
                            "Learn about technical SEO basics"
                        ]
                    },
                    {
                        title: "Week 3-4: Social Media Marketing",
                        tasks: [
                            "Create social media strategy for different platforms",
                            "Master paid advertising on Facebook/Instagram",
                            "Practice community management",
                            "Run a small social media campaign",
                            "Analyze social media metrics and KPIs"
                        ]
                    },
                    {
                        title: "Week 5-6: Analytics & Optimization",
                        tasks: [
                            "Learn Google Analytics implementation",
                            "Master conversion rate optimization",
                            "Practice A/B testing methodologies",
                            "Create comprehensive marketing reports",
                            "Develop data-driven marketing strategies"
                        ]
                    }
                ]
            }
        ]
    },
    "Machine Learning": {
        phases: [
            {
                title: "ML Fundamentals (Weeks 1-8)",
                description: "Build a strong foundation in machine learning concepts and practical implementations.",
                weeks: [
                    {
                        title: "Week 1-3: Python & Data Preprocessing",
                        tasks: [
                            "Master Python for data science (NumPy, Pandas)",
                            "Learn data cleaning and preprocessing techniques",
                            "Practice exploratory data analysis",
                            "Build data visualization skills with Matplotlib/Seaborn",
                            "Complete data preprocessing projects"
                        ]
                    },
                    {
                        title: "Week 4-6: Supervised Learning",
                        tasks: [
                            "Learn linear and logistic regression",
                            "Master decision trees and random forests",
                            "Practice SVM and k-NN algorithms",
                            "Understand model evaluation metrics",
                            "Build classification and regression models"
                        ]
                    },
                    {
                        title: "Week 7-8: Unsupervised Learning",
                        tasks: [
                            "Learn clustering algorithms (K-means, hierarchical)",
                            "Master dimensionality reduction (PCA, t-SNE)",
                            "Practice anomaly detection techniques",
                            "Build recommendation systems",
                            "Complete unsupervised learning projects"
                        ]
                    }
                ]
            }
        ]
    },
    "Cybersecurity": {
        phases: [
            {
                title: "Security Fundamentals (Weeks 1-8)",
                description: "Learn the essential principles and practices of cybersecurity and ethical hacking.",
                weeks: [
                    {
                        title: "Week 1-3: Network Security",
                        tasks: [
                            "Learn TCP/IP protocols and network architecture",
                            "Master firewall configuration and management",
                            "Practice network scanning and enumeration",
                            "Understand VPN technologies",
                            "Complete network security labs"
                        ]
                    },
                    {
                        title: "Week 4-5: Cryptography",
                        tasks: [
                            "Learn symmetric and asymmetric encryption",
                            "Master hash functions and digital signatures",
                            "Practice cryptographic protocols",
                            "Understand PKI infrastructure",
                            "Build encryption/decryption tools"
                        ]
                    },
                    {
                        title: "Week 6-8: Ethical Hacking",
                        tasks: [
                            "Learn penetration testing methodologies",
                            "Master vulnerability assessment tools",
                            "Practice social engineering techniques",
                            "Understand web application security",
                            "Complete CTF challenges"
                        ]
                    }
                ]
            }
        ]
    },
    "Cloud Computing": {
        phases: [
            {
                title: "Cloud Fundamentals (Weeks 1-8)",
                description: "Master cloud computing concepts and gain hands-on experience with major cloud platforms.",
                weeks: [
                    {
                        title: "Week 1-3: AWS Fundamentals",
                        tasks: [
                            "Learn AWS core services (EC2, S3, VPC)",
                            "Master IAM and security best practices",
                            "Practice deploying applications on EC2",
                            "Understand auto-scaling and load balancing",
                            "Complete AWS foundational projects"
                        ]
                    },
                    {
                        title: "Week 4-5: Cloud Architecture",
                        tasks: [
                            "Learn microservices and serverless architecture",
                            "Master containerization with Docker and ECS",
                            "Practice infrastructure as code with CloudFormation",
                            "Understand monitoring and logging",
                            "Build highly available cloud architectures"
                        ]
                    },
                    {
                        title: "Week 6-8: Advanced Services",
                        tasks: [
                            "Learn database services (RDS, DynamoDB)",
                            "Master messaging and queuing services",
                            "Practice CI/CD pipelines in cloud",
                            "Understand cost optimization strategies",
                            "Complete end-to-end cloud projects"
                        ]
                    }
                ]
            }
        ]
    },
    "Blockchain": {
        phases: [
            {
                title: "Blockchain Fundamentals (Weeks 1-8)",
                description: "Learn blockchain technology, smart contracts, and decentralized application development.",
                weeks: [
                    {
                        title: "Week 1-3: Blockchain Basics",
                        tasks: [
                            "Learn blockchain architecture and consensus mechanisms",
                            "Master cryptocurrency fundamentals",
                            "Practice wallet creation and management",
                            "Understand mining and transaction validation",
                            "Complete blockchain simulation projects"
                        ]
                    },
                    {
                        title: "Week 4-6: Smart Contracts",
                        tasks: [
                            "Learn Solidity programming language",
                            "Master smart contract development and testing",
                            "Practice deploying contracts on test networks",
                            "Understand gas optimization techniques",
                            "Build decentralized applications (DApps)"
                        ]
                    },
                    {
                        title: "Week 7-8: Advanced Concepts",
                        tasks: [
                            "Learn DeFi protocols and applications",
                            "Master NFT development and standards",
                            "Practice security best practices",
                            "Understand layer 2 scaling solutions",
                            "Complete full-stack blockchain projects"
                        ]
                    }
                ]
            }
        ]
    },
    "Game Development": {
        phases: [
            {
                title: "Game Development Fundamentals (Weeks 1-8)",
                description: "Learn game design principles and development using popular game engines.",
                weeks: [
                    {
                        title: "Week 1-3: Unity Basics",
                        tasks: [
                            "Learn Unity interface and workflow",
                            "Master 3D modeling and asset creation",
                            "Practice C# scripting for game logic",
                            "Understand physics and collision detection",
                            "Build simple 3D games"
                        ]
                    },
                    {
                        title: "Week 4-6: Game Mechanics",
                        tasks: [
                            "Learn character controller implementation",
                            "Master animation and state machines",
                            "Practice UI/UX design for games",
                            "Understand audio implementation",
                            "Build platformer or shooter games"
                        ]
                    },
                    {
                        title: "Week 7-8: Advanced Features",
                        tasks: [
                            "Learn multiplayer game development",
                            "Master optimization and performance tuning",
                            "Practice VR/AR development basics",
                            "Understand game publishing process",
                            "Complete and publish a full game"
                        ]
                    }
                ]
            }
        ]
    },
    "Artificial Intelligence": {
        phases: [
            {
                title: "AI Engineering (Weeks 1-8)",
                description: "Master artificial intelligence concepts and build intelligent systems.",
                weeks: [
                    {
                        title: "Week 1-3: AI Fundamentals",
                        tasks: [
                            "Learn search algorithms and problem-solving",
                            "Master knowledge representation",
                            "Practice logic and reasoning systems",
                            "Understand planning and decision making",
                            "Build simple AI agents"
                        ]
                    },
                    {
                        title: "Week 4-6: Natural Language Processing",
                        tasks: [
                            "Learn text preprocessing and tokenization",
                            "Master sentiment analysis techniques",
                            "Practice named entity recognition",
                            "Understand language models",
                            "Build chatbots and text classifiers"
                        ]
                    },
                    {
                        title: "Week 7-8: Computer Vision",
                        tasks: [
                            "Learn image processing fundamentals",
                            "Master convolutional neural networks",
                            "Practice object detection and recognition",
                            "Understand image segmentation",
                            "Build computer vision applications"
                        ]
                    }
                ]
            }
        ]
    },
    "DevOps": {
        phases: [
            {
                title: "DevOps Engineering (Weeks 1-8)",
                description: "Learn DevOps practices and tools for efficient software development and deployment.",
                weeks: [
                    {
                        title: "Week 1-3: Infrastructure & Automation",
                        tasks: [
                            "Learn Linux system administration",
                            "Master shell scripting and automation",
                            "Practice configuration management",
                            "Understand containerization with Docker",
                            "Build automated deployment scripts"
                        ]
                    },
                    {
                        title: "Week 4-6: CI/CD Pipelines",
                        tasks: [
                            "Learn Jenkins and pipeline creation",
                            "Master Git workflows and version control",
                            "Practice infrastructure as code",
                            "Understand monitoring and alerting",
                            "Build complete CI/CD pipelines"
                        ]
                    },
                    {
                        title: "Week 7-8: Cloud & Security",
                        tasks: [
                            "Learn cloud platform integration",
                            "Master security best practices",
                            "Practice disaster recovery planning",
                            "Understand performance optimization",
                            "Complete end-to-end DevOps projects"
                        ]
                    }
                ]
            }
        ]
    },
    "Software Engineering": {
        phases: [
            {
                title: "Software Engineering Principles (Weeks 1-8)",
                description: "Master software development methodologies, architecture, and best practices.",
                weeks: [
                    {
                        title: "Week 1-3: Design Patterns & Architecture",
                        tasks: [
                            "Learn object-oriented design principles",
                            "Master common design patterns",
                            "Practice software architecture patterns",
                            "Understand clean code principles",
                            "Build well-structured applications"
                        ]
                    },
                    {
                        title: "Week 4-6: Development Methodologies",
                        tasks: [
                            "Learn Agile and Scrum methodologies",
                            "Master test-driven development",
                            "Practice code review techniques",
                            "Understand version control strategies",
                            "Build projects using best practices"
                        ]
                    },
                    {
                        title: "Week 7-8: System Design",
                        tasks: [
                            "Learn system design fundamentals",
                            "Master scalability and performance",
                            "Practice database design and optimization",
                            "Understand microservices architecture",
                            "Design and document complex systems"
                        ]
                    }
                ]
            }
        ]
    },
    "Product Management": {
        phases: [
            {
                title: "Product Management (Weeks 1-8)",
                description: "Learn product strategy, development, and management from concept to launch.",
                weeks: [
                    {
                        title: "Week 1-3: Product Strategy",
                        tasks: [
                            "Learn market research techniques",
                            "Master user persona creation",
                            "Practice competitive analysis",
                            "Understand product vision and roadmap",
                            "Create product strategy documents"
                        ]
                    },
                    {
                        title: "Week 4-6: Product Development",
                        tasks: [
                            "Learn Agile product management",
                            "Master user story creation and prioritization",
                            "Practice stakeholder management",
                            "Understand MVP definition and validation",
                            "Lead product development simulations"
                        ]
                    },
                    {
                        title: "Week 7-8: Launch & Growth",
                        tasks: [
                            "Learn product launch strategies",
                            "Master analytics and metrics tracking",
                            "Practice A/B testing methodologies",
                            "Understand user feedback collection",
                            "Create product growth plans"
                        ]
                    }
                ]
            }
        ]
    },
    "Content Writing": {
        phases: [
            {
                title: "Professional Content Writing (Weeks 1-8)",
                description: "Master the art of creating engaging, SEO-optimized content for various platforms.",
                weeks: [
                    {
                        title: "Week 1-3: Writing Fundamentals",
                        tasks: [
                            "Learn grammar and style guidelines",
                            "Master different writing tones and voices",
                            "Practice headline and hook creation",
                            "Understand audience targeting",
                            "Create diverse writing samples"
                        ]
                    },
                    {
                        title: "Week 4-6: SEO & Digital Content",
                        tasks: [
                            "Learn SEO best practices and keyword research",
                            "Master blog post and article writing",
                            "Practice social media content creation",
                            "Understand content marketing strategies",
                            "Build a content portfolio"
                        ]
                    },
                    {
                        title: "Week 7-8: Professional Writing",
                        tasks: [
                            "Learn copywriting and persuasion techniques",
                            "Master technical writing and documentation",
                            "Practice editing and proofreading",
                            "Understand freelance writing business",
                            "Complete professional writing projects"
                        ]
                    }
                ]
            }
        ]
    }
};
