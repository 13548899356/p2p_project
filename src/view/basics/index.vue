<template>
	<div>
		<!-- 头部 -->
		<div class="first">
			<Top></Top>
		</div>
		<br />
		<div style="height: 600px;width: 100%;margin-top: 50px;">
			<br />
			<!-- 轮播图 -->
			<div>
				<el-carousel height="500px">
					<el-carousel-item>
						<img src="../../assets/carousel/c5.png" draggable="false" style="width: 100%;height: 100%;" />
					</el-carousel-item>
					<el-carousel-item>
						<img src="../../assets/carousel/c2.png" draggable="false" style="width: 100%;height: 100%;" />
					</el-carousel-item>
					<el-carousel-item>
						<img src="../../assets/carousel/c3.png" draggable="false" style="width: 100%;height: 100%;" />
					</el-carousel-item>

				</el-carousel>
			</div>

		</div>

		<!-- part1 -->
		<div>
			<h1 style="text-align: center">亿人宝，借贷服务</h1>
			<div class="part1">
			</div>
		</div>
		<img src="../../assets/carousel/h1.png" style="margin-left: 100px;" />


		<!-- 脚部 -->
		<div class="first2">
			<Down></Down>

		</div>
	</div>
</template>

<script>
	import Top from '@/components/Top.vue'
	import Down from '@/components/down.vue'
	export default {
		name: 'Login',
		data: function() {
			return {


			};

		},
		methods: {
			/* doSubmit: function() {

					let url=this.axios.urls.SYSTEM_USER_DOLOGIN;
					let params={
						name:'zsss'
					}

					this.axios.post(url,params).then(resp=>{

					}).catch(resp=>{})

					console.log("aaa");
				}

	*/
		},
		components: {
			Top,
			Down


		}

	}
</script>

<style scoped>
	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}


</style>
