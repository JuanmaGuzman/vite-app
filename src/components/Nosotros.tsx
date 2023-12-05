import Image from "../assets/nosotros.png";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import Image1 from "../assets/f1.jpeg";
import Image2 from "../assets/f2.jpeg";
import Image3 from "../assets/f3.jpeg";
import Image4 from "../assets/f4.jpeg";
import Image5 from "../assets/f5.jpeg";
import Image6 from "../assets/f6.jpeg";
import Image7 from "../assets/f7.jpeg";
import Image8 from "../assets/f8.jpeg";
import Image9 from "../assets/f9.jpeg";
import Image10 from "../assets/f10.jpeg";
import Image11 from "../assets/f11.jpeg";
import Image12 from "../assets/f12.jpeg";
import Image13 from "../assets/f13.jpeg";
import Image14 from "../assets/f14.jpeg";
import Image15 from "../assets/f15.jpeg";
import Image16 from "../assets/f16.jpeg";
import Image17 from "../assets/f17.jpeg";

function Nosotros() {
	const itemData = [
		{
			img: Image1,
			title: "Title 1",
			description: "Ringo 🐶",
		},
		{
			img: Image2,
			title: "Title 2",
			description: "¡Mates 🧉!",
		},
		{
			img: Image3,
			title: "Title 3",
			description: "Aventuras",
		},
		{
			img: Image4,
			title: "Title 4",
			description: "a.m. ☀️",
		},
		{
			img: Image5,
			title: "Title 5",
			description: "¿Spoilers?",
		},
		{
			img: Image6,
			title: "Title 6",
			description: "Monte Hermoso",
		},
		{
			img: Image7,
			title: "Title 7",
			description: "El zoo",
		},
		{
			img: Image8,
			title: "Title 8",
			description: ":)",
		},
		{
			img: Image9,
			title: "Title 9",
			description: "🎩👠",
		},
		{
			img: Image10,
			title: "",
			description: ":)",
		},
		{
			img: Image11,
			title: "",
			description: ":)",
		},
		{
			img: Image12,
			title: "¡Cheers!",
			description: "¡Cheers 🍻!",
		},
		{
			img: Image13,
			title: "En el monumental 🔴⚪",
			description: "En el monumental 🔴⚪",
		},
		{
			img: Image14,
			title: "Title 14",
			description: "😎",
		},
		{
			img: Image15,
			title: "Title 15",
			description: "Cerrito ⛰️",
		},
		{
			img: Image16,
			title: "Title 16",
			description: "Sur 🌲",
		},
		{
			img: Image17,
			title: "Title 17",
			description: "Europa 🤳",
		},
		// Add more items with imported images
	];

	return (
		<>
			<img src={Image} alt="Nosotros" className="draw-image" />
			<h2 className="section-tittle">Nosotros</h2>
			<h2 className="section-tittle">🐶🐱🧉</h2>
			<p className="section-paragraph">
				Nosotros… es una palabra que nos ha acompañado por más de 4 años, que
				nos es tan fácil decir, que sentimos nos representa día a día y que nos
				acompaña de forma natural casi desde el día que nos conocimos. Es que,
				si nos detenemos a pensarlo un momento, esta es una palabra que con muy
				poco, abarca mucho. Hemos estado largas horas pensando como resumir a
				través de este texto que es lo que somos nosotros, y luego de darle
				muchas vueltas les dejamos esta pequeña reseña, a ver si a ustedes les
				hace sentido: Algunas historias parten en una fiesta, en un bar, en una
				plaza o en cualquier espacio físico en donde se encuentran quienes están
				destinados a hacerlo… pero bueno, este no es nuestro caso. La nuestra
				comienza con una capitana, un capitán, un perro y miles de kilómetros de
				por medio. Aunque para algunos sea difícil de entender, el siglo XXI
				pegó fuerte en nosotros y, si bien nos conocíamos, nuestras primeras
				interacciones fueron por una red social y gracias al famoso “Ringopido”.
				Así partieron las primeras tímidas conversaciones, reacciones, fotos y
				demases. Si bien todo era nerviosismo y aún no nos conocíamos, ambos
				teníamos la sensación de que estábamos frente a algo distinto. Y fue
				justamente esa sensación la que hizo que un 21 de Junio del 2019, mismo
				día en que la capi aterrizó en Chile, el capi fuera a su encuentro…
				ahora si… en un bar. Desde ese día han pasado muchas cosas: salidas,
				paseos, un estallido social, una pandemia, una aventura en el Cajón del
				Maipo, nuestro primer hogar, nuestra Mafi, una beca de dermatología,
				casi una beca de psiquiatría, viajes y muchos otros momentos que han ido
				formando los cimientos del nosotros. Tomando todo esto, nosotros es hoy
				nuestra forma de ver la vida… es acompañarnos en las buenas y en las
				malas, reírnos y llorar juntos, viajar, regalonear, bailar, boludear,
				disfrutar de quienes nos rodean; es soñar, conversar, planificar y
				concretar. Desde el 6 de abril, este nosotros suma un nuevo capítulo a
				su historia, el cual queremos que comience acompañado de todos ustedes,
				quienes son parte importante de nuestra historia. ¡Porque este nosotros
				también es futuro y recién comienza!
			</p>
			<Box
				sx={{
					width: "100%",
					height: 550,
					alignContent: "center", // Center vertically
					overflowY: "scroll",
					backgroundColor: "#E7D7C9",
				}}>
				<ImageList variant="masonry" cols={4} gap={8}>
					{itemData.map((item) => (
						<ImageListItem key={item.img}>
							<img src={item.img} alt={item.title} loading="lazy" />
							<ImageListItemBar position="below" title={item.description} />
						</ImageListItem>
					))}
				</ImageList>
			</Box>
		</>
	);
}

export default Nosotros;
