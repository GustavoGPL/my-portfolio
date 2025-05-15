'use client';
import Link from 'next/link';
import { motion } from 'motion/react';
import { FaBrain, FaWhatsapp } from 'react-icons/fa';
import { IoLogoLinkedin, IoMdDownload } from 'react-icons/io';
import { IoRocketSharp, IoLockClosed, IoColorPalette } from 'react-icons/io5';
import { useEffect } from 'react';

export default function HeroSection() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'auto' });
	}, []);

	return (
		<section
			id="about"
			className="h-screen flex justify-center pt-40 sm:pt-0 items-center text-center text-slate-600 dark:text-white p-6"
		>
			<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
				<h2 className="text-4xl md:text-6xl font-bold">
					Olá, eu sou Gustavo Guillan
				</h2>
				<p className="container text-center text-xl text-gray-500 dark:text-gray-400 mt-4">
					Sou desenvolvedor Full-Stack apaixonado por criar aplicações web
					modernas, performáticas e escaláveis.
				</p>
				<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
					<div className="bg-white dark:bg-slate-800 border border-blue-200 dark:border-slate-600 p-4 rounded-xl shadow-md flex items-center gap-3">
						<span className="text-blue-500 text-xl">
							<IoRocketSharp />
						</span>
						<p>Desenvolvimento Full-Stack com React, Next.js e Node.js</p>
					</div>
					<div className="bg-white dark:bg-slate-800 border border-blue-200 dark:border-slate-600 p-4 rounded-xl shadow-md flex items-center gap-3">
						<span className="text-green-500 text-xl">
							<FaBrain />
						</span>
						<p>Criação de APIs RESTful bem estruturadas</p>
					</div>
					<div className="bg-white dark:bg-slate-800 border border-blue-200 dark:border-slate-600 p-4 rounded-xl shadow-md flex items-center gap-3">
						<span className="text-pink-500 text-xl">
							<IoColorPalette />
						</span>
						<p>Interfaces modernas com Tailwind CSS</p>
					</div>
					<div className="bg-white dark:bg-slate-800 border border-blue-200 dark:border-slate-600 p-4 rounded-xl shadow-md flex items-center gap-3">
						<span className="text-yellow-500 text-xl">
							<IoLockClosed />
						</span>
						<p>Autenticação segura com JWT, OAuth e boas práticas</p>
					</div>
				</div>
				<motion.div
					className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium mt-6"
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.1,
					}}
				>
					<Link
						href="https://api.whatsapp.com/send?phone=5585996890795"
						className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg w-60"
						target="_blank"
					>
						Entre em contato
						<FaWhatsapp size={23} />
					</Link>
					<Link
						href={'https://www.linkedin.com/in/gustavo-guillan/'}
						target="_blank"
						// download
						className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg w-60"
					>
						LinkedIn
						<IoLogoLinkedin size={23} />
					</Link>
					<Link
						href={'/assets/Currículo_Gustavo_Guillan_2025.pdf'}
						target="_blank"
						// download
						className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg w-60"
					>
						Baixar Currículo
						<IoMdDownload size={23} />
					</Link>
				</motion.div>
			</motion.div>
		</section>
	);
}
