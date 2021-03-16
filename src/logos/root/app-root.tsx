import { Component, h, Host } from '@stencil/core';
import { Routes } from './components/Routes';

@Component({
	tag: 'app-root',
	styleUrls: ['root.css']
})
export class AppRoot {
	private _logos: string[] = [
		'svg-stroke-colored',
		'svg-stroke-vibrant',
		'scale',
		'visualizer'
	];
	render() {
		return (
			<Host>
				<app-navigation logos={this._logos} />
				<stencil-router class="content">
					<stencil-route-switch scrollTopOffset={0}>
						<Routes logos={this._logos} />
					</stencil-route-switch>
				</stencil-router>
			</Host>
		);
	}
}
