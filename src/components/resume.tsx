'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface ResumeCardProps {
	logoUrl: string;
	altText: string;
	title: string;
	subtitle?: string;
	href?: string;
	badges?: readonly string[];
	period: string;
	description?: string;
}
export const ResumeCard = ({
	logoUrl,
	altText,
	title,
	subtitle,
	href,
	badges,
	period,
	description,
}: ResumeCardProps) => {
	const [isExpanded, setIsExpanded] = React.useState(false);

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		if (description) {
			e.preventDefault();
			setIsExpanded(!isExpanded);
		}
	};

	return (
		<Link
			href={href || '#'}
			className="block cursor-pointer"
			onClick={handleClick}
		>
			<Card className="flex">
				<div className="flex-none">
					<Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
						<AvatarImage
							src={logoUrl}
							alt={altText}
							className="object-contain"
						/>
						<AvatarFallback>{altText[0]}</AvatarFallback>
					</Avatar>
				</div>
				<div className="flex-grow ml-4 items-center flex-col group">
					<CardHeader>
						<div className="flex items-center justify-between gap-x-2 text-base">
							<h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
								{title}
								{badges && (
									<span className="inline-flex gap-x-1">
										{badges.map((badge, index) => (
											<Badge
												variant="secondary"
												className="align-middle text-xs"
												key={index}
											>
												{badge}
											</Badge>
										))}
									</span>
								)}
								<ChevronRightIcon
									className={cn(
										'size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
										isExpanded ? 'rotate-90' : 'rotate-0',
									)}
								/>
							</h3>
							<div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
								{period}
							</div>
						</div>
						{subtitle && <div className="font-sans text-xs">{subtitle}</div>}
					</CardHeader>
					{description && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{
								opacity: isExpanded ? 1 : 0,

								height: isExpanded ? 'auto' : 0,
							}}
							transition={{
								duration: 0.7,
								ease: [0.16, 1, 0.3, 1],
							}}
							className="mt-2 text-xs sm:text-sm"
						>
							{description}
						</motion.div>
					)}
				</div>
			</Card>
		</Link>
	);
};

// export const experiences = [
// 	{
// 		company: 'Develop for Good',
// 		role: 'Software Engineer',
// 		location: 'Remote',
// 		href: '#',
// 		logoUrl: '',
// 		start: 'Oct 2023',
// 		end: 'Mar 2024',
// 		description: [
// 			'Contributed to the Readeazy Literacy platform using PHP, Sass, and vanilla JS.',
// 			'Improved mobile usability through responsive styles and interactive updates.',
// 		],
// 	},
// 	{
// 		company: 'WahooWeb',
// 		role: 'Contractor Web & Graphic Designer',
// 		location: 'Remote',
// 		href: '#',
// 		logoUrl: '',
// 		start: 'Jun 2022',
// 		end: 'Feb 2024',
// 		description: [
// 			'Delivered client branding (logos, UI kits, business cards) in Figma & Adobe tools.',
// 		],
// 	},
// 	{
// 		company: 'Tanzania Mission to the United States',
// 		role: 'Contractor Live Audio Technician',
// 		location: 'New York, NY',
// 		href: '#',
// 		logoUrl: '',
// 		start: 'Jun 2019',
// 		end: 'Jan 2023',
// 		description: [
// 			'Provided professional live audio support and DJ services, including event setup, soundchecks, and real-time mixing for formal receptions, private functions, and cultural events.',
// 			'Managed setup, operation, and breakdown of professional-grade audio equipment (mixers, amplifiers, speakers, microphones).',
// 		],
// 	},
// 	{
// 		company: 'CUNY Brooklyn College',
// 		role: 'Programming Tutor - Java, C++. Node.js',
// 		location: 'New York, NY',
// 		href: '#',
// 		logoUrl: '',
// 		start: 'Jun 2021',
// 		end: 'Dec 2023',
// 		description: [
// 			'Tutored students in object-oriented programming, data structures, and algorithms.',
// 			'Helped students debug code, complete assignments, and prepare for exams.',
// 		],
// 	},
// 	{
// 		company: 'UpWork',
// 		role: 'Freelance Web Developer',
// 		location: 'New York, NY',
// 		href: '#',
// 		logoUrl: '',
// 		start: 'Sep 2019',
// 		end: 'Present',
// 		description: [
// 			'Developed websites using React.js, Redux, Bootstrap, TailwindCSS, Vite, and Sass.',
// 			'Developed REST APIs using Node.js, Express.js, MongoDB, and Mongoose.',
// 			'Helped businesses restore website functionality, optimize loading speed, and reconfigure DNS services.',
// 		],
// 	},
// 	{
// 		company: 'FYRE Digital',
// 		role: 'Lead Web Developer',
// 		location: 'Remote',
// 		href: '#',
// 		logoUrl: '',
// 		start: 'Aug 2018',
// 		end: 'Sep 2019',
// 		description: [
// 			'Led projects using Laravel, PHP, WordPress, Bootstrap, Sass.',
// 			'Worked cross-functionally with design teams to execute clean UI/UX workflows.',
// 		],
// 	},
// 	{
// 		company: 'Novus Talent Acquisition',
// 		role: 'Contract Web Designer',
// 		location: 'New York, NY',
// 		href: '#',
// 		logoUrl: '',
// 		start: 'Aug 2018',
// 		end: 'Sep 2019',
// 		description: [
// 			'Delivered a responsive Webflow site with SEO, analytics, and clean design.',
// 			'Managed tight delivery timelines and client revisions.',
// 		],
// 	},
// 	{
// 		company: 'Vanguard Byte',
// 		role: 'Lead UI/UX Designer',
// 		location: 'Miami, FL',
// 		href: '#',
// 		logoUrl: '',
// 		start: 'Jan 2018',
// 		end: 'Aug 2018',
// 		description: [
// 			'Led research, wireframing, prototyping and visual design for multiple client apps.',
// 			'Executed accessibility-first designs in Figma for tech and nonprofit clients.',
// 		],
// 	},
// 	{
// 		company: 'Baruch College Campus High School',
// 		role: 'IT Intern',
// 		location: 'New York, NY',
// 		href: '#',
// 		logoUrl: '',
// 		start: 'Sep 2016',
// 		end: 'Jun 2017',
// 		description: [
// 			'Maintaining and troubleshooting issues related to school software and hardware.',
// 			'Provided technical assistance for installing and fixing printers, projectors, and computers.',
// 			'Helped students and school staff to install and manage mobile devices on the school network.',
// 		],
// 	},
// ];

// export const education = [
// 	{
// 		school: 'CUNY Brooklyn College',
// 		href: '#',
// 		degree: 'B.S. Computer Science',
// 		logoUrl: '',
// 		start: 'Aug 2017',
// 		end: 'Jan 2023',
// 	},
// 	{
// 		school: 'Queensborough Community College',
// 		href: '',
// 		degree: 'Non-degree Undergraduate Major, Information Technology',
// 		logoUrl: '',
// 		start: 'Dec 2021',
// 		end: 'Aug 2022',
// 	},
// 	{
// 		school: 'Baruch College',
// 		href: '',
// 		degree: 'Non-degree Undergraduate Major, Business',
// 		logoUrl: '',
// 		start: 'Aug 2016',
// 		end: 'Dec 2016',
// 	},
// ];
