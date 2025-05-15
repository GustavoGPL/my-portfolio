'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';

export function ThemeSwitcher() {
	const { setTheme, theme, systemTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Garante que o tema só é renderizado no cliente
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null; // Evita erro de hidratação

	const currentTheme = theme === 'system' ? systemTheme : theme;

	return (
		<div className="flex items-center cursor-pointer">
			{currentTheme === 'light' ? (
				<div
					onClick={() => setTheme('dark')}
					className="flex items-center gap-2 bg-gray-800 text-white px-1 py-1 rounded-2xl"
				>
					<LuSun />
				</div>
			) : (
				<div
					onClick={() => setTheme('light')}
					className="flex items-center gap-2 bg-gray-500 px-1 py-1 rounded-2xl"
				>
					<LuMoon />
				</div>
			)}
		</div>
	);
}
