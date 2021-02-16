<template>
	<footer class="container">
		<div class="overview">
			<a id="quem-somos"></a>
			<h3>Quem somos</h3>
			<p>
				O NikEAT é um aplicativo de menu digital criado na cidade de
				Niterói com o untuito de fornecer um valor mais justo e
				competitivo para os estabelecimentos comercias do ramo
				alimentício.
			</p>
		</div>
		<div class="navbar q-pt-xl">
			<div class="row flex-aling-center">
				<div class="col-5 q-pr-xl hidden-xs">
					<img class="app-links" src="/images/app-links.png" alt="" />
				</div>
				<div class="col-md-1 col-xs-2">
					<nav class="network">
						<a href="#">
							<q-icon name="fab fa-facebook-f" />
						</a>
						<a href="#">
							<q-icon name="fab fa-instagram" />
						</a>
						<a href="#">
							<q-icon name="fab fa-youtube" />
						</a>
					</nav>
				</div>
				<div>
					<nav>
						<a @click="setTarget('inicio')">Início</a>
						<router-link to="/termo-de-uso">
							Termos de Uso
						</router-link>
						<router-link to="/politica-de-privacidade">
							Políticas de Privacidade
						</router-link>
						<a @click="setTarget('pre-cadastro')">Contato</a>
					</nav>
				</div>
			</div>
		</div>
		<nkt-footer />
	</footer>
</template>

<script>
	import { mapMutations } from 'vuex'
	import NktFooter from 'components/nkt-footer'
	export default {
		components: {
			NktFooter,
		},
		methods: {
			...mapMutations(['setTarget']),
		},
	}
</script>

<style lang="scss" scoped>
	footer {
		padding-top: 128px;
		padding-bottom: 78px;
		display: flex;
		flex-direction: column;
		align-items: center;

		.navbar {
			width: 100%;
			max-width: 670px;
			.app-links {
				width: 100%;
				max-width: 280px;
			}

			nav {
				display: flex;
				flex-direction: column;
				justify-content: center;
				height: 100%;
				gap: 8px;

				a {
					color: #fff;
					text-decoration: none;
					font-size: 16px;
					cursor: pointer;

					&:hover {
						text-decoration: underline;
					}
				}
			}

			.network {
				a {
					background-color: #fff;
					color: var(--q-color-primary);
					display: flex;
					align-items: center;
					justify-content: center;
					width: 30px;
					height: 30px;
					border-radius: 30px;
					text-decoration: none !important;
				}
			}
		}

		.overview {
			width: 100%;
			max-width: 670px;
			font-size: 22px;
			text-align: center;

			h3 {
				font-weight: bold;
				text-align: center;
				text-transform: uppercase;
			}
		}
	}
</style>
