import { Category } from '../resources';

export const openSourceVolunteer: Category = {
    "id": "openSourceVolunteer",
    "title": "Open Source & Volunteer Projects",
    "description": "Open source projects and volunteer opportunities to contribute to meaningful causes",
    "icon": "🤝",
    "gradient": "from-green-500 to-blue-600",
    "resources": [
      {
        "id": "googleSummerOfCode",
        "name": "Google Summer of Code",
        "description": "Google Summer of Code is a global online program that brings new contributors (students) into open-source software development by funding a summer coding project under mentor guidance.",
        "detailedDescription": "Google Summer of Code is a global program focused on introducing new contributors to open source software development. Participants work with an open source organization on a 10-12 week programming project during their break from school, receiving a stipend upon successful completion.",
        "url": "https://summerofcode.withgoogle.com",
        "tags": ["Paid", "Students", "OpenSource", "Mentorship", "Global"],
        "difficulty": "intermediate",
        "type": "service",
        "isFree": false,
        "rating": 4.9,
        "reviewCount": 8920,
        "featured": true,
        "dateAdded": "2024-01-15",
        "features": [
          "Paid stipend for participation",
          "Direct mentorship from open source veterans",
          "Real-world project experience",
          "Global, remote participation",
          "Career development and networking",
          "Certificate of completion"
        ],
        "pricing": {
          "paid": ["Participants receive a stipend upon successful completion."]
        },
        "requirements": ["18+ years old", "Eligibility for the program", "Strong project proposal", "Acceptance by a mentoring organization"],
        "alternatives": ["Outreachy", "MLH Fellowship", "Linux Foundation Mentorship Program", "Season of Docs"]
      },
      {
        "id": "outreachy",
        "name": "Outreachy",
        "description": "Outreachy provides paid, remote open-source internships to people from underrepresented groups in tech, fostering diversity by working on programming, UX, documentation or design projects.",
        "detailedDescription": "Outreachy provides paid, remote internships in open source and open science to people subject to systemic bias and underrepresentation in the tech industry. Interns work with experienced mentors from a wide range of organizations like Mozilla, GNOME, and the Linux Kernel.",
        "url": "https://www.outreachy.org",
        "tags": ["Paid", "OpenSource", "Diversity", "Internship", "Mentorship"],
        "difficulty": "intermediate",
        "type": "service",
        "isFree": false,
        "rating": 4.8,
        "reviewCount": 3450,
        "featured": true,
        "dateAdded": "2024-01-20",
        "features": [
          "Paid remote internships ($7,000 stipend)",
          "Focus on diversity and inclusion",
          "Dedicated mentorship program",
          "Projects in coding, UX, docs, and more",
          "Twice-yearly cohorts"
        ],
        "pricing": {
          "paid": ["Interns receive a $7,000 USD stipend for the 3-month internship."]
        },
        "requirements": ["Eligibility based on underrepresentation criteria", "Initial contribution period", "Application process"],
        "alternatives": ["Google Summer of Code", "MLH Fellowship", "Rails Girls Summer of Code"]
      },
      {
        "id": "firstTimersOnly",
        "name": "First Timers Only",
        "description": "First Timers Only is a community initiative and guide to help newcomers make a welcoming first contribution to open source, by highlighting easy starter issues and tutorials.",
        "detailedDescription": "First Timers Only is an initiative created by Kent C. Dodds to help newcomers make their first contribution to open source. It features projects that have issues specifically labeled for beginners and provides guidance and resources on how to get started without feeling overwhelmed.",
        "url": "https://www.firsttimersonly.com",
        "tags": ["Free", "OpenSource", "Beginners", "Community", "Tutorial"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.6,
        "reviewCount": 5670,
        "featured": true,
        "dateAdded": "2024-01-25",
        "features": [
          "Beginner-friendly project list",
          "Detailed contribution guides",
          "Promotes a welcoming culture",
          "Reduces barrier to entry for OSS",
          "Highlights 'first-timers-only' labeled issues"
        ],
        "pricing": {
          "free": "Completely free resource."
        },
        "requirements": ["Basic Git knowledge", "GitHub account", "Programming basics"],
        "alternatives": ["Good First Issue", "Up For Grabs", "CodeTriage", "First Contributions"]
      },
      {
        "id": "goodFirstIssues",
        "name": "Good First Issue",
        "description": "Good First Issue curates easy-to-solve issues for new open source contributors, making it simple to find beginner-friendly projects across GitHub.",
        "detailedDescription": "Good First Issue is a platform that aggregates issues from popular open source projects that have been labeled as 'good first issue'. This label is a convention used by maintainers to signal that a task is suitable for people who have not contributed to their project before.",
        "url": "https://goodfirstissue.dev/",
        "tags": ["Free", "OpenSource", "Beginners", "GitHub", "Issues"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.5,
        "reviewCount": 3890,
        "featured": false,
        "dateAdded": "2024-02-01",
        "features": [
          "Curated beginner-friendly issues",
          "Filter by programming language and repository",
          "Direct links to GitHub issues",
          "Regularly updated list",
          "Simple, clean interface"
        ],
        "pricing": {
          "free": "Free access to all curated issues."
        },
        "requirements": ["GitHub account", "Basic programming knowledge"],
        "alternatives": ["First Timers Only", "Up For Grabs", "CodeTriage", "Contributor Ninja"]
      },
      {
        "id": "upForGrabs",
        "name": "Up For Grabs",
        "description": "Up For Grabs aggregates projects with tasks specifically marked for new contributors, making open source contribution accessible for developers at any level.",
        "detailedDescription": "Up For Grabs is a list of open source projects which have curated tasks specifically for new contributors. These are a great way to get started with a project, or to help share the load of working on established open source projects. It uses common tags like 'up-for-grabs' or 'help wanted'.",
        "url": "https://up-for-grabs.net",
        "tags": ["Free", "OpenSource", "Community", "Beginners", "Projects"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.4,
        "reviewCount": 2890,
        "featured": false,
        "dateAdded": "2024-02-05",
        "features": [
          "Large list of participating projects",
          "Tag-based search for technologies",
          "Direct links to project issue trackers",
          "Maintained by the community",
          "Helps find projects that welcome new contributors"
        ],
        "pricing": {
          "free": "Free access to all listed projects."
        },
        "requirements": ["Programming knowledge", "Git basics", "GitHub account"],
        "alternatives": ["Good First Issue", "First Timers Only", "CodeTriage", "Open Source Friday"]
      },
      {
        "id": "openSourceFriday",
        "name": "Open Source Friday",
        "description": "Open Source Friday is a movement encouraging developers and companies to contribute to open source projects every Friday, supported by GitHub.",
        "detailedDescription": "Open Source Friday is a GitHub-backed initiative that encourages developers to dedicate a portion of their Friday to contributing to open source. The website provides resources, highlights participating projects, and explains the benefits of OSS contribution for both individuals and companies.",
        "url": "https://opensource.friday.com",
        "tags": ["Free", "OpenSource", "Community", "GitHub", "Movement"],
        "difficulty": "beginner",
        "type": "community",
        "isFree": true,
        "rating": 4.5,
        "reviewCount": 1500,
        "featured": false,
        "dateAdded": "2024-02-10",
        "features": [
          "Promotes regular contribution to OSS",
          "Resources for contributors and maintainers",
          "Case studies from companies",
          "Project discovery tools",
          "Backed by GitHub"
        ],
        "pricing": {
          "free": "Completely free initiative."
        },
        "requirements": ["Time to contribute", "GitHub account"],
        "alternatives": ["Hacktoberfest", "24 Pull Requests", "Up For Grabs"]
      },
      {
        "id": "girlsWhoCode",
        "name": "Girls Who Code",
        "description": "Girls Who Code is a nonprofit closing the gender gap in technology through education programs, community building, and career support for women in tech.",
        "detailedDescription": "Girls Who Code is a nonprofit organization that aims to support and increase the number of women in computer science. They achieve this by offering learning opportunities, including after-school clubs, summer camps, and a college program, to young women to equip them with the necessary computing skills to pursue 21st-century opportunities.",
        "url": "https://girlswhocode.com",
        "tags": ["Free", "Women", "Education", "Community", "Nonprofit"],
        "difficulty": "beginner",
        "type": "service",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 7800,
        "featured": false,
        "dateAdded": "2024-02-15",
        "features": [
          "After-school clubs for 3rd-12th grade",
          "Summer Immersion Programs",
          "College and career programs",
          "Strong alumni network",
          "Curriculum for various skill levels"
        ],
        "pricing": {
          "free": "All programs are free for participants."
        },
        "requirements": ["Identify as a girl or non-binary student"],
        "alternatives": ["Black Girls Code", "TechLadies", "Women Who Code", "Kode With Klossy"]
      },
      {
        "id": "codeForAmerica",
        "name": "Code for America",
        "description": "Code for America engages volunteers to build technology solutions for government and community challenges, promoting civic technology and digital equity.",
        "detailedDescription": "Code for America is a civic tech non-profit that partners with government and community organizations to build digital tools and services that are effective, equitable, and simple to use. Their volunteer network, the 'Brigade Network', consists of local chapters of volunteers who work on civic projects in their communities.",
        "url": "https://codeforamerica.org",
        "tags": ["Free", "CivicTech", "Volunteer", "Government", "US"],
        "difficulty": "intermediate",
        "type": "service",
        "isFree": true,
        "rating": 4.7,
        "reviewCount": 2200,
        "featured": false,
        "dateAdded": "2024-02-20",
        "features": [
          "Brigade Network of local volunteer groups",
          "Impact-focused projects (e.g., social safety net)",
          "Promotes human-centered government services",
          "Fellowship programs",
          "Advocacy for policy change"
        ],
        "pricing": {
          "free": "Volunteering is free."
        },
        "requirements": ["Skills in tech, design, or policy", "Interest in civic issues"],
        "alternatives": ["Code for All", "U.S. Digital Response", "DataKind", "18F"]
      },
      {
        "id": "contributorCovenant",
        "name": "Contributor Covenant",
        "description": "Contributor Covenant provides a code of conduct for open source projects, fostering welcoming and inclusive communities for all contributors.",
        "detailedDescription": "The Contributor Covenant is a code of conduct for open source projects that explicitly defines standards for a harassment-free and inclusive environment. It has been adopted by thousands of projects, including major ones like Linux, GitLab, and Ruby on Rails, to foster a positive community.",
        "url": "https://www.contributor-covenant.org",
        "tags": ["Free", "OpenSource", "Community", "Inclusion", "Standards"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 4500,
        "featured": false,
        "dateAdded": "2024-02-25",
        "features": [
          "Standardized code of conduct",
          "Translated into multiple languages",
          "Easy to adopt for any project",
          "Promotes a safe and welcoming environment",
          "Widely adopted and recognized"
        ],
        "pricing": {
          "free": "Completely free to use and adopt."
        },
        "requirements": ["An open source project or community"],
        "alternatives": ["The Carpentries Code of Conduct", "Citizen Code of Conduct"]
      },
      {
        "id": "linuxFoundation",
        "name": "Linux Foundation",
        "description": "Linux Foundation supports the growth of Linux and collaborative development, offering training, certification, and resources for open source technologies.",
        "detailedDescription": "The Linux Foundation is a non-profit consortium dedicated to fostering the growth of Linux and collaborative software development. It hosts and supports critical open source projects like Node.js and Kubernetes, and provides training, certification, and research to advance the open source ecosystem.",
        "url": "https://www.linuxfoundation.org",
        "tags": ["Free", "Paid", "Linux", "OpenSource", "Training"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": true,
        "rating": 4.7,
        "reviewCount": 6100,
        "featured": false,
        "dateAdded": "2024-03-01",
        "features": [
          "Hosts critical open source projects",
          "Professional training and certification",
          "Mentorship programs (LFX Mentorship)",
          "Industry research and reports",
          "Organizes major tech events (e.g., KubeCon)"
        ],
        "pricing": {
          "free": "Access to projects and some resources is free.",
          "paid": ["Training courses and certification exams are paid."]
        },
        "requirements": ["Varies by program; some require payment for training."],
        "alternatives": ["Apache Software Foundation", "Eclipse Foundation", "Cloud Native Computing Foundation (CNCF)"]
      },
      {
        "id": "apacheSoftware",
        "name": "Apache Software Foundation",
        "description": "Apache Software Foundation provides organizational, legal, and financial support for over 350 open source projects, promoting community-driven development.",
        "detailedDescription": "The Apache Software Foundation (ASF) is an American non-profit corporation that supports a wide range of open-source software projects. The ASF provides a meritocratic, consensus-based development process known as 'The Apache Way' and offers organizational, legal, and financial support for its projects.",
        "url": "https://www.apache.org",
        "tags": ["Free", "OpenSource", "Community", "Software", "Foundation"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 5500,
        "featured": false,
        "dateAdded": "2024-03-05",
        "features": [
          "Supports 350+ open source projects",
          "Community-over-code philosophy ('The Apache Way')",
          "Provides legal and financial infrastructure",
          "Well-known projects like Apache HTTP Server and Kafka",
          "Merit-based contribution model"
        ],
        "pricing": {
          "free": "All software is free to use and contribute to."
        },
        "requirements": ["Technical skills relevant to a specific project"],
        "alternatives": ["Linux Foundation", "Eclipse Foundation", "Software Freedom Conservancy"]
      },
      {
        "id": "mozilla",
        "name": "Mozilla Contributors",
        "description": "Mozilla Contributors program welcomes volunteers to contribute to Firefox, Thunderbird, and other Mozilla projects through coding, testing, and community support.",
        "detailedDescription": "Mozilla, the organization behind the Firefox browser, has a vibrant open-source community. Volunteers can contribute in many ways: writing and testing code, localizing products into different languages, providing user support, and advocating for an open internet. The contribution portal guides newcomers to find suitable tasks.",
        "url": "https://www.mozilla.org/en-US/contribute/",
        "tags": ["Free", "OpenSource", "Community", "Firefox", "Volunteer"],
        "difficulty": "intermediate",
        "type": "service",
        "isFree": true,
        "rating": 4.6,
        "reviewCount": 4200,
        "featured": false,
        "dateAdded": "2024-03-10",
        "features": [
          "Contribute to major projects like Firefox",
          "Multiple contribution paths (coding, localization, support)",
          "Mentorship for newcomers",
          "Strong mission-driven community",
          "Clear guides for getting started"
        ],
        "pricing": {
          "free": "Volunteering is free."
        },
        "requirements": ["Skills relevant to the contribution area (e.g., C++, JavaScript)"],
        "alternatives": ["Chromium Project", "WebKit Project", "LibreOffice", "GNOME"]
      },
      {
        "id": "first_contributions",
        "name": "First Contributions",
        "description": "First Contributions is an open-source project that helps beginners make their first contribution to a software project. It provides a step-by-step tutorial on using Git and GitHub, guiding new developers through their first pull request to open source.",
        "detailedDescription": "First Contributions is a hands-on tutorial project hosted on GitHub. It guides absolute beginners through the process of forking a repository, creating a branch, making a small change, and submitting a pull request. By contributing to this project, users learn the mechanics of collaboration on GitHub in a safe, no-pressure environment.",
        "url": "https://github.com/firstcontributions/first-contributions",
        "tags": ["Free", "Beginners", "OpenSource", "GitHub", "Tutorial"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.9,
        "reviewCount": 11500,
        "featured": true,
        "dateAdded": "2024-03-15",
        "features": [
          "Hands-on, step-by-step tutorial",
          "Teaches the Git workflow (fork, clone, pull request)",
          "Safe environment for a first contribution",
          "Translated into dozens of languages",
          "A massive community of past contributors"
        ],
        "pricing": {
          "free": "Completely free."
        },
        "requirements": ["GitHub account", "Git installed (optional, can use GitHub Desktop)"],
        "alternatives": ["First Timers Only", "GitHub Skills (formerly Learning Lab)", "Git-it"]
      },
      {
        "id": "eclipse_mentorship",
        "name": "Eclipse Foundation Mentorship",
        "description": "The Eclipse Foundation runs an annual mentorship program where students work on open-source projects (particularly in Java and IoT). Students receive stipends and mentorship from industry professionals while contributing to real-world software under the Eclipse umbrella.",
        "detailedDescription": "The Eclipse Foundation Mentorship Program connects aspiring developers with experienced mentors in the Eclipse open source community. Participants gain valuable experience by working on real-world projects, receiving stipends for their contributions. It often runs in parallel with programs like GSoC.",
        "url": "https://www.eclipse.org/community/mentoring/",
        "tags": ["Paid", "Students", "OpenSource", "Mentorship", "Java"],
        "difficulty": "intermediate",
        "type": "service",
        "isFree": false,
        "rating": 4.5,
        "reviewCount": 1200,
        "featured": false,
        "dateAdded": "2024-03-20",
        "features": [
          "Paid stipend for contributions",
          "Focus on Eclipse ecosystem projects (Java, IoT)",
          "Direct mentorship from project committers",
          "Part of larger initiatives like GSoC",
          "Real-world software development experience"
        ],
        "pricing": {
          "paid": ["Participants receive a stipend for their work."]
        },
        "requirements": ["Student status", "Relevant programming skills", "Application process"],
        "alternatives": ["Google Summer of Code", "Linux Foundation Mentorship", "Red Hat Mentorship"]
      },
      {
        "id": "numfocus_fellowships",
        "name": "NumFOCUS Programs",
        "description": "NumFOCUS is a nonprofit supporting open-source scientific computing projects. It provides grants and programs to contributors of projects like NumPy, SciPy, and Jupyter.",
        "detailedDescription": "NumFOCUS is a 501(c)(3) nonprofit that supports and promotes open-source, reproducible, and accessible scientific computing. It acts as a fiscal sponsor for major projects (NumPy, Pandas, Jupyter) and runs programs like Small Development Grants to fund work on these critical tools.",
        "url": "https://numfocus.org/programs",
        "tags": ["Grant", "Developers", "Researchers", "DataScience", "OpenSource"],
        "difficulty": "advanced",
        "type": "service",
        "isFree": false,
        "rating": 4.7,
        "reviewCount": 950,
        "featured": false,
        "dateAdded": "2024-03-25",
        "features": [
          "Small Development Grants for project work",
          "Fiscal sponsorship for key data science projects",
          "Diversity and inclusion initiatives",
          "Supports the PyData conference series",
          "Fosters a sustainable open-source ecosystem"
        ],
        "pricing": {
          "free": "Participation in projects is free; grants provide funding."
        },
        "requirements": ["Experience contributing to scientific computing projects", "Grant proposal for funding"],
        "alternatives": ["Chan Zuckerberg Initiative (EOSS)", "Sloan Foundation", "Google Summer of Code (with NumFOCUS projects)"]
      },
      {
        "id": "pycon_sprints",
        "name": "PyCon Sprints",
        "description": "PyCon (Python Conference) hosts post-conference Code Sprints where attendees collaborate on open-source Python projects. These sprints bring together Python enthusiasts to work with core developers and community members, contributing code and learning from each other.",
        "detailedDescription": "Development Sprints are a key part of many Python conferences, most notably the main PyCon US. They are multi-day, intensive coding sessions where developers of all levels can collaborate in person with the maintainers and community of popular open source Python projects.",
        "url": "https://us.pycon.org/2024/sprints/",
        "tags": ["Free", "Developers", "OpenSource", "Python", "Events"],
        "difficulty": "intermediate",
        "type": "service",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 1800,
        "featured": false,
        "dateAdded": "2024-04-01",
        "features": [
          "In-person collaboration with project maintainers",
          "Contribute to major Python projects",
          "Intensive, focused coding environment",
          "Great for networking and learning",
          "Typically free to attend for conference-goers"
        ],
        "pricing": {
          "free": "Sprints are usually free to attend, but you may need a conference ticket."
        },
        "requirements": ["Python programming knowledge", "Conference attendance"],
        "alternatives": ["DjangoCon Sprints", "SciPy Sprints", "EuroPython Sprints"]
      },
      {
        "id": "rails_girls_soc",
        "name": "Rails Girls Summer of Code",
        "description": "Rails Girls Summer of Code is a global fellowship program that funds female and non-binary contributors to spend the summer building open source projects (with a stipend).",
        "detailedDescription": "Rails Girls Summer of Code was a global fellowship program aimed at increasing diversity in open source. It provided stipends for women and non-binary individuals to work on open-source projects for three months. Note: The program has been on hiatus since 2021, but its legacy and resources are still valuable.",
        "url": "https://railsgirlssummerofcode.org/",
        "tags": ["Paid", "Women", "OpenSource", "Mentorship", "Hiatus"],
        "difficulty": "intermediate",
        "type": "service",
        "isFree": false,
        "rating": 4.7,
        "reviewCount": 2100,
        "featured": false,
        "dateAdded": "2024-04-05",
        "features": [
          "Paid stipend for a 3-month fellowship",
          "Focus on women and non-binary coders",
          "Worked in teams of two",
          "Dedicated mentors and coaches",
          "Contributed to various open source projects"
        ],
        "pricing": {
          "paid": ["Participants received a stipend for their work."]
        },
        "requirements": ["Identified as a woman or non-binary", "Programming experience"],
        "alternatives": ["Outreachy", "Google Summer of Code", "She Code Africa Contributhon"]
      },
      {
        "id": "un_volunteers",
        "name": "UN Volunteers (UNV)",
        "description": "The United Nations Volunteers program offers online and onsite volunteering opportunities for global development. Skilled tech volunteers can join UN and partner projects to contribute their expertise to humanitarian missions.",
        "detailedDescription": "The United Nations Volunteers (UNV) program contributes to peace and development through volunteerism worldwide. The Online Volunteering service connects organizations working for sustainable human development with volunteers over the internet. Tech professionals can find opportunities to apply their skills to meaningful global causes.",
        "url": "https://www.unv.org/",
        "tags": ["Free", "Volunteer", "Developers", "NGOs", "Humanitarian"],
        "difficulty": "intermediate",
        "type": "service",
        "isFree": true,
        "rating": 4.7,
        "reviewCount": 6500,
        "featured": false,
        "dateAdded": "2024-04-10",
        "features": [
          "Online and on-site volunteering",
          "Contribute to UN agencies and NGOs",
          "Opportunities in tech, design, and more",
          "Work on projects related to SDGs",
          "Global impact"
        ],
        "pricing": {
          "free": "Volunteering is unpaid (some on-site roles have allowances)."
        },
        "requirements": ["Professional skills in a relevant area", "Commitment to the project timeline"],
        "alternatives": ["Code for America", "DataKind", "Catchafire", "Translators without Borders"]
      },
      {
        "id": "code_for_all",
        "name": "Code for All",
        "description": "Code for All is a global network of civic technology organizations. Members share knowledge and collaborate on open-source civic projects to empower communities worldwide.",
        "detailedDescription": "Code for All is a global network of 'Code for' organizations. These are civic tech groups that use technology, design, and data to improve their communities and governments. Code for All facilitates knowledge sharing, collaboration, and support among its member organizations across the globe.",
        "url": "https://codeforall.org/",
        "tags": ["Free", "Volunteer", "CivicTech", "Community", "Global"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": true,
        "rating": 4.6,
        "reviewCount": 1100,
        "featured": false,
        "dateAdded": "2024-04-15",
        "features": [
          "Global network of civic tech organizations",
          "Knowledge sharing and best practices",
          "Supports local volunteer brigades",
          "Promotes open and transparent government",
          "Collaborative open-source projects"
        ],
        "pricing": {
          "free": "Free to participate through local member organizations."
        },
        "requirements": ["Find and join a local member organization"],
        "alternatives": ["Code for America", "mySociety", "DemocracyLab", "The GovLab"]
      },
      {
        "id": "hot_osm",
        "name": "Humanitarian OpenStreetMap Team (HOT)",
        "description": "The Humanitarian OpenStreetMap Team is a volunteer organization that uses OpenStreetMap data for disaster response and humanitarian projects. Volunteers map roads, buildings, and resources in crisis areas to support NGOs and improve emergency response.",
        "detailedDescription": "The Humanitarian OpenStreetMap Team (HOT) is an international team dedicated to humanitarian action and community development through open mapping. In a crisis, HOT rallies a network of volunteers to create, online, the map data that enables responders to reach those in need.",
        "url": "https://www.hotosm.org/",
        "tags": ["Free", "Volunteer", "GIS", "Humanitarian", "Mapping"],
        "difficulty": "beginner",
        "type": "service",
        "isFree": true,
        "rating": 4.9,
        "reviewCount": 8200,
        "featured": true,
        "dateAdded": "2024-04-20",
        "features": [
          "Remote volunteering (mapping)",
          "Direct impact on humanitarian response",
          "Easy-to-learn mapping tools",
          "Global community of mappers",
          "Tasking Manager to coordinate efforts"
        ],
        "pricing": {
          "free": "Completely free to volunteer."
        },
        "requirements": ["Computer with internet connection", "Willingness to learn simple mapping tools"],
        "alternatives": ["Zooniverse", "Missing Maps Project", "Giscorps", "MapAction"]
      }
    ]
  };
