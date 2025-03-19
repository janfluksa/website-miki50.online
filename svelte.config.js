import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
	  adapter: adapter({
		fallback: 'index.html'
	  }),
	  prerender: {
		entries: ['*'], // Prerenderuje všechny stránky do HTML
	  }
	}
  };

export default config;
