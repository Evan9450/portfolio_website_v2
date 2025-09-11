'use client';

import { Award, CheckCircle, Code, Lightbulb, Star, Users } from 'lucide-react';

import React from 'react';
import { achievementsData } from '@/constants';
import { motion } from 'framer-motion';

export default function Achievements() {
	// Animation variants
	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	// Icon mapping function
	const getIcon = (iconName: string) => {
		const iconMap = {
			'check-circle': <CheckCircle className="w-8 h-8 text-white" />,
			star: <Star className="w-8 h-8 text-white" />,
			code: <Code className="w-8 h-8 text-white" />,
			users: <Users className="w-8 h-8 text-white" />,
			lightbulb: <Lightbulb className="w-8 h-8 text-white" />,
			award: <Award className="w-8 h-8 text-white" />,
		};
		return iconMap[iconName as keyof typeof iconMap] || <CheckCircle className="w-8 h-8 text-white" />;
	};

	return (
		<div className="w-full max-w-full px-4 sm:px-8 md:px-12 lg:container pb-16">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={fadeIn}
				className="text-center mb-12"
			>
				<p className="text-muted-foreground w-full md:max-w-2xl md:mx-auto">
					Milestones and recognition that highlight my commitment to excellence in software development.
				</p>
			</motion.div>

			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
			>
				{achievementsData.map((achievement, index) => (
					<motion.div key={index} variants={fadeIn} className="bg-card p-6 rounded-lg text-center">
						<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
							{getIcon(achievement.iconName)}
						</div>
						<h3 className="text-xl font-semibold mb-2 text-foreground">{achievement.title}</h3>
						<p className="text-muted-foreground text-sm">{achievement.description}</p>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
