import { banner, logo96, R2, R2_LEGACY } from "./cdn";
import { Experience } from "./schema";

const entries = [
  {
    slug: "people-inc",
    company: "People Inc.",
    shortName: "People Inc",
    title: "Senior Software Engineer",
    employment: "full-time",
    start: "2025-08",
    end: null,
    summary:
      "Senior engineer on the People mobile app's ad revenue team: prebidding integrations, the ad configuration backend, and the tooling around them.",
    highlights: [
      "Built the Nimbus and Liftoff Monetize (Vungle) prebidding integrations for the People app from the ground up, working directly with both partner teams. The lift in revenue per ad was large enough that leadership called it out.",
      "Designed and built the backend ad configuration API, aligning several internal teams on the contract. It serves the People app today and is being adopted by other apps in the company.",
      "Built an in-app ad debugging panel: toggle each ad partner on or off, see where every config value comes from and what it resolved to, and switch ad test mode without a rebuild.",
      "Fixed a video ad mute bug that had been open for months. Mute state wasn't shared between the app's video scenes and video ads, and iOS behaved differently when background audio such as Spotify was playing. I synced the state across both and corrected the background-audio handling.",
      "Built developer tooling the whole team uses: a one-command environment setup script, a screen-recording-to-GIF command-line tool for pull requests and docs, and Rozenite devtools plus mobile-mcp so AI agents can drive iOS and Android simulators and devices.",
      "Backend work in Node.js across Firebase, AWS, GCP and Redis.",
    ],
    sections: [
      {
        id: "stack",
        heading: "The ad stack",
        paragraphs: [
          "The People app monetizes with Google Mobile Ads and Google Ad Manager as the mediation layer. In front of the GAM auction we run prebidding: partners bid on an impression before the ad request is sent, and the winning bid is passed into GAM as a price signal so the auction clears higher. I built the Nimbus integration and the Liftoff Monetize integration that do this, working directly with each partner's engineering team on SDK behaviour, bid signalling and edge cases on both platforms.",
          "Both integrations shipped to production and produced a lift in revenue per ad that leadership called out explicitly.",
        ],
      },
      {
        id: "config",
        heading: "Ad configuration backend",
        paragraphs: [
          "Ad behaviour used to be scattered across client constants and remote flags. I designed and built a backend configuration API that gives the app one typed, versioned source for every ad parameter: units, partner enablement, refresh rules, test mode, and per-platform overrides. Getting there meant aligning several internal teams on the contract and the rollout.",
          "The API now serves the People app and is being adopted by other apps in the company, which is the result I wanted: a platform, not a feature.",
        ],
      },
      {
        id: "debug",
        heading: "Ad debugging panel",
        paragraphs: [
          'I built an in-app panel for the ad team that shows every active ad partner and lets you toggle each one, displays where every config value came from and what it resolved to, and switches test mode on or off without a rebuild. It turned an hours-long "which config is this device using" question into a glance.',
        ],
      },
      {
        id: "mute",
        heading: "The mute bug",
        paragraphs: [
          "A video-ad mute bug had been open for months. Two things were wrong. The app's own video scenes and the video ad SDK each kept their own mute state and never agreed, so ads came in loud or silent at random. On iOS, background audio such as Spotify changed the behaviour again because the audio session category was being set inconsistently. I traced both, introduced one shared mute source of truth that both players observe, and fixed the audio-session handling so background music behaves the way users expect.",
        ],
      },
      {
        id: "tooling",
        heading: "Tooling and backend",
        paragraphs: [
          "Beyond the ad work I build internal tools that shorten the team's debug and release loops. The setup script checks a new machine and installs the right Node, CocoaPods, fastlane and Xcode command-line tools, pulls in the app's private config files, places the debug keystore, and runs the full install. When CocoaPods fails it retries with fixes for the most common failure causes, and it ends with a summary of everything it did. So far it has resolved every setup error the team has hit.",
          "A second tool installs itself as a global Bash/Zsh command, checks for and installs ffmpeg and gifsicle, and turns `.mov` screen recordings into animated GIFs for pull requests and documentation, with configurable size, dimensions and quality. It also converts recordings to other formats such as `.mp4`.",
          "I also added Rozenite devtools and mobile-mcp to the People app. Rozenite made day-to-day debugging much easier, and mobile-mcp lets our AI agents drive iOS simulators and devices and Android emulators and devices directly.",
          "On the backend I work in Node.js across Firebase, AWS, GCP and Redis, including the ad configuration service above.",
        ],
      },
    ],
    tech: [
      "React Native",
      "TypeScript",
      "iOS",
      "Android",
      "Google Mobile Ads (GMA)",
      "Google Ad Manager (GAM)",
      "Nimbus",
      "Liftoff Monetize",
      "Node.js",
      "Firebase",
      "AWS",
      "GCP",
      "Redis",
    ],
    logo: {
      kind: "image",
      src: `${R2}/WinApps_PeopleIncLogo.webp`,
      alt: "People Inc. logo",
      width: 778,
      height: 674,
    },
    banner: banner(`${R2}/WinApps_PeopleIncBanner.webp`, "People Inc."),
    featured: true,
    order: 1,
  },
  {
    slug: "mirror",
    company: "Mirror Inc.",
    shortName: "Mirror",
    title: "Lead Senior Software Engineer & Founding Engineer",
    employment: "contract",
    start: "2025-05",
    end: "2026-05",
    summary: "Founding engineer on an AI interview platform for hiring teams and candidates.",
    highlights: [
      "Owned product architecture and engineering leadership from the first commit.",
      "Built the web and mobile experiences for interview workflows, candidate practice, and AI-assisted evaluation.",
      "Built on TypeScript, Vite, Python, AWS and DynamoDB.",
    ],
    sections: [
      {
        id: "product",
        heading: "The product",
        paragraphs: [
          "Mirror is an AI interview platform with two sides. Businesses use it to run AI interviews of job candidates. Candidates use it to practise and improve before real technical interviews.",
          "As the founding engineer I owned the product architecture and the engineering leadership. I built the web and mobile experiences around interview workflows, candidate preparation, and AI-assisted evaluation.",
        ],
      },
    ],
    tech: ["TypeScript", "Vite", "Python", "AWS", "DynamoDB"],
    banner: banner("/mirror-banner.svg", "Mirror Inc."),
    links: [{ label: "trymirror.ai", href: "https://www.trymirror.ai", external: true }],
    order: 2,
  },
  {
    slug: "double-raven-2025",
    company: "Double Raven Solutions LLC",
    shortName: "Double Raven",
    title: "Founding Senior Software Engineer",
    employment: "co-founder",
    start: "2025-01",
    end: null,
    summary:
      "Founding engineer on ODIN, an investigation platform that helps detectives work missing persons, human trafficking and wanted fugitive cases.",
    highlights: [
      "Primary engineer on ODIN (Open-source Data Intelligence Network), responsible for the backend engineering and tooling.",
      "Built ODIN's relational graph tools on Neo4j for exploring the connections inside a case.",
      "Built a suite of OSINT (open-source intelligence) tools inside the platform.",
      "Built automatic OCR and handwriting extraction, plus the data management and sanitization layer behind everything detectives upload.",
      "Built AI tooling on local and external models trained for investigative work.",
      "Took over the web front end and have improved it substantially.",
    ],
    sections: [
      {
        id: "odin",
        heading: "ODIN",
        paragraphs: [
          "ODIN (Open-source Data Intelligence Network) is a suite of investigation tools backed by local and external AI models trained for this work. Detectives upload documentation and provide information and evidence directly, and ODIN organizes it and speeds up the work around it.",
          "It gives detectives relational graph tools, OSINT tools, and automatic OCR and handwriting extraction. Alert triggers notify them as soon as new information is detected. The focus is missing persons, human trafficking, and wanted fugitive cases.",
        ],
      },
      {
        id: "role",
        heading: "My role",
        paragraphs: [
          "I'm the primary engineer, and I own the backend and the tooling. That covers the graph layer on Neo4j, the OSINT tools, document and handwriting extraction, data management and sanitization, and the AI tooling. I have also taken over the web front end and improved it substantially.",
          "This is a continuation of the work I started as Double Raven's first engineer in 2020.",
        ],
      },
    ],
    tech: [
      "Go",
      "Python",
      "Neo4j",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "TypeScript",
      "React",
      "Next.js",
      "D3.js",
      "Docker",
      "Kubernetes",
    ],
    logo: {
      kind: "image",
      src: `${R2_LEGACY}/WinApps_DoubleRavenLogo.webp`,
      alt: "Double Raven Solutions logo",
      width: 96,
      height: 93,
    },
    banner: banner(`${R2_LEGACY}/WinApps_DoubleRavenBanner.webp`, "Double Raven Solutions"),
    order: 3,
  },
  {
    slug: "amazon-connect",
    company: "Amazon Web Services",
    shortName: "Amazon Connect",
    title: "Software Development Engineer (Front End), Amazon Connect Customer Profiles",
    employment: "full-time",
    start: "2022-08",
    end: "2024-11",
    summary:
      "Front-end engineer on Amazon Connect Customer Profiles, building AWS Console and Connect admin website features for contact-center customers.",
    highlights: [
      "Built the CTR-AutoAssociateOnly contact record template, which looks up a caller's unified profile by phone number without creating duplicate profiles.",
      "Built the AWS Console settings for the new template and rewrote its public documentation, adding a section for the auto-associate flow.",
      "Built the Customer Segments list, segment details and CSV export in the Connect admin website.",
      "Raised test coverage from 64% to 91% and made 90% coverage a required gate for code reviews.",
      "Cut false on-call alarms with CloudWatch anomaly detection on 4xx errors, with 403s split into their own dashboard and alarm.",
      "Wrote a demo-environment script that provisions a domain with 1,000,000 mock profiles, and a Node.js script that inserts new translation strings into every locale file.",
    ],
    sections: [
      {
        id: "role",
        heading: "Role",
        paragraphs: [
          "I was a front-end engineer on the Customer Profiles team. I worked in React and TypeScript, with Node.js, Java 11 and Python where a feature needed it.",
        ],
        bullets: [
          "Took feature specifications through to maintainable, extensible code.",
          "Improved existing features independently, with minimal guidance.",
          "Reviewed code and gave feedback to other engineers.",
          "Worked with product managers to turn customer requirements into solutions.",
          "Handled operational support and drove root causes to resolution.",
          "Improved team processes and tools, ran knowledge-sharing sessions, and trained new front-end engineers.",
        ],
      },
      {
        id: "contact-record-templates",
        heading: "Contact record templates",
        paragraphs: [
          "Both existing contact trace record (CTR) templates created a new customer profile automatically, which led to duplicate profiles and inconsistent data. Customers had raised it many times. I built a new template, `CTR-AutoAssociateOnly`. It still looks up the caller's unified profile by incoming phone number in real time, but it never creates a new one.",
          "I then updated the public documentation. I added a section on associating contact records with the `_phone` key and diagrams of the CTR flows. I also rewrote the existing template docs, which customers had called confusing.",
          "Finally I built the front end. The profile creation and auto-association section appears on the Create domain page, and on the Domain details page for viewing and changing the applied template. An info help panel explains each template and links to the documentation.",
        ],
      },
      {
        id: "customer-segments",
        heading: "Customer Segments",
        paragraphs: [
          "In the Connect admin website I designed and built the Customer Segments landing page. It shows a searchable, filterable table of a customer's segments, or an empty state with a Create Segment button. Segments come from a paginated API and are cached with React Query to keep the table in sync and reduce API calls.",
          "The segment details page shows the profile count, name, ID, description, creation date, and the audience definition (audience groups, filter groups, and include/exclude operators). From there customers can delete, duplicate, or export the segment.",
          "Export to CSV is available from both pages and covers up to 350,000 profiles. Larger exports are left to the AWS Console, because a file that size can run to several gigabytes. The console also gives IT admins better controls than the admin website offers contact-center admins.",
        ],
      },
      {
        id: "operations",
        heading: "Operations and tooling",
        paragraphs: [
          "Setting up a realistic Customer Profiles domain for testing or demos took engineers and product managers a long time. I wrote a script with Bash, PowerShell and Cmd entry points that installs the right Python if needed. It then provisions a domain, enables every feature, and loads 1,000,000 generated profiles and products. The team used it for development and for customer demos.",
          "Our 4xx alarms fired on any spike, so on-call engineers kept chasing customers' permission errors and harmless 404s. I added CloudWatch anomaly detection so only unusual spikes alarm. I also moved 403s to their own dashboard and alarm, to track customers struggling with permissions setup.",
          "Code reviews had no coverage requirement, and simple bugs were reaching production. I made 90% coverage a required gate and raised the codebase from 64% to 91%.",
          "Adding a new UI string meant copying it into every locale file in exactly the right place by hand. I wrote a Node.js script that takes new strings from the English file and inserts them into every other locale. The whole front-end team adopted it.",
        ],
      },
    ],
    tech: ["React", "TypeScript", "React Query", "Node.js", "Java 11", "Python", "AWS", "CloudWatch"],
    logo: {
      kind: "image",
      src: `${R2_LEGACY}/WinApps_ConnectLogo.webp`,
      alt: "Amazon Connect logo",
      width: 96,
      height: 90,
    },
    banner: banner(`${R2_LEGACY}/WinApps_AmazonConnectBanner.webp`, "Amazon Connect"),
    links: [
      {
        label: "Inferred profiles (AWS docs)",
        href: "https://docs.aws.amazon.com/connect/latest/adminguide/inferred-profiles.html",
        external: true,
      },
      {
        label: "Contact record templates (AWS docs)",
        href: "https://docs.aws.amazon.com/connect/latest/adminguide/ctr-contact-record-template.html",
        external: true,
      },
    ],
    order: 4,
  },
  {
    slug: "vmware",
    company: "VMware",
    shortName: "VMware",
    title: "Software Engineer",
    employment: "full-time",
    start: "2022-06",
    end: "2022-08",
    summary:
      "Backend engineer building Java REST APIs with test-driven development and Kubernetes deployments.",
    highlights: [
      "Built RESTful API servers in Java 17 with Spring Boot and Hibernate.",
      "Practised test-driven development with JUnit and Mockito across unit and integration tests.",
      "Built multi-stage Docker images and configured Kubernetes with Horizontal Pod Autoscaler scaling.",
      "Used PostgreSQL in production and H2 for development and testing.",
    ],
    sections: [
      {
        id: "apis",
        heading: "REST APIs",
        paragraphs: [
          "I built RESTful API servers in Java 17 with Spring Boot, using Hibernate for object-relational mapping. PostgreSQL backed production, and H2 backed development and tests.",
        ],
        bullets: [
          "Standard HTTP semantics, status codes and error handling.",
          "JSON request and response bodies.",
          "Stateless services so they scale horizontally.",
          "Documented endpoints.",
        ],
      },
      {
        id: "testing",
        heading: "Test-driven development",
        paragraphs: [
          "The team worked test-first: write a failing test, write the minimum code to pass it, then refactor with the tests as a safety net. I used JUnit for the tests and Mockito to isolate external dependencies.",
        ],
        bullets: [
          "Unit tests for individual components and methods.",
          "Integration tests covering the API and database together.",
          "Edge-case tests for boundary conditions and error paths.",
        ],
      },
      {
        id: "containers",
        heading: "Containers and Kubernetes",
        paragraphs: [
          "I packaged services as multi-stage Docker images with cached layers, vulnerability scanning and explicit CPU and memory limits. On Kubernetes I configured the Horizontal Pod Autoscaler and resource-based scaling policies, along with health checks, service discovery and load balancing.",
          "The result was consistent deployments across environments and better resource use under variable load.",
        ],
      },
    ],
    tech: [
      "Java 17",
      "Spring Boot",
      "Hibernate",
      "PostgreSQL",
      "H2",
      "JUnit",
      "Mockito",
      "Docker",
      "Kubernetes",
      "GitLab CI/CD",
    ],
    logo: logo96(`${R2_LEGACY}/WinApps_VMwareLogo.webp`, "VMware"),
    banner: banner(`${R2_LEGACY}/WinApps_VMwareBanner.webp`, "VMware"),
    order: 5,
  },
  {
    slug: "double-raven-2020",
    company: "Double Raven Solutions LLC",
    shortName: "Double Raven",
    title: "Full-stack Software Engineer",
    employment: "full-time",
    start: "2020-06",
    end: "2022-01",
    summary:
      "Sole engineer on OSINT tooling for detectives and law enforcement: data visualization, geomapping, identity resolution.",
    highlights: [
      "Built the first version of ODIN as the company's sole engineer, from research to the detective-facing UI.",
      "Researched OSINT techniques along with large-scale data visualization, geomapping and identity resolution.",
      "Turned feature specs and architecture diagrams into a one-to-two-click UI for detectives, law enforcement and private investigators.",
      "Built a scalable backend control plane in Go for orchestrating data collection and analysis.",
      "Built third-party data integrations and real-time case update notifications.",
      "Built the data visualizations in D3.js and the NLP components in Python.",
    ],
    sections: [
      {
        id: "backend",
        heading: "Backend",
        paragraphs: [
          "Almost every backend service handled large volumes of data, so speed and efficiency drove the stack. I wrote most services in Go, used PostgreSQL for structured data, Redis for caching, and RabbitMQ for message queuing.",
          "Services ran in Docker on Kubernetes, with GitHub Actions for CI/CD.",
        ],
      },
      {
        id: "nlp",
        heading: "NLP and machine learning",
        paragraphs: [
          "The NLP and machine-learning components were written in Python with NLTK, spaCy and TensorFlow, alongside integrations with third-party services.",
        ],
      },
      {
        id: "ui",
        heading: "UI and UX",
        paragraphs: [
          "The people using this tool are detectives, law enforcement officers and private investigators, not data specialists, and big-data visualization tools are notoriously hard to use. I designed the UI around a one-to-two-click rule: the most important features are never more than two clicks away.",
          "The front end is TypeScript, React, React Query and Next.js, with D3.js for the interactive visualizations, and follows usability and accessibility best practices.",
        ],
      },
    ],
    tech: [
      "Go",
      "Python",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "TypeScript",
      "React",
      "React Query",
      "Next.js",
      "D3.js",
      "NLTK",
      "spaCy",
      "TensorFlow",
    ],
    logo: {
      kind: "image",
      src: `${R2_LEGACY}/WinApps_DoubleRavenLogo.webp`,
      alt: "Double Raven Solutions logo",
      width: 96,
      height: 93,
    },
    banner: banner(`${R2_LEGACY}/WinApps_DoubleRavenBanner.webp`, "Double Raven Solutions"),
    order: 6,
  },
];

/** Work history, validated and sorted by `order`. */
export const experience: Experience[] = entries
  .map((entry) => Experience.parse(entry))
  .sort((a, b) => a.order - b.order);
