import transportManager from '../../public/images/transport-manager-telaInicial.png';
import infraestrutural from '../../public/images/TelaInicioTCC.png';
import portfolioLuma from '../../public/images/portfolioLuma.png';
import cronometroEstudos from '../../public/images/cronometro-de-estudos.png';

import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaNodeJs,
	FaGitAlt,
	FaGithub,
} from 'react-icons/fa';
import {
	SiTypescript,
	SiNextdotjs,
	SiTailwindcss,
	SiMongodb,
	SiAxios,
} from 'react-icons/si';

export const technologies = [
	{ name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
	{ name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
	{ name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
	{ name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
	{ name: 'React.js', icon: FaReact, color: 'text-blue-400' },
	{
		name: 'Next.js',
		icon: SiNextdotjs,
		color: 'text-gray-800 dark:text-white',
	},
	{ name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
	{ name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
	{ name: 'MongoDB', icon: SiMongodb, color: 'text-green-700' },
	{ name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
	{ name: 'GitHub', icon: FaGithub, color: 'text-gray-900 dark:text-white' },
	{ name: 'Axios', icon: SiAxios, color: 'text-purple-500' },
];
export const projectsData = [
	{
		id: 1,
		name: 'Portfólio Psicóloga',
		description:
			'Portfólio real feito para uma profissional da área da psicologia.',
		image: portfolioLuma,
		tech: [
			{
				name: 'Next.js',
				icon: SiNextdotjs,
				color: 'text-gray-800 dark:text-white',
			},
			{ name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
			{ name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
		],
		hrefRepository: 'https://github.com/GustavoGPL/new-portfolio-luma',
		hrefDeploy: 'https://lumabeatrizpsic.vercel.app/',
	},
	{
		id: 2,
		name: 'Transport Manager',
		description: 'Sistema para Acompanhamento e Gerenciamento de Entregas',
		image: transportManager,
		tech: [
			{
				name: 'Next.js',
				icon: SiNextdotjs,
				color: 'text-gray-800 dark:text-white',
			},
			{ name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
			{ name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
		],
		hrefRepository: 'https://github.com/GustavoGPL/transport-manager-front',
		hrefDeploy: 'https://transport-manager-front.vercel.app/',
	},
	{
		id: 3,
		name: 'Infraestrutural',
		description:
			'Sistema para Gerenciamento de Problemas Estruturais no Ambiente Acadêmico',
		image: infraestrutural,
		tech: [
			{
				name: 'Next.js',
				icon: SiNextdotjs,
				color: 'text-gray-800 dark:text-white',
			},
			{ name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
			{ name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
		],
		hrefRepository: 'https://github.com/GustavoGPL/tcc-project',
		hrefDeploy: '',
	},
	{
		id: 4,
		name: 'Focus-Time',
		description:
			'Sistema de cronômetro com estatísticas do tempo estudado por matéria',
		image: cronometroEstudos,
		tech: [
			{
				name: 'Next.js',
				icon: SiNextdotjs,
				color: 'text-gray-800 dark:text-white',
			},
			{ name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
			{ name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
		],
		hrefRepository: 'https://github.com/GustavoGPL/focus-time',
		hrefDeploy: 'https://task-frontend-vicio.vercel.app/',
	},
];
