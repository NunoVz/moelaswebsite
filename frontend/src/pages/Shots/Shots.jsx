import React from "react";
import { Shot } from "../../components";

import "./Shots.css";

const Shots = () => {
	const shots = {

		"SHOTS": {
			"Tropical": "Vodka,Safari,Sumo Maracuja",
			"Tequila À Mexicana": "Tequila,Sal,Limão",
			"Tequila Bum-Bum": "Tequila,Gasosa",
			"Dragon Ball": "Absinto,Gold Strike",
			"Dragon Ball ZZZ": "Absinto,Gold Strike,Vodka",
			"Dragon Ball GT": "Absinto,Gold Strike,Groselha",
			"Mamada": "Licor Creme,Whisky,Natas",
			"Unha Verde": "Vodka,Malibu,Pisang",
			"Unha Azul": "Vodka,Malibu,Blue Coração",
			"Unha Vermelha": "Vodka,Malibu,Groselha",
			"Unha Branca": "Vodka,Malibu,Gold Strike",
			"Kalasnikov": "Vodka,Absinto,Limão,Açúcar",
			"Blue": "Sumo Laranja,Absinto,Blue Coração",
			"Red": "Sumo Laranja,Absinto,Groselha",
			"Come e Bebe": "Vodka,Licor Café,Natas",
			"Gold Liquer": "Gold Liquer",
			"Peach": "Vodka,Licor Pêssego,Absinto,Sumo Laranja",
			"Picar o Ponto": "Aniz,Frangelico,Licor Creme Whisky",
			"Moranguito": "Vodka,Batida Côco,Groselha",
			"Branquinha": "Licor de Café,Espuma de Cerveja",
			"Queima 99": "Absinto,Medronho com Mel,Groselha",
			"Queimadinha": "Vodka,Grãos de Café,Licor Café,Absinto",
			"Sonhos": "Triple Sec,Licor Creme Whisky,Groselha",
			"Ilusões": "Malibu,Pisang,Sumo Ananás",
			"Fantasias": "Vodka,Malibu,Safari",
			"Stupid Mexican": "Aniz,Tequila,Piri Piri",
			"Cai de Cu": "Licor Cacau,Brandy,Vodka",
			"Penúltimo": "Gin,Licor Menta",
			"Granada": "Rum,Licor Café,Rum",
			"B.M.W.": "Brandy,Malibu,Whisky",
			"Rum Louco": "Rum,Batida Côco,Blue Coração",
			"Blue Sky": "Gin,Blue Coração",
			"Beneno": "TOP SECRET",
			"Xicos": "TOP SECRET",
			"Amarelinha": "Vodka,Triple Sec,Sumo Lima",
			"Medicina": "Licor Pêssego,Licor Café,Gold Strike",
			"Flat Liner": "Tequila,Absinto,Piri Piri",
			"TNT": "Brandy,Poncha,Bagaço",
			"Queima 2000": "Licor Maçã Verde,Licor Fisher Geist",
			"Força no Pau": "Tequila,Licor Força no Pau",
			"Chupa o Shot": "Chupa,Bebida Destilada da Casa[Vodka,Gin,Rum,Whisky,Tequila]",
			"Pastel de Nata": "Licor Café,Doce de Ovo",
			"Abóbora": "Gin,Safari,Natas,Licor Côco",
			"T.P.V.": "Vodka,Triple Sec,Groselha",
			"ARCA/ETAC": "Aguardente de Cana,Rum, Orange Coração",
			"Friendly": "Vodka,Licor Whisky,Licor Banana,Orange Coração",
			"Caraíbas": "Bacardi Limon,Schennaps de Morango",
			"White Castle": "Licor Café,Licor Creme Whisky,Natas",
			"Período": "Aniz,Groselha,Licor Creme Whisky",
			"Antropologia": "Rum,Vodka,Blue Coração",
			"Economia": "Gin,Vodka,Groselha",
			"Vasco da Gama": "Absinto,Vodka,Groselha",
			"Português/Inglês": "Vodka Melão,Gin,Blue Coração",
			"Tuna Medicina": "Bacardi Limon,Safari,Sumo Ananás",
			"Geopedrada": "Vodka,Tequila,Licor Café",
			"Ratas de Laboratório": "Absinto,Safari,Groselha",
			"Engenharia Civil": "Tequila,Gin,Blue Coração",
			"Relações Internacionais": "Vodka,Safari,Groselha",
			"Queima 2005": "Pisang,Vodka,Absinto",
			"Radiologia": "Martini Branco,Vodka,Orange Coração",
			"Engenharia de Ambiente": "Rum,Licor Menta,Vodka",
			"Erasmus": "Absinto,Groselha,Shochu Kho",
			"Bissaya Shot": "Vodka,Safari,Sumo Ananás",
			"Metoclopramida": "Batida Côco,Absinto",
			"Enfermagem": "Orange Coração,Vodka,Natas",
			"Seringa Shot": "Vodka,Tequila,Groselha",
			"O Madeirense": "Vodka Kurant,Absinto,Poncha",
			"G-3": "Vodka,Absinto",
			"After Shave": "Fisher Geist,Licor Menta",
			"Queima 2006": "Safari,Cachaça,Fisher Geist",
			"Mondeguinice": "Pisang,Batida Côco,Vodka",
			"Penga da Muppie": "Licor Creme Whisky,Malibu,Whisky",
			"Fisioterapia": "Tequila,Gold Strike,Blue Coração",
			"Engenharia Biomédica": "Blue Coração,Gold Strike,Vodka",
			"Orxestra Pitagórica": "Absinto,Tequila,Groselha",
			"Engenharia Química": "Rum,Vodka,Blue Coração,Malibu",
			"E.S.E.C.": "Rum,Brandy,Orange Coração",
			"Cardiopneumologia": "Tequila,Bacardi Limon,Groselha",
			"Queima 2007": "Vodka Preta,Absinto",
			"Wav": "Whisky,Absinto,Vodka",
			"Queima 2008": "Tequila,Blue Coração,Absinto",
			"Quantuna": "Vodka Preta,Whisky,Rum",
			"Audiologia": "Vodka Preta,Batida Côco,Tequila",
			"D'ESTES Shot": "Absinto,Gold Strike,Licor Menta",
			"Medicina Dentária Coimbra": "Tequila,Batida Côco",
			"APCT": "Absinto,Pisang,Cachaça,Tequila",
			"Shot MOELAS": "Absinto,Aguardente,Tequila",
			"O Pastilhado": "Vodka,Groselha,1 Pastilha Elástica",
			"C.D.M.": "Absinto,Vodka,Gin",
			"Naruto": "Vodka,Absinto,Gold Strike,Blue Coração,Piri Piri",
			"Queima 2009": "Licor Pêssego,Absinto,Fisher Geist",
			"Engenharia de Gestão Industrial": "Blue Coração,Vodka,Aguardente",
			"Q.B.": "Vodka Preta,Safari,Vodka",
			"Filosofia": "Rum,Frangelico,Blue Coração",
			"AAC 89": "Absinto,Vodka Preta,Aguardente",
			"Serrote 85": "Gold Strike,Aguardente,Gin,Piri Piri",
			"B'52": "Licor Café,Licor Creme Whisky,Absinto",
			"Queima 2010": "Zubrowka,Absinto,Groselha",
			"Phartuna": "Vodka Morango,Tequila,Blue Coração",
			"Engenharia Mecânica": "Martini Branco,Martini Rosso, Whisky, Sumo Lima",
			"Estudos Portugueses e Lusófonos": "Blue Coração,Martini Branco,Cerveja",
			"Línguas Modernas": "Cachaça,Bacardi Limon,Blue Coração",
			"Side Car": "Brandy,Triple Sec,Sumo Limão",
			"Brown": "Vodka,Licor Café,Licor Amora",
			"Queima 2001": "Licor Menta,Batida Côco,Fisher Geist",
			"Yahoo": "Vodka,Licor Creme Whisky,Orange Coração",
			"Marte": "Gin,Licor Menta,Licor Côco",
			"Juice": "Vodka,Natas,Xarope Morango",
			"Cianeto": "Bacardi Limon,Blue Coração,Absinto",
			"Hulk": "Batida Côco,Licor Menta,Licor Côco",
			"Angel": "Licor Pêssego,Sumo Ananás,Licor Côco",
			"Squeeze": "Safari,Vodka,SevenUp",
			"Theeze": "Vodka,Pisang",
			"Pleese": "Gold Strike,Batida Côco,Groselha",
			"Arrasar": "Absinto,Poncha",
			"Arrebentar": "Absinto,Licor Pêssego",
			"Psicologia": "Orange Coração,Vodka,Licor Côco",
			"Biologia": "Blue Coração,Batida Côco,Gin",
			"Engenharia Eletrotécnica": "Vodka,Blue Coração,Licor Côco",
			"Direito": "Groselha,Vodka,Licor Côco",
			"Jornalismo": "Blue Coração,Aguardente de cana,Martini Branco",
			"Mondeguina": "Doce Ovo,Pisang,Natas",
			"Geografia": "Blue Coração,Licor Pêssego,Vodka",
			"Salamanca 2002": "Vodka,Malibu,Licor Amora",
			"Queima 2002": "Licor Café,Frangelico,Absinto",
			"Pinga Amor": "Groselha,Kamasutra,Shochu Kho",
			"Arqueologia": "Blue Coração,Martini Rosso",
			"Atropina": "Absinto,Vodka,Gold Strike,Tequila",
			"Matemática": "Blue Coração,Batida Côco,Gold Strike",
			"Medicina Dentária UFP": "Orange Coração,Tequila,Licor Côco",
			"Desporto": "Vodka,Safari,Orange Coração,Licor Café",
			"Análises Clínicas e Saúde Pública": "Absinto,Cachaça,Safari,Pisang",
			"L.S.C.A.": "Vodka,Sumo Lima,Blue Coração,Groselha",
			"Engenharia Informática": "Bacardi Limon,Vodka,Blue Coração",
			"História": "Absinto,Blue Coração,Gold Strike",
			"Diabo da Tânsmania": "Absinto,Safari",
			"Samba na Praia": "Vodka,Licor Pêssego,Sumo Ananás",
			"Kinhas": "Blue Coração,Vodka,Absinto",
			"República das Bananas": "Rum,Tequila,Licor Banana",
			"O Belo": "Rum,Absinto,Gold Strike,Vodka",
			"Piñita": "Rum,Batida Côco,Sumo Ananás",
			"Queima 2003": "Pisang,Triple Sec,Absinto",
			"Dooley's on Fire": "Dooleys,Absinto",
			"Farmácia": "Groselha,Blue Coração,Vodka",
			"Tecnologias da Informação Visual": "Vodka,Tequila,Blue Coração",
			"Química": "Vodka,Batida Côco,Blue Coração",
			"Açoriano": "Absinto,Gold Strike,Pisang",
			"Duke Van Pato": "Absinto,Whisky,Vodka,Groselha",
			"Licenciatura Comunicações e Multimédia": "Fisher Geist,Vodka,Blue Coração",
			"Sociologia": "Vodka,Safari,Tequila",
			"Queima 2004": "Rum c/mel, Vodka,Absinto",
			"T.F.M.U.C.": "Vodka,Fisher Geist,Sumo Lima",
			"Queima 2011": "Aguardente,Grão Café,Fisher Geist",
			"Arte e Design": "Vodka Caramelo,Fisher Geist,Blue Coração",
			"L.E.I.teiro": "Vinho do Porto,Rum,Licor Creme Whisky",
			"\"As Minervas\"": "Vodka,Groselha,Fisher Geist",
			"Queima 2012": "Triple Sec,Sumo Lima,Fisher Geist",
			"Agrária": "Pisang,Fisher Geist,Vodka Caramelo",
			"Design e Multimédia": "Rum,Blue Coração,Fisher Geist",
			"Zuca": "Cachaça,Blue Coração,Absinto",
			"Trovador": "Absinto,Licor Menta,Vodka Preta",
			"Queima 2013": "Licor Chocolate,Fisher Geist",
			"L.S.E.Cotuna": "Aguardente,Vodka,Safari",
			"Administração Pública-Privada": "Gin,Licor Creme Whisky",
			"Estudos Europeus": "Vodka,Triple Sec,Blue Coração",
			"Queima 2014": "Amêndoa Amarga,Licor Pêssego,Absinto",
			"Desconcertuna": "Orange Coração,Sumo Laranja,Fisher Geist",
			"E.S.N.": "Rum,Groselha,Absinto",
			"Grupo Ecológico": "Gin,Fisher Geist,Licor Menta",
			"Queima 2015": "Gin,Poncha,Absinto",
			"Melancia": "Batida Côco,Groselha,Absinto",
			"Cerveira com Graça": "Fisher Geist,Absinto + Fogo",
			"Queima 2016": "Whisky,Sumo Lima,Fisher Geist",
			"Top++": "Safari,Sumo Lima,Fisher Geist",
			"Chicão": "Poncha,Gin,Fisher Geist",
			"Queima 2017": "Blue Coração,Fisher Geist,Vodka Melão",
			"Bioquímica": "Blue Coração,Cachaça,Licor Pêssego",
			"Turismo F.L.U.C.": "Blue Coração,Fisher Geist,Batida Côco",
			"Queima 2018": "Groselha,Cachaça,Absinto",
			"Engenharia Física": "Blue Coração,Batida Côco,Fisher Geist",
			"Estudantina": "Gold Strike,Absinto,Triple Sec",
			"Arquitetura": "Vodka,Vodka Melão,Blue Coração,Fisher Geist",
			"Queima 2019": "Groselha,Vodka Maracuja,Absinto",
			"Criptoshot": "Orange Coração,Sumo Lima,Gin",
			"Queima 2021": "Licor Marshmallow,Absinto",
			"#TuQueresTuTens": "Absinto,Sumo Lima,Blue Coração",
			"Queima 2022": "Blue Coração,Vodka Morango,Absinto",
			"Fisiologia Clínica": "Bagaço,Whisky,Absinto",
			"Medicina Veterinária": "Absinto,Gold Strike,Licor Creme Whisky",
			"As Fans": "Vodka,Licor Café,Gold Strike",
			"Serviço Social": "Blue Coração,Absinto,Tequila"
		}

	}

	return (
		<div className="shots" id="shots">
			<h1>LISTA DE SHOTS</h1>
			<div className="shots-table">
				{/* for each shot in the db, display 10 shots on the left and 10 shots on the right */}
				<div className="shots-table-column-left">
					{Object.keys(shots.SHOTS).slice(0, 10).map((shot, index) => (
						<Shot
							key={index}
							number={index + 1}
							name={shot}
							description={shots.SHOTS[shot]}
							isShot={true}
						/>
					))}
				</div>

				{/* <div className="line"></div> */}
				<vr />

				<div className="shots-table-column-right">
					{Object.keys(shots.SHOTS).slice(10, 20).map((shot, index) => (
						<Shot
							key={index}
							number={index+10 + 1}
							name={shot}
							description={shots.SHOTS[shot]}
							isShot={true}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Shots;