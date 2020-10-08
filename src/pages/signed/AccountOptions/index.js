import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/navbar/sidebar";
// styles & components //
import { Button, Box } from 'components';
import { IconButton, Img, EventsDiv, A } from './styles'
import { Center, Row, Col, Grid } from 'styles/global'
//  //
// import UserEvents from "./userEvents";
// import BecomeInstitute from "./becomeInstitute";
// icons //
import { ReactComponent as Settings } from '../../../assets/images/Settings.svg'
import { ReactComponent as Dots } from '../../../assets/images/Dots.svg'
import { ReactComponent as Edit } from '../../../assets/images/Edit.svg'
// api //
import { base } from "../../../config/api";

export default function AccountOptions(props) {
	const [id, setId] = useState()
	const [isManageableEventSelected, setIsManageableEventSelected] = useState(false)

	useEffect(() => {
		base
			.get(`/showuser`)
			.then(r => {
				setUser(r.data);
				getUserIntitute();
				base
					.get(`/showrider`)
					.then(r => {
						setUserRider(r.data);
					})
					.catch(e => {
					});
			})
			.catch(e => {
				console.log(e.response);
			});

		base.get(`/eventsSigned`)
			.then(({ data }) => setUserListEvents(data)).catch(console.log);
		base.get(`/managedEventsList`)
			.then(({ data }) => setmanageableEvents(data)).catch(console.log);
	}, []);

	const [userListEvents, setUserListEvents] = useState([]);
	const [manageableEvents, setmanageableEvents] = useState([]);
	const [userInstitute, setUserInstitute] = useState();

	const [user, setUser] = useState({
		name: ""
	});

	const [userRider, setUserRider] = useState();
	const [switcher, setSwitcher] = useState(false);

	const getUserIntitute = () => {
		base.get(`/showinstitute`)
			.then(r => {
				setUserInstitute(r.data);
			})
			.catch(e => {
			});
	};

	const eventsList = (render) => {
		return (
			render.map((event) =>
				<EventsDiv onClick={() => { localStorage.setItem('event_selected', event.id); props.history.push(`/dashboard`) }}>
					<p>{event.id}. {event.event_name}</p>
					<p>{event.date_begin}</p>
				</EventsDiv>
			)
		)
	}

	// const userInstitute = "";
	const userDetails = (
		<>
			<Box
				alignLabel="space-between"
				label="User Information"
				sufix={<a href="#">Edit</a>}
			>

				<Row style={{ display: "flex", alignItems: "flex-start", }}>
					<Col sm={5}>
						<Img size={110} src="https://featuredcreature.com/wp-content/uploads/2012/10/Screen%2Bshot%2B2011-01-23%2Bat%2B10.54.57%2BAM2.png" />
					</Col>

					<Col sm={7}>
						<div style={{ lineHeight: "30px", fontSize: "20px", fontWeight: 500, marginTop: 14 }}>{user.name}</div>

						<div style={{ lineHeight: "25px" }}>{user.email}</div>

						<div style={{ lineHeight: "25px" }}>5519981913338</div>
					</Col>
				</Row>

			</Box>
			{userRider ? (
				<>
					<Box noPadding="true" style={{ padding: 0 }} isTopSpaced label="User Rider">
						<div style={{ display: "flex", padding: "24px" }}>
							<div style={{ marginRight: "20px" }}>
								<Img size={35} src="https://i.pinimg.com/originals/01/dc/20/01dc20ca382fb226e9df8591b3da95e9.jpg" />
							</div>
							<div>
								<h3>{userRider.name}</h3>
								<p>{userRider.motorcycle + " - " + userRider.motorcycle_plate}</p>
							</div>
						</div>
						<div style={{
							display: "flex", justifyContent: "space-around", backgroundColor: "#f5f5f5", width: "100%",
							borderTop: "1px solid #e8e8e8",
						}}>
							<div style={{ display: "flex", borderRight: "1px solid #e8e8e8", width: "100%", alignItems: "center", justifyContent: "center" }}>
								<IconButton><Settings /></IconButton>
							</div>
							<div style={{ display: "flex", borderRight: "1px solid #e8e8e8", width: "100%", alignItems: "center", justifyContent: "center" }}>
								<IconButton><Edit /></IconButton>
							</div>
							<div style={{ display: "flex", borderRight: "1px solid #e8e8e8", width: "100%", alignItems: "center", justifyContent: "center" }}>
								<IconButton><Dots /></IconButton>
							</div>
						</div>
					</Box>
				</>
			) : (
					<Box style={{ marginTop: "20px" }}>
						<span>
							No rider found...
            </span>
						<Button style={{ marginTop: "10px" }} type="link" onClick={() => props.history.push("/rider")}>
							register a rider
            </Button>
					</Box>
				)}
		</>
	);

	return (
		<>
			<Sidebar SeleKey={3} />
			<Center>
				<Grid>
					<div style={{ display: "flex", width: "100%", padding: "26px 26px 0" }} >
						<span style={{ width: "195px", fontSize: "20px", fontWeight: 500 }}>
							Account Options
            </span>
					</div>
					<Box style={{ width: "100%", border: "none" }}>
						<Row>
							<Col sm={4}>
								{userDetails}
								{userInstitute ? (
									<Button isTopSpaced type="link" onClick={() => props.history.push("/manageInstitute")} >
										Manage your Institute
									</Button>
								) : (
										<a style={{ color: "#1890ff" }} onClick={() => setSwitcher(true)}>
											Register your Institute
										</a>
									)}
							</Col>
							<Col sm={8}>
								{
									userListEvents ?
										<Box
											noPadding
											alignLabel="space-between"
											label={isManageableEventSelected
												?
												'Manageable Events'
												:
												'Subscribed Events'
											}
											sufix={
												<A
													onClick={() => setIsManageableEventSelected(!isManageableEventSelected)}
												>
													{isManageableEventSelected
														?
														'Show only subscribed events'
														:
														'Show only manageable events'
													}
												</A>
											}
										>
											<div style={{ padding: '10px' }}>
												{isManageableEventSelected
													?
													eventsList(manageableEvents)
													:
													eventsList(userListEvents)
												}
											</div>
										</Box>
										:
										<Box label="Subscribed Events">
											<h3>You are not subscribed to any events... <a>find events</a></h3>
										</Box>
								}
							</Col>
						</Row>
					</Box>
				</Grid>
			</Center>
		</>
	);
}
