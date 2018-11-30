<template>
  <ul>
		<li v-for="msg in msgs">{{ msg }}</li>
	</ul>
</template>

<script>
export default {
  name: 'demo',
	data() {
		return {
			msgs: ['cnpm install vue',
								'cnpm install --global vue-cli',
								'vue init webpack vuejs_demo',
								'cd vuejs_demo',
								'npm install',
								'npm run dev'
								]
		}
	}
}
</script>