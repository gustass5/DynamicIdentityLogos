import { FunctionalComponent, h } from '@stencil/core';

export const StaticText: FunctionalComponent = () => {
	return (
		<div>
			<div class="side-text">
				<span>Fontys</span>
				<span>ICT</span>
			</div>
			<div class="main-text">Innovation</div>
		</div>
	);
};
