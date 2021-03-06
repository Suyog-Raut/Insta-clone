import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { history } from "../router/router";

import PageLoader from "./PageLoader";

const WelcomeNotification = () => {
	return (
		<div className="my-welcome-notif">
			<p className="my-welcome-notif-heading">
				Welcome to the Instagram family!
				Happy Browsing!
			</p>
		</div>
	);
};

// Parse time of notification
const getTime = (date) => {
	const givenDate = new Date(date).setHours(0, 0, 0, 0);
	const today = new Date(Date.now()).setHours(0, 0, 0, 0);

	const difference = today - givenDate;

	const dateObj = {
		0: "Today",
		86400000: "Yesterday",
	};

	return (
		dateObj[difference] ||
		new Date(date).toLocaleDateString("en-us", {
			year: "numeric",
			month: "long",
			day: "numeric",
		})
	);
};

const Notification = ({ notif }) => {
	return (
		<div className="my-notif" onClick={() => history.push(notif.link)}>
			<div className="my-notif-details">
				<img className="my-notif-image" src={notif.photo} />
				<div className="my-notif-text">
					<p className="my-notif-heading">{notif.message}</p>
					<p className="my-notif-date">{getTime(notif.createdAt)}</p>
				</div>
			</div>
			{notif.post && <img className="my-notif-post" src={notif.post} />}
		</div>
	);
};

const Notifications = ({ loading, notifs }) => {
	useEffect(() => {
		const markNotifsAsRead = async () => {
			if (!notifs) {
				return;
			}

			try {
				const url = "/api/v1/users/notifications/read";
				await axios({
					url,
					method: "POST",
					data: {
						date: notifs[0].createdAt,
					},
				});
			} catch (e) {
				// console.log(e);
			}
		};
		markNotifsAsRead();
	});
	return (
		<div class="notifs-page">
			{!loading ? (
				<div className="my-notifs">
					<WelcomeNotification />
					{notifs.map((notif, index) => (
						<Notification notif={notif} index={index + 1} />
					))}
				</div>
			) : (
				<PageLoader />
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	notifs: state.notifications.notifications,
	loading: state.notifications.loading,
});

export default connect(mapStateToProps, null)(Notifications);
