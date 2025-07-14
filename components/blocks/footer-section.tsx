'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FacebookIcon, FrameIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';
import { DottedText } from '@/components/ui/dotted-text';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Product',
		links: [
			{ title: 'Features', href: '#features' },
			{ title: 'Pricing', href: '#pricing' },
			{ title: 'Testimonials', href: '#testimonials' },
			{ title: 'Integration', href: '/' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'FAQs', href: '/faqs' },
			{ title: 'About Us', href: '/about' },
			{ title: 'Privacy Policy', href: '/privacy' },
			{ title: 'Terms of Services', href: '/terms' },
		],
	},
	{
		label: 'Resources',
		links: [
			{ title: 'Blog', href: '/blog' },
			{ title: 'Changelog', href: '/changelog' },
			{ title: 'Brand', href: '/brand' },
			{ title: 'Help', href: '/help' },
		],
	},
	{
		label: 'Social Links',
		links: [
			{ title: 'Facebook', href: '#', icon: FacebookIcon },
			{ title: 'Instagram', href: '#', icon: InstagramIcon },
			{ title: 'Youtube', href: '#', icon: YoutubeIcon },
			{ title: 'LinkedIn', href: '#', icon: LinkedinIcon },
		],
	},
];

export function Footer() {
	return (
		<footer className="relative w-full flex flex-col items-center justify-center rounded-t-2xl sm:rounded-t-4xl md:rounded-t-6xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] py-8 sm:py-12 lg:py-16">
			<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			{/* Large CRATE dotted text */}
			<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
				<DottedText 
					text="CRATE" 
					className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[16rem] xl:text-[20rem] opacity-5 select-none"
				/>
			</div>

			<div className="container mx-auto px-4 sm:px-6 relative z-10">
				<div className="grid w-full gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-8">
					<AnimatedContainer className="space-y-4 text-center lg:text-left">
						<FrameIcon className="size-8 mx-auto lg:mx-0" />
						<p className="text-muted-foreground text-sm">
							© {new Date().getFullYear()} Crate. All rights reserved.
						</p>
					</AnimatedContainer>

					<div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 lg:col-span-2">
						{footerLinks.map((section, index) => (
							<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
								<div className="text-center sm:text-left">
									<h3 className="text-xs font-medium mb-3 sm:mb-4">{section.label}</h3>
									<ul className="text-muted-foreground space-y-2 text-sm">
										{section.links.map((link) => (
											<li key={link.title}>
												<a
													href={link.href}
													className="hover:text-foreground inline-flex items-center justify-center sm:justify-start transition-all duration-300"
												>
													{link.icon && <link.icon className="me-1 size-4" />}
													{link.title}
												</a>
											</li>
										))}
									</ul>
								</div>
							</AnimatedContainer>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};