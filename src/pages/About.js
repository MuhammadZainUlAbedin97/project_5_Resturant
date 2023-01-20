import tablesetting from "../images/tablesetting.jpg";

const About = () => {
	return (
		<div>
			<h1 className="heading">about</h1>
			<div className="about">
				<img
					src={tablesetting}
					class="tablesetting"
					alt="Table Setting"
					width="600"
					height="750"
				/>
				<div className="aboutText">
					<h1 className="aboutHeading1">About Catering</h1>
					<h5 className="aboutHeading2">Tradition since 1889</h5>
					<p>
						The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor
						sit amet, consectetur adipiscing elit consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
						nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur.We only use <span className="aboutGreyB">seasonal</span>{" "}
						ingredients.
					</p>
					<p className="aboutGreyP">
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia deserunt mollit anim id est laborum consectetur adipiscing
						elit, sed do eiusmod temporincididunt ut labore et dolore magna
						aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
