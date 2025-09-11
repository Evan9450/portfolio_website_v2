'use client';

import { ArrowRight, ExternalLink, Folder, Github } from 'lucide-react';

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/constants';

export default function Projects() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
		>
			<div className="mt-12 pb-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-6">
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="bg-secondary p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300 group"
						>
							<div className="flex items-center justify-between mb-4">
								<Folder className="h-8 w-8 text-primary" />
								<div className="flex gap-3">
									<a
										href={project.liveLink}
										target="_blank"
										rel="noopener noreferrer"
										className="text-muted-foreground hover:text-primary transition-colors"
									>
										<ExternalLink className="h-5 w-5" />
									</a>
								</div>
							</div>
							<h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
								{project.title}
							</h4>
							<p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
							<div className="flex flex-wrap gap-2 font-mono text-xs">
								{project.technologies.map((tech: string) => (
									<span key={tech} className="text-muted-foreground">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	);
}
