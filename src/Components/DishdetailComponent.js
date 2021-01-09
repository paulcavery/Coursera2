import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
	// make sure the selected dish is an existing dish
	// const dish = this.props.selectedDish ;
	console.log(dish);

	return (
		<div>
			<Card key={dish.id}>
				<CardImg width="100%" src={dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
}

//===================================

function RenderComment({ comments }) {
	// make sure the selected dish is an existing dish

	console.log(comments);

	const commentView = comments.map((c) => {
		let date = new Date(c.date);
		return (
			<div>
				<ul className="list-unstyled" key={c.id}>
					<li>{c.comment}</li>
					<li>
						-- {c.author}, {date.toDateString()}
					</li>
					{/* this is a datetime to string alternative. allows the ability to transform it more ways than the toDateString method. */}
					{/* {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))} */}
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

const DishDetail = (props) => {
	if (props.dish != null) {
		return (
			<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to="/menu">Menu</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>{props.dish.name}</h3>
						<hr />
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						<RenderDish dish={props.dish} />
					</div>
					<div className="col-12 col-md-5 m-1">
						<RenderComment comments={props.comments} />
					</div>
				</div>
			</div>
		);
	} else {
		return <div></div>;
	}
};

export default DishDetail;
