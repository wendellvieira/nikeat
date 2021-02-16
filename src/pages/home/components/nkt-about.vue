<template>
	<div class="container row">
		<a id="detalhes"></a>
		<h4 class="q-mt-lg text-center-xs">
			A liberdade que o delivery precisava!
		</h4>
		<div class="col-md-8 col-xs-12">
			<nav class="about">
				<ul>
					<span>Mensalidade fixa</span>
					<small>
						R$ 250,00/mês no plano mensal e só! Independente do seu
						faturamento!
					</small>
				</ul>
				<ul>
					<span>Taxa zero nos pedidos</span>
					<small>
						Não cobramos taxa nos pedidos e o pagamento é feito
						diretamente ao estabelecimento.
					</small>
				</ul>
				<ul>
					<span>Descontos progressivos</span>
					<small>
						R$ 200,00/mês no plano semestral e R$ 150/mês no plano
						anual.*
						<small>
							* Taxa de 30% sobre o valor total do plano em caso
							de desistência.
						</small>
					</small>
				</ul>
			</nav>
		</div>
		<div class="hidden-xs col">
			<img class="image" src="/images/cell.png" alt="" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.about {
		ul {
			position: relative;
			padding-left: 30px;

			&:before {
				content: '●';
				position: absolute;
				top: 0px;
				left: 0;
				font-size: 30px;
			}

			span {
				text-transform: uppercase;
				font-size: 30px;
				font-weight: bold;
			}
			small {
				font-size: 16px;
				display: block;

				small {
					font-size: 10px;
				}
			}
		}
	}
	.image {
		width: 150%;
		margin: -25%;
		margin-top: -140px;
	}
</style>
