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
		// Add more items with imported images
	];

	return (
		<>
			<img src={Image} alt="Nosotros" className="draw-image" />
			<h2 className="section-tittle">Nosotros</h2>
			<p className="section-paragraph">
				Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
				molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
				fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
				elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
				lectus. Class aptent taciti sociosqu ad litora torquent per conubia
				nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
				egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse
				ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
				convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
				Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
				molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
				fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
				elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
				lectus. Class aptent taciti sociosqu ad litora torquent per conubia
				nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
				egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse
				ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
				convallis convallis diam sit amet lacinia. Aliquam in elementum tellus
				Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
				Curabitur vel bibendum lorem.
			</p>
			<Box
				sx={{
					width: "100%",
					height: 550,
					alignContent: "center", // Center vertically
					overflowY: "scroll",
					backgroundColor: "#f8f4f4",
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
