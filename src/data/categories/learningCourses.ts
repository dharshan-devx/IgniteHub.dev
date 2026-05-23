import { Category } from '../resources';

export const learningCourses: Category = {
    "id": "learningCourses",
    "title": "Learning Platforms & Courses",
    "description": "Online learning platforms and educational resources for skill development",
    "icon": "📚",
    "gradient": "from-yellow-500 to-orange-600",
    "resources": [
      {
        "id": "coursera",
        "name": "Coursera",
        "description": "Coursera is a leading global online learning platform offering courses and full degree programs from top universities and companies; access to many courses is free (pay for certificates).",
        "detailedDescription": "Coursera partners with top universities and organizations worldwide to offer courses, specializations, and degree programs online. With over 7,000 courses from institutions like Stanford, Yale, and Google, learners can gain new skills and advance their careers.",
        "url": "https://www.coursera.org",
        "tags": ["Free", "Paid", "Students", "LifelongLearning", "University"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.6,
        "reviewCount": 45670,
        "featured": true,
        "dateAdded": "2024-01-15",
        "features": [
          "University partnerships",
          "Professional certificates",
          "Online degree programs",
          "Guided projects",
          "Peer interaction and forums",
          "Financial aid available"
        ],
        "pricing": {
          "free": "Audit many courses for free",
          "paid": ["Coursera Plus: $59/month", "Individual courses: $49-79", "Specializations: $49-79/month"]
        },
        "requirements": ["Internet connection", "Web browser or mobile app"],
        "alternatives": ["edX", "Udacity", "Khan Academy", "LinkedIn Learning"]
      },
      {
        "id": "edx",
        "name": "edX",
        "description": "edX is a nonprofit online learning destination (founded by Harvard/MIT) providing MOOCs and interactive online courses across subjects like engineering, data science, humanities and AI.",
        "detailedDescription": "edX is an online learning platform founded by Harvard and MIT, now owned by 2U. It offers high-quality courses from the world's best universities and institutions to learners everywhere, with a mission to increase access to high-quality education for everyone.",
        "url": "https://www.edx.org",
        "tags": ["Free", "Paid", "Students", "LifelongLearning", "University"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.5,
        "reviewCount": 32890,
        "featured": true,
        "dateAdded": "2024-01-20",
        "features": [
          "University-level courses",
          "MicroBachelors and MicroMasters programs",
          "Professional certificates",
          "Interactive learning labs",
          "Global community",
          "Executive education"
        ],
        "pricing": {
          "free": "Free access to audit course content",
          "paid": ["Verified certificates: $50-300", "Program bundles: $500+"]
        },
        "requirements": ["Internet connection", "Basic computer skills"],
        "alternatives": ["Coursera", "Udacity", "FutureLearn", "Khan Academy"]
      },
      {
        "id": "khanAcademy",
        "name": "Khan Academy",
        "description": "Khan Academy is a free, nonprofit educational platform offering video lessons and exercises from kindergarten through early college, empowering learners to study at their own pace.",
        "detailedDescription": "Khan Academy is a nonprofit organization with the mission of providing a free, world-class education for anyone, anywhere. The platform offers practice exercises, instructional videos, and a personalized learning dashboard covering math, science, computing, and more.",
        "url": "https://www.khanacademy.org",
        "tags": ["Free", "Students", "Education", "Teachers", "Nonprofit"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 28930,
        "featured": true,
        "dateAdded": "2024-01-25",
        "features": [
          "Personalized learning dashboard",
          "Progress tracking",
          "Interactive exercises",
          "Video lessons",
          "Teacher and parent tools",
          "SAT and official test prep"
        ],
        "pricing": {
          "free": "Completely free for all users"
        },
        "requirements": ["Internet connection", "Web browser or mobile app"],
        "alternatives": ["Coursera", "edX", "Brilliant", "Codecademy"]
      },
      {
        "id": "freecodecamp",
        "name": "freeCodeCamp",
        "description": "freeCodeCamp is a nonprofit open source curriculum where millions of people worldwide learn to code for free through interactive coding lessons, projects, and certifications.",
        "detailedDescription": "freeCodeCamp is a nonprofit organization that consists of an interactive learning web platform, an online community forum, and publications that intend to make learning web development accessible to anyone. It offers thousands of hours of content and several free certifications.",
        "url": "https://www.freecodecamp.org",
        "tags": ["Free", "Students", "Coding", "Community", "Nonprofit"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.9,
        "reviewCount": 67890,
        "featured": true,
        "dateAdded": "2024-02-01",
        "features": [
          "Interactive coding lessons",
          "Real-world projects",
          "10+ free certifications",
          "Active community forum",
          "Open source curriculum",
          "Technical articles and news"
        ],
        "pricing": {
          "free": "Completely free platform"
        },
        "requirements": ["Web browser", "Internet connection"],
        "alternatives": ["Codecademy", "The Odin Project", "Khan Academy", "Udemy"]
      },
      {
        "id": "udemy",
        "name": "Udemy",
        "description": "Udemy is a massive online course marketplace with ~260,000 courses and 80 million students globally; it covers topics from programming and marketing to design (many affordable or free courses).",
        "detailedDescription": "Udemy is a global online learning and teaching marketplace with over 210,000 courses and 62 million students. Users can learn programming, marketing, data science, design, and more from expert instructors on a per-course purchase basis.",
        "url": "https://www.udemy.com",
        "tags": ["Paid", "Students", "Professionals", "OnDemand"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": false,
        "rating": 4.4,
        "reviewCount": 89760,
        "featured": true,
        "dateAdded": "2024-02-05",
        "features": [
          "Lifetime access to purchased courses",
          "Vast course catalog",
          "Certificates of completion",
          "Q&A with instructors",
          "Downloadable resources",
          "Frequent sales and discounts"
        ],
        "pricing": {
          "free": "A limited number of free courses are available.",
          "paid": ["Individual courses: $10-200 (often on sale)", "Udemy Business: Subscription-based for teams"]
        },
        "requirements": ["Internet connection", "Web browser or mobile app"],
        "alternatives": ["Coursera", "Pluralsight", "LinkedIn Learning", "Skillshare"]
      },
      {
        "id": "udacity",
        "name": "Udacity",
        "description": "Udacity is an online education platform offering technology-focused 'Nanodegree' programs; it has over 17 million registered learners in 240+ countries, focusing on career-ready tech skills.",
        "detailedDescription": "Udacity specializes in job-ready tech skills through its 'Nanodegree' programs. These project-based programs are co-created with industry leaders like Google and Amazon, focusing on in-demand fields like AI, data science, and autonomous systems.",
        "url": "https://www.udacity.com",
        "tags": ["Paid", "Students", "Professionals", "TechEducation", "AI"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": false,
        "rating": 4.5,
        "reviewCount": 18500,
        "featured": true,
        "dateAdded": "2024-02-10",
        "features": [
          "Nanodegree programs",
          "Real-world projects from industry experts",
          "Technical mentor support",
          "Career services (resume review, interview prep)",
          "Flexible, self-paced learning"
        ],
        "pricing": {
          "free": "Offers a catalog of free introductory courses.",
          "paid": ["Nanodegree programs are subscription-based, typically ~$249/month"]
        },
        "requirements": ["Internet connection", "Prerequisites vary by Nanodegree"],
        "alternatives": ["Coursera", "edX", "Pluralsight", "Springboard"]
      },
      {
        "id": "pluralsight",
        "name": "Pluralsight",
        "description": "Pluralsight is a technology learning platform offering expert-authored courses, hands-on labs, and skill assessments for software development, IT ops, and creative skills.",
        "detailedDescription": "Pluralsight is a professional technology skills platform aimed at individuals and teams. It provides a vast library of video courses, interactive labs, and skill assessments (Skill IQ) to help users identify and close skill gaps in areas like cloud computing, software development, and cybersecurity.",
        "url": "https://www.pluralsight.com",
        "tags": ["Paid", "Developers", "IT", "ProfessionalDevelopment"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": false,
        "rating": 4.6,
        "reviewCount": 21000,
        "featured": false,
        "dateAdded": "2024-02-15",
        "features": [
          "Expert-led video courses",
          "Skill assessments (Skill IQ)",
          "Learning paths for specific roles",
          "Hands-on labs and projects",
          "Certification prep courses",
          "Team analytics for businesses"
        ],
        "pricing": {
          "free": "Limited free trial available.",
          "paid": ["Standard plan (~$29/month)", "Premium plan with labs/projects (~$45/month)"]
        },
        "requirements": ["Subscription", "Internet connection"],
        "alternatives": ["Udemy", "Coursera", "LinkedIn Learning", "A Cloud Guru"]
      },
      {
        "id": "codecademy",
        "name": "Codecademy",
        "description": "Codecademy offers interactive coding lessons and projects in 15+ programming languages, with hands-on learning and real-world projects for aspiring developers.",
        "detailedDescription": "Codecademy is an online interactive platform that offers free coding classes in 12 different programming languages. Its key feature is the hands-on learning approach, where users learn by writing code directly in the browser with instant feedback.",
        "url": "https://www.codecademy.com",
        "tags": ["Free", "Paid", "Coding", "Students", "Interactive"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.7,
        "reviewCount": 35000,
        "featured": true,
        "dateAdded": "2024-02-20",
        "features": [
          "Interactive in-browser lessons",
          "Instant feedback on code",
          "Career paths and skill paths",
          "Real-world projects",
          "Peer support community",
          "Mobile app for on-the-go practice"
        ],
        "pricing": {
          "free": "Basic plan with access to many courses.",
          "paid": ["Pro plans (~$19.99/month) for paths, projects, and certificates."]
        },
        "requirements": ["Web browser", "Internet connection"],
        "alternatives": ["freeCodeCamp", "The Odin Project", "Sololearn", "Scrimba"]
      },
      {
        "id": "brilliant",
        "name": "Brilliant",
        "description": "Brilliant makes learning STEM subjects interactive through problem-solving and visual learning, covering math, science, computer science, and data analysis.",
        "detailedDescription": "Brilliant.org is an interactive learning platform for STEM subjects. Instead of passive video lectures, it teaches concepts through engaging, bite-sized problem-solving exercises, helping users build intuition and a deep understanding of complex topics.",
        "url": "https://brilliant.org",
        "tags": ["Paid", "STEM", "Students", "Interactive", "Math"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": false,
        "rating": 4.8,
        "reviewCount": 15000,
        "featured": false,
        "dateAdded": "2024-02-25",
        "features": [
          "Interactive problem-solving",
          "Visual and animated learning",
          "Guided lessons for deep understanding",
          "Daily challenges",
          "Covers a wide range of STEM topics",
          "Mobile and web platform"
        ],
        "pricing": {
          "free": "Limited free access to daily problems and course previews.",
          "paid": ["Premium subscription (~$12.49/month billed annually) for full access."]
        },
        "requirements": ["Web browser or mobile app", "Internet connection"],
        "alternatives": ["Khan Academy", "Wolfram Alpha", "ZTM Academy", "3Blue1Brown"]
      },
      {
        "id": "datacamp",
        "name": "DataCamp",
        "description": "DataCamp provides interactive courses in data science, analytics, and AI, teaching R, Python, SQL, and other data skills through hands-on exercises.",
        "detailedDescription": "DataCamp is an interactive learning platform specifically for data science. It offers short expert videos followed immediately by in-browser coding exercises, allowing users to learn by doing. It covers a wide range of data technologies including Python, R, SQL, and Power BI.",
        "url": "https://www.datacamp.com",
        "tags": ["Paid", "DataScience", "Python", "R", "Analytics"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": false,
        "rating": 4.6,
        "reviewCount": 19500,
        "featured": false,
        "dateAdded": "2024-03-01",
        "features": [
          "Interactive coding exercises",
          "Skill tracks and career tracks",
          "Real-world projects",
          "Skill assessments",
          "Integrated workspace for analysis",
          "Mobile app for practice"
        ],
        "pricing": {
          "free": "Free account with access to first chapters of all courses.",
          "paid": ["Subscription plans (from ~$12/month) for full access."]
        },
        "requirements": ["Web browser", "Internet connection"],
        "alternatives": ["Coursera", "Udacity (Data Science)", "Dataquest", "365 Data Science"]
      },
      {
        "id": "linkedin",
        "name": "LinkedIn Learning",
        "description": "LinkedIn Learning offers professional development courses taught by industry experts, covering business, technology, and creative skills with certificates.",
        "detailedDescription": "LinkedIn Learning (formerly Lynda.com) is a video course platform integrated into the LinkedIn ecosystem. It provides expert-led courses on a wide variety of professional skills. Completed courses can be added to a user's LinkedIn profile, showcasing their new skills.",
        "url": "https://www.linkedin.com/learning/",
        "tags": ["Paid", "Professionals", "Business", "Technology", "Creative"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": false,
        "rating": 4.5,
        "reviewCount": 25000,
        "featured": false,
        "dateAdded": "2024-03-05",
        "features": [
          "Expert-led video courses",
          "Integration with LinkedIn profile",
          "Certificates of completion",
          "Learning paths for specific careers",
          "Offline viewing on mobile app",
          "Exercise files and quizzes"
        ],
        "pricing": {
          "free": "Free 1-month trial available.",
          "paid": ["Included with LinkedIn Premium (from ~$29.99/month)."]
        },
        "requirements": ["LinkedIn account", "Subscription"],
        "alternatives": ["Coursera", "Udemy", "Pluralsight", "Skillshare"]
      },
      {
        "id": "mitopencourseware",
        "name": "MIT OpenCourseWare",
        "description": "MIT OpenCourseWare provides free access to course materials from virtually all MIT courses, including lecture notes, exams, and videos.",
        "detailedDescription": "MIT OpenCourseWare (OCW) is a free and open publication of material from thousands of MIT courses, representing the entire MIT curriculum. It is not an interactive learning platform, but a digital library of the actual materials used to teach at one of the world's top universities.",
        "url": "https://ocw.mit.edu",
        "tags": ["Free", "MIT", "Engineering", "Science", "University"],
        "difficulty": "advanced",
        "type": "platform",
        "isFree": true,
        "rating": 4.9,
        "reviewCount": 17000,
        "featured": true,
        "dateAdded": "2024-03-10",
        "features": [
          "Access to real MIT course materials",
          "No registration required",
          "Covers entire MIT curriculum",
          "Includes video lectures and lecture notes",
          "Downloadable content for offline use"
        ],
        "pricing": {
          "free": "Completely free and open."
        },
        "requirements": ["Self-discipline", "Internet connection", "Strong academic background for advanced courses"],
        "alternatives": ["Stanford Online", "HarvardX", "Open Yale Courses", "edX"]
      },
      {
        "id": "w3schools",
        "name": "W3Schools",
        "description": "W3Schools is a comprehensive web development learning platform offering tutorials, references, and exercises for HTML, CSS, JavaScript, and more.",
        "detailedDescription": "W3Schools is one of the largest and oldest web developer resources on the internet. It provides tutorials and extensive references for all aspects of web programming. Its 'Try It Yourself' editor allows users to experiment with code directly in the browser.",
        "url": "https://www.w3schools.com",
        "tags": ["Free", "WebDevelopment", "Programming", "Tutorials", "BeginnerFriendly"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.6,
        "reviewCount": 42000,
        "featured": true,
        "dateAdded": "2024-03-12",
        "features": [
          "'Try It Yourself' interactive code editor",
          "Comprehensive web technology reference",
          "Simple, direct tutorials",
          "Quizzes and exercises to test knowledge",
          "Free and paid certifications"
        ],
        "pricing": {
          "free": "All tutorials and references are free.",
          "paid": ["Paid certifications and a web hosting service are available."]
        },
        "requirements": ["Web browser", "Internet connection"],
        "alternatives": ["MDN Web Docs", "freeCodeCamp", "Codecademy", "DevDocs.io"]
      },
      {
        "id": "sololearn",
        "name": "SoloLearn",
        "description": "SoloLearn is a mobile-first platform for learning programming languages through bite-sized lessons, coding challenges, and community interaction.",
        "detailedDescription": "SoloLearn offers a mobile-first approach to learning to code. The platform breaks down complex topics into short, easy-to-digest lessons, followed by quizzes. It has a strong community aspect with a social 'Code Playground' for sharing and collaborating on code snippets.",
        "url": "https://www.sololearn.com",
        "tags": ["Free", "Paid", "Mobile", "Programming", "Community"],
        "difficulty": "beginner",
        "type": "app",
        "isFree": true,
        "rating": 4.7,
        "reviewCount": 28000,
        "featured": false,
        "dateAdded": "2024-03-15",
        "features": [
          "Mobile-first learning experience",
          "Bite-sized lessons and quizzes",
          "Community Q&A and forums",
          "Code Playground for sharing code",
          "Gamified learning with leaderboards",
          "Wide range of programming languages"
        ],
        "pricing": {
          "free": "Free plan with access to all lessons.",
          "paid": ["Pro subscription (~$12.99/month) for ad-free experience, goal setting, and more."]
        },
        "requirements": ["Mobile app or web browser", "Internet connection"],
        "alternatives": ["Codecademy", "Mimo", "Grasshopper by Google", "Enki"]
      },
      {
        "id": "futurelearn",
        "name": "FutureLearn",
        "description": "FutureLearn is a UK-based platform offering courses from leading universities and cultural institutions, with social learning and diverse subjects.",
        "detailedDescription": "FutureLearn is a British digital education platform founded by The Open University. It offers online courses, microcredentials, and degrees from leading UK and international universities. Its platform is designed around social learning, encouraging conversation around the course material.",
        "url": "https://www.futurelearn.com",
        "tags": ["Free", "Paid", "Universities", "SocialLearning", "UK"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.4,
        "reviewCount": 15000,
        "featured": false,
        "dateAdded": "2024-03-18",
        "features": [
          "Emphasis on social learning and discussion",
          "Courses from top UK universities and institutions",
          "Microcredentials and online degrees",
          "Wide range of subjects beyond just tech",
          "Step-by-step, weekly course structure"
        ],
        "pricing": {
          "free": "Free access to courses for a limited time (audit).",
          "paid": ["Paid upgrades for certificates and unlimited access, or an Unlimited subscription plan."]
        },
        "requirements": ["Web browser", "Internet connection"],
        "alternatives": ["Coursera", "edX", "OpenLearn", "Swayam"]
      },
      {
        "id": "codeorg",
        "name": "Code.org",
        "description": "Code.org is a nonprofit platform dedicated to expanding access to computer science in schools. It provides free coding lessons and resources for K–12 students (and teachers), and organizes the annual 'Hour of Code' to introduce millions of students to programming.",
        "detailedDescription": "Code.org is a non-profit organization dedicated to making computer science a fundamental part of K-12 education. It provides a free, comprehensive curriculum for schools, and organizes the annual Hour of Code campaign, which has engaged millions of students in over 180 countries.",
        "url": "https://code.org/",
        "tags": ["Free", "Students", "Educators", "Beginners", "K-12"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 31000,
        "featured": false,
        "dateAdded": "2024-03-20",
        "features": [
          "Full K-12 curriculum",
          "Hour of Code initiative",
          "Block-based coding for beginners (Blockly)",
          "Professional development for teachers",
          "Focus on equity and access to CS education"
        ],
        "pricing": {
          "free": "Completely free for all users."
        },
        "requirements": ["Web browser", "Internet connection"],
        "alternatives": ["Scratch", "Tynker", "Khan Academy (CS)", "CS First"]
      },
      {
        "id": "leetcode",
        "name": "LeetCode",
        "description": "LeetCode is a programming practice platform focusing on coding interview problems. It offers a large collection of algorithmic challenges, contests, and discussion forums, helping users improve problem-solving skills and prepare for technical interviews.",
        "detailedDescription": "LeetCode is the leading online platform for technical interview preparation. It features a vast collection of algorithmic problems sourced from real interviews at top tech companies. Users can solve problems, participate in contests, and discuss solutions with the community.",
        "url": "https://leetcode.com/",
        "tags": ["Free", "Paid", "Students", "Developers", "InterviewPrep"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 22000,
        "featured": true,
        "dateAdded": "2024-03-22",
        "features": [
          "Extensive problem bank (2000+ questions)",
          "Organized by topic, difficulty, and company",
          "Mock interviews and contests",
          "Active discussion forums with optimal solutions",
          "In-browser code editor with multiple languages"
        ],
        "pricing": {
          "free": "Free access to a large number of problems.",
          "paid": ["Premium subscription (~$35/month) for premium questions, company-specific tracks, and mock interviews."]
        },
        "requirements": ["Knowledge of a programming language", "Understanding of data structures and algorithms"],
        "alternatives": ["HackerRank", "Codeforces", "TopCoder", "Codewars"]
      },
      {
        "id": "fastai",
        "name": "fast.ai",
        "description": "fast.ai provides free online courses on deep learning and machine learning with a practical focus. Its courses emphasize coding and real-world projects using frameworks like PyTorch, aiming to make AI accessible and useful for students and developers.",
        "detailedDescription": "fast.ai is a research institute dedicated to making deep learning more accessible. It offers free, practical courses that follow a top-down, code-first methodology. Using their own fastai library (built on PyTorch), students are able to build state-of-the-art models quickly.",
        "url": "https://www.fast.ai/",
        "tags": ["Free", "Students", "Developers", "Researchers", "AI"],
        "difficulty": "advanced",
        "type": "platform",
        "isFree": true,
        "rating": 4.9,
        "reviewCount": 11000,
        "featured": false,
        "dateAdded": "2024-03-25",
        "features": [
          "Free, practical deep learning courses",
          "Code-first, top-down teaching approach",
          "Uses the powerful `fastai` software library",
          "Active community forum for support",
          "Covers computer vision, NLP, and tabular data"
        ],
        "pricing": {
          "free": "Completely free."
        },
        "requirements": ["1+ year of coding experience (Python recommended)", "Some high school math knowledge"],
        "alternatives": ["DeepLearning.AI (Coursera)", "Udacity (Deep Learning Nanodegree)", "Full Stack Deep Learning", "Hugging Face Course"]
      },
      {
        "id": "microsoft_learn",
        "name": "Microsoft Learn",
        "description": "Microsoft Learn is Microsoft's free online platform for learning technical skills. It offers interactive modules and learning paths covering Microsoft technologies such as Azure, Power Platform, and .NET. Users learn through hands-on labs and get digital certifications.",
        "detailedDescription": "Microsoft Learn is the official free learning platform for Microsoft products. It provides interactive, self-paced learning paths, hands-on labs in a free sandbox environment, and role-based training to help users prepare for official Microsoft certifications.",
        "url": "https://learn.microsoft.com/",
        "tags": ["Free", "Students", "IT Professionals", "Developers", "Certification"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": true,
        "rating": 4.7,
        "reviewCount": 18000,
        "featured": false,
        "dateAdded": "2024-03-28",
        "features": [
          "Hands-on labs in a free sandbox environment",
          "Role-based learning paths",
          "Preparation for Microsoft certifications",
          "Covers Azure, Power Platform, Microsoft 365, etc.",
          "Gamified learning with XP and achievements"
        ],
        "pricing": {
          "free": "All learning content is free. Certification exams are paid.",
          "paid": ["Official Microsoft Certification exams have a fee."]
        },
        "requirements": ["Web browser", "Microsoft account (recommended)"],
        "alternatives": ["A Cloud Guru", "Pluralsight", "AWS Skill Builder", "Google Cloud Skills Boost"]
      },
      {
        "id": "google_garage",
        "name": "Google Digital Garage",
        "description": "Google Digital Garage provides free online training in digital skills and career development. It offers courses and certifications in data, technology, and professional development (e.g. 'Fundamentals of Digital Marketing'), helping people build skills for today's job market.",
        "detailedDescription": "Google Digital Garage is a non-profit program from Google delivering free digital skills training. It offers a range of courses, with a strong focus on digital marketing, but also covering data, tech, and career development. Many courses offer free certifications upon completion.",
        "url": "https://learndigital.withgoogle.com/digitalgarage",
        "tags": ["Free", "Students", "Professionals", "Marketing", "Certification"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.6,
        "reviewCount": 26000,
        "featured": false,
        "dateAdded": "2024-04-01",
        "features": [
          "Free online courses",
          "Focus on digital marketing and career skills",
          "Offers recognized free certifications",
          "Self-paced learning with video tutorials",
          "Modules created by Google trainers"
        ],
        "pricing": {
          "free": "Completely free."
        },
        "requirements": ["Google account", "Web browser"],
        "alternatives": ["HubSpot Academy", "Facebook Blueprint", "Semrush Academy", "Coursera (Google courses)"]
      },
      {
        "id": "ibm_skillsbuild",
        "name": "IBM SkillsBuild",
        "description": "IBM SkillsBuild is a free learning platform offering courses and credentials in technology and professional skills. It covers topics like cybersecurity, cloud, and AI, targeting students and adult learners to gain industry-aligned skills.",
        "detailedDescription": "IBM SkillsBuild is a free digital learning platform focused on providing job-seekers and students with valuable skills and credentials in technology and professional development. It offers courses in high-demand areas like AI, cybersecurity, and data science, with a focus on underrepresented communities.",
        "url": "https://skillsbuild.org/",
        "tags": ["Free", "Students", "Professionals", "Certification", "AI"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": true,
        "rating": 4.5,
        "reviewCount": 9500,
        "featured": false,
        "dateAdded": "2024-04-04",
        "features": [
          "Free courses and digital credentials",
          "Focus on workplace and tech skills",
          "Covers AI, cybersecurity, data science",
          "Partnerships with schools and nonprofits",
          "Personalized learning paths"
        ],
        "pricing": {
          "free": "Completely free."
        },
        "requirements": ["Registration is required."],
        "alternatives": ["Microsoft Learn", "Google Digital Garage", "Coursera", "Cisco Networking Academy"]
      },
      {
        "id": "alison",
        "name": "Alison",
        "description": "Alison is an online learning platform offering free courses and certificates in many subjects (IT, business, languages, etc.). It focuses on workplace skills and vocational training, providing open access to courses with optional paid certificates.",
        "detailedDescription": "Alison is one of the world's largest free learning platforms for education and skills training. It is a for-profit social enterprise dedicated to making it possible for anyone to study anything, anywhere, at any time, for free online. The business model is ad-supported with optional paid certificates.",
        "url": "https://alison.com/",
        "tags": ["Free", "Paid", "Students", "Professionals", "Vocational"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.2,
        "reviewCount": 12000,
        "featured": false,
        "dateAdded": "2024-04-08",
        "features": [
          "Large catalog of free courses (4000+)",
          "Focus on vocational and workplace skills",
          "Certificate and Diploma level courses",
          "Ad-supported free access",
          "Career guidance tools"
        ],
        "pricing": {
          "free": "All courses are free to complete.",
          "paid": ["Optional paid digital/physical certificates, or a premium subscription for an ad-free experience."]
        },
        "requirements": ["Web browser", "Internet connection"],
        "alternatives": ["Udemy", "FutureLearn", "OpenLearn", "Saylor Academy"]
      },
      {
        "id": "codechef",
        "name": "CodeChef",
        "description": "CodeChef is a competitive programming platform offering coding challenges and contests for all levels of programmers.",
        "detailedDescription": "CodeChef, powered by Unacademy, is a global competitive programming platform. It hosts several contests each month, including the popular Long Challenge, Cook-Off, and Lunchtime, catering to different skill levels. It also has a large practice archive and educational resources.",
        "url": "https://www.codechef.com/",
        "tags": ["Free", "CompetitiveProgramming", "Students", "Developers", "India"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": true,
        "rating": 4.6,
        "reviewCount": 16000,
        "featured": false,
        "dateAdded": "2024-04-10",
        "features": [
          "Monthly programming contests",
          "Large practice problem archive",
          "Discussion forums and problem editorials",
          "Educational resources for algorithms",
          "Beginner-friendly contests"
        ],
        "pricing": {
          "free": "Completely free."
        },
        "requirements": ["Knowledge of a programming language and algorithms."],
        "alternatives": ["Codeforces", "HackerEarth", "TopCoder", "AtCoder"]
      },
      {
        "id": "codeforces",
        "name": "Codeforces",
        "description": "Codeforces hosts competitive programming contests and a large problem archive to practice algorithms and data structures.",
        "detailedDescription": "Codeforces is a leading platform dedicated to competitive programming. It is known for its frequent, short-format contests ('Codeforces Rounds') that attract a large global community of programmers, from beginners to the world's top competitors. It features a sophisticated rating system.",
        "url": "https://codeforces.com/",
        "tags": ["Free", "CompetitiveProgramming", "Students", "Developers", "Algorithms"],
        "difficulty": "advanced",
        "type": "platform",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 14000,
        "featured": false,
        "dateAdded": "2024-04-12",
        "features": [
          "Frequent competitive programming rounds",
          "Extensive problem archive with editorials",
          "Strong community and Elo-based rating system",
          "Supports a wide range of languages",
          "Groups and training features"
        ],
        "pricing": {
          "free": "Completely free."
        },
        "requirements": ["Strong knowledge of algorithms and data structures."],
        "alternatives": ["CodeChef", "TopCoder", "AtCoder", "LeetCode"]
      },
      {
        "id": "hackerrank",
        "name": "HackerRank",
        "description": "HackerRank offers coding challenges across various domains and is widely used for interview preparation.",
        "detailedDescription": "HackerRank is a technology hiring platform that is also a popular destination for developers to practice coding and prepare for technical interviews. It offers challenges in various domains like algorithms, AI, and databases, and provides certifications to showcase skills.",
        "url": "https://www.hackerrank.com/",
        "tags": ["Free", "Paid", "CodingPractice", "InterviewPrep", "Developers"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": true,
        "rating": 4.7,
        "reviewCount": 19000,
        "featured": false,
        "dateAdded": "2024-04-15",
        "features": [
          "Practice tracks for various domains",
          "Interview Preparation Kit",
          "Skills-based certifications",
          "Company-hosted coding challenges",
          "Supports over 40 programming languages"
        ],
        "pricing": {
          "free": "Free for developers.",
          "paid": ["Paid platform for companies (HackerRank for Work)."]
        },
        "requirements": ["Programming knowledge."],
        "alternatives": ["LeetCode", "Codility", "HackerEarth", "Coderbyte"]
      },
      {
        "id": "mdn",
        "name": "MDN Web Docs",
        "description": "MDN Web Docs provides in-depth documentation and learning resources for web technologies including HTML, CSS, and JavaScript.",
        "detailedDescription": "MDN Web Docs, formerly the Mozilla Developer Network, is the definitive, community-maintained resource for web developers. It provides comprehensive documentation, tutorials, and guides for open web standards like HTML, CSS, JavaScript, and Web APIs.",
        "url": "https://developer.mozilla.org/",
        "tags": ["Free", "WebDevelopment", "Documentation", "Standards", "Frontend"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.9,
        "reviewCount": 25000,
        "featured": true,
        "dateAdded": "2024-04-18",
        "features": [
          "Authoritative documentation for web standards",
          "In-depth guides and tutorials",
          "Interactive examples and code snippets",
          "Maintained by Mozilla and a global community",
          "Completely free and open"
        ],
        "pricing": {
          "free": "Completely free."
        },
        "requirements": ["Web browser", "Internet connection"],
        "alternatives": ["W3Schools", "DevDocs.io", "Can I use...", "CSS-Tricks"]
      },
      {
        "id": "googlecloudtraining",
        "name": "Google Cloud Training",
        "description": "Google Cloud Training offers learning resources and certification prep for Google Cloud technologies.",
        "detailedDescription": "Now known as Google Cloud Skills Boost, this is Google's official platform for learning Google Cloud. It provides on-demand courses, hands-on labs in a real cloud environment via Qwiklabs, and learning paths aligned with official Google Cloud certifications.",
        "url": "https://cloud.google.com/learn",
        "tags": ["Free", "Paid", "CloudComputing", "GoogleCloud", "Certification"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": false,
        "rating": 4.6,
        "reviewCount": 11500,
        "featured": false,
        "dateAdded": "2024-04-20",
        "features": [
          "Official Google Cloud curriculum",
          "Hands-on labs in a real cloud environment",
          "Role-based learning paths",
          "Prepares for official certifications",
          "Skill badges to demonstrate proficiency"
        ],
        "pricing": {
          "free": "A selection of courses and labs are free.",
          "paid": ["Full access via monthly (~$29) or annual subscriptions."]
        },
        "requirements": ["Google account", "Web browser"],
        "alternatives": ["A Cloud Guru", "Pluralsight", "Whizlabs", "Microsoft Learn", "AWS Skill Builder"]
      }
    ,
    {
        "id": "roadmapsh",
        "name": "Roadmap.sh",
        "description": "Community-driven roadmaps, articles, and resources for every developer role.",
        "detailedDescription": "The gold standard for learning paths. Roadmap.sh provides visual guides for Frontend, Backend, DevOps, and now even specific 'AI Engineer' and 'Prompt Engineering' paths.",
        "url": "https://roadmap.sh",
        "tags": ["Learning", "Guide", "Career", "Open Source"],
        "difficulty": "beginner",
        "type": "website",
        "isFree": true,
        "rating": 4.9,
        "reviewCount": 120000,
        "featured": true,
        "features": [
          "Interactive visual maps",
          "Topic-wise progress tracking",
          "Role-based certification paths",
          "Resource recommendations"
        ],
        "pricing": { "free": "100% Free" },
        "requirements": ["None"],
        "alternatives": ["Learn.xyz", "FreeCodeCamp"]
      },
      {
        "id": "deeplearningai",
        "name": "DeepLearning.AI Short Courses",
        "description": "Practical, free 1-hour courses on AI agents, RAG, and fine-tuning LLMs.",
        "detailedDescription": "Founded by Andrew Ng, these short courses are the most efficient way to learn modern AI techniques like 'AI Agents' or 'Building with LlamaIndex' in under 90 minutes.",
        "url": "https://www.deeplearning.ai/short-courses/",
        "tags": ["AI", "Education", "Certifications", "Short-Form"],
        "difficulty": "intermediate",
        "type": "course",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 65000,
        "featured": true,
        "features": [
          "Industry-expert instructors",
          "Hands-on Jupyter notebooks",
          "Latest AI research topics",
          "Direct partnership with OpenAI and Google"
        ],
        "pricing": { "free": "Courses are free for a limited time after launch" },
        "requirements": ["Basic Python knowledge"],
        "alternatives": ["Fast.ai", "Udacity"]
      }
  ]
  };
