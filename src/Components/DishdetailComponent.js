import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
	renderDish(dish) {
		// make sure the selected dish is an existing dish
		// const dish = this.props.selectedDish ;
		console.log(dish);

		if (dish != null) {
			return (
				<Card key={dish.id}>
					<CardImg width="100%" src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			);
		} else {
			return <div></div>;
		}
	}

	//===================================

	renderComment(comments) {
		// make sure the selected dish is an existing dish

		console.log(comments);

		if (comments != null) {
			const commentView = comments.map((c) => {
				let date = new Date(c.date);
				return (
					<div key={c.id}>
						<ul className="list-unstyled">
							<li>
								<p>{c.comment}</p>
								<p>
									-- {c.author}, {date.toDateString()}
								</p>
								{/* this is a datetime to string alternative. allows the ability to transform it more ways than the toDateString method. */}
								{/* {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))} */}
							</li>
						</ul>
					</div>
				);
			});
			return (
				<div>
					<h4 className="mb-1">Comments</h4>
					{commentView}
				</div>
			);
		}
	}

	render() {
		return (
			<div className="row">
				<div className="col-12 col-md-5 m-1">
					{this.renderDish(this.props.dish)}
				</div>
				<div className="col-12 col-md-5 m-1">
					{this.renderComment(this.props.comments)}
				</div>
			</div>
		);
	}
}

export default DishDetail;
