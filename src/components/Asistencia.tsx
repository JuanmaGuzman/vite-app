function Asistencia() {
	return (
		<>
			<h3 className="asistencia-tittle">¿Nos acompañas o te lo pierdes?</h3>
			<p className="asistencia-paragraph">
				Esperamos compartir este gran día junto a ti.{" "}
				<strong>Por favor responde antes del 15 de Febrero de 2023.</strong>
			</p>
			{/* Embed Google Form using an iframe */}
			<iframe
				title="Google Form"
				src="https://docs.google.com/forms/d/e/1FAIpQLSch_OLzAoTTNRDcxf_YLGjJ_4-2Wdvh5pkF3w_82RxRYmD_2A/viewform"
				width="100%"
				height="1500">
				Cargando…
			</iframe>
		</>
	);
}

export default Asistencia;
