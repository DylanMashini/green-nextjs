import { Grid } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

export default function Navbar({ mobile }) {
	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(false);

	if (mobile) {
		const StyledMenu = styled.div`
			display: flex;
			flex-direction: column;
			justify-content: center;
			background-color: rgba(0, 0, 0, 0.5);
			transform: ${({ open }) =>
				open ? "translateX(0)" : "translateX(-100%)"};
			height: 100vh;
			text-align: left;
			padding: 2rem;
			position: absolute;
			top: 0;
			left: 0;
			transition: transform 0.3s ease-in-out;

			@media (max-width: 576px) {
				width: 100%;
			}

			a {
				font-size: 2rem;
				text-transform: uppercase;
				padding: 2rem 0;
				font-weight: bold;
				letter-spacing: 0.5rem;
				color: white;
				text-decoration: none;
				transition: color 0.3s linear;

				@media (max-width: 576px) {
					font-size: 1.5rem;
					text-align: center;
				}

				&:hover {
					color: #343078;
				}
			}
		`;

		const Menu = ({ open }) => {
			return (
				<StyledMenu open={open}>
					<Link href="/">
						<a>Home</a>
					</Link>

					<a
						onClick={() => {
							console.log("pressed");
							setOpen2(!open2);
						}}
					>
						Button 2<i className="bx bx-chevron-down"></i>
					</a>

					{open2 ? (
						<Link href="/">
							<a>{"	"}Test</a>
						</Link>
					) : null}
					<Link href="/#about">
						<a>
							Button 3<i className="bx bx-chevron-down"></i>
						</a>
					</Link>
					<Link href="/#contact">
						<a>
							Button 4<i className="bx bx-chevron-down"></i>
						</a>
					</Link>
				</StyledMenu>
			);
		};

		const StyledBurger = styled.button`
			position: absolute;
			top: 30%;
			left: 2rem;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			width: 2rem;
			height: 2rem;
			background: transparent;
			border: none;
			cursor: pointer;
			padding: 0;
			z-index: 10;

			&:focus {
				outline: none;
			}

			div {
				width: 2rem;
				height: 0.25rem;
				background: ${({ open }) => (open ? "#EFFFFA" : "#EFFFFA")};
				border-radius: 10px;
				transition: all 0.3s linear;
				position: relative;
				transform-origin: 1px;

				:first-child {
					transform: ${({ open }) =>
						open ? "rotate(45deg)" : "rotate(0)"};
				}

				:nth-child(2) {
					opacity: ${({ open }) => (open ? "0" : "1")};
					transform: ${({ open }) =>
						open ? "translateX(20px)" : "translateX(0)"};
				}

				:nth-child(3) {
					transform: ${({ open }) =>
						open ? "rotate(-45deg)" : "rotate(0)"};
				}
			}
		`;

		const Burger = ({ open, setOpen }) => {
			return (
				<div>
					<StyledBurger open={open} onClick={() => setOpen(!open)}>
						<div />
						<div />
						<div />
					</StyledBurger>
				</div>
			);
		};

		return (
			<>
				<nav
					className={"navbar"}
					style={{
						justifyContent: "left",
						alignItems: "left",
					}}
				>
					<Grid.Container>
						<Burger open={open} setOpen={setOpen} />
					</Grid.Container>
					<Menu open={open}></Menu>
					<Link href="/donate">
						<div
							style={{
								marginRight: "2em",
								width: "100px",
								height: "30px",
								outlineColor: "white",
								outlineWidth: "2px",
								outlineStyle: "solid",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								cursor: "pointer",
								overflow: "hidden",
							}}
						>
							<h4
								style={{
									color: "white",
								}}
							>
								Donate
							</h4>
						</div>
					</Link>
				</nav>
			</>
		);
	}
	return (
		<div className={"navbar"}>
			<Grid.Container>
				<Grid>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "100%",
							marginLeft: "1vw",
						}}
					>
						<Link href="/#">
							<Image
								className="nav-item"
								src="/logo.png"
								width="73"
								height="50"
							/>
						</Link>
					</div>
				</Grid>

				<div className={styles.dropdown}>
					<Grid>
						<Link href="/#projects">
							<h3 className="nav-item">Programs</h3>
						</Link>
					</Grid>
					<div className={styles.spacer} />
					<div className={styles.dropdownContent}>
						<Link href="/#programs">
							<a className={styles.item}>Solar</a>
						</Link>
						<Link href="/#programs">
							<a className={styles.item}>Recycling</a>
						</Link>
						<Link href="/#programs">
							<a className={styles.item}>Composting</a>
						</Link>
						<Link href="/#programs">
							<a className={styles.item}>Food and Agriculture</a>
						</Link>
					</div>
				</div>
				<div className={styles.dropdown}>
					<Grid>
						<Link href="/#about">
							<h3 className="nav-item">Your actions matter!</h3>
						</Link>
					</Grid>
					<div className={styles.spacer} />
					<div className={styles.dropdownContent}>
						<Link href="/#programs">
							<a className={styles.item}>Example 1</a>
						</Link>
						<Link href="/#programs">
							<a className={styles.item}>Example 2</a>
						</Link>
						<Link href="/#programs">
							<a className={styles.item}>Example 3</a>
						</Link>
						<Link href="/#programs">
							<a className={styles.item}>Example 4</a>
						</Link>
					</div>
				</div>
				<div className={styles.dropdown}>
					<Grid>
						<Link href="/#contact">
							<h3 className="nav-item">Partners</h3>
						</Link>
					</Grid>
					<div className={styles.spacer} />
					<div className={styles.dropdownContent}>
						<Link href="/#programs">
							<a className={styles.item}>Drawdown GA</a>
						</Link>
						<Link href="/#programs">
							<a className={styles.item}>Keep Cobb Beautiful</a>
						</Link>
						<Link href="/#programs">
							<a className={styles.item}>Cheers to Recycling</a>
						</Link>
						<Link href="/#programs">
							<a className={styles.item}>Kelli Green</a>
						</Link>
						<Link href="/#programs">
							<a className={styles.item}>
								Metro Building Projects
							</a>
						</Link>
						<Link href="/#programs">
							<a className={styles.item}>Become a Partner</a>
						</Link>
					</div>
				</div>
				<div className={styles.dropdown}>
					<Grid>
						<Link href="/#about">
							<h3 className="nav-item">About Us</h3>
						</Link>
					</Grid>
					<div className={styles.spacer} />
					<div className={styles.dropdownContent}>
						<Link href="/#programs">
							<a className={styles.item}>Team</a>
						</Link>
						<Link href="/#programs">
							<a className={styles.item}>Location</a>
						</Link>
					</div>
				</div>
			</Grid.Container>
			<Link href="/donate">
				<div
					style={{
						marginRight: "2em",
						width: "100px",
						height: "30px",
						outlineColor: "white",
						outlineWidth: "2px",
						outlineStyle: "solid",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						cursor: "pointer",
						overflow: "hidden",
					}}
				>
					<h4
						style={{
							color: "white",
						}}
					>
						Donate
					</h4>
				</div>
			</Link>
		</div>
	);
}
