import { FunctionalComponent, h } from '@stencil/core';

export const NavigationItem: FunctionalComponent<{ name: string }> = ({ name }) => {
	return (
		<stencil-route-link url={`/${name}`} exact={true}>
			<div class="navigation-item">{name}</div>
		</stencil-route-link>
	);
};
