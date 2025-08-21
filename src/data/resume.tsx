// import { Icons } from '@/components/icons';
import { GlobeIcon, HomeIcon, MailIcon, NotebookIcon } from 'lucide-react';
import Image from 'next/image';

export const DATA = {
	name: 'Stephen Mwingira',
	initials: 'SM',
	url: 'https://stephenwm.com/',
	location: 'New York, NY',
	locationLink: 'https://www.google.com/maps/place/newyork',
	description:
		'Software engineer, part time DJ, full-time pork chop. I love building things, helping people, and eating tasty food.',
	summary:
		'My path has been shaped by a unique blend of technical depth and product-minded thinking, having pursued a formal education in both computer science and design, developed production-level applications at a leading tech company, and validated ideas through numerous hackathons and side projects. I thrive on the entire product lifecycle, from initial concept and user experience design to architecting robust, scalable systems. I am currently looking for roles and opportunities as a software or backend systems engineer.',
	avatarUrl: '/monogram.svg',
	skills: [
		'React',
		'Next.js',
		'Typescript',
		'Node.js',
		'Express.js',
		'Python',
		'JavaScript',
		'PHP',
		'PostgreSQL',
		'MongoDB',
		'MySQL',
		'SQLite',
		'Docker',
		'Java',
		'C++',
		'GraphQL',
		'Prisma',
		'Drizzle',
		'Playwright',
		'Jest',
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '/blog', icon: NotebookIcon, label: 'Blog' },
	],
	contact: {
		email: 'hello@example.com',
		tel: '+123456789',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://dub.sh/dillion-github',
				icon: '/github.svg',

				navbar: true,
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://dub.sh/dillion-linkedin',
				icon: '/linkedin.svg',

				navbar: true,
			},
			Youtube: {
				name: 'Youtube',
				url: 'https://dub.sh/dillion-youtube',
				icon: '/youtube.svg',
				navbar: true,
			},
			email: {
				name: 'Send Email',
				url: '#',
				icon: MailIcon,

				navbar: false,
			},
		},
	},

	work: [
		{
			company: 'topfrag-gg',
			href: 'https://www.linkedin.com/company/107386943',
			badges: [],
			location: 'New York, NY',
			title: 'Software Engineer',
			logoUrl: '/companies/topfrag.svg',
			start: 'May 2025',
			end: 'Present',
			description: [],
		},
		{
			company: 'Develop for Good',
			href: 'https://www.developforgood.org',
			badges: [],
			location: 'Remote',
			title: 'Software Engineer',
			logoUrl: '/companies/develop-for-good.png',
			start: 'Oct 2023',
			end: 'Mar 2024',
			description: [
				'Collaborated with a small team to support Readeezy Literacy, a nonprofit focused on reading accessibility. Worked on a large legacy PHP codebase to reimplement and fix interactive reading and learning features.',
				'Leveraged JavaScript, jQuery, Sass, and PHP to enhance frontend behavior and improve accessibility and user experience for readers with learning differences.',
			],
		},
		{
			company: 'WahooWeb',
			badges: [],
			href: 'https://wahooweb.org/',
			location: 'Remote',
			title: 'Web & Graphic Designer',
			logoUrl: '/companies/wahoo.png',
			start: 'Jan 2021',
			end: 'Apr 2021',
			description: [
				'Designed landing pages using Figma, ensuring user-friendly interfaces and visual appeal. Created business card designs using Adobe Illustrator and Photoshop, delivering high-quality print-ready files.',
				'Collaborated with owner to understand project requirements, ensuring cohesive and effective design solutions. Managed multiple projects simultaneously, demonstrating strong time management and organizational skills.',
				'Conducted research to stay updated on the latest design trends and tools, continuously improving design skills and techniques.',
			],
		},
		{
			company: 'Programming Tutor',
			href: 'https://www.brooklyn.edu/',
			badges: [],
			location: 'New York, NY',
			title: 'Programming Tutor - Java, C++, Node.js',
			logoUrl: '/companies/cunybkc.png',
			start: 'Jan 2020',
			end: 'Apr 2020',
			description: [
				'Tutored students in object-oriented programming, data structures, and algorithms.',
				'Helped students debug code, complete assignments, and prepare for exams.',
			],
		},
		{
			company: 'UpWork',
			href: 'https://upwork.com',
			badges: [],
			location: 'Remote',
			title: 'Freelance Web Developer',
			logoUrl: '/companies/upwork-square.svg',
			start: 'Jan 2019',
			end: 'Apr 2019',
			description: [],
		},
		{
			company: 'FYRE Digital',
			href: 'https://www.instagram.com/fyredigital/?hl=en',
			badges: [],
			location: 'Miami, FL',
			title: 'Lead Web Developer',
			logoUrl: '/companies/fyre.png',
			start: 'Jan 2018',
			end: 'Apr 2018',
			description: [
				'Worked with clients to design, wireframe, prototype, and build websites using various tools like WordPress, HTML, CSS, and more. Managed web design projects from beginning to delivery.',
			],
		},
		{
			company: 'Novus Talent Acquisition',
			href: 'https://www.linkedin.com/company/40845964/',
			badges: [],
			location: 'West New York, NJ',
			title: 'Web Designer',
			logoUrl: '/companies/novus.png',
			start: 'Jan 2019',
			end: 'Jun 2019',
			description: [
				'Contracted to design and develop a high-impact landing page that captured the brand identity and value proposition. Responsible for the full creative and technical execution of the project using Figma and Webflow.',
			],
		},
		{
			company: 'Vanguard-Byte',
			href: 'https://www.instagram.com/vanguardbyte/',
			badges: [],
			location: 'Remote',
			title: 'Lead UI/UX Designer',
			logoUrl: '/companies/vanguardbyte.png',
			start: 'Jan 2018',
			end: 'Aug 2018',
			description: [
				'Led end-to-end design processes from discovery and wire-framing to prototyping and final UI execution. Conducted research, usability and accessibility testing, and competitive analysis to steer design decisions.',
				'Collaborated with product team and stakeholders to align business goals with user needs. Delivered several successful client-facing digital experiences in sectors including tech, e-commerce, and non-profits.',
			],
		},
		{
			company: 'Baruch College Campus High School',
			href: 'https://www.bcchsnyc.net/',
			badges: [],
			location: 'New York, NY',
			title: 'IT Internship',
			logoUrl: '/companies/bcchs.png',
			start: 'Sep 2016',
			end: 'Jun 2017',
			description: [
				'Maintaining and troubleshooting issues related to software and hardware. Provided support for installing and fixing printers, projectors, and computer products. Helped students and staff to install and manage devices.',
			],
		},
	],
	education: [
		{
			school: 'Brooklyn College',
			href: 'https://www.brooklyn.edu/',
			degree: 'B.S. Computer Science',
			logoUrl: '/companies/brooklyn-college.png',
			start: '2017',
			end: '2023',
		},
		{
			school: 'Queensborough Community College',
			href: 'https://www.qcc.cuny.edu',
			degree: 'Non-Degree Undergraduate Major, Information Technology',
			logoUrl: '/companies/qcc-2.png',
			start: '2021',
			end: '2022',
		},
		{
			school: 'Baruch College',
			href: 'https://baruch.cuny.edu',
			degree: 'Non-Degree Undergraduate Major, Business Administration',
			logoUrl: '/companies/baruch-college.png',
			start: '2016',
			end: '2016',
		},
	],
	projects: [
		{
			title: 'Nestwork',
			href: 'https://nestwork-web.vercel.app',
			dates: 'Jan 2024 - Feb 2024',
			active: true,
			description:
				'Nestwork is a full-stack task management application (inspired by Linear/Trello), built for learning, portfolio, and eventual production use. Powered by [Turborepo](https://turbo.build/).',
			technologies: [
				'Next.js',
				'Typescript',
				'PostgreSQL',
				'Drizzle',
				'TailwindCSS',
				'Stripe',
				'shadcn/ui',
				'Better-Auth',
				'neon',
				'motion',
				'turborepo',
			],
			links: [
				{
					type: 'Website',
					href: 'https://nestwork-web.vercel.app',
					icon: <GlobeIcon className="size-3" />,
				},
				{
					type: 'Source',
					href: 'https://github.com/mister-fix/nestwork',
					icon: (
						<Image
							src="/github.svg"
							height={16}
							width={16}
							alt="Github icon"
							className="size-3"
						/>
					),
				},
			],
			image: '',
			video:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4',
		},
		{
			title: 'Next.js Notes App',
			href: 'nextjs-notes-app-chi.vercel.app',
			dates: 'June 2023 - Present',
			active: true,
			description:
				'Developed a full-stack, multi-user, note taking application with Next.js, including a rich text editor.',
			technologies: [
				'Next.js',
				'Typescript',
				'PostgreSQL',
				'Drizzle',
				'TailwindCSS',
				'Better-Auth',
				'Shadcn UI',
				'Tiptap Editor',
			],
			links: [
				{
					type: 'Website',
					href: 'https://nextjs-notes-app-chi.vercel.app/',
					icon: <GlobeIcon className="size-3" />,
				},
				{
					type: 'Source',
					href: 'https://github.com/mister-fix/nextjs-notes-app',
					icon: (
						<Image
							src="/github.svg"
							height={16}
							width={16}
							alt="Github icon"
							className="size-3"
						/>
					),
				},
			],
			image: '',
			video: 'https://cdn.magicui.design/bento-grid.mp4',
		},
		// {
		// 	title: 'llm.report',
		// 	href: 'https://llm.report',
		// 	dates: 'April 2023 - September 2023',
		// 	active: true,
		// 	description:
		// 		'Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.',
		// 	technologies: [
		// 		'Next.js',
		// 		'Typescript',
		// 		'PostgreSQL',
		// 		'Prisma',
		// 		'TailwindCSS',
		// 		'Shadcn UI',
		// 		'Magic UI',
		// 		'Stripe',
		// 		'Cloudflare Workers',
		// 	],
		// 	links: [
		// 		{
		// 			type: 'Website',
		// 			href: 'https://llm.report',
		// 			icon: <GlobeIcon className="size-3" />,
		// 		},
		// 		{
		// 			type: 'Source',
		// 			href: 'https://github.com/dillionverma/llm.report',
		// 			icon: (
		// 				<Image
		// 					src="/github.svg"
		// 					height={16}
		// 					width={16}
		// 					alt="Github icon"
		// 					className="size-3"
		// 				/>
		// 			),
		// 		},
		// 	],
		// 	image: '',
		// 	video: 'https://cdn.llm.report/openai-demo.mp4',
		// },
		// {
		// 	title: 'Automatic Chat',
		// 	href: 'https://automatic.chat',
		// 	dates: 'April 2023 - March 2024',
		// 	active: true,
		// 	description:
		// 		'Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.',
		// 	technologies: [
		// 		'Next.js',
		// 		'Typescript',
		// 		'PostgreSQL',
		// 		'Prisma',
		// 		'TailwindCSS',
		// 		'Shadcn UI',
		// 		'Magic UI',
		// 		'Stripe',
		// 		'Cloudflare Workers',
		// 	],
		// 	links: [
		// 		{
		// 			type: 'Website',
		// 			href: 'https://automatic.chat',
		// 			icon: <GlobeIcon className="size-3" />,
		// 		},
		// 	],
		// 	image: '',
		// 	video:
		// 		'https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4',
		// },
	],
	hackathons: [
		{
			title: 'WinTake',
			dates: 'Jan 2022 - May 2022',
			location: 'New York, NY',
			description:
				'Developed a mobile application that helps users track their daily water intake, set goals, and reminders.',
			image: '/companies/droidgroup6.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
			links: [],
		},
		{
			title: 'L-MIT InvenTeam',
			dates: 'Sep 2015 - Jun 2016',
			location: 'New York, NY',
			description:
				'Built a semi-autonomous vacuum intended to be used in the New York City subway system to clean trash and debris from tracks.',
			image: '/companies/lmit.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
			links: [],
		},
	],
} as const;
