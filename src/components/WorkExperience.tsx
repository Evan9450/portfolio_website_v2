'use client';

import Link from 'next/link';
import React from 'react';
import { experienceData } from '@/constants';
import { motion } from 'framer-motion';
export default function WorkExperience() {
	const [activeSection, setActiveSection] = React.useState('about');
	const [showBackToTop, setShowBackToTop] = React.useState(false);
	const [activeExperience, setActiveExperience] = React.useState(0);

	// Handle scroll for active section and back to top button
	React.useEffect(() => {
		const handleScroll = () => {
			setShowBackToTop(window.scrollY > 300);

			const sections = ['about', 'experience', 'work', 'contact'];
			const current = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});

			if (current) {
				setActiveSection(current);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="w-full max-w-full px-4 sm:px-8 md:px-12 lg:container pb-16">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="flex flex-col lg:flex-row gap-8">
					{/* Company Tabs */}
					<div className="lg:w-1/3">
						<div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible border-b lg:border-b-0 lg:border-l border-muted-foreground/30">
							{experienceData.map((exp, index) => (
								<button
									key={index}
									onClick={() => setActiveExperience(index)}
									className={`px-4 py-3 text-left text-sm whitespace-nowrap lg:whitespace-normal transition-all duration-200 border-b-2 lg:border-b-0 lg:border-l-2 ${
										activeExperience === index
											? 'border-primary text-primary bg-primary/5'
											: 'border-transparent text-muted-foreground hover:text-primary hover:bg-primary/5'
									}`}
								>
									{exp.company}
								</button>
							))}
						</div>
					</div>

					{/* Experience Content */}
					<div className="lg:w-2/3">
						<motion.div
							key={activeExperience}
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3 }}
							className="space-y-4"
						>
							<div>
								<h3 className="text-xl font-semibold text-foreground mb-1">
									{experienceData[activeExperience].title}{' '}
									<span className="text-primary">
										@{' '}
										<Link
											href={experienceData[activeExperience].companyLink}
											target="_blank"
											rel="noopener noreferrer"
										>
											{experienceData[activeExperience].company}
										</Link>
									</span>
								</h3>
								<p className="font-mono text-sm text-muted-foreground mb-6">
									{experienceData[activeExperience].period}
								</p>
							</div>

							<div className="space-y-3">
								{experienceData[activeExperience].responsibilities.map((responsibility, index) => (
									<div key={index} className="flex items-start gap-3">
										<span className="text-primary mt-2 text-sm">▹</span>
										<p className="text-muted-foreground leading-relaxed">{responsibility}</p>
									</div>
								))}
							</div>

							<div className="flex flex-wrap gap-2 mt-6">
								{experienceData[activeExperience].technologies.map((tech) => (
									<span
										key={tech}
										className="font-mono text-xs bg-primary/10 text-primary px-2 py-1 rounded"
									>
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
