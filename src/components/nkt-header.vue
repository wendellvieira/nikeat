<template>
	<header class="q-mt-xl">
		<div class="row container">
			<div class="cnt-header">
				<router-link to="/">
					<img class="logo" src="/images/logo.png" alt="" />
				</router-link>
				<nav v-if="!noMenu">
					<a @click="setTarget('pre-cadastro')">Pré-cadastro</a>
					<a @click="setTarget('quem-somos')">Quem somos</a>
					<a @click="setTarget('detalhes')">Detalhes</a>
				</nav>
			</div>
		</div>
		<slot />
	</header>
</template>
<script>
	import { mapMutations } from 'vuex'
	export default {
		props: {
			noMenu: {
				type: Boolean,
				default: false,
			},
		},
		methods: {
			...mapMutations(['setTarget']),
		},
	}
</script>

<style lang="scss" scoped>
	header {
		background-image: url('/images/bg.png');

		.cnt-header {
			display: flex;
			justify-content: space-between;
			width: 100%;
			align-items: center;
		}

		.logo {
			width: 260px;
		}
	}
	nav {
		display: flex;
		gap: 28px;
		justify-content: space-between;
		a {
			color: #fff;
			font-size: 20px;
			text-decoration: none;
			display: block;
			position: relative;
			z-index: 1;
			cursor: pointer;

			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
