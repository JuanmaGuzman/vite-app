import Image from "../assets/informacion.png";

function Informacion() {
	return (
		<>
			<img src={Image} alt="Informacion" className="draw-image" />
			<h2 className="section-tittle">Información</h2>
			<div className="row">
				<div className="block">
					<h3 className="section-subtittle">¿Cuándo?</h3>
					<p className="section-paragraph">Sábado 06/04/2024</p>
					<p className="section-paragraph">Hora inicio ceremonia: 18:00 hrs</p>
					<p className="section-paragraph">Hora fin fiesta: 5:00 hrs</p>
				</div>
				<div className="block">
					<h3 className="section-subtittle">¿Dónde?</h3>
					<p className="section-paragraph">
						Casa Parque Nos - Camino Padre Hurtado 19047, San Bernardo, Región
						Metropolitana
					</p>
					<p className="section-paragraph">(estacionamiento disponible)</p>
				</div>
			</div>
		</>
	);
}

export default Informacion;
