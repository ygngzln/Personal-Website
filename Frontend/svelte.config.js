import sveltePreprocess from 'svelte-preprocess'
// import cloudflare from '@sveltejs/adapter-cloudflare'

export default {
  // kit: {
  //   adapter: cloudflare(),
  //   target: "#svelte"
  // },
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess()
}
