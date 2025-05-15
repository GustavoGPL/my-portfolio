'use client';
import { motion } from 'framer-motion';

export default function Contact() {
	return (
		<section id="contact" className="py-20">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl font-bold text-gray-800 dark:text-white">
					Entre em Contato
				</h2>
				<p className="text-gray-600 dark:text-gray-400 mt-2">
					Tem alguma dúvida ou proposta? Me envie uma mensagem!
				</p>

				<motion.form
					className="mt-8 max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<motion.input
						type="text"
						placeholder="Seu Nome"
						className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white mb-4 outline-none focus:ring-2 focus:ring-blue-500"
						whileFocus={{ scale: 1.02 }}
					/>
					<motion.input
						type="email"
						placeholder="Seu Email"
						className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white mb-4 outline-none focus:ring-2 focus:ring-blue-500"
						whileFocus={{ scale: 1.02 }}
					/>
					<motion.textarea
						placeholder="Sua Mensagem"
						className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white mb-4 outline-none focus:ring-2 focus:ring-blue-500"
						rows={4}
						whileFocus={{ scale: 1.02 }}
					/>
					<motion.button
						type="submit"
						className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Enviar
					</motion.button>
				</motion.form>
			</div>
		</section>
	);
}
