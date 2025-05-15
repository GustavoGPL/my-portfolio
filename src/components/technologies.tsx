'use client';
import { technologies } from '@/lib/data';
import { motion } from 'framer-motion';

export default function Technologies() {
	return (
		<section id="technologies" className="py-20 px-6 sm:mt-0 mt-32">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl font-bold text-slate-600 dark:text-white">
					Tecnologias
				</h2>
				<p className="text-gray-500 dark:text-gray-400 mt-2">
					As principais tecnologias que utilizo
				</p>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
					{technologies.map((tech, index) => (
						<motion.div
							key={index}
							className="flex flex-col items-center p-3 bg-transparent sm:bg-white sm:dark:bg-gray-800 rounded-lg sm:shadow-md"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 0.1 }}
							whileHover={{ scale: 1.1, rotate: 3 }}
						>
							<div className="text-5xl">
								<tech.icon className={tech.color} />
							</div>
							<p className="mt-2 text-gray-800 dark:text-white font-medium">
								{tech.name}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
