import Image from "../assets/informacion.png";

function Informacion() {
	return (
		<>
			<img src={Image} alt="Informacion" className="draw-image" />
			<h2 className="section-tittle">Información</h2>
			<div className="row">
				<div className="block">
					<h3 className="section-subtittle">¿Cuándo?</h3>
					<p className="section-paragraph">Sábado 6 de abril del 2024.</p>
					<p className="section-paragraph">Hora inicio ceremonia: 17:00 hrs</p>
					<p className="section-paragraph">Hora fin fiesta: 4:00 hrs</p>
				</div>
				<div className="block">
					<h3 className="section-subtittle">¿Dónde?</h3>
					<p className="section-paragraph">
						Casa Parque Nos - Camino Padre Hurtado 19047, San Bernardo, Región
						Metropolitana
					</p>
					<p className="section-paragraph">(estacionamiento disponible)</p>
				</div>

				<div className="block">
					<h3 className="section-subtittle">Otros</h3>
					<p className="section-paragraph">Teñida formal</p>
				</div>
			</div>

			<div className="waze-block">
				<iframe
					src="https://embed.waze.com/iframe?zoom=16&lat=-33.644027&lon=-70.667709&ct=livemap"
					width="100%"
					height="400"
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
				<a
					className="section-paragraph"
					href="https://www.waze.com/ul?ll=-33.644027,-70.667709&navigate=yes"
					target="_blank"
					rel="noopener noreferrer">
					Abrir en Waze
				</a>
			</div>
		</>
	);
}

export default Informacion;
