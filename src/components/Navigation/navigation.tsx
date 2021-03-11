import { Component, h, Prop, State } from '@stencil/core';
import { NavigationItem } from './widgets/NavigationItem';

@Component({ tag: 'app-navigation', styleUrls: ['main.css'], scoped: true })
export class Navigation {
	@Prop() logos: string[] = [];

	@State() _active = true;

	private handleClick(): void {
		this._active = !this._active;
		console.log(this._active);
	}

	render() {
		const navigationItems = this.logos.map(logo => <NavigationItem name={logo} />);
		return (
			<div class="navigation">
				<div
					class="navigation-headline"
					onClick={() => {
						this.handleClick();
					}}
				>
					Logos
				</div>
				<div class={{ hidden: this._active }}>{navigationItems}</div>
			</div>
		);
	}
}
