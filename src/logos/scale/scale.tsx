import { Component, h } from '@stencil/core';

import anime from 'animejs';

@Component({
	tag: 'app-scale',
	styleUrls: ['main.css'],
	scoped: true
})
export class Scale {
	componentDidLoad() {
		anime({
			targets: '.letter-0',
			easing: 'linear',
			duration: 1250,
			scale: [0, 1],
			autoplay: true
		});

		anime({
			targets: '.letter-1',
			easing: 'linear',
			duration: 1250,
			scale: [0, 1],
			autoplay: true,
			delay: 500
		});

		anime({
			targets: '.letter-2',
			easing: 'linear',
			duration: 1250,
			scale: [0, 1],
			autoplay: true,
			delay: 1000
		});
	}
	render() {
		return (
			<app-layout>
				<div class="letters">
					<span class="letter-0">L</span>
					<span class="letter-1">A</span>
					<span class="letter-2">B</span>
				</div>
			</app-layout>
		);
	}
}
