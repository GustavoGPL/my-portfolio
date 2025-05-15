import Contact from '@/components/contact';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import Navbar from '@/components/navbar';
import Projects from '@/components/projects';
import Technologies from '@/components/technologies';

export default function Home() {
	return (
		<div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
			<Navbar />
			<HeroSection />
			<Technologies />
			<Projects />
			{/* <Contact /> */}
			<Footer />
		</div>
	);
}
