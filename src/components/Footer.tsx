import { BsFillEnvelopeAtFill, BsWhatsapp } from "react-icons/bs";

function Footer() {
	return (
		<div className="footer-section">
			<p className="footer-text">Elaborado por Juan Martín Guzmán Salas</p>
			<p className="footer-text">Contacto:</p>
			<div className="contact-icons">
				<a href="mailto:jmguzman1@uc.cl" className="icon-link">
					<BsFillEnvelopeAtFill className="icon" />
				</a>
				<a
					href="https://api.whatsapp.com/send?phone=56974307295"
					className="icon-link"
					target="_blank"
					rel="noopener noreferrer">
					<BsWhatsapp className="icon" />
				</a>
			</div>
		</div>
	);
}

export default Footer;
