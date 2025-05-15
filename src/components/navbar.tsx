'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ThemeSwitcher } from './theme-switcher';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed w-full bg-white dark:bg-gray-800 text-slate-600 dark:text-white p-4 shadow-md z-10">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="text-xl font-bold">Gustavo Guillan</h1>

				{/* Botão Hamburguer */}
				<button
					className="lg:hidden text-2xl"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <HiX /> : <HiMenu />}
				</button>

				{/* Menu Desktop */}
				<ul className="hidden lg:flex gap-5 items-center">
					<li>
						<Link href={'#about'}>Sobre</Link>
					</li>
					<li>
						<Link href={'#technologies'}>Tecnologias</Link>
					</li>
					<li>
						<Link href={'#projects'}>Projetos</Link>
					</li>
					<ThemeSwitcher />
				</ul>
			</div>

			{/* Menu Mobile */}
			<AnimatePresence>
				{isOpen && (
					<motion.ul
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-md flex flex-col items-center gap-5 py-6"
					>
						<li>
							<Link href={'#about'} onClick={() => setIsOpen(false)}>
								Sobre
							</Link>
						</li>
						<li>
							<Link href={'#technologies'} onClick={() => setIsOpen(false)}>
								Tecnologias
							</Link>
						</li>
						<li>
							<Link href={'#projects'} onClick={() => setIsOpen(false)}>
								Projetos
							</Link>
						</li>
						<ThemeSwitcher />
					</motion.ul>
				)}
			</AnimatePresence>
		</nav>
	);
}
