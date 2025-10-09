import adapter from '@sveltejs/adapter-static';
import { base_preview, base_prod } from "./src/app.config.js";
const preview = process.env.PUBLIC_APP_ENV === 'preview';
const production = process.env.NODE_ENV === 'production';
const base = preview ? base_preview : production ? base_prod : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			fallback:'404.html'
		}),
		output: { bundleStrategy: 'single' },
		prerender: {
			handleHttpError: 'warn',
			handleMissingId: 'warn',
		},
		paths: {
			base,
			relative: false,
		}
	}
};

export default config;
