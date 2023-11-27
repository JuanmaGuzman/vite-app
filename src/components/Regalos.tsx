function Regalos() {
	return (
		<>
			<h2 className="section-tittle">Regalos 🎁</h2>
			<p className="regalos-paragraph">
				Nuestro mejor regalo es tu presencia, pero si quisieras contribuir con
				nuestro <strong>proyecto de vida</strong>, puedes elegir nuestro regalo
				en Novios Falabella donde armamos nuestra lista, con el código{" "}
				<strong>972086-03</strong> ¡Gracias!
			</p>

			<button
				className="button"
				onClick={() =>
					window.open(
						"https://www.noviosfalabella.com/public/resultadoBusquedaNovios.do",
						"_blank"
					)
				}>
				IR A LA LISTA
			</button>
		</>
	);
}

export default Regalos;
