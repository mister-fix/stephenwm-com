'use client';

/* eslint-disable */
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ResumeCardProps {
	logoUrl?: string;
	altText: string;
	title: string;
	subtitle?: string;
	href?: string;
	badges?: readonly string[];
	period: string;
	description?: string[] | readonly string[];
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
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<Loader2 className="animate-spin duration-150 transition-all h-4 w-4" />
		);
	}

	return (
		<Accordion
			type="single"
			collapsible
			className="w-full"
			defaultValue="item-1"
		>
			<AccordionItem value="item-1">
				<AccordionTrigger className="hover:no-underline no-underline">
					<div className="flex items-center gap-4 hover:no-underline w-full">
						<div className="h-[50px] w-[50px] overflow-hidden rounded-full border">
							<Image
								src={`${logoUrl}`}
								alt={altText}
								className="rounded-full object-cover"
								height={50}
								width={50}
								sizes="50px" // optimize for this size
							/>
						</div>
						<div className="flex flex-col me-auto">
							<h4 className="text-base text-foreground">{title}</h4>
							<p className="text-sm text-muted-foreground">{subtitle}</p>
						</div>

						<div className="ml-auto self-start text-muted-foreground">
							<span>{period}</span>
						</div>
					</div>
				</AccordionTrigger>
				<AccordionContent className="flex flex-col gap-4">
					<ul className="!list-disc space-x-2">
						{description && description?.length > 0 ?
							description?.map((desc, index) => (
								<li key={index} className=" w-full">
									&middot; {desc}
								</li>
							))
						:	null}
					</ul>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};
