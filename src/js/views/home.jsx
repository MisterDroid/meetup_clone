import React from "react";

import "../../styles/home.css";
import Moment from "react-moment";
import { Context } from "../store/appContext.jsx";

import Card from "../component/card.jsx";

export class Home extends React.Component {
	render() {
		let parseMoment = (data, format) => {
			if (format == "date") {
				return <Moment format="MMMM Do ">{data}</Moment>;
			}
			if (format == "time") {
				return (
					<Moment format="LT" parse="HH:mm:ss">
						{data}
					</Moment>
				);
			}
		};
		return (
			<div>
				<div className="Jumbotron bg-dark text-center pb-3">
					<h2> The Meetup Clone </h2>
					<p className="subheader">
						{" "}
						This is a mini project created by{" "}
						<a href="https://www.4geeksacademy.co">
							{" "}
							4GeeksAcademy
						</a>
					</p>
					<small>
						Using ReactJS, Bootstrap, @Fontawesome, Moment,
						React-router
					</small>
				</div>
				<div className="space">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.events.map(event => {
								return (
									<Card
										key={event.ID}
										eventID={event.ID}
										eventDate={parseMoment(
											event.meta_keys.day,
											"date"
										)}
										eventTime={parseMoment(
											event.meta_keys.time,
											"time"
										)}
										eventName={event.post_title}
										eventMeetup={event.meta_keys._meetup}
									/>
								);
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
