import { Component, h, Host } from '@stencil/core';

@Component({ tag: 'app-layout', styleUrls: ['main.css'], scoped: true })
export class Layout {
	render() {
		return (
			<Host class="content">
				<div class="static-text">
					<div class="side-text">
						<span>Fontys</span>
						<span>ICT</span>
					</div>
					<div class="main-text">Innovation</div>
				</div>
				<div class="dynamic-text">
					<slot />
				</div>
			</Host>
		);
	}
}
