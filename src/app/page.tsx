'use client';

import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Loading from '@/components/Loading';
import Projects from '@/components/Projects';
import React from 'react';
import Sidebar from '@/components/Sidebar';
import WorkExperience from '@/components/WorkExperience';
import { motion } from 'framer-motion';

const LOADING_ANIMATION_DURATION = 2; // 秒

export default function HomePage() {
	// State for back to top button
	const [showBackToTop, setShowBackToTop] = React.useState(false);
	// State for global loading
	const [loading, setLoading] = React.useState(true);
	// 记录Loading动画开始时间
	const [loadingStart, setLoadingStart] = React.useState<number | null>(null);
	// 记录页面加载完成
	const [pageLoaded, setPageLoaded] = React.useState(false);

	// Handle scroll for back to top button
	React.useEffect(() => {
		const handleScroll = () => {
			setShowBackToTop(window.scrollY > 300);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// 记录Loading动画开始时间
	React.useEffect(() => {
		if (loading && loadingStart === null) {
			setLoadingStart(Date.now());
		}
	}, [loading, loadingStart]);

	// 页面加载完成时，等待动画完整播放
	React.useEffect(() => {
		const handleLoad = () => setPageLoaded(true);
		if (document.readyState === 'complete') {
			setPageLoaded(true);
		} else {
			window.addEventListener('load', handleLoad);
			return () => window.removeEventListener('load', handleLoad);
		}
	}, []);

	React.useEffect(() => {
		if (pageLoaded && loadingStart !== null) {
			const elapsed = (Date.now() - loadingStart) / 1000;
			const remaining = LOADING_ANIMATION_DURATION - elapsed;
			if (remaining > 0) {
				const timer = setTimeout(() => setLoading(false), remaining * 1000);
				return () => clearTimeout(timer);
			} else {
				setLoading(false);
			}
		}
	}, [pageLoaded, loadingStart]);

	// Function to scroll to section
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const sections = [
		{ id: 'about', title: 'About Me', Component: About },
		{ id: 'experience', title: "Where I've Worked", Component: WorkExperience },
		{ id: 'achievements', title: 'Achievements & Recognition', Component: Achievements },
		{ id: 'projects', title: "Some Things I've Built", Component: Projects },
	];

	return (
		<div className="min-h-screen bg-background">
			{loading && <Loading duration={LOADING_ANIMATION_DURATION} />}
			{!loading && (
				<>
					<Header scrollToSection={scrollToSection} />

					<div className="lg:flex min-h-screen">
						<Sidebar />

						{/* Main Content */}
						<main className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 ">
							<Hero scrollToSection={scrollToSection} />
							{sections.map(({ id, title, Component }, index) => (
								<section id={id} key={id} className="w-full mx-auto scroll-mt-20">
									<h2
										className="relative flex items-center text-3xl font-bold mb-12
    after:content-[''] after:ml-4 after:h-px after:flex-1 after:max-w-xs after:bg-red-500 after:block"
									>
										<span className="font-mono text-[24px] mr-2 text-red-500">0{index + 1}.</span>
										{title}
									</h2>
									<Component />
								</section>
							))}
							{/* <Contact /> */}
							<Footer />
						</main>
					</div>

					{/* Back to Top Button */}
					{showBackToTop && (
						<motion.button
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							className="fixed bottom-6 right-6 bg-red-600 text-white rounded-xl p-3 shadow-lg z-50 hover:bg-red-700 transition-colors"
							onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
							aria-label="Back to top"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="m18 15-6-6-6 6" />
							</svg>
						</motion.button>
					)}
				</>
			)}
		</div>
	);
}
