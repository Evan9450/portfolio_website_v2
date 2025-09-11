'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/constants';

export default function About() {
	// Animation variants
	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	const categoryColors: Record<string, string> = {
		Frontend: 'bg-blue-500 text-white',
		Backend: 'bg-green-500 text-white',
		Database: 'bg-red-500 text-white',
		DevOps: 'bg-yellow-500 text-white',
		Cloud: 'bg-purple-500 text-white',
	};

	const skillsData = [
		{
			name: 'React',
			category: 'Frontend',
		},
		{
			name: 'Next.js',
			category: 'Frontend',
		},
		{ name: 'TypeScript', category: 'Frontend' },
		{
			name: 'Tailwind CSS',
			category: 'Frontend',
		},
		{ name: 'Python', category: 'Backend' },
		{ name: 'Django', category: 'Backend' },
		{ name: 'PostgreSQL', category: 'Database' },
		{
			name: 'MySQL',
			category: 'Database',
		},
		{ name: 'DynamoDB', category: 'Database' },
		{ name: 'Docker', category: 'DevOps' },
		{ name: 'AWS', category: 'Cloud' },
		{ name: 'MUI', category: 'Frontend' },
	];

	return (
		<div className="w-full max-w-full px-4 sm:px-8 md:px-12 lg:container pb-16">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={fadeIn}
				className="w-full text-center md:max-w-3xl md:mx-auto"
			>
				<p className="text-muted-foreground mb-8">
					Passionate and detail-oriented Full Stack Engineer with over 5 years of experience in developing
					scalable, high-performance web applications. Proficient in modern frontend and backend technologies,
					including Next.js, React, Python. Adept at building responsive user interfaces, implementing robust
					APIs, and optimizing applications for performance and security. Passionate about AI-driven
					solutions.
				</p>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
					<div className="bg-card p-4 rounded-lg shadow-sm">
						<h3 className="font-bold text-xl text-foreground">5+</h3>
						<p className="text-sm text-muted-foreground">Years Experience</p>
					</div>
					<div className="bg-card p-4 rounded-lg shadow-sm">
						<h3 className="font-bold text-xl text-foreground">20+</h3>
						<p className="text-sm text-muted-foreground">Projects Completed</p>
					</div>
					<div className="bg-card p-4 rounded-lg shadow-sm">
						<h3 className="font-bold text-xl text-foreground">10+</h3>
						<p className="text-sm text-muted-foreground">Happy Clients</p>
					</div>
					<div className="bg-card p-4 rounded-lg shadow-sm">
						<h3 className="font-bold text-xl text-foreground">10+</h3>
						<p className="text-sm text-muted-foreground">Technologies</p>
					</div>
				</div>
				<h3 className="text-xl font-semibold mb-6">My Skills</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
					{skillsData.map((skill, index) => (
						<div
							key={index}
							className="relative group overflow-hidden rounded-xl p-2 border border-white/20 hover:border-white/40 transition-all duration-500"
						>
							{/* Liquid Glass Background */}
							<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-transparent backdrop-blur-xl"></div>
							<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/2 to-white/5"></div>

							{/* Animated Liquid Effect */}
							<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

							{/* Content */}
							<div className="relative z-10">
								<div className="flex items-center justify-between">
									<h2 className="text-sm font-bold text-white drop-shadow-lg">{skill.name}</h2>
									<span
										className={`inline-block px-2 py-1 text-[10px] rounded-full backdrop-blur-sm ${
											categoryColors[skill.category] || 'bg-gray-500 text-white'
										}`}
									>
										{skill.category}
									</span>
								</div>
							</div>

							{/* Subtle Glow Effect */}
							<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						</div>
					))}
				</div>
			</motion.div>
		</div>
	);
}
