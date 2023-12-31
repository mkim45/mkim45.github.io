import { AppBar, Toolbar, Box, Stack, Typography, Link } from "@mui/material";
import React from "react";
import { useState, useEffect, useRef } from "react";
import Projects from "./Projects";
import Technologies from "./Technologies";
import Work from "./Work";
import { styled } from "@mui/material/styles";
import styles from "./Main.css";

import Portrait from "./Michael_Kim.jpg";
import Yelp from "./Yelp.png";
import Battery from "./Battery.png";
import Chess from "./Chess.png";
import Proteins1 from "./Proteins1.png";
import Proteins2 from "./Proteins2.jpeg";
import Proteins3 from "./Proteins3.png";
import Proteins4 from "./Proteins4.png";
import Proteins5 from "./Proteins5.png";
import Science1 from "./Science1.png";
import SciOly from "./SciOly.png";
import Uber from "./Uber.png";
import Wine from "./Wine.png";

import Net from "./NET.png";
import Azure from "./Azure.png";
import Blazor from "./Blazor.png";
import C from "./C.png";
import CSharp from "./CSharp.png";
import CPlus from "./C++.png";
import CSS from "./CSS.png";
import FSharp from "./FSharp.png";
import Figma from "./Figma.png";
import Firebase from "./Firebase.png";
import Git from "./Git.png";
import HTML from "./HTML.png";
import HuggingFace from "./Hugging.png";
import Java from "./Java.png";
import JavaScript from "./Javascript.png";
import Keras from "./Keras.png";
import Matplotlib from "./Matplotlib.png";
import MySQL from "./MySQL.png";
import Node from "./Node.png";
import Npm from "./Npm.png";
import Numpy from "./Numpy.png";
import Pandas from "./Pandas.png";
import Postgre from "./Postgre.png";
import Python from "./Python.png";
import Pytorch from "./Pytorch.png";
import R from "./R.png";
import Racket from "./Racket.png";
import ReactImage from "./React.png";
import SAS from "./SAS.png";
import Scikit from "./Scikit.png";
import Scipy from "./Scipy.png";
import Seaborn from "./Seaborn.png";
import SQLite from "./SQLite.png";
import Statsmodels from "./Statsmodels.png";
import Tensorflow from "./Tensorflow.png";
import Wasm from "./WebAssembly.png";

import ProteomicsWork from "./Proteomics.jpg";
import BatteryWork from "./BatteryWork.png";
import InboundWork from "./Inbound.png";
import BastiatWork from "./BastiatPartners.jpg";

import GitHubIcon from "./GitHubIcon.png";
import LinkedInIcon from "./LinkedIn.png";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

import HomeLogo from "./Logo.png";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const ImgNoMargin = styled("img")({
	display: "block",
	maxWidth: "100%",
	maxHeight: "100%",
});

const CustomButton = styled(Button)(({ buttonColor, hoverColor, width }) => ({
	backgroundColor: buttonColor,
	color: "#fff", 
	borderRadius: "10px", 
	display: "flex",
	alignItems: "center",
	justifyContent: "space-around",
	padding: "8px 16px", 
	width: width, 
	cursor: "pointer",
	textTransform: "none",
	textDecoration: "none",
	"&:hover": {
		backgroundColor: hoverColor, 
	},
}));

function ButtonStart({ text, link, iconUrl, color, hoverColor, width, fontSize, imgDimension }) {
	return (
	  <Link href={link} target="_blank" rel="noopener noreferrer" underline="none">
		<CustomButton buttonColor={color} hoverColor={hoverColor} width={width}>
		  <Typography sx={{
			fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
			fontWeight: 500,
			color: "#fff",
			fontSize: fontSize,
			verticalAlign: "text-bottom",
		  }}>
			{text}
		  </Typography>
		  <img src={iconUrl} alt={text} style={{ width: imgDimension, height: imgDimension }} />
		</CustomButton>
	  </Link>
	);
}

function ButtonStartResume({ text, link, color, hoverColor, width, fontSize, imgDimension }) {
	return (
	  <Link href={link} target="_blank" rel="noopener noreferrer" underline="none">
		<CustomButton buttonColor={color} hoverColor={hoverColor} width={width}>
		  <Typography sx={{
			fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
			fontWeight: 500,
			color: "#fff",
			fontSize: fontSize,
			verticalAlign: "text-bottom",
		  }}>
			{text}
		  </Typography>
		  <DownloadIcon style={{ width: imgDimension, height: imgDimension, color: "#fff" }} />
		</CustomButton>
	  </Link>
	);
}

function ButtonStartEmail({ text, link, color, hoverColor, width, fontSize, imgDimension }) {
	return (
	  <Link href={link} target="_blank" rel="noopener noreferrer" underline="none">
		<CustomButton buttonColor={color} hoverColor={hoverColor} width={width}>
		  <Typography sx={{
			fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
			fontWeight: 500,
			color: "#fff",
			fontSize: fontSize,
			verticalAlign: "text-bottom",
		  }}>
			{text}
		  </Typography>
		  <EmailIcon style={{ width: imgDimension, height: imgDimension, color: "#fff" }} />
		</CustomButton>
	  </Link>
	);
}

const Main = () => {
	const minWidth = 1440;
	const [calculatedWidth, setCalculatedWidth] = useState("");
	const [smallerCalculatedWidth, setSmallerCalculatedWidth] = useState("");
	const [calculatedHeight, setCalculatedHeight] = useState("");
	const [calculatedWidthTechnologies, setCalculatedWidthTechnologies] = useState("");
	const [smallerCalculatedWidthTechnologies, setSmallerCalculatedWidthTechnologies] = useState("");
	const [calculatedHeightTechnologies, setCalculatedHeightTechnologies] = useState("");
	const [calculatedWidthIntermediate, setCalculatedWidthIntermediate] = useState("");
	const [calculatedWidthIntermediateTotal, setCalculatedWidthIntermediateTotal] = useState("");
	const [smallerWidth, setSmallerWidth] = useState(false);
	const [textOptionOneIndex, setTextOptionOneIndex] = useState(0);
	const [textOptionTwoIndex, setTextOptionTwoIndex] = useState(0);

	const rotatingTextOptionsOne = [
		"software engineering",
		"machine learning",
		"web development",
		"data analysis"
	]

	const rotatingTextOptionsTwo = [
		"proteomics",
		"bioinformatics",
		"business",
		"metabolomics"
	]

	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const projectsRef = useRef(null);
	const experiencesRef = useRef(null);
	const contactRef = useRef(null);
	const APP_BAR_HEIGHT = 93;

	const scrollToHome = () => {
		const homeEl = homeRef.current;
		 
		let currentY = window.scrollY;
		const targetY = homeEl.offsetTop - APP_BAR_HEIGHT;
		
		const increment = 100; 
		
		function scrollStep() {
		  let smallerIncrement = 0;
		  let nextY = currentY + increment;
		  if (nextY > targetY) {
			smallerIncrement = targetY - currentY;
		  } 
		  if (nextY < targetY) {
			smallerIncrement = currentY - targetY;
		  }
		  if (currentY < targetY) {
			if (smallerIncrement > 0) {
				window.scroll(0, currentY + smallerIncrement);
				currentY += smallerIncrement;
				requestAnimationFrame(scrollStep);
			} else {
				window.scroll(0, currentY + increment);
				currentY += increment;
				requestAnimationFrame(scrollStep);
			}
		  }
		  if (currentY > targetY) {
			if (smallerIncrement > 0) {
				window.scroll(0, currentY - smallerIncrement);
				currentY -= smallerIncrement;
				requestAnimationFrame(scrollStep);
			} else {
				window.scroll(0, currentY - increment);
				currentY -= increment;
				requestAnimationFrame(scrollStep);
			}
		  }
		}
		
		requestAnimationFrame(scrollStep);
	}

	const scrollToAbout = () => {
		const aboutEl = aboutRef.current;
		 
		let currentY = window.scrollY;
		const targetY = aboutEl.offsetTop - APP_BAR_HEIGHT;
		
		const increment = 100; 
		
		function scrollStep() {
		  let smallerIncrement = 0;
		  let nextY = currentY + increment;
		  if (nextY > targetY) {
			smallerIncrement = targetY - currentY;
		  } 
		  if (nextY < targetY) {
			smallerIncrement = currentY - targetY;
		  }
		  if (currentY < targetY) {
			if (smallerIncrement > 0) {
				window.scroll(0, currentY + smallerIncrement);
				currentY += smallerIncrement;
				requestAnimationFrame(scrollStep);
			} else {
				window.scroll(0, currentY + increment);
				currentY += increment;
				requestAnimationFrame(scrollStep);
			}
		  }
		  if (currentY > targetY) {
			if (smallerIncrement > 0) {
				window.scroll(0, currentY - smallerIncrement);
				currentY -= smallerIncrement;
				requestAnimationFrame(scrollStep);
			} else {
				window.scroll(0, currentY - increment);
				currentY -= increment;
				requestAnimationFrame(scrollStep);
			}
		  }
		}
		
		requestAnimationFrame(scrollStep);
	}

	const scrollToProjects = () => {
		const projectsEl = projectsRef.current;
		 
		let currentY = window.scrollY;
		const targetY = projectsEl.offsetTop - APP_BAR_HEIGHT;
		
		const increment = 100; 
		
		function scrollStep() {
		  let smallerIncrement = 0;
		  let nextY = currentY + increment;
		  if (nextY > targetY) {
			smallerIncrement = targetY - currentY;
		  } 
		  if (nextY < targetY) {
			smallerIncrement = currentY - targetY;
		  }
		  if (currentY < targetY) {
			if (smallerIncrement > 0) {
				window.scroll(0, currentY + smallerIncrement);
				currentY += smallerIncrement;
				requestAnimationFrame(scrollStep);
			} else {
				window.scroll(0, currentY + increment);
				currentY += increment;
				requestAnimationFrame(scrollStep);
			}
		  }
		  if (currentY > targetY) {
			if (smallerIncrement > 0) {
				window.scroll(0, currentY - smallerIncrement);
				currentY -= smallerIncrement;
				requestAnimationFrame(scrollStep);
			} else {
				window.scroll(0, currentY - increment);
				currentY -= increment;
				requestAnimationFrame(scrollStep);
			}
		  }
		}
		
		requestAnimationFrame(scrollStep);
	}

	const scrollToExperiences = () => {
		const experiencesEl = experiencesRef.current;
		 
		let currentY = window.scrollY;
		const targetY = experiencesEl.offsetTop - APP_BAR_HEIGHT;
		
		const increment = 100; 
		
		function scrollStep() {
		  let smallerIncrement = 0;
		  let nextY = currentY + increment;
		  if (nextY > targetY) {
			smallerIncrement = targetY - currentY;
		  } 
		  if (nextY < targetY) {
			smallerIncrement = currentY - targetY;
		  }
		  if (currentY < targetY) {
			if (smallerIncrement > 0) {
				window.scroll(0, currentY + smallerIncrement);
				currentY += smallerIncrement;
				requestAnimationFrame(scrollStep);
			} else {
				window.scroll(0, currentY + increment);
				currentY += increment;
				requestAnimationFrame(scrollStep);
			}
		  }
		  if (currentY > targetY) {
			if (smallerIncrement > 0) {
				window.scroll(0, currentY - smallerIncrement);
				currentY -= smallerIncrement;
				requestAnimationFrame(scrollStep);
			} else {
				window.scroll(0, currentY - increment);
				currentY -= increment;
				requestAnimationFrame(scrollStep);
			}
		  }
		}
		
		requestAnimationFrame(scrollStep);
	}

	const scrollToContact = () => {
		const contactEl = contactRef.current;
		 
		let currentY = window.scrollY;
		const targetY = contactEl.offsetTop - APP_BAR_HEIGHT;
		
		const increment = 100; 
		
		function scrollStep() {
		  let smallerIncrement = 0;
		  let nextY = currentY + increment;
		  if (nextY > targetY) {
			smallerIncrement = targetY - currentY;
		  } 
		  if (nextY < targetY) {
			smallerIncrement = currentY - targetY;
		  }
		  if (currentY < targetY) {
			if (smallerIncrement > 0) {
				window.scroll(0, currentY + smallerIncrement);
				currentY += smallerIncrement;
				requestAnimationFrame(scrollStep);
			} else {
				window.scroll(0, currentY + increment);
				currentY += increment;
				requestAnimationFrame(scrollStep);
			}
		  }
		  if (currentY > targetY) {
			if (smallerIncrement > 0) {
				window.scroll(0, currentY - smallerIncrement);
				currentY -= smallerIncrement;
				requestAnimationFrame(scrollStep);
			} else {
				window.scroll(0, currentY - increment);
				currentY -= increment;
				requestAnimationFrame(scrollStep);
			}
		  }
		}
		
		requestAnimationFrame(scrollStep);
	}

	useEffect(() => {
		const intervalOne = setInterval(() => {
		  setTextOptionOneIndex((prevIndex) => (prevIndex + 1) % rotatingTextOptionsOne.length);
		}, 3500);
	
		const intervalTwoDelay = setTimeout(() => {
		  const intervalTwo = setInterval(() => {
			setTextOptionTwoIndex((prevIndex) => (prevIndex + 1) % rotatingTextOptionsTwo.length);
		  }, 3500);
	
		  return () => {
			clearInterval(intervalTwo);
		  };
		}, 2500);
	
		return () => {
		  clearInterval(intervalOne);
		  clearTimeout(intervalTwoDelay);
		};
	}, []);	

	useEffect(() => {
		const updateCalculatedValues = () => {
			const maxWidth = Math.max(window.innerWidth, minWidth);
			setCalculatedWidth(`${maxWidth - 231.5}px`);
			setSmallerCalculatedWidth(`${(maxWidth - 231.5) / 4}px`);
			setCalculatedHeight(`${((maxWidth - 231.5) / 4) + 35}px`);
			setCalculatedWidthTechnologies(`${maxWidth - 399}px`);
			setSmallerCalculatedWidthTechnologies(`${(maxWidth - 399) / 9}px`);
			setCalculatedHeightTechnologies(`${((maxWidth - 399) / 9) + 35}px`);
			setCalculatedWidthIntermediate(`${maxWidth - 115}px`);
			setCalculatedWidthIntermediateTotal(`${maxWidth - 96}px`);
			setSmallerWidth(window.innerWidth > 950 ? true : false);
		};

		updateCalculatedValues();
		window.addEventListener("resize", updateCalculatedValues);

		return () => {
			window.removeEventListener("resize", updateCalculatedValues);
		};
	}, [minWidth]);

    return (
		<body className={styles.body}>
			<div 
				style={{
					backgroundColor: "#f0fff1",
					minWidth: "calc(100vw - 40px)",
					minHeight: "calc(100vh - 40px)",
					position: "relative"
				}}>
				{/* <style>
					{`
						body {
							margin: 0;
							background-color: #f0fff1;
						}
					`}
				</style>
				<AppBar
					position="fixed"
					sx={{ zIndex: 2, 
						height: "94.5px",
						boxShadow: "none",
						backgroundColor: "#f0fff1"
					}}
				>
					<Container maxWidth={(Math.max(window.innerWidth, minWidth) - 32) + "px"}>
						<Toolbar sx={{ justifyContent: "space-between", height: "93px" }}>
							<Box sx={{ display: "flex", pt: 3, pb: 2, cursor: "pointer" }}>
								<a onClick={scrollToHome}>
									<img src={HomeLogo} width={"200px"} alt='Logo' />
								</a>
							</Box>
						</Toolbar>
					</Container>
				</AppBar> */}
				<Container maxWidth={(Math.max(window.innerWidth, minWidth) - 32) + "px"} style={{ paddingTop: "96px" }}>
					<div style={{ paddingTop: "40px", paddingBottom: "40px", height: "640px", display: "flex", alignItems: "center", width: "100%", justifyContent: "space-evenly" }} id="home" ref={homeRef}>
						<Box sx={{
							width: "100%",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-evenly"
						}}>
							<Box sx={{ paddingRight: 6 }}>
								<ImgNoMargin
									alt="portrait"
									src={Portrait}
									sx={{ height: "525px", width: "350px" }}
								/>
							</Box>
							<Box sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								width: "850px",
								alignItems: "baseline"
							}}>
								<Typography sx={{
									fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
									fontWeight: 500,
									color: "#190019",
									fontSize: 32,
									lineHeight: "1",
									verticalAlign: "text-bottom",
									letterSpacing: "0.5px"
								}}>
									Hi, my name is <span style={{ fontWeight: 600,
										color: "#356760",
										fontSize: 60, }}>Michael Kim</span>.
								</Typography>
									<Typography sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 500,
										color: "#190019",
										fontSize: 32,
										lineHeight: "60px",
										verticalAlign: "text-bottom",
										letterSpacing: "0.5px",
										paddingTop: 4
									}}>
										
										I'm a software developer and data scientist interested in deepening human understanding at the intersections of{" "}
										<span
											style={{ fontWeight: 600, color: "#356760", fontSize: 40 }}
										>{rotatingTextOptionsOne[textOptionOneIndex]}</span> and <span
										style={{ fontWeight: 600, color: "#356760", fontSize: 40 }}
									>{rotatingTextOptionsTwo[textOptionTwoIndex]}</span>.
								</Typography>
							</Box>
						</Box>
					</div>
					<div style={{ display: "flex", paddingLeft: "24px", paddingRight: "24px", height: "300px" }} id="about" ref={aboutRef}>
						<Box sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "start",
							width: calculatedWidthIntermediateTotal,
							height: "100%"
						}}>
							<div
								style={{
									borderLeft: "1.5px solid black",
									height: "265px",
									paddingTop: "16px",
									paddingBottom: "16px",
									paddingRight: "16px",
								}}
							/>
							<Box sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								width: calculatedWidthIntermediate,
								height: "300px",
								paddingRight: "16px"
							}}>
								<div
									style={{
										borderTop: "1.5px solid black",
										paddingBottom: "16px",
										width: calculatedWidthIntermediate
									}}
								/>
								<Box sx={{
									height: "265px",
									width: calculatedWidthIntermediate,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
									<Typography sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										fontSize: 70,
										paddingLeft: 1.25,
										lineHeight: "1",
										letterSpacing: "0.5px"
									}}>
										ABOUT ME
									</Typography>
								</Box>
								<div
									style={{
										borderBottom: "1.5px solid black",
										paddingTop: "16px",
										width: calculatedWidthIntermediate
									}}
								/>
							</Box>
							<div
								style={{
									borderLeft: "1.5px solid black",
									height: "265px",
									paddingTop: "16px",
									paddingBottom: "16px",
									paddingRight: "16px",
								}}
							/>
						</Box>
					</div>
					<div style={{ display: "flex", paddingLeft: "24px", paddingRight: "24px", height: "430px" }}>
						<Box sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "start",
							width: calculatedWidthIntermediateTotal,
							height: "100%"
						}}>
							<div
								style={{
									borderLeft: "1.5px solid black",
									height: "395px",
									paddingTop: "16px",
									paddingBottom: "16px",
									paddingRight: "16px",
								}}
							/>
							<Box sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								width: calculatedWidthIntermediate,
								height: "430px",
								paddingRight: "16px"
							}}>
								<div
									style={{
										borderTop: "1.5px solid transparent",
										paddingBottom: "16px",
										width: calculatedWidthIntermediate
									}}
								/>
								<Box sx={{
									height: "395px",
									width: calculatedWidthIntermediate,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									paddingRight: "2.5%",
									paddingLeft: "2.5%"
								}}>
									<Typography
									sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 500,
										color: "#190019",
										fontSize: "20px",
										px: "25px",
										py: "5px"
									}}
									>
										I’m a third-year undergraduate student at Northwestern University pursuing a Bachelor’s degree in Biological Sciences and Data Science, 
										with plans to obtain a Master’s degree in Computer Science through a four-year BA/MS program. While initially exploring finance through 
										investment banking and venture capital internships, I found myself much more passionate about the transformative, far-reaching work of 
										tech-enabled companies I was actually advising and sourcing. After discovering this, I explored software development, machine learning, and data 
										science to begin making tangible impacts, specifically in the field of proteomics and biology at large.<br/><br/>
										
										I am currently working as an Informatics and Software Engineering Intern at the Northwestern Proteomics Center of Excellence, an Analyst Leadership 
										Extern at Battery Ventures, and the Technology Director for Northwestern’s Science Olympiad organization. In my free time, I enjoy playing tennis, 
										learning new languages, exploring outdoors, and reading books on genomics and human behavior.<br/><br/>

										Keep scrolling to learn more about me and what I’m passionate about working on! 
								</Typography>
								</Box>
								<div
									style={{
										borderBottom: "1.5px solid transparent",
										paddingTop: "16px",
										width: calculatedWidthIntermediate
									}}
								/>
							</Box>
							<div
								style={{
									borderLeft: "1.5px solid black",
									height: "395px",
									paddingTop: "16px",
									paddingBottom: "16px",
									paddingRight: "16px",
								}}
							/>
						</Box>
					</div>
					<div style={{ display: "flex", paddingLeft: "24px", paddingRight: "24px", height: "300px" }} id="projects" ref={projectsRef}>
						<Box sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "start",
							width: calculatedWidthIntermediateTotal,
							height: "100%"
						}}>
							<div
								style={{
									borderLeft: "1.5px solid black",
									height: "265px",
									paddingTop: "16px",
									paddingBottom: "16px",
									paddingRight: "16px",
								}}
							/>
							<Box sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								width: calculatedWidthIntermediate,
								height: "300px",
								paddingRight: "16px"
							}}>
								<div
									style={{
										borderTop: "1.5px solid black",
										paddingBottom: "16px",
										width: calculatedWidthIntermediate
									}}
								/>
								<Box sx={{
									height: "265px",
									width: calculatedWidthIntermediate,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
									<Typography sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										fontSize: 70,
										paddingLeft: 1.25,
										lineHeight: "1",
										letterSpacing: "0.5px"
									}}>
										WHAT I'VE WORKED ON
									</Typography>
								</Box>
								<div
									style={{
										borderBottom: "1.5px solid black",
										paddingTop: "16px",
										width: calculatedWidthIntermediate
									}}
								/>
							</Box>
							<div
								style={{
									borderLeft: "1.5px solid black",
									height: "265px",
									paddingTop: "16px",
									paddingBottom: "16px",
									paddingRight: "16px",
								}}
							/>
						</Box>
					</div>
					<Projects
						calculatedWidth={calculatedWidth}
						calculatedHeight={calculatedHeight}
						smallerCalculatedWidth={smallerCalculatedWidth}
						Images={[Proteins3, Proteins2, Proteins4, Proteins1, Battery, Proteins5, SciOly, Science1, Wine, Uber, Chess, Yelp]}
					/>
					<div style={{ display: "flex", paddingLeft: "24px", paddingRight: "24px", height: "300px" }}>
						<Box sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "start",
							width: calculatedWidthIntermediateTotal,
							height: "100%"
						}}>
							<div
								style={{
									borderLeft: "1.5px solid black",
									height: "265px",
									paddingTop: "16px",
									paddingBottom: "16px",
									paddingRight: "16px",
								}}
							/>
							<Box sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								width: calculatedWidthIntermediate,
								height: "300px",
								paddingRight: "16px"
							}}>
								<div
									style={{
										borderTop: "1.5px solid black",
										paddingBottom: "16px",
										width: calculatedWidthIntermediate
									}}
								/>
								<Box sx={{
									height: "265px",
									width: calculatedWidthIntermediate,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
									<Typography sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										fontSize: 70,
										paddingLeft: 1.25,
										lineHeight: "1",
										letterSpacing: "0.5px"
									}}>
										WHAT I'VE WORKED WITH
									</Typography>
								</Box>
								<div
									style={{
										borderBottom: "1.5px solid black",
										paddingTop: "16px",
										width: calculatedWidthIntermediate
									}}
								/>
							</Box>
							<div
								style={{
									borderLeft: "1.5px solid black",
									height: "265px",
									paddingTop: "16px",
									paddingBottom: "16px",
									paddingRight: "16px",
								}}
							/>
						</Box>
					</div>
					<Technologies
						calculatedWidthTechnologies={calculatedWidthTechnologies}
						calculatedHeightTechnologies={calculatedHeightTechnologies}
						smallerCalculatedWidthTechnologies={smallerCalculatedWidthTechnologies}
						imgSrc={[Azure, Blazor, C, CSharp, CPlus, CSS, FSharp, Figma, Firebase]}
						imgAlt={["Azure", "Blazor", "C", "CSharp", "CPlus", "CSS", "FSharp", "Figma", "Firebase"]}
						first={false}
					/>
					<Technologies
						calculatedWidthTechnologies={calculatedWidthTechnologies}
						calculatedHeightTechnologies={calculatedHeightTechnologies}
						smallerCalculatedWidthTechnologies={smallerCalculatedWidthTechnologies}
						imgSrc={[Git, HTML, HuggingFace, Java, JavaScript, Keras, Matplotlib, MySQL, Net]}
						imgAlt={["Git", "HTML", "HuggingFace", "Java", "JavaScript", "Keras", "Matplotlib", "MySQL", "Net"]}
						first={false}
					/>
					<Technologies
						calculatedWidthTechnologies={calculatedWidthTechnologies}
						calculatedHeightTechnologies={calculatedHeightTechnologies}
						smallerCalculatedWidthTechnologies={smallerCalculatedWidthTechnologies}
						imgSrc={[Node, Npm, Numpy, Pandas, Postgre, Python, Pytorch, R, Racket]}
						imgAlt={["Node", "Npm", "Numpy", "Pandas", "Postgre", "Python", "Pytorch", "R", "Racket"]}
						first={false}
					/>
					<Technologies
						calculatedWidthTechnologies={calculatedWidthTechnologies}
						calculatedHeightTechnologies={calculatedHeightTechnologies}
						smallerCalculatedWidthTechnologies={smallerCalculatedWidthTechnologies}
						imgSrc={[ReactImage, SAS, Scikit, Scipy, Seaborn, SQLite, Statsmodels, Tensorflow, Wasm]}
						imgAlt={["React", "SAS", "Scikit", "Scipy", "Seaborn", "SQLite", "Statsmodels", "Tensorflow", "Wasm"]}
						first={true}
					/>
					<div style={{ display: "flex", paddingLeft: "24px", paddingRight: "24px", height: "300px" }} id="experiences" ref={experiencesRef}>
						<Box sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "start",
							width: calculatedWidthIntermediateTotal,
							height: "100%"
						}}>
							<div
								style={{
									borderLeft: "1.5px solid black",
									height: "265px",
									paddingTop: "16px",
									paddingBottom: "16px",
									paddingRight: "16px",
								}}
							/>
							<Box sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								width: calculatedWidthIntermediate,
								height: "300px",
								paddingRight: "16px"
							}}>
								<div
									style={{
										borderTop: "1.5px solid black",
										paddingBottom: "16px",
										width: calculatedWidthIntermediate
									}}
								/>
								<Box sx={{
									height: "265px",
									width: calculatedWidthIntermediate,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
									<Typography sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										fontSize: 70,
										paddingLeft: 1.25,
										lineHeight: "1",
										letterSpacing: "0.5px"
									}}>
										WHERE I'VE WORKED BEFORE
									</Typography>
								</Box>
								<div
									style={{
										borderBottom: "1.5px solid black",
										paddingTop: "16px",
										width: calculatedWidthIntermediate
									}}
								/>
							</Box>
							<div
								style={{
									borderLeft: "1.5px solid black",
									height: "265px",
									paddingTop: "16px",
									paddingBottom: "16px",
									paddingRight: "16px",
								}}
							/>
						</Box>
					</div>
					<Work
						calculatedWidth={calculatedWidth}
						calculatedHeight={calculatedHeight}
						smallerCalculatedWidth={smallerCalculatedWidth}
						Images={[ProteomicsWork, BatteryWork, InboundWork, BastiatWork]}
					/>
					<div style={{ display: "flex", paddingLeft: "24px", paddingRight: "24px", height: "300px" }} id="contact" ref={contactRef}>
						<Box sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "start",
							width: calculatedWidthIntermediateTotal,
							height: "100%"
						}}>
							<div
								style={{
									borderLeft: "1.5px solid black",
									height: "265px",
									paddingTop: "16px",
									paddingBottom: "16px",
									paddingRight: "16px",
								}}
							/>
							<Box sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								width: calculatedWidthIntermediate,
								height: "300px",
								paddingRight: "16px"
							}}>
								<div
									style={{
										borderTop: "1.5px solid black",
										paddingBottom: "16px",
										width: calculatedWidthIntermediate
									}}
								/>
								<Box sx={{
									height: "265px",
									width: calculatedWidthIntermediate,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
									<Typography sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										fontSize: 70,
										paddingLeft: 1.25,
										lineHeight: "1",
										letterSpacing: "0.5px"
									}}>
										CONTACT ME
									</Typography>
								</Box>
								<div
									style={{
										borderBottom: "1.5px solid black",
										paddingTop: "16px",
										width: calculatedWidthIntermediate
									}}
								/>
							</Box>
							<div
								style={{
									borderLeft: "1.5px solid black",
									height: "265px",
									paddingTop: "16px",
									paddingBottom: "16px",
									paddingRight: "16px",
								}}
							/>
						</Box>
					</div>
					<div style={{ display: "flex", paddingLeft: "24px", paddingRight: "24px", height: "345px" }}>
						<Box sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "start",
							width: calculatedWidthIntermediateTotal,
							height: "330px"
						}}>
							<div
								style={{
									borderLeft: "1.5px solid black",
									height: "295px",
									paddingTop: "16px",
									paddingBottom: "16px",
									paddingRight: "16px",
								}}
							/>
							<Box sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								width: calculatedWidthIntermediate,
								height: "330px",
								paddingRight: "16px"
							}}>
								<div
									style={{
										borderTop: "1.5px solid transparent",
										paddingBottom: "16px",
										width: calculatedWidthIntermediate
									}}
								/>
								<Box sx={{
									height: "295px",
									width: calculatedWidthIntermediate,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "column"
								}}>
									<Box sx={{
									height: "295px",
									width: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "row",
									paddingRight: "5%",
									paddingLeft: "5%"
									}}>
										<Typography sx={{
											fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
											fontWeight: 500,
											color: "#190019",
											fontSize: 48,
											px: 2.5,
											pt: 2
										}}>
											If any of this sounds interesting or you want to learn some more about me, <span style={{ fontWeight: 600, color: "#356760" }}>let's chat!</span>
										</Typography>
									</Box>
									<Box sx={{
									height: "295px",
									width: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "row",
									paddingRight: "2.5%",
									paddingLeft: "2.5%"
									}}>
										<ButtonStart link="https://www.linkedin.com/in/michael-kim-nu/" iconUrl={LinkedInIcon} text="LinkedIn" color="#0A66C2" hoverColor="#0754a6" width="250px" fontSize="30px" imgDimension="45px"/>
										<Box sx={{ paddingLeft: "70px", paddingRight: "70px" }}>
											<ButtonStart link="https://github.com/mkim45" iconUrl={GitHubIcon} text="GitHub" hoverColor="#322F2A" color="#625F59" width="250px" fontSize="30px" imgDimension="45px"/>
										</Box>
										<Box sx={{ paddingRight: "70px" }}>
											<ButtonStartResume link="https://drive.google.com/file/d/1KsjGK1Vvj932qUB7lhl_Z5iZ-YAZgjHq/view?usp=sharing" text="Resume" hoverColor="#8A9D8B" color="#9DBE9A" width="250px" fontSize="30px" imgDimension="45px"/>
										</Box>
										<ButtonStartEmail link="mailto:michaelkim2025.1@u.northwestern.edu" text="Email" hoverColor="#2F4858" color="#4D6A70" width="250px" fontSize="30px" imgDimension="45px"/>
									</Box>
								</Box>
								<div
									style={{
										borderBottom: "1.5px solid black",
										paddingTop: "16px",
										width: calculatedWidthIntermediate
									}}
								/>
							</Box>
							<div
								style={{
									borderLeft: "1.5px solid black",
									height: "295px",
									paddingTop: "16px",
									paddingBottom: "16px",
									paddingRight: "16px",
								}}
							/>
						</Box>
					</div>
				</Container>
				<div style={{ backfaceVisibility: "hidden", position: "fixed", left: 0, width: "100%", height: "20px", background: "#fff", zIndex: 20000 }}></div>
			</div>
		</body>
    );
};

export default Main;
