import React from 'react';
import './Why.css';
import group from './images/Group.png';

function Why() {
	return (
		<div>
			<h1 className="us">Why Choose Us</h1>
			<h6 className="lor3">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam.
			</h6>
			<div className="box2">
				<p className="compass">
					<img className="group1" src={group} alt="" />
				</p>
				<h1 className="trust">Trusted</h1>
				<h6 className='lor4'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna.
				</h6>
			</div>

			<div className="box3">
				<p className="compass">
					<img className="group1" src={group} alt="" />
				</p>
				<h1 className="trust">Easy to Use</h1>
				<h6 className='lor4'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna.
				</h6>
			</div>

			<div className="box4">
				<p className="compass">
					<img className="group1" src={group} alt="" />
				</p>
				<h1 className="trust">Faster</h1>
				<h6 className='lor4'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna.
				</h6>
			</div>
		</div>
	);
}

export default Why;
