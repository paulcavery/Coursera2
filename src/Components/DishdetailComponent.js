import React, { Component } from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
	Col,
	Row,
	Modal,
	ModalBody,
	ModalHeader,
	Label,
	Button,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

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

function RenderComment({ comments, addComment, dishId }) {
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
			<CommentForm dishId={dishId} addComment={addComment} />
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
						<RenderComment
							comments={props.comments}
							addComment={props.addComment}
						/>
					</div>
				</div>
			</div>
		);
	} else {
		return <div></div>;
	}
};

export default DishDetail;

class CommentForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}

	handleSubmit(values) {
		console.log(values);
		this.toggleModal();
		this.props.addComment(
			this.props.dishId,
			values.rating,
			values.author,
			values.comment
		);
	}

	toggleModal = (event) => {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	};

	render() {
		return (
			<React.Fragment>
				<Button
					onClick={this.toggleModal}
					style={{ background: "white", color: "black" }}
				>
					<span className="fa fa-pencil fa-lg"></span> Submit Comment
				</Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader
						isOpen={this.state.isModalOpen}
						toggle={this.toggleModal}
					>
						Submit Comment
					</ModalHeader>
					<ModalBody>
						<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
							<Row className="form-group">
								<Label htmlFor="rating" md={2}>
									Rating
								</Label>
								<Col md={10}>
									<Control.select
										model=".rating"
										id="rating"
										name="rating"
										placeholder="Rating"
										className="form-control"
										validators={{
											required,
										}}
									>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Control.select>
									<Errors
										className="text-danger"
										model=".rating"
										show="touched"
										messages={{
											required: "Required",
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="author" md={2}>
									Author
								</Label>
								<Col md={10}>
									<Control.text
										model=".author"
										id="author"
										name="author"
										placeholder="Author"
										className="form-control"
										validators={{
											required,
											minLength: minLength(3),
											maxLength: maxLength(15),
										}}
									/>
									<Errors
										className="text-danger"
										model=".author"
										show="touched"
										messages={{
											required: "Required",
											minLength: "Must be greater than 3 characters",
											maxLength: "Must be 15 characters or less",
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="message" md={2}>
									Comment
								</Label>
								<Col md={10}>
									<Control.textarea
										style={{ height: "200px" }}
										model=".message"
										id="message"
										name="message"
										placeholder="Message"
										className="form-control"
										validators={{
											required,
											minLength: minLength(3),
										}}
									/>
									<Errors
										className="text-danger"
										model=".message"
										show="touched"
										messages={{
											required: "Required",
											minLength: "Must be greater than 3 characters",
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Col sm={{ size: 2, offset: 2 }}>
									<Button type="submit" color="primary">
										Submit
									</Button>
								</Col>
							</Row>
						</LocalForm>
					</ModalBody>
				</Modal>
			</React.Fragment>
		);
	}
}
