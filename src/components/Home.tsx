import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Nosotros from "./Nosotros";
import Informacion from "./Informacion";
import Regalos from "./Regalos";
import Spotify from "./Spotify";
import Footer from "./Footer";
import Asistencia from "./Asistencia";

import p1 from "../assets/p1.png";
import portada from "../assets/portada.jpeg";
import p2 from "../assets/p2.png";

function Home() {
	const [countdownText, setCountdownText] = useState("");

	const images = [
		{ src: p1, alt: "Foto de portada" },
		{ src: portada, alt: "Foto de portada", className: "portada-img" },
		{ src: p2, alt: "Foto de portada" },
	];

	const itemData = [
		{
			img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
			title: "Bed",
			author: "swabdesign",
		},
		{
			img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
			title: "Books",
			author: "Pavel Nekoranec",
		},
		{
			img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
			title: "Sink",
			author: "Charles Deluvio",
		},
		{
			img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
			title: "Kitchen",
			author: "Christian Mackie",
		},
		{
			img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
			title: "Blinds",
			author: "Darren Richardson",
		},
		{
			img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
			title: "Chairs",
			author: "Taylor Simpson",
		},
		{
			img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
			title: "Laptop",
			author: "Ben Kolde",
		},
		{
			img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
			title: "Doors",
			author: "Philipp Berndt",
		},
		{
			img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
			title: "Coffee",
			author: "Jen P.",
		},
		{
			img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
			title: "Storage",
			author: "Douglas Sheppard",
		},
		{
			img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
			title: "Candle",
			author: "Fi Bell",
		},
		{
			img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
			title: "Coffee table",
			author: "Hutomo Abrianto",
		},
	];

	function calculateCountdown() {
		const eventDate = new Date("2024-04-06T00:00:00");
		const now = new Date().getTime();
		const timeRemaining: number = eventDate.getTime() - now;

		if (timeRemaining <= 0) {
			return "¡Ya estamos felizmente casados!";
		}

		const days: number = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
		const hours: number = Math.floor(
			(timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes: number = Math.floor(
			(timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
		);
		const seconds: number = Math.floor((timeRemaining % (1000 * 60)) / 1000);

		return `Estamos contando los días: ${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos.`;
	}

	// Update the countdown every second
	useEffect(() => {
		const interval = setInterval(() => {
			setCountdownText(calculateCountdown());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="home-container">
			<Navbar />
			<div className="home-banner-container" id="inicio-section">
				<div className="home-images-container">
					{images.map((image, index) => (
						<img
							key={index}
							src={image.src}
							alt={image.alt}
							className={image.className}
							height={"500"}
						/>
					))}
				</div>
				<div className="home-text-section">
					<h3 className="primary-text">06 | 04 | 2024</h3>
					<p className="countdown-text">{countdownText}</p>
				</div>
			</div>
			<div className="nosotros-banner-container" id="nosotros-section">
				<Nosotros />
			</div>
			<div className="informacion-banner-container" id="informacion-section">
				<Informacion />
			</div>
			<div className="asistencia-banner-container" id="asistencia-section">
				<Asistencia />
			</div>
			<div className="regalos-banner-container" id="regalos-section">
				<Regalos />
			</div>
			<div className="spotify-banner-container" id="spotify-section">
				<Spotify />
			</div>
			<div className="footer-banner-container" id="footer-section">
				<Footer />
			</div>
		</div>
	);
}

export default Home;
