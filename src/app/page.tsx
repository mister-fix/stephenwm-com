import Image from 'next/image';

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-center justify-center sm:items-start md:items-center">
				<div className="animate-pulse">
					<Image
						className="dark transition-all duration-500 hover:drop-shadow-[0_0_15px_#8b8b8b] hover:cursor-pointer"
						src="/monogram.svg"
						alt="Stephen Mwingira logo"
						width={150}
						height={38}
						priority
					/>
				</div>
				<ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
					<li className="tracking-[-.01em]">
						Let&apos;s connect on{' '}
						<a
							href="https://www.linkedin.com/in/stephen-mwingira/"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold"
						>
							LinkedIn
						</a>
						.
					</li>
					<li className="tracking-[-.01em]">
						Checkout some of my socials below.
					</li>
				</ol>
			</main>
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm/6"
					href="https://github.com/mister-fix"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src="/github.svg"
						className="dark:invert"
						aria-hidden="true"
						alt="GitHub logo"
						width={16}
						height={16}
					/>
					GitHub
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm/6"
					href="https://dribbble.com/stephenwm"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src="/dribbble.svg"
						className="dark:invert"
						aria-hidden="true"
						alt="Dribbble logo"
						width={16}
						height={16}
					/>
					Dribbble
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm/6"
					href="https://behance.net/stephenwm"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src="/behance.svg"
						className="dark:invert"
						aria-hidden="true"
						alt="Behance logo"
						width={16}
						height={16}
					/>
					Behance
				</a>
			</footer>
		</div>
	);
}
