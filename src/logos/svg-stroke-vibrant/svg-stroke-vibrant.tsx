import { Component, h, Element } from '@stencil/core';

import anime from 'animejs';

@Component({
	tag: 'app-svg-stroke-vibrant',
	styleUrls: ['main.css'],
	scoped: true
})
export class SvgStrokeVibrant {
	@Element() _element!: HTMLAppSvgStrokeVibrantElement;

	componentDidLoad() {
		const paths = this._element.querySelectorAll('path');
		paths.forEach(path => {
			const offset = anime.setDashoffset(path);
			path.setAttribute('stroke-dashoffset', offset);
			anime({
				targets: paths,
				strokeDashoffset: [offset, 0, offset],
				strokeDasharray: ['0%', '50%'],
				duration: 5000,
				round: 1,
				loop: true,
				direction: 'alternate',
				easing: 'easeInOutQuad',
				autoplay: true
			});
		});
	}
	render() {
		return (
			<app-layout>
				<div class="letters">
					<svg viewBox="0 0 63 103">
						<path
							class="style-0"
							d="M13.7109 91.9609H62.2266V103H0.140625V0.625H13.7109V91.9609Z"
							fill="white"
						/>
					</svg>
					<svg viewBox="0 0 91 103">
						<path
							class="style-0"
							d="M66.4453 76.2812H23.5547L13.9219 103H0L39.0938 0.625H50.9062L90.0703 103H76.2188L66.4453 76.2812ZM27.6328 65.1719H62.4375L45 17.2891L27.6328 65.1719Z"
							fill="white"
						/>
					</svg>
					<svg viewBox="0 0 70 103">
						<path
							class="style-0"
							d="M0.0234375 103V0.625H33.4922C44.6016 0.625 52.9453 2.92187 58.5234 7.51562C64.1484 12.1094 66.9609 18.9062 66.9609 27.9062C66.9609 32.6875 65.6016 36.9297 62.8828 40.6328C60.1641 44.2891 56.4609 47.125 51.7734 49.1406C57.3047 50.6875 61.6641 53.6406 64.8516 58C68.0859 62.3125 69.7031 67.4687 69.7031 73.4687C69.7031 82.6562 66.7266 89.875 60.7734 95.125C54.8203 100.375 46.4062 103 35.5312 103H0.0234375ZM13.5234 55.1172V91.9609H35.8125C42.0938 91.9609 47.0391 90.3437 50.6484 87.1094C54.3047 83.8281 56.1328 79.3281 56.1328 73.6094C56.1328 61.2812 49.4297 55.1172 36.0234 55.1172H13.5234ZM13.5234 44.2891H33.9141C39.8203 44.2891 44.5312 42.8125 48.0469 39.8594C51.6094 36.9062 53.3906 32.8984 53.3906 27.8359C53.3906 22.2109 51.75 18.1328 48.4688 15.6016C45.1875 13.0234 40.1953 11.7344 33.4922 11.7344H13.5234V44.2891Z"
							fill="white"
						/>
					</svg>
				</div>
			</app-layout>
		);
	}
}
