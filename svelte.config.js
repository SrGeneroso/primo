import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
    postcss: true
	}),
	kit: {
		adapter: adapter()
	},
	vitePlugin: {
		inspector: true,
	},
	onwarn: (warning, handler) => {
		if (warning.code.startsWith('a11y-click-events-have-key-events')) return //svelte-json-tree throws this messages, until depency upgrade I'll hide those
		handler(warning)
	},
	

};

export default config;
