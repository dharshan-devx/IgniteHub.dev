import { Category } from '../resources';
export const hackathonsEvents: Category = {
    "id": "hackathonsEvents",
    "title": "Hackathons & Events",
    "description": "Coding competitions, hackathons, and tech events to showcase your skills",
    "icon": "🏆",
    "gradient": "from-orange-500 to-red-600",
    "resources": [
      {
        "id": "nasaSpaceApps",
        "name": "NASA Space Apps Challenge",
        "description": "The NASA International Space Apps Challenge is an annual global hackathon where teams of coders, scientists, designers, and makers use open NASA data to address Earth and space challenges.",
        "detailedDescription": "NASA Space Apps Challenge is the largest global hackathon, bringing together diverse teams to solve challenges using NASA's open data. Participants work on real problems that NASA and its partners face, from Earth science to space exploration.",
        "url": "https://www.spaceappschallenge.org",
        "tags": ["Free", "Students", "Innovators", "SpaceTech"],
        "difficulty": "intermediate",
        "type": "service",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 5670,
        "featured": true,
        "dateAdded": "2024-01-15",
        "features": [
          "Global participation",
          "NASA open data access",
          "Expert mentorship",
          "Awards and recognition",
          "Virtual and in-person events",
          "International collaboration"
        ],
        "pricing": {
          "free": "Free participation worldwide"
        },
        "requirements": ["Team formation", "Basic technical skills", "Registration"],
        "alternatives": ["ESA Space App Camp", "ActInSpace", "SpaceX Hyperloop", "Space Settlement Contest"]
      },
      {
        "id": "mlh",
        "name": "Major League Hacking",
        "description": "Major League Hacking (MLH) is the official student hackathon league, organizing 300+ hackathons per year for 500K+ student developers worldwide.",
        "detailedDescription": "Major League Hacking is the official student hackathon league that empowers hackers to learn, build, and share their creations. MLH runs the most developer-focused hackathons worldwide, fostering innovation and community among student developers.",
        "url": "https://mlh.io",
        "tags": ["Free", "Students", "Hackathons", "Community"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.7,
        "reviewCount": 12340,
        "featured": true,
        "dateAdded": "2024-01-20",
        "features": [
          "Student-focused events",
          "Global hackathon network",
          "Mentorship programs",
          "Swag and prizes",
          "Career opportunities",
          "Community building",
          "Educational workshops"
        ],
        "pricing": {
          "free": "All events are free for students"
        },
        "requirements": ["Student status", "Age verification", "Code of conduct agreement"],
        "alternatives": ["HackClub", "Devpost", "HackerEarth", "AngelHack"]
      },
      {
        "id": "angelhack",
        "name": "AngelHack",
        "description": "AngelHack runs global hackathon series and innovation programs since 2011, partnering with tech companies to engage developers (300K+ in community) in collaborative projects.",
        "detailedDescription": "AngelHack is a global hackathon organization that brings together developers, designers, and entrepreneurs to build innovative solutions. They partner with leading tech companies to provide real-world challenges and opportunities.",
        "url": "https://angelhack.com",
        "tags": ["Free", "Developers", "Hackathons", "Innovation"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": true,
        "rating": 4.5,
        "reviewCount": 7890,
        "featured": false,
        "dateAdded": "2024-01-25",
        "features": [
          "Corporate-sponsored challenges",
          "Global events series",
          "Accelerator programs for winners",
          "Mentorship network",
          "Prize competitions",
          "Post-event support"
        ],
        "pricing": {
          "free": "Free participation in hackathons"
        },
        "requirements": ["Registration", "Team formation", "Project submission"],
        "alternatives": ["Junction", "TechCrunch Disrupt Hackathon", "Startup Weekend", "HackZurich"]
      },
      {
        "id": "devpost",
        "name": "Devpost",
        "description": "Devpost is the home for hackathons, powering online and in-person hackathons worldwide with project submissions, judging tools, and community features.",
        "detailedDescription": "Devpost is the leading platform for hackathons and developer competitions. It provides tools for organizers to run events and for participants to showcase their projects, connect with teammates, and discover opportunities.",
        "url": "https://devpost.com",
        "tags": ["Free", "Hackathons", "Developers", "Projects"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.6,
        "reviewCount": 18920,
        "featured": true,
        "dateAdded": "2024-02-01",
        "features": [
          "Hackathon discovery engine",
          "Project portfolio hosting",
          "Team formation tools",
          "Submission management system",
          "Judging and prize distribution tools",
          "Community features"
        ],
        "pricing": {
          "free": "Free for participants and basic organizer features"
        },
        "requirements": ["Account creation", "Project submission", "Team collaboration"],
        "alternatives": ["HackerEarth", "Devfolio", "HackClub", "Kaggle Competitions"]
      },
      {
        "id": "hackerearth",
        "name": "HackerEarth Challenges",
        "description": "HackerEarth hosts programming challenges, hackathons, and coding competitions connecting developers globally while helping them improve skills and find opportunities.",
        "detailedDescription": "HackerEarth is a comprehensive platform for technical recruitment and developer engagement. It hosts various coding challenges, hackathons, and competitions that help developers showcase their skills and connect with potential employers.",
        "url": "https://www.hackerearth.com/challenges/",
        "tags": ["Free", "Programming", "Competitions", "Developers"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": true,
        "rating": 4.4,
        "reviewCount": 9870,
        "featured": false,
        "dateAdded": "2024-02-05",
        "features": [
          "Competitive programming contests",
          "Hackathon hosting",
          "Skill assessments for recruitment",
          "Global leaderboards",
          "Corporate-sponsored challenges",
          "Practice problems"
        ],
        "pricing": {
          "free": "Free participation in public challenges",
          "paid": ["Premium features for organizers and enterprises"]
        },
        "requirements": ["Programming knowledge", "Account registration", "Problem-solving skills"],
        "alternatives": ["CodeChef", "Codeforces", "TopCoder", "LeetCode"]
      },
      {
        "id": "ethglobal",
        "name": "ETHGlobal",
        "description": "ETHGlobal organizes Ethereum hackathons worldwide, bringing developers together to build decentralized applications and advance blockchain technology.",
        "detailedDescription": "ETHGlobal is the premier organization for hackathons and summits within the Ethereum and Web3 ecosystem. Their events bring together thousands of developers, designers, and builders to create decentralized applications, push the boundaries of blockchain technology, and compete for significant prizes.",
        "url": "https://ethglobal.com",
        "tags": ["Free", "Blockchain", "Ethereum", "Web3", "Developers"],
        "difficulty": "advanced",
        "type": "platform",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 4500,
        "featured": true,
        "dateAdded": "2024-02-10",
        "features": [
          "Large prize pools",
          "Global online and in-person hackathons",
          "Mentorship from blockchain experts",
          "Focus on the Ethereum ecosystem",
          "Strong developer community",
          "Opportunities to meet founders and investors"
        ],
        "pricing": {
          "free": "Free participation for all accepted hackers."
        },
        "requirements": ["Knowledge of blockchain concepts", "Experience with Solidity/Web3 development", "Application and acceptance"],
        "alternatives": ["DoraHacks", "Chainlink Hackathons", "Polygon BUIDL IT", "NEAR Protocol Hackathons"]
      },
      {
        "id": "hack2skill",
        "name": "Hack2skill",
        "description": "Hack2skill is an upskilling platform organizing hackathons and tech camps focused on emerging technologies like Blockchain, Web3, and DeepTech.",
        "detailedDescription": "Hack2skill is an India-based community and platform that focuses on upskilling developers through hackathons, workshops, and tech camps. They frequently partner with companies and ecosystems to host events centered around emerging technologies like AI, Blockchain, and Web3, fostering innovation within the Indian developer community.",
        "url": "https://hack2skill.com",
        "tags": ["Free", "India", "Upskilling", "EmergingTech"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": true,
        "rating": 4.3,
        "reviewCount": 2800,
        "featured": false,
        "dateAdded": "2024-02-15",
        "features": [
          "India-focused community",
          "Hackathons on emerging technologies",
          "Upskilling bootcamps and workshops",
          "Corporate and ecosystem partnerships",
          "Online and offline events"
        ],
        "pricing": {
          "free": "Free participation in most events."
        },
        "requirements": ["Registration", "Technical skills relevant to the event theme"],
        "alternatives": ["Unstop", "Devfolio", "HackerEarth (India)", "Skillenza"]
      },
      {
        "id": "unstop",
        "name": "Unstop",
        "description": "Unstop (formerly Dare2Compete) is India's largest platform for competitions, hackathons, scholarships, and internships for students and professionals.",
        "detailedDescription": "Unstop is a comprehensive community platform for students and young professionals in India to discover and engage in a wide range of opportunities. It lists everything from hackathons and business case competitions to quizzes, internships, and jobs, connecting talent with companies.",
        "url": "https://unstop.com",
        "tags": ["Free", "India", "Students", "Competitions", "Careers"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.7,
        "reviewCount": 25000,
        "featured": true,
        "dateAdded": "2024-02-20",
        "features": [
          "Vast range of competitions",
          "Hackathon and hiring challenges",
          "Internship and job listings",
          "Scholarship opportunities",
        "Skill-based learning courses",
          "Large student and corporate user base"
        ],
        "pricing": {
          "free": "Free for participants to discover and apply."
        },
        "requirements": ["Student or professional status", "Registration on the platform"],
        "alternatives": ["Internshala", "HackerEarth", "Hack2skill", "LinkedIn"]
      },
      {
        "id": "googleSummerOfCode",
        "name": "Google Summer of Code",
        "description": "Google Summer of Code is a global online program funding students to work on open source projects with mentoring organizations over the summer.",
        "detailedDescription": "Google Summer of Code (GSoC) is a prestigious annual program that provides stipends to new open-source contributors for working on a 10-12 week programming project with an open-source organization. It's a unique opportunity to gain real-world software development experience and get paid for it.",
        "url": "https://summerofcode.withgoogle.com",
        "tags": ["Stipend", "Students", "OpenSource", "Mentorship"],
        "difficulty": "intermediate",
        "type": "service",
        "isFree": true,
        "rating": 4.9,
        "reviewCount": 9500,
        "featured": true,
        "dateAdded": "2024-02-25",
        "features": [
          "Paid stipend for contributions",
          "Direct mentorship from open source veterans",
          "Work on real-world projects",
          "Global, remote participation",
          "Boosts resume and career prospects",
          "Wide variety of participating organizations"
        ],
        "pricing": {
          "free": "Participants receive a stipend based on their location."
        },
        "requirements": ["18+ years old", "Eligibility for the program", "Strong project proposal", "Acceptance by a mentoring organization"],
        "alternatives": ["MLH Fellowship", "Outreachy", "Linux Foundation Mentorship Program", "Season of KDE"]
      },
      {
        "id": "globalGameJam",
        "name": "Global Game Jam",
        "description": "Global Game Jam is the world's largest game creation event, where participants create games in 48 hours at sites around the globe.",
        "detailedDescription": "The Global Game Jam (GGJ) is a worldwide event where developers, artists, and designers come together to create video games within a 48-hour timeframe. All participants work under a shared theme and constraints, fostering creativity, collaboration, and rapid prototyping in a fun and supportive environment.",
        "url": "https://globalgamejam.org",
        "tags": ["Free", "GameDevelopment", "Creativity", "Community"],
        "difficulty": "intermediate",
        "type": "service",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 11000,
        "featured": true,
        "dateAdded": "2024-03-01",
        "features": [
          "48-hour game creation challenge",
          "Annual secret theme",
          "Hundreds of physical and virtual sites globally",
          "Creative collaboration and teamwork",
          "Focus on experimentation, not competition",
          "Welcomes all skill levels"
        ],
        "pricing": {
          "free": "Participation is free, though local sites may have small fees for food/venue."
        },
        "requirements": ["Interest in game development", "Registration at a jam site"],
        "alternatives": ["Ludum Dare", "itch.io Jams", "GMTK Game Jam", "Brackeys Game Jam"]
      },
      {
        "id": "codingNinjas",
        "name": "Coding Ninjas Events",
        "description": "Coding Ninjas organizes hackathons, coding competitions, and tech events to help students and professionals enhance their programming skills.",
        "detailedDescription": "Coding Ninjas, primarily an ed-tech platform for programming courses, hosts a variety of events to engage its community. These include competitive programming contests, hackathons sponsored by tech companies, and informative webinars, all aimed at helping developers practice their skills and advance their careers.",
        "url": "https://www.codingninjas.com/events",
        "tags": ["Free", "Programming", "Students", "SkillDevelopment"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.5,
        "reviewCount": 8500,
        "featured": false,
        "dateAdded": "2024-03-05",
        "features": [
          "Regular coding contests",
          "Company-sponsored hiring challenges",
          "Skill-based assessments",
          "Integration with their learning platform",
          "Prizes and career opportunities"
        ],
        "pricing": {
          "free": "Free participation in most events and contests."
        },
        "requirements": ["Account registration", "Programming skills relevant to the contest"],
        "alternatives": ["HackerRank", "LeetCode Contests", "CodeChef", "GeeksforGeeks Contests"]
      },
      {
        "id": "hacktoberfest",
        "name": "Hacktoberfest",
        "description": "Hacktoberfest is an annual month-long celebration of open source software encouraging contributions to open source projects worldwide.",
        "detailedDescription": "Hacktoberfest is a month-long celebration of open-source software run by DigitalOcean. During October, participants are encouraged to make meaningful contributions to open-source projects on GitHub or GitLab. Completing the challenge often rewards participants with swag like a t-shirt or the option to plant a tree.",
        "url": "https://hacktoberfest.com",
        "tags": ["Free", "OpenSource", "Community", "Global", "BeginnerFriendly"],
        "difficulty": "beginner",
        "type": "service",
        "isFree": true,
        "rating": 4.9,
        "reviewCount": 15000,
        "featured": true,
        "dateAdded": "2024-03-10",
        "features": [
          "Month-long event (October)",
          "Promotes open-source contribution",
          "Great for beginners",
          "Global participation",
          "Rewards for completing the challenge",
          "Community-driven"
        ],
        "pricing": {
          "free": "Free to participate."
        },
        "requirements": ["A GitHub or GitLab account", "Make a set number of valid pull/merge requests"],
        "alternatives": ["24 Pull Requests", "Google Summer of Code", "Outreachy"]
      },
      {
        "id": "startup_weekend",
        "name": "Techstars Startup Weekend",
        "description": "Startup Weekend (by Techstars) is a 54-hour global event where entrepreneurs pitch ideas, form teams, and launch startups over a weekend. Held in hundreds of cities, it provides hands-on experiential learning and networking for aspiring founders.",
        "detailedDescription": "Techstars Startup Weekend is an intense 54-hour event where aspiring entrepreneurs can experience the highs, lows, fun, and pressure that make up life at a startup. Participants pitch ideas, form teams, build a minimum viable product (MVP), and present to a panel of judges, all in one weekend.",
        "url": "https://www.techstars.com/communities/startup-weekend",
        "tags": ["Paid", "Students", "Entrepreneurs", "Innovation"],
        "difficulty": "intermediate",
        "type": "service",
        "isFree": false,
        "rating": 4.6,
        "reviewCount": 13000,
        "featured": false,
        "dateAdded": "2024-03-15",
        "features": [
          "54-hour 'idea-to-MVP' format",
          "Hands-on experiential learning",
          "Mentorship from local entrepreneurs",
          "Networking opportunities",
          "Globally recognized program",
          "Focus on action and building"
        ],
        "pricing": {
          "paid": ["A ticket fee is required to cover food, venue, and resources (varies by city)."]
        },
        "requirements": ["Purchase a ticket", "An idea (optional)", "Willingness to collaborate and work intensively"],
        "alternatives": ["Lean Startup Machine", "3 Day Startup", "AngelHack", "Founder Institute"]
      },
      {
        "id": "hackster",
        "name": "Hackster.io",
        "description": "Hackster.io is a community dedicated to learning hardware and electronics. It hosts projects, tutorials, and contests for topics like Arduino, Raspberry Pi, IoT, and robotics. Makers and innovators share their hardware projects and learn from others globally.",
        "detailedDescription": "Hackster.io, an Avnet community, is the world's largest developer community for learning and building hardware. It's a place where makers, engineers, and hobbyists can share their projects, browse tutorials, and participate in design contests sponsored by leading hardware companies.",
        "url": "https://www.hackster.io/",
        "tags": ["Free", "Students", "Makers", "Engineers", "Hardware"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": true,
        "rating": 4.7,
        "reviewCount": 9200,
        "featured": false,
        "dateAdded": "2024-03-20",
        "features": [
          "Hardware-focused projects and tutorials",
          "Sponsored design contests with hardware prizes",
          "Covers IoT, AI, robotics, and more",
          "Large community of makers",
          "Integration with hardware brands like Arduino and Raspberry Pi"
        ],
        "pricing": {
          "free": "Free to join, share projects, and enter contests."
        },
        "requirements": ["An interest in hardware/electronics", "Account creation"],
        "alternatives": ["Instructables", "Make: Community", "Adafruit Learning System", "SparkFun"]
      },
      {
        "id": "techcrunch_disrupt",
        "name": "TechCrunch Disrupt",
        "description": "TechCrunch Disrupt is a major technology conference series featuring startup battles, hackathons, and panel discussions. It brings together entrepreneurs, investors, and developers, and includes a Startup Battlefield competition for new startups.",
        "detailedDescription": "TechCrunch Disrupt is one of the most iconic tech conferences in the world, known for debuting revolutionary startups and hosting industry-defining conversations. Its centerpiece is the Startup Battlefield competition, where early-stage startups compete for a large cash prize and massive media attention.",
        "url": "https://techcrunch.com/events/",
        "tags": ["Paid", "Entrepreneurs", "Developers", "Investors"],
        "difficulty": "advanced",
        "type": "service",
        "isFree": false,
        "rating": 4.5,
        "reviewCount": 6500,
        "featured": false,
        "dateAdded": "2024-03-25",
        "features": [
          "Startup Battlefield competition",
          "High-profile speakers and panelists",
          "Networking with investors and media",
          "Industry trend discussions",
          "Exhibition hall for startups",
          "Hackathon component"
        ],
        "pricing": {
          "paid": ["Tickets are required for attendance, with various price tiers."]
        },
        "requirements": ["Purchase a ticket for attendance", "Application for Startup Battlefield"],
        "alternatives": ["Web Summit", "Collision", "Slush", "SXSW"]
      },
      {
        "id": "web_summit",
        "name": "Web Summit",
        "description": "Web Summit is one of the world's largest technology conferences held annually in Europe. It features keynote speeches, startup pitch contests, and networking for founders and tech leaders, drawing tens of thousands of attendees worldwide.",
        "detailedDescription": "Described as 'the world's premier tech conference,' Web Summit brings together founders, CEOs of tech companies, fast-growing startups, policymakers, and heads of state. The event is known for its massive scale, diverse content tracks, and a powerful networking app that facilitates connections among its tens of thousands of attendees.",
        "url": "https://websummit.com/",
        "tags": ["Paid", "Entrepreneurs", "Technologists", "Investors"],
        "difficulty": "advanced",
        "type": "service",
        "isFree": false,
        "rating": 4.6,
        "reviewCount": 14000,
        "featured": false,
        "dateAdded": "2024-04-01",
        "features": [
          "Massive scale with 70,000+ attendees",
          "Multiple stages and diverse content tracks",
          "PITCH competition for startups",
          "Advanced networking app",
          "Major media presence",
          "Globally renowned speakers"
        ],
        "pricing": {
          "paid": ["Tickets are required for attendance, with early-bird and special program pricing available."]
        },
        "requirements": ["Purchase a ticket for attendance."],
        "alternatives": ["TechCrunch Disrupt", "Collision", "Slush", "CES"]
      },
      {
        "id": "hackmit",
        "name": "HackMIT",
        "description": "HackMIT is a student-run hackathon at MIT, and one of the largest collegiate hackathons in the U.S. It gathers hundreds of students for a 24-hour coding event to create innovative tech projects, network, and learn from invited speakers.",
        "detailedDescription": "HackMIT is one of the premier collegiate hackathons, organized annually by students at the Massachusetts Institute of Technology. It attracts thousands of applications for a spot to build innovative projects, attend technical workshops, and network with top tech companies and fellow student hackers.",
        "url": "https://hackmit.org/",
        "tags": ["Free", "Students", "Developers", "Hackathon"],
        "difficulty": "intermediate",
        "type": "service",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 3500,
        "featured": false,
        "dateAdded": "2024-04-05",
        "features": [
          "Prestigious university-hosted hackathon",
          "Student-run and organized",
          "Large scale with hundreds of participants",
          "Technical workshops and talks",
          "Networking with top-tier sponsors",
          "Focus on innovative and technical projects"
        ],
        "pricing": {
          "free": "Free for all accepted student participants, often including travel reimbursements."
        },
        "requirements": ["Must be a current student", "Application and acceptance required"],
        "alternatives": ["TreeHacks (Stanford)", "PennApps (UPenn)", "Cal Hacks (UC Berkeley)", "MHacks (Michigan)"]
      },
      {
        "id": "mlh_fellowship",
        "name": "MLH Fellowship",
        "description": "The MLH Fellowship is a 12-week program by Major League Hacking. It connects students with real-world software projects and mentors. Fellows spend the summer building projects that drive open-source software they can showcase, advancing their skills in a collaborative environment.",
        "detailedDescription": "The MLH Fellowship is a remote, 12-week internship alternative where students contribute to real-world software projects under the guidance of mentors. It offers various tracks, including Open Source, Software Engineering, and Production Engineering, providing a structured educational experience alongside practical, portfolio-building work.",
        "url": "https://fellowship.mlh.io/",
        "tags": ["Stipend", "Students", "Developers", "OpenSource"],
        "difficulty": "intermediate",
        "type": "service",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 3900,
        "featured": false,
        "dateAdded": "2024-04-10",
        "features": [
          "Remote 12-week program",
          "Educational stipend provided",
          "Contribute to real open-source projects",
          "Live instruction and mentorship",
          "Hands-on, portfolio-worthy experience",
          "Collaborative pod-based learning"
        ],
        "pricing": {
          "free": "Free to participate, with an educational stipend provided."
        },
        "requirements": ["Student or recent graduate", "Relevant technical skills", "Application and interview process"],
        "alternatives": ["Google Summer of Code", "Outreachy", "LFX Mentorship", "Major company internships"]
      }
    ,
    {
        "id": "lablabai",
        "name": "Lablab.ai",
        "description": "The premier community for AI-specific hackathons with 100k+ builders.",
        "detailedDescription": "Lablab.ai hosts weekly hackathons focused on Generative AI. They partner with companies like Cohere, Google, and Mistral to offer mentorship and large prize pools for AI-powered solutions.",
        "url": "https://lablab.ai",
        "tags": ["Hackathons", "AI", "Community", "Competitions"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.7,
        "reviewCount": 5400,
        "featured": true,
        "features": [
          "Weekly AI hackathons",
          "Team matching tools",
          "Exclusive API access",
          "Global community Discord"
        ],
        "pricing": { "free": "Free to enter all hackathons" },
        "requirements": ["Basic coding or prompt engineering skills"],
        "alternatives": ["Devpost", "DoraHacks"]
      },
      {
        "id": "peerlist",
        "name": "Peerlist Project Spotlight",
        "description": "A professional network for designers and developers to launch and discover side projects.",
        "detailedDescription": "Peerlist has become the go-to platform for 'Building in Public'. Their 'Spotlight' feature is a weekly competition where the community votes for the best project, similar to Product Hunt but for individual developers.",
        "url": "https://peerlist.io",
        "tags": ["Launch", "Community", "Portfolio", "Trending"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 12000,
        "featured": false,
        "features": [
          "Verified Work Profiles",
          "Weekly project competitions",
          "Custom job boards",
          "Rich markdown portfolios"
        ],
        "pricing": { "free": "100% Free" },
        "requirements": ["Portfolio or project to share"],
        "alternatives": ["Product Hunt", "Show HN", "Indie Hackers"]
      }
  ]
  };
