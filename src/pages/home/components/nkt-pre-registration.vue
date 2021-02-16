<template>
	<div class="pre-registration">
		<div class="container">
			<a id="pre-cadastro"></a>
			<h4 class="title">Faça agora seu pré-cadastro!</h4>
			<div class="row margin-rec">
				<div class="col-md-8 col-xs-12">
					<div class="cnt-form bg-white">
						<div class="col-12 form">
							<label>
								Empresa
								<q-input
									rounded
									outlined
									v-model="form.company"
								/>
							</label>
							<label>
								Razão Social
								<q-input
									rounded
									outlined
									v-model="form.company_name"
								/>
							</label>
							<label>
								CNPJ
								<q-input
									rounded
									outlined
									mask="##.###.###/####-##"
									v-model="form.cnpj"
								/>
							</label>
							<label>
								Perfil Jurídico
								<q-input
									rounded
									outlined
									v-model="form.legal_profile"
								/>
							</label>

							<label>
								Possui conta PJ?
								<q-input
									rounded
									outlined
									v-model="form.pj_account"
								/>
							</label>

							<label>
								Primeiro Nome
								<q-input
									rounded
									outlined
									v-model="form.frist_name"
								/>
							</label>
							<label>
								Sobre nome
								<q-input
									rounded
									outlined
									v-model="form.last_name"
								/>
							</label>

							<label>
								Celular
								<q-input
									rounded
									outlined
									mask="(##) #####-####"
									v-model="form.cell"
								/>
							</label>
							<label>
								Email
								<q-input
									rounded
									outlined
									v-model="form.email"
								/>
							</label>

							<label>
								CEP
								<q-input
									rounded
									outlined
									mask="#####-###"
									v-model="form.address.cep"
								/>
							</label>
							<label>
								Rua
								<q-input
									rounded
									outlined
									v-model="form.address.logradouro"
								/>
							</label>
							<label>
								Cidade
								<q-input
									rounded
									outlined
									v-model="form.address.localidade"
								/>
							</label>
							<label>
								Estado/Província
								<q-input
									rounded
									outlined
									v-model="form.address.uf"
								/>
							</label>
							<label>
								Pais
								<q-input
									rounded
									outlined
									v-model="form.address.pais"
								/>
							</label>
							<div class="text-right">
								<q-btn
									label="Enviar"
									unelevated
									rounded
									size="xl"
									color="primary"
									class="q-px-xl full-width-xs"
									@click="register"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: () => ({
			form: {
				company: '',
				company_name: '',
				cnpj: '',
				legal_profile: '',

				pj_account: '',
				frist_name: '',
				last_name: '',

				cell: '',
				email: '',

				address: {
					cep: '',
					bairro: '',
					localidade: '',
					logradouro: '',
					uf: '',
					pais: '',
				},
			},
		}),

		methods: {
			register() {
				console.log('send', this.form)
			},
		},

		watch: {
			'form.address.cep': async function (val) {
				if (!val || val.length <= 8) return false

				try {
					const clearedcep = val.match(/([0-9]+)/g).join('')

					const { data } = await this.$axios.get(
						`https://viacep.com.br/ws/${clearedcep}/json/`
					)

					this.$set(this.form, 'address', { ...data, pais: 'Brasil' })
				} catch (error) {}
			},
		},
	}
</script>

<style lang="scss" scoped>
	.pre-registration {
		background-color: #000;
		background-image: url('/images/hamburguer.png');
		background-position: center;
		background-size: cover;
		padding: 1px 0;

		.title {
			text-transform: uppercase;
			font-weight: bold;
			font-size: 30px;
			margin-top: -128px;
			margin-bottom: 22px;
		}

		.margin-rec {
			margin-bottom: -78px;
		}

		.cnt-form {
			border-radius: 40px;
			padding: 40px;

			.form {
				display: flex;
				flex-direction: column;
				position: relative;
				z-index: 1;
				gap: 18px;

				& > label {
					color: var(--q-color-secondary);
					font-weight: bold;
					font-size: 16px;
				}
			}
		}
	}
</style>
