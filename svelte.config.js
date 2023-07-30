import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import {primoConfig} from './primo.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
    postcss: true
	}),
	kit: {
		adapter: adapter(),
		alias:{
			$provider:`src/lib/providers/${primoConfig.provider}`
		}
	},
	vitePlugin: {
		inspector: true,
	},
};

export default config;