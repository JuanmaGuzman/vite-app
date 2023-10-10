function Spotify() {
	const playlistUrl = "https://open.spotify.com/playlist/yPI0iLOuoDb"; // Replace with your playlist URL
	const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

	const openSpotifyToAddSongs = () => {
		// If on a mobile device, attempt to open the Spotify app
		window.location.href = `spotify://playlist/yPI0iLOuoDb`;
	};

	return (
		<>
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
				</div>

				<div className="spotify-block">
					<iframe
						src="https://open.spotify.com/embed/playlist/37i9dQZEVXbL0GavIqMTeb?utm_source=generator&theme=0"
						width="70%"
						height="400"
						frameBorder="0"
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"></iframe>
				</div>
			</div>
		</>
	);
}

export default Spotify;
