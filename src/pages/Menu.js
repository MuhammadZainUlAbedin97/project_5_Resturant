import tableSettings from "../images/tablesetting2.jpg";

const Menu = () => {
	return (
		<div>
			<h1 className="heading">menu</h1>
			<div className="menu">
				<div className="menuText">
					<h1>Our Menu</h1>
					<h3>Bread Basket</h3>
					<p>Assortment of fresh baked fruit breads and muffins 5.50</p>
					<h3>Honey Almond Granola with Fruits</h3>
					<p>
						Natural cereal of honey toasted oats, raisins, almonds and dates
						7.00
					</p>
					<h3>Belgian Waffle</h3>
					<p>Vanilla flavored batter with malted flour 7.50</p>
					<h3>Scrambled eggs</h3>
					<p>
						Scrambled eggs, roasted red pepper and garlic, with green onions
						7.50
					</p>
					<h3>Blueberry Pancakes</h3>
					<p>With syrup, butter and lots of berries 8.50</p>
				</div>
				<img
					src={tableSettings}
					class="tablesetting2"
					alt="Table Setting"
					width="600"
					height="750"
				/>
			</div>
		</div>
	);
};

export default Menu;
