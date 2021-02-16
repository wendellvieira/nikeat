<template>
	<div>
		<a id="inicio"></a>
		<nkt-header>
			<nkt-about />
		</nkt-header>

		<nkt-pre-registration />

		<nkt-footer />
	</div>
</template>

<script>
	import nktHeader from 'src/components/nkt-header.vue'
	import NktPreRegistration from './components/nkt-pre-registration.vue'
	import NktFooter from './components/nkt-footer.vue'
	import NktAbout from './components/nkt-about.vue'

	import { scroll } from 'quasar'
	const { getScrollTarget, setScrollPosition } = scroll

	import { mapState } from 'vuex'

	export default {
		components: { nktHeader, NktPreRegistration, NktAbout, NktFooter },
		data: () => ({
			allTargets: ['inicio', 'pre-cadastro', 'quem-somos', 'detalhes'],
			mappedTargets: {},
		}),
		computed: {
			...mapState(['target']),
		},
		watch: {
			target: function (target) {
				const lastTarget = target[target.length - 1]

				const body = document.getElementsByTagName('body')[0]
				const scroll = getScrollTarget(body)

				setScrollPosition(scroll, this.mappedTargets[lastTarget], 300)
			},
		},

		mounted() {
			setTimeout(() => {
				this.allTargets.forEach((el) => {
					const { top } = document
						.getElementById(el)
						.getBoundingClientRect()
					this.$set(this.mappedTargets, el, top)
				})
			}, 1000)
		},
	}
</script>

<style lang="scss" scoped></style>
