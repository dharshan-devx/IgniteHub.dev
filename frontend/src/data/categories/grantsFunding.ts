import { Category } from '../resources';
export const grantsFunding: Category = {
    "id": "grantsFunding",
    "title": "Grants & Funding",
    "description": "Funding opportunities, grants, and accelerators for startups and projects",
    "icon": "💰",
    "gradient": "from-emerald-500 to-teal-600",
    "resources": [
      {
        "id": "unescoGlobalYouthGrant",
        "name": "UNESCO Global Youth Grant Scheme",
        "description": "The UNESCO Global Youth Grant Scheme provides funding and capacity-building for youth-led research projects and grassroots initiatives addressing global challenges.",
        "detailedDescription": "UNESCO's Global Youth Grant Scheme empowers young people aged 18-35 to lead research and innovation projects that address pressing global challenges. The program provides both financial support and capacity-building opportunities to help youth make meaningful contributions to sustainable development.",
        "url": "https://www.unesco.org/",
        "tags": ["Free", "Youth", "Grants", "Research"],
        "difficulty": "intermediate",
        "type": "service",
        "isFree": true,
        "rating": 4.3,
        "reviewCount": 890,
        "featured": false,
        "dateAdded": "2024-01-15",
        "features": [
          "Funding for youth-led projects",
          "Capacity-building workshops",
          "Mentorship opportunities",
          "Global networking",
          "Research support",
          "Impact measurement tools"
        ],
        "pricing": {
          "free": "Grant funding available up to $25,000"
        },
        "requirements": ["Age 18-35", "Project proposal", "UNESCO member state citizenship"],
        "alternatives": ["UN Youth Climate Summit", "Global Youth Climate Action Fund", "Erasmus+ Youth"]
      },
      {
        "id": "globalInnovationFund",
        "name": "Global Innovation Fund (GIF)",
        "description": "The Global Innovation Fund is a nonprofit investment fund that provides grants or investments (up to ~$1M+) in social-impact innovations benefiting people in developing countries.",
        "detailedDescription": "The Global Innovation Fund backs innovations that improve the lives of the world's poorest people. They provide patient capital and support to help scale breakthrough innovations that can reach millions of people in developing countries.",
        "url": "https://globalinnovation.fund",
        "tags": ["Grant", "SocialImpact", "DevelopingCountries", "Entrepreneurs"],
        "difficulty": "advanced",
        "type": "service",
        "isFree": true,
        "rating": 4.6,
        "reviewCount": 1240,
        "featured": true,
        "dateAdded": "2024-01-20",
        "features": [
          "Stage-appropriate funding",
          "Technical assistance",
          "Impact measurement",
          "Global network access",
          "Scaling support",
          "Due diligence support"
        ],
        "pricing": {
          "free": "Investment funding from $230K to $15M+"
        },
        "requirements": ["Social impact focus", "Developing country benefit", "Scalable innovation"],
        "alternatives": ["Acumen Fund", "Grameen Foundation", "Ashoka Changemakers", "Skoll Foundation"]
      },
      {
        "id": "helloTomorrowChallenge",
        "name": "Hello Tomorrow Global Challenge",
        "description": "Hello Tomorrow runs an international startup competition (Deep Tech Global Challenge) awarding equity-free prize funds (e.g. €100K grand prize) to early-stage deep-tech entrepreneurs worldwide.",
        "detailedDescription": "Hello Tomorrow Global Challenge is one of the world's largest deep tech startup competitions, bringing together entrepreneurs, investors, and corporations to accelerate breakthrough technologies that can positively impact society.",
        "url": "https://hello-tomorrow.org/global-challenge/",
        "tags": ["Free", "Founders", "DeepTech", "Competition"],
        "difficulty": "advanced",
        "type": "service",
        "isFree": true,
        "rating": 4.7,
        "reviewCount": 2340,
        "featured": true,
        "dateAdded": "2024-01-25",
        "features": [
          "Equity-free prizes",
          "Global exposure",
          "Investor connections",
          "Mentorship program",
          "Corporate partnerships",
          "Summit participation"
        ],
        "pricing": {
          "free": "Competition entry and prizes up to €100K"
        },
        "requirements": ["Deep tech startup", "Early stage", "Breakthrough technology"],
        "alternatives": ["XPRIZE", "Techstars", "MIT Solve", "MIT $100K"]
      },
      {
        "id": "kickstarter",
        "name": "Kickstarter",
        "description": "Kickstarter is a leading global crowdfunding platform for creative and tech projects; over 23M backers have pledged $8.2B to fund 265K+ projects since 2009.",
        "detailedDescription": "Kickstarter is a funding platform for creative projects where creators set a funding goal and deadline. If the project reaches its funding goal, all backers' credit cards are charged when time expires. If the project falls short, no one is charged.",
        "url": "https://www.kickstarter.com",
        "tags": ["Free", "Founders", "Crowdfunding", "Creators"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.4,
        "reviewCount": 15670,
        "featured": true,
        "dateAdded": "2024-02-01",
        "features": [
          "All-or-nothing funding model",
          "Global reach",
          "Project discovery tools",
          "Backer rewards system",
          "Marketing and creator resources",
          "Community engagement features"
        ],
        "pricing": {
          "free": "Free to launch campaigns",
          "paid": ["5% platform fee + payment processing on successful campaigns"]
        },
        "requirements": ["Creative project", "Compelling campaign page", "Reward tiers for backers"],
        "alternatives": ["Indiegogo", "GoFundMe", "Kiva", "StartEngine"]
      },
      {
        "id": "indiegogo",
        "name": "Indiegogo",
        "description": "Indiegogo is a worldwide crowdfunding marketplace where entrepreneurs launch campaigns to raise funds for innovative products, design, and tech projects.",
        "detailedDescription": "Indiegogo offers both fixed and flexible funding options, allowing entrepreneurs to keep funds raised even if they don't reach their goal. It's known for supporting innovative technology products and creative projects from around the world.",
        "url": "https://www.indiegogo.com",
        "tags": ["Free", "Founders", "Crowdfunding"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.2,
        "reviewCount": 8930,
        "featured": true,
        "dateAdded": "2024-02-05",
        "features": [
          "Flexible and fixed funding options",
          "Global marketplace",
          "InDemand for ongoing sales after campaign",
          "Manufacturing and logistics support",
          "Marketing tools and analytics",
          "Partnerships for entrepreneurs"
        ],
        "pricing": {
          "free": "Free to launch campaigns",
          "paid": ["5% platform fee + payment processing fees"]
        },
        "requirements": ["Product or project concept", "Campaign materials", "Funding goal"],
        "alternatives": ["Kickstarter", "GoFundMe", "Crowdfunder", "StartEngine"]
      },
      {
        "id": "xprize",
        "name": "XPRIZE Foundation",
        "description": "XPRIZE is a nonprofit running global incentive competitions that award large cash prizes to teams (innovators/entrepreneurs) solving grand challenges in energy, environment, health, and more.",
        "detailedDescription": "The XPRIZE Foundation designs and operates large-scale, high-profile public competitions to incentivize the development of new technology that can solve humanity's grand challenges. These prizes spur investment in R&D and attract innovators from all over the world.",
        "url": "https://www.xprize.org",
        "tags": ["Free", "Innovators", "Competitions", "Prize", "DeepTech"],
        "difficulty": "advanced",
        "type": "service",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 1800,
        "featured": true,
        "dateAdded": "2024-02-10",
        "features": [
          "Large, multi-million dollar cash prizes",
          "Equity-free funding",
          "Global media exposure",
          "Attracts top talent and investment",
          "Fosters breakthrough innovation",
          "Clear, audacious goals"
        ],
        "pricing": {
          "free": "Prizes are awarded to winners; application fees may apply to competitions."
        },
        "requirements": ["Team of innovators", "Technological solution", "Ability to meet specific prize criteria"],
        "alternatives": ["Hello Tomorrow", "MIT Solve", "Grand Challenges Canada", "Breakthrough Prize"]
      },
      {
        "id": "ycombinator",
        "name": "Y Combinator",
        "description": "Y Combinator is the world's most successful startup accelerator, providing funding, mentorship, and network access to early-stage startups twice yearly.",
        "detailedDescription": "Y Combinator (YC) is a premier startup accelerator known for its intensive 3-month program that helps early-stage companies rapidly grow and prepare for investment. YC provides a standard investment deal, holds weekly talks with tech luminaries, and culminates in a highly anticipated Demo Day.",
        "url": "https://www.ycombinator.com",
        "tags": ["Accelerator", "Startups", "Entrepreneurs", "VentureCapital"],
        "difficulty": "advanced",
        "type": "service",
        "isFree": false,
        "rating": 4.9,
        "reviewCount": 5500,
        "featured": true,
        "dateAdded": "2024-02-15",
        "features": [
          "Standard deal of $500k",
          "Intensive 3-month program",
          "Mentorship from YC partners",
          "Vast and powerful alumni network",
          "Investor access via Demo Day",
          "Community and resources"
        ],
        "pricing": {
          "paid": ["Standard deal: $125k for 7% equity + a $375k uncapped SAFE"]
        },
        "requirements": ["Early-stage startup", "Strong, technical founding team", "Large potential market"],
        "alternatives": ["Techstars", "500 Global", "Seedcamp", "AngelPad"]
      },
      {
        "id": "techstars",
        "name": "Techstars",
        "description": "Techstars is a global startup accelerator providing funding, mentorship, and a worldwide network to help entrepreneurs succeed across 150+ countries.",
        "detailedDescription": "Techstars operates numerous mentorship-driven accelerator programs around the world, often focused on specific cities or industries. They provide seed funding, office space, and access to a vast network of mentors, investors, and corporate partners to help startups succeed.",
        "url": "https://www.techstars.com",
        "tags": ["Accelerator", "Startups", "Entrepreneurs", "VentureCapital"],
        "difficulty": "advanced",
        "type": "service",
        "isFree": false,
        "rating": 4.7,
        "reviewCount": 4200,
        "featured": true,
        "dateAdded": "2024-02-20",
        "features": [
          "Up to $120K in funding",
          "Mentorship-driven 3-month program",
          "Access to a global network of mentors",
          "Demo Day to showcase to investors",
          "Lifelong alumni support",
          "Industry-specific programs"
        ],
        "pricing": {
          "paid": ["$20K stipend and a $100K convertible note in exchange for 6-9% equity"]
        },
        "requirements": ["Strong founding team", "Viable business idea or MVP", "Coachability"],
        "alternatives": ["Y Combinator", "500 Global", "Plug and Play", "MassChallenge"]
      },
      {
        "id": "seedcamp",
        "name": "Seedcamp",
        "description": "Seedcamp is Europe's seed fund, investing in early-stage tech startups and providing mentorship, network access, and follow-on funding support.",
        "detailedDescription": "Seedcamp is a European seed-stage venture capital fund that acts as a first-cheque investor for ambitious, globally-minded tech startups. Beyond funding, they provide a lifelong platform of support, learning, and access to a powerful network of experts and investors.",
        "url": "https://seedcamp.com",
        "tags": ["Europe", "Startups", "VentureCapital", "Founders"],
        "difficulty": "advanced",
        "type": "service",
        "isFree": false,
        "rating": 4.6,
        "reviewCount": 1500,
        "featured": false,
        "dateAdded": "2024-02-25",
        "features": [
          "Pre-seed and seed funding",
          "Lifelong support platform",
          "Access to expert network",
          "Connections to later-stage VCs",
          "Focus on European ecosystem",
          "Founder-focused community"
        ],
        "pricing": {
          "paid": ["Equity investment, typically £300K to £500K"]
        },
        "requirements": ["Based in Europe", "Early-stage tech startup", "Ambitious founding team"],
        "alternatives": ["Entrepreneur First", "Kima Ventures", "LocalGlobe", "Y Combinator"]
      },
      {
        "id": "grantsGov",
        "name": "Grants.gov",
        "description": "Grants.gov is the official U.S. government portal providing access to over 1,000 federal grant programs across all government agencies.",
        "detailedDescription": "Grants.gov is the centralized online portal where U.S. federal agencies post discretionary funding opportunities and where applicants can find and apply for them. It is the primary source for nonprofits, educational institutions, and local governments seeking federal grants.",
        "url": "https://www.grants.gov",
        "tags": ["Free", "Government", "Grants", "US", "Nonprofits"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": true,
        "rating": 4.5,
        "reviewCount": 3500,
        "featured": true,
        "dateAdded": "2024-03-01",
        "features": [
          "Centralized search for all federal grants",
          "Standardized application process",
          "Email notifications for new opportunities",
          "Learning center with application tips",
          "Workspace for collaborative applications",
          "No cost to search or apply"
        ],
        "pricing": {
          "free": "Free to search and apply for all listed federal grants."
        },
        "requirements": ["Registration with SAM.gov", "Eligibility varies by grant (e.g., nonprofit, university)"],
        "alternatives": ["Foundation Directory Online", "GrantStation", "Candid", "Instrumentl"]
      },
      {
        "id": "sbir",
        "name": "SBIR Program",
        "description": "The Small Business Innovation Research (SBIR) program provides R&D funding to small businesses to develop innovative technologies with commercial potential.",
        "detailedDescription": "The SBIR and STTR programs are highly competitive U.S. government programs that encourage domestic small businesses to engage in Federal Research/Research and Development (R/R&D) with the potential for commercialization. Funding is non-dilutive, meaning the government does not take an equity stake.",
        "url": "https://www.sbir.gov",
        "tags": ["Free", "SmallBusiness", "Research", "Innovation", "US"],
        "difficulty": "advanced",
        "type": "service",
        "isFree": true,
        "rating": 4.7,
        "reviewCount": 2100,
        "featured": false,
        "dateAdded": "2024-03-05",
        "features": [
          "Non-dilutive R&D funding",
          "Phased funding (Feasibility, R&D, Commercialization)",
          "Validation from federal agencies",
          "Supports high-risk, innovative technology",
          "Intellectual property rights retained by business"
        ],
        "pricing": {
          "free": "Grant funding. Phase I: up to $250k. Phase II: up to $1.5M."
        },
        "requirements": ["U.S.-based for-profit small business", "Innovative R&D project", "Meets specific agency needs"],
        "alternatives": ["STTR Program", "Federal R&D contracts", "State innovation grants", "ARPA-E"]
      },
      {
        "id": "horizonEurope",
        "name": "Horizon Europe",
        "description": "Horizon Europe is the EU's research and innovation program (2021-2027) with €95.5B budget supporting breakthroughs, discoveries and world-firsts.",
        "detailedDescription": "Horizon Europe is the European Union's key funding program for research and innovation. It tackles climate change, helps to achieve the UN’s Sustainable Development Goals and boosts the EU’s competitiveness and growth. It supports the entire research and innovation cycle.",
        "url": "https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe_en",
        "tags": ["Free", "EU", "Research", "Innovation", "Scientists"],
        "difficulty": "advanced",
        "type": "service",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 2900,
        "featured": false,
        "dateAdded": "2024-03-10",
        "features": [
          "Massive €95.5 billion budget",
          "Supports international collaboration",
          "Covers fundamental science to market-ready innovation",
          "Focus on societal challenges (health, climate, energy)",
          "Prestigious grant opportunities (e.g., ERC)"
        ],
        "pricing": {
          "free": "Grant funding that is non-dilutive."
        },
        "requirements": ["Typically requires a consortium of partners from EU/associated countries", "Excellent project proposal"],
        "alternatives": ["National research funds (e.g., DFG, UKRI)", "Eureka Network", "Wellcome Trust"]
      },
      {
        "id": "ashoka",
        "name": "Ashoka U",
        "description": "Ashoka U supports social entrepreneurs and changemakers through fellowships, funding, and programs that promote social innovation globally.",
        "detailedDescription": "Ashoka U collaborates with colleges and universities to embed social innovation as a core value in higher education. Through its 'Changemaker Campus' designation and network, it provides resources, best practices, and a community for institutions aiming to equip students to be changemakers.",
        "url": "https://www.ashoka.org/en-us/program/ashoka-u",
        "tags": ["Free", "SocialEntrepreneurship", "Fellowship", "Students", "Education"],
        "difficulty": "intermediate",
        "type": "service",
        "isFree": true,
        "rating": 4.6,
        "reviewCount": 1100,
        "featured": false,
        "dateAdded": "2024-03-15",
        "features": [
          "Changemaker Campus designation program",
          "Network of innovative higher education institutions",
          "Resources and toolkits for educators",
          "Promotes social innovation in academia",
          "Student programs and opportunities"
        ],
        "pricing": {
          "free": "Network participation and resources are provided; designation may have a fee for the institution."
        },
        "requirements": ["Affiliation with a higher education institution (student, faculty, staff)"],
        "alternatives": ["Sullivan Foundation", "Skoll Centre for Social Entrepreneurship", "Clinton Global Initiative University"]
      },
      {
        "id": "echoing",
        "name": "Echoing Green",
        "description": "Echoing Green provides seed funding and support to emerging social entrepreneurs tackling the world's biggest problems through innovative solutions.",
        "detailedDescription": "Echoing Green runs a highly competitive, prestigious Fellowship program that identifies and supports the world's most promising emerging social entrepreneurs. They provide seed funding, leadership development, and a powerful network to help leaders and their organizations grow.",
        "url": "https://echoinggreen.org",
        "tags": ["Free", "SocialEntrepreneurship", "Fellowship", "Changemakers"],
        "difficulty": "advanced",
        "type": "service",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 1950,
        "featured": true,
        "dateAdded": "2024-03-20",
        "features": [
          "Prestigious Fellowship program",
          "Seed funding grant (up to $90K)",
          "Leadership development and training",
          "Access to a lifelong network of peers and experts",
          "Pro bono legal and consulting support"
        ],
        "pricing": {
          "free": "Seed grant and comprehensive support services are provided to Fellows."
        },
        "requirements": ["Founder of an early-stage social enterprise", "Innovative and scalable idea", "Strong leadership potential"],
        "alternatives": ["Skoll Foundation", "Unreasonable Fellowship", "Acumen Fellowship", "Roddenberry Fellowship"]
      },
      {
        "id": "mozilla",
        "name": "Mozilla Foundation Grants",
        "description": "Mozilla Foundation offers grants and awards supporting internet health, open source technology, and digital literacy initiatives worldwide.",
        "detailedDescription": "The Mozilla Foundation, the nonprofit behind Firefox, provides grants and fellowships to individuals and organizations working to ensure the internet remains a global public resource, open and accessible to all. Funding priorities include trustworthy AI, digital inclusion, and online privacy.",
        "url": "https://foundation.mozilla.org/en/what-we-fund/",
        "tags": ["Free", "OpenSource", "DigitalRights", "Technology", "Grants"],
        "difficulty": "intermediate",
        "type": "service",
        "isFree": true,
        "rating": 4.6,
        "reviewCount": 950,
        "featured": false,
        "dateAdded": "2024-03-25",
        "features": [
          "Grants for projects and organizations",
          "Fellowship programs for individuals",
          "Supports open-source technology",
          "Focus on internet health and trustworthy AI",
          "Network of activists and technologists"
        ],
        "pricing": {
          "free": "Grant funding and fellowship stipends are provided."
        },
        "requirements": ["Project must align with Mozilla's mission", "Varies by specific grant or fellowship call"],
        "alternatives": ["Open Technology Fund", "Ford Foundation", "Knight Foundation", "Sloan Foundation"]
      },
      {
        "id": "stem_action_grants",
        "name": "Society for Science – STEM Action Grants",
        "description": "The STEM Action Grants program (Society for Science) provides small grants (up to $5,000) to nonprofits led by social entrepreneurs. It aims to increase STEM participation in communities by funding innovative education initiatives.",
        "detailedDescription": "The STEM Action Grants program from the Society for Science provides funding to nonprofit organizations for innovative projects that promote STEM education and increase participation among students from underrepresented backgrounds. The goal is to support creative, hands-on STEM outreach and education.",
        "url": "https://www.societyforscience.org/outreach-and-equity/stem-action-grants/",
        "tags": ["Grant", "Students", "Educators", "Nonprofits", "STEM"],
        "difficulty": "intermediate",
        "type": "service",
        "isFree": true,
        "rating": 4.4,
        "reviewCount": 450,
        "featured": false,
        "dateAdded": "2024-03-28",
        "features": [
          "Grants up to $5,000",
          "Supports innovative STEM education projects",
          "Focus on underrepresented communities",
          "Funds hands-on outreach programs",
          "Simple application process"
        ],
        "pricing": {
          "free": "Grant funding provided to selected nonprofit organizations."
        },
        "requirements": ["Must be a 501(c)(3) nonprofit organization in the U.S.", "Project must focus on STEM outreach"],
        "alternatives": ["Voya Unsung Heroes", "Toshiba America Foundation", "DonorsChoose", "Pratt & Whitney E-STEM Grants"]
      },
      {
        "id": "estem_innovation_grants",
        "name": "Pratt & Whitney Global E‑STEM Innovation Grants",
        "description": "This program (by Pratt & Whitney and NAAEE) funds nonprofits to run innovative environmental STEM education projects. It provides up to $15,000 for new or enhanced programs engaging students (11–18) in environmental problem-solving.",
        "detailedDescription": "A partnership between Pratt & Whitney and the North American Association for Environmental Education (NAAEE), this program provides grants to nonprofits for projects that engage students in environmental STEM (E-STEM). The focus is on inspiring students to use STEM skills to solve environmental challenges in their communities.",
        "url": "https://naaee.org/",
        "tags": ["Grant", "Students", "Educators", "Nonprofits", "STEM"],
        "difficulty": "intermediate",
        "type": "service",
        "isFree": true,
        "rating": 4.5,
        "reviewCount": 380,
        "featured": false,
        "dateAdded": "2024-04-01",
        "features": [
          "Grants up to $15,000",
          "Focus on environmental STEM (E-STEM)",
          "Targets students aged 11-18",
          "International eligibility for nonprofits",
          "Funds innovative educational programs"
        ],
        "pricing": {
          "free": "Grant funding provided to selected nonprofit organizations."
        },
        "requirements": ["Nonprofit organization status", "Project focuses on environmental education through STEM"],
        "alternatives": ["Captain Planet Foundation Grants", "NEEF Grants", "STEM Action Grants"]
      },
      {
        "id": "google_founders_fund",
        "name": "Google for Startups Founders Fund",
        "description": "Google for Startups runs the Founders Fund, which gives equity-free cash awards (with mentorship and cloud credits) to startup founders. Across multiple rounds, it has provided over $58M to support founders around the world.",
        "detailedDescription": "The Google for Startups Founders Funds (including the Black Founders Fund and Latino Founders Fund) provide equity-free cash awards to promising startups led by underrepresented founders. The program aims to level the playing field by providing capital, mentorship, and Google resources without taking an equity stake.",
        "url": "https://startup.google.com/programs/founders-funds/",
        "tags": ["Grant", "Founders", "Entrepreneurs", "Startups"],
        "difficulty": "advanced",
        "type": "service",
        "isFree": true,
        "rating": 4.7,
        "reviewCount": 1600,
        "featured": true,
        "dateAdded": "2024-04-05",
        "features": [
          "Equity-free cash awards (e.g., $100k-$150k)",
          "Google Cloud credits",
          "Mentorship from Google experts",
          "Marketing and product support",
          "Access to a community of founders"
        ],
        "pricing": {
          "free": "Equity-free cash awards and resources are provided."
        },
        "requirements": ["Startup led by underrepresented founders", "High-growth potential", "Specific eligibility per fund (geography, demographics)"],
        "alternatives": ["SoftBank Opportunity Fund", "Backstage Capital", "Fearless Fund", "Y Combinator"]
      },
      {
        "id": "thiel_fellowship",
        "name": "Thiel Fellowship",
        "description": "The Thiel Fellowship (by Peter Thiel) offers $100,000 grants to young entrepreneurs (usually under 23) to skip or drop out of college and work on innovative projects full-time. It supports fellows for two years as they build new technologies and companies.",
        "detailedDescription": "The Thiel Fellowship is a highly selective and unconventional program that gives $100,000 to young people who want to build new things instead of sitting in a classroom. Fellows skip or stop out of college for two years to pursue their ambitious scientific and technical projects, supported by a network of founders, investors, and scientists.",
        "url": "https://thielfellowship.org/",
        "tags": ["Grant", "Youth", "Founders", "Entrepreneurs"],
        "difficulty": "advanced",
        "type": "service",
        "isFree": true,
        "rating": 4.6,
        "reviewCount": 1300,
        "featured": false,
        "dateAdded": "2024-04-10",
        "features": [
          "$100,000 grant over two years",
          "Mentorship from the Thiel Foundation network",
          "Freedom to build without academic constraints",
          "Prestigious and highly visible program",
          "Community of other young innovators"
        ],
        "pricing": {
          "free": "The program provides a grant to fellows; it does not cost anything to apply."
        },
        "requirements": ["Aged 22 or younger when you apply", "Compelling, ambitious project idea", "Willingness to stop out of college for two years"],
        "alternatives": ["Y Combinator", "Pioneer", "Rhodes Scholarship", "1517 Fund"]
      },
      {
        "id": "mit_solve",
        "name": "MIT Solve",
        "description": "MIT Solve is an open innovation platform that issues global challenges and provides funding, mentorship, and resources to social entrepreneurs. It has supported hundreds of 'Solvers' developing tech-based solutions to issues like education, health, and climate.",
        "detailedDescription": "MIT Solve is an initiative of the Massachusetts Institute of Technology with a mission to solve world challenges. It operates as a marketplace for social impact innovation, identifying the best tech-based social entrepreneurs through open innovation challenges and then connecting them with MIT's network and resources to scale their impact.",
        "url": "https://solve.mit.edu/",
        "tags": ["Grant", "Innovators", "Entrepreneurs", "Competition"],
        "difficulty": "advanced",
        "type": "service",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 1750,
        "featured": true,
        "dateAdded": "2024-04-15",
        "features": [
          "Annual global challenges",
          "Access to prize funding pool",
          "Mentorship from MIT and cross-sector leaders",
          "Media and conference exposure",
          "9-month support program for selected 'Solvers'",
          "Focus on tech-based solutions"
        ],
        "pricing": {
          "free": "Prize funding and support services are provided to winners."
        },
        "requirements": ["Tech-based solution to an active Global Challenge", "Can be at any stage (concept to scale)"],
        "alternatives": ["XPRIZE", "Hello Tomorrow", "Ashoka Changemakers", "Skoll World Forum"]
      },
      {
        "id": "ashoka_changemakers",
        "name": "Ashoka Changemakers",
        "description": "Ashoka Changemakers is a global network that hosts innovation challenges and contests for social entrepreneurs. It provides opportunities for innovators to gain support, visibility, and prizes by co-creating large-scale social change.",
        "detailedDescription": "Ashoka Changemakers is the platform that hosts Ashoka's public-facing innovation challenges. By partnering with corporations, foundations, and individuals, it launches competitions to find, support, and connect the best social innovators who are tackling specific societal problems, fostering a global movement of changemaking.",
        "url": "https://www.ashoka.org/changemakers",
        "tags": ["Free", "Innovators", "SocialEntrepreneurs", "Competition"],
        "difficulty": "intermediate",
        "type": "service",
        "isFree": true,
        "rating": 4.6,
        "reviewCount": 1400,
        "featured": false,
        "dateAdded": "2024-04-20",
        "features": [
          "Thematic innovation challenges",
          "Prize funding and acceleration opportunities",
          "Networking with peers and partners",
          "Global visibility and recognition",
          "Community of social innovators"
        ],
        "pricing": {
          "free": "Free to enter challenges; prize money and support are available to winners."
        },
        "requirements": ["A solution or idea that addresses the specific challenge theme"],
        "alternatives": ["MIT Solve", "OpenIDEO", "InnoCentive", "HeroX"]
      },
      {
        "id": "kiva",
        "name": "Kiva",
        "description": "Kiva is a microfinance platform that connects individual lenders to entrepreneurs worldwide. It provides crowdfunding-based loans (0% interest) to small business owners and social innovators, allowing anyone to support projects by lending capital to people who lack access to traditional credit.",
        "detailedDescription": "Kiva is an international nonprofit that facilitates microloans to underserved entrepreneurs and students in over 70 countries. Through its website, individuals can lend as little as $25 to help a borrower start or grow a business, go to school, or realize their potential. The loans are provided at 0% interest to the borrowers.",
        "url": "https://www.kiva.org/",
        "tags": ["Loan", "Entrepreneurs", "Innovators", "Crowdfunding"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.9,
        "reviewCount": 19000,
        "featured": true,
        "dateAdded": "2024-04-25",
        "features": [
          "0% interest loans for borrowers",
          "Crowdfunding from a global community of lenders",
          "Supports entrepreneurs, farmers, and students",
          "Builds credit history for borrowers",
          "Partners with local Field Partners for vetting",
          "High repayment rate"
        ],
        "pricing": {
          "free": "Loans are 0% interest for borrowers. Lenders do not earn interest."
        },
        "requirements": ["A business or personal need for a loan", "Ability to repay", "Often requires a 'private fundraising' period with own network"],
        "alternatives": ["GoFundMe", "Kickstarter", "Traditional Microfinance Institutions"]
      },
      {
        "id": "fulbright",
        "name": "Fulbright Program",
        "description": "The Fulbright Program offers international scholarships for students, researchers, and professionals to study or conduct research abroad. It provides full funding (tuition, travel, living expenses) for merit-based exchange projects, fostering cross-cultural innovation.",
        "detailedDescription": "The Fulbright Program is the flagship international educational exchange program sponsored by the U.S. government. It is designed to increase mutual understanding between the people of the United States and the people of other countries. It offers prestigious, merit-based grants for study, research, and teaching abroad.",
        "url": "https://fulbrightprogram.org/",
        "tags": ["Scholarship", "Students", "Researchers", "Education"],
        "difficulty": "advanced",
        "type": "service",
        "isFree": true,
        "rating": 4.9,
        "reviewCount": 4500,
        "featured": false,
        "dateAdded": "2024-05-01",
        "features": [
          "Fully funded grants (travel, stipend, health benefits)",
          "Opportunities in over 140 countries",
          "Prestigious and globally recognized",
          "Vast and influential alumni network",
          "Supports graduate study, research, or teaching English"
        ],
        "pricing": {
          "free": "A fully funded grant/scholarship is provided."
        },
        "requirements": ["U.S. citizenship (for U.S. Student Program)", "Bachelor's degree or equivalent", "Strong academic record and compelling project proposal"],
        "alternatives": ["Rhodes Scholarship", "Marshall Scholarship", "Gates Cambridge Scholarship", "Boren Awards"]
      },
      {
        "id": "erasmus_youth",
        "name": "Erasmus+ Youth",
        "description": "Erasmus+ is the European Union's program for education, training, and youth. It provides grants for youth exchanges, study abroad, internships, and volunteer projects (e.g. European Solidarity Corps), giving young people opportunities to gain international experience.",
        "detailedDescription": "Erasmus+ is the EU's comprehensive program to support education, training, youth, and sport in Europe. Its youth component provides funding for non-formal learning opportunities, such as youth exchanges, youth worker mobility, and participation activities, enabling young people to develop skills and experience life abroad.",
        "url": "https://erasmus-plus.ec.europa.eu/",
        "tags": ["Grant", "Students", "Volunteers", "Youth", "EU"],
        "difficulty": "intermediate",
        "type": "service",
        "isFree": true,
        "rating": 4.7,
        "reviewCount": 3800,
        "featured": false,
        "dateAdded": "2024-05-05",
        "features": [
          "Grants for youth mobility projects",
          "Supports group exchanges and volunteering",
          "Fosters international partnerships",
          "Focus on non-formal learning and skills development",
          "Includes European Solidarity Corps for volunteering"
        ],
        "pricing": {
          "free": "Grant funding covers most or all project and travel costs."
        },
        "requirements": ["Typically must apply through an organization (NGO, school)", "Age limits apply (e.g., 13-30 for youth exchanges)"],
        "alternatives": ["European Solidarity Corps", "UNESCO Global Youth Grant Scheme", "National youth programs"]
      },
      {
        "id": "unicef_innovation",
        "name": "UNICEF Innovation Fund",
        "description": "The UNICEF Innovation Fund invests in early-stage open-source technology projects that benefit children (using AI, blockchain, VR, etc.). It provides seed funding to startups and non-profits building solutions for education, health, and humanitarian challenges.",
        "detailedDescription": "The UNICEF Innovation Fund is a venture-style fund that makes equity-free investments in early-stage, open-source technology solutions that have the potential to improve the lives of the most vulnerable children. It focuses on 'frontier technologies' like drones, AI, blockchain, and VR/AR.",
        "url": "https://www.unicef.org/innovation/venturefund",
        "tags": ["Grant", "Founders", "SocialInnovators", "DeepTech"],
        "difficulty": "advanced",
        "type": "service",
        "isFree": true,
        "rating": 4.6,
        "reviewCount": 850,
        "featured": false,
        "dateAdded": "2024-05-10",
        "features": [
          "Equity-free seed funding (up to $100k)",
          "Mandatory open-source technology",
          "Focus on 'frontier tech' for children",
          "Mentorship and technical assistance",
          "Access to UNICEF's global network",
          "Supports for-profit and non-profit entities"
        ],
        "pricing": {
          "free": "Equity-free seed investment is provided."
        },
        "requirements": ["Registered in a UNICEF programme country", "Working on an open-source tech prototype", "Project benefits children"],
        "alternatives": ["Global Innovation Fund", "Schmidt Futures", "Patrick J. McGovern Foundation", "USAID Development Innovation Ventures"]
      }
    ,
    {
        "id": "msFoundersHub",
        "name": "Microsoft for Startups Founders Hub",
        "description": "Up to $150k in Azure credits and free access to OpenAI's latest models.",
        "detailedDescription": "One of the most generous startup programs currently available. It offers free Azure credits, $2,500 in OpenAI credits, and free GitHub Enterprise to help founders scale quickly without initial costs.",
        "url": "https://foundershub.startups.microsoft.com",
        "tags": ["Credits", "Funding", "Startups", "AI"],
        "difficulty": "intermediate",
        "type": "service",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 3200,
        "featured": true,
        "features": [
          "Azure Cloud Credits",
          "OpenAI API credits",
          "Expert mentorship",
          "LinkedIn Premium for hiring"
        ],
        "pricing": { "free": "Free to join for verified startups" },
        "requirements": ["Company website", "LinkedIn profile", "Early-stage status"],
        "alternatives": ["AWS Activate", "Google for Startups"]
      },
      {
        "id": "mistralGrants",
        "name": "Mistral AI La Plateforme",
        "description": "Grants and API access for developers building with European-based LLMs.",
        "detailedDescription": "Mistral AI is the leading European challenger to OpenAI. They offer various grants and hackathon prizes for developers building innovative applications using their open-weight models like Mistral Large.",
        "url": "https://mistral.ai",
        "tags": ["Grants", "AI", "Open Source", "Europe"],
        "difficulty": "advanced",
        "type": "service",
        "isFree": true,
        "rating": 4.6,
        "reviewCount": 1200,
        "featured": false,
        "features": [
          "High-performance small models",
          "API for Mistral Large",
          "Hackathon prize pools",
          "Enterprise grade security"
        ],
        "pricing": { "free": "Free tier for testing" },
        "requirements": ["Technical integration knowledge"],
        "alternatives": ["OpenAI", "Anthropic"]
      }
  ]
  };
