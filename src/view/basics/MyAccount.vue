<template>
	<div>
		<div class="first">
			<Top></Top>
		</div>

		<div style="border: 2px solid #E8EFF5;width: 90%;height: 550px; margin-top: 100px;margin-left: 65px;">

			<el-col :span="4">
				<el-menu default-active="2" class="el-menu-vertical-demo" background-color="#EBEEF5">

					<el-menu-item index="/account/AccountOverview" >
						<i class="el-icon-s-home"></i>
						<span slot="title">账户总览</span>
					</el-menu-item>

					<el-menu-item index="2">
						<i class="el-icon-s-claim"></i>
						<span slot="title">资金记录</span>
					</el-menu-item>
					<el-menu-item index="3">
						<i class="el-icon-s-data"></i>
						<span slot="title">投资记录</span>
					</el-menu-item>
					<el-menu-item index="4">
						<i class="el-icon-s-help"></i>
						<span slot="title">回款计划</span>
					</el-menu-item>
					<el-menu-item index="5">
						<i class="el-icon-upload"></i>
						<span slot="title">充值提现</span>
					</el-menu-item>
					<el-menu-item index="6">
						<i class="el-icon-user-solid"></i>
						<span slot="title">账户设置</span>
					</el-menu-item>
					<el-menu-item index="7">
						<i class="el-icon-s-platform"></i>
						<span slot="title">资产计划预览</span>
					</el-menu-item>

				</el-menu>
			</el-col>
			<!-- 显示层 -->
			<div style="border: 2px solid #E8EFF5;width: 79%;height: 550px; margin-left: 250px;">
				<router-view />
			</div>
		</div>
		


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
				tabPosition: 'left'

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

<style>
</style>
