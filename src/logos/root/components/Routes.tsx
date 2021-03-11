import { FunctionalComponent, h } from '@stencil/core';

export const Routes: FunctionalComponent<{ logos: string[] }> = ({ logos }) => {
	return [
		...logos.map(logo => (
			<stencil-route url={`/${logo}`} component={`app-${logo}`} exact={true} />
		)),
		<stencil-route component={`app-${logos[0]}`} />
	];
};
