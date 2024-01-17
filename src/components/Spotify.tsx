function Spotify() {
	const playlistUrl =
		"https://open.spotify.com/playlist/3vJBmPbjNuuAgkBqFqwGpE?si=bb40ff19073d4c7c"; // Replace with your playlist URL
	const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

	const openSpotifyToAddSongs = () => {
		// If on a mobile device, attempt to open the Spotify app
		window.location.href = playlistUrl;
	};

	return (
		<>
			<h2 className="section-tittle">¡Disfrutemos todos la fiesta!</h2>
			<div className="spotify-row">
				<div className="spotify-block">
					<h3 className="spotify-tittle">¿Qué canciones no puede faltar?</h3>
					<p className="section-paragraph">
						¡Agrega a nuestra Playlist de Spotify esas canciones que no pueden
						faltar en nuestro gran día!
					</p>
					<button className="button" onClick={openSpotifyToAddSongs}>
						AGREGAR CANCIONES
					</button>
					<p className="section-paragraph">
						(Si tienes problemas agregando canciones escríbenos a nosotros así
						las agregamos por tí)
					</p>
				</div>

				<div className="spotify-block-two">
					<div className="iframe-container">
						<iframe
							src="https://open.spotify.com/embed/playlist/3vJBmPbjNuuAgkBqFqwGpE?utm_source=generator&theme=0"
							width="100%"
							height="400"
							frameBorder="0"
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							loading="lazy"></iframe>
					</div>
				</div>
			</div>
		</>
	);
}

export default Spotify;
