'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import selfie from '@/assets/selfie.jpg';
import { siteConfig } from '@/constants';

interface HeroProps {
	scrollToSection: (id: string) => void;
}
export default function Hero({ scrollToSection }: HeroProps) {
	// Animation variants
	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<section id="home" className="container pb-16 md:py-32">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<motion.div initial="hidden" animate="visible" variants={fadeIn}>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
						Hi, I'm <span className="text-primary">{siteConfig.name}</span>
					</h1>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.8 }}
					>
						<h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
							{siteConfig.title}
						</h2>
					</motion.div>
					<motion.p
						className="text-muted-foreground max-w-md mb-8"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.8 }}
					>
						Passionate and detail-oriented Full Stack Engineer with over 5 years of experience in developing
						scalable, high-performance web applications. Proficient in modern frontend and backend
						technologies, including Next.js, React, Python. Adept at building responsive user interfaces,
						implementing robust APIs, and optimizing applications for performance and security. Passionate
						about AI-driven solutions.
					</motion.p>
					<motion.div
						className="flex gap-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.8 }}
					>
						<a href="/resume/Liang Shi.pdf" download>
							<Button variant="default" className="mr-2">
								Resume
							</Button>
						</a>
						<Button
							variant="ghost"
							className="bg-transparent hover:bg-transparent hover:text-[#940913]"
							onClick={() => window.location.href = 'mailto:evan9450@email.com'}
							>
							Get in Touch -&gt;
						</Button>
					</motion.div>
				</motion.div>
				<motion.div
					className="relative"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
				>
					<div className="aspect-square rounded-full overflow-hidden max-w-[300px] mx-auto border-8 border-[#940913]/20">
						<Image src={selfie} alt="Liang Shi" className="object-cover w-full h-full" priority />
					</div>
					<div className="absolute -bottom-4 -right-4 bg-background border hover:border-red-500 hover:text-red-500 rounded-lg p-4 shadow-lg">
						<p className="font-mono text-sm  cursor-default">5+ Years Experience</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
