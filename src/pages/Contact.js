const Contact = () => {
	return (
		<div>
			<h1 className="heading">contact</h1>
			<div className="contact">
				<h1>Contact</h1>
				<p>
					We offer full-service catering for any event, large or small. We
					understand your needs and we will cater the food to satisfy the
					biggerst criteria of them all, both look and taste. Do not hesitate to
					contact us.
				</p>
				<h4>Catering Service, 42nd Living St, 43043 New York, NY</h4>
				<p>
					You can also contact us by phone 00553123-2323 or email
					catering@catering.com, or you can send us a message here:
				</p>
				<form>
					<input type="text" placeholder="name" />
					<input type="number" placeholder="How many people?" />
					<input type="datetime-local" placeholder="Reservation Time?" />
					<input type="text" placeholder="Any special request" />
					<input type="submit" value="Send Request" className="btn" />
				</form>
			</div>
		</div>
	);
};

export default Contact;
