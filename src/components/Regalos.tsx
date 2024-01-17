function Regalos() {
	return (
		<>
			<h2 className="section-tittle">Regalos 🎁</h2>
			<p className="section-paragraph">
				Nuestro mejor regalo es tu presencia, pero si quisieras contribuir con
				nuestro <strong>proyecto de vida</strong>, puedes elegir nuestro regalo
				en Novios Falabella o depositarnos directamente a nuestra cuenta de
				banco. ¡Gracias!
			</p>

			<div className="row">
				<div className="block">
					<h3 className="section-subtittle">Lista Falabella</h3>
					<p className="section-paragraph">
						En Novios Falabella donde armamos nuestra lista, con el código{" "}
						<strong>972086-03</strong>
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
				</div>
				<div className="block">
					<h3 className="section-subtittle">Cuenta bancaria</h3>
					<p className="section-paragraph-deposit">
						Nombre: Damian Bennett Miller
					</p>

					<p className="section-paragraph-deposit">Rut: 17.895.683-3</p>

					<p className="section-paragraph-deposit">
						Tipo de cuenta: Cuenta Corriente
					</p>

					<p className="section-paragraph-deposit">
						Número de cuenta: 0 000 92 25720 7
					</p>

					<p className="section-paragraph-deposit">Banco: Banco Santander</p>

					<p className="section-paragraph-deposit">Correo: dbennett@uc.cl</p>
				</div>
			</div>
		</>
	);
}

export default Regalos;
