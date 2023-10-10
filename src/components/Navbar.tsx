import { useState } from "react";
import {
	BsFillHeartFill,
	BsFillInfoCircleFill,
	BsFillPencilFill,
	BsGiftFill,
	BsSpotify,
} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import {
	Box,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";

function Navbar() {
	const [openMenu, setOpenMenu] = useState(false);

	const menuOptions = [
		{
			text: "Nosotros",
			icon: <BsFillHeartFill />,
			sectionId: "nosotros-section", // Add a sectionId for the link
		},
		{
			text: "Información",
			icon: <BsFillInfoCircleFill />,
			sectionId: "informacion-section", // Add a sectionId for the link
		},
		{
			text: "Asistencia",
			icon: <BsFillPencilFill />,
			sectionId: "asistencia-section", // Add a sectionId for the link
		},
		{
			text: "Regalos",
			icon: <BsGiftFill />,
			sectionId: "regalos-section", // Add a sectionId for the link
		},
		{
			text: "Spotify",
			icon: <BsSpotify />,
			sectionId: "spotify-section", // Add a sectionId for the link
		},
	];

	// Function to handle scrolling to a section
	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
			setOpenMenu(false); // Close the menu after clicking a link
		}
	};

	return (
		<nav>
			<div className="navbar-container">
				<div className="logo">
					<a
						onClick={() => scrollToSection("inicio-section")} // Call scrollToSection
						style={{ cursor: "pointer" }} // Add pointer cursor for links
					>
						M&D
					</a>
				</div>
				<div className="navbar-links-container">
					{menuOptions.map((item) => (
						<a
							key={item.text}
							onClick={() => scrollToSection(item.sectionId)} // Call scrollToSection
							style={{ cursor: "pointer" }} // Add pointer cursor for links
						>
							{item.text}
						</a>
					))}
				</div>
				<div className="navbar-menu-container">
					<GiHamburgerMenu onClick={() => setOpenMenu(true)} />
				</div>
			</div>
			<Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
				<Box sx={{ width: 250 }} role="presentation">
					<List>
						{menuOptions.map((item) => (
							<ListItem key={item.text} disablePadding>
								<ListItemButton onClick={() => scrollToSection(item.sectionId)}>
									<ListItemIcon>
										<span style={{ color: "#333" }}>{item.icon}</span>
									</ListItemIcon>
									<ListItemText
										primary={item.text}
										primaryTypographyProps={{
											style: { color: "#333" },
										}}
									/>{" "}
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</nav>
	);
}

export default Navbar;
