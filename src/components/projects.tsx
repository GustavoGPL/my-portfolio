'use client';
import { projectsData } from '@/lib/data';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Projects() {
	return (
		<section id="projects" className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
			<motion.div
				className="container mx-auto text-center"
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{
					delay: 0.1,
				}}
			>
				<h2 className="text-3xl font-bold text-slate-600 dark:text-white">
					Projetos
				</h2>
				<p className="text-gray-500 dark:text-gray-400 mt-2">
					Confira alguns dos meus trabalhos
				</p>
				<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
					{projectsData.map(project => (
						<div
							key={project.id}
							className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col lg:flex-row"
						>
							<div className="relative w-full h-48 rounded-lg overflow-hidden">
								<Image
									src={project.image}
									alt={project.name}
									width={500} // Ajuste conforme necessário
									height={300} // Ajuste conforme necessário
									style={{ objectFit: 'cover' }}
									className="rounded-lg"
								/>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-gray-700 dark:text-white mt-4">
									{project.name}
								</h3>
								<p className="text-gray-500 dark:text-gray-300 mt-2 flex-grow">
									{project.description}
								</p>
								<div className="flex flex-col gap-2 items-center mt-4">
									{project.hrefDeploy ? (
										<Link
											href={project.hrefDeploy}
											target="_blank"
											className="flex items-center gap-2 text-center bg-blue-500 text-white py-1 px-4 rounded-lg shadow-md hover:bg-blue-600 transition w-1/2"
										>
											Visitar site
											<FaExternalLinkAlt />
										</Link>
									) : (
										''
									)}
									<Link
										href={project.hrefRepository}
										target="_blank"
										className="flex items-center gap-2 text-center bg-blue-500 text-white py-1 px-4 rounded-lg shadow-md hover:bg-blue-600 transition w-1/2"
									>
										Repositório
										<FaGithub />
									</Link>
								</div>
								<div className="flex justify-center mt-5 gap-3">
									{project.tech.map(tec => (
										<tec.icon key={tec.name} className={tec.color} size={22} />
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
