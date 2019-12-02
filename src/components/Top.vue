<template>
<div >
	<div class="top1">
		<div class="top1-1">
			欢迎致电：400-0000-000    服务时间：80:30-18:30（工作日）
		</div>
		<div>
			<div class="img">
				<img src="../assets/images/logo.png" />
			</div>
			
		<div class="top2">
			
			<el-menu  class="el-menu-demo" mode="horizontal">
			  <el-menu-item index="1" class="top2-1" style="color: black;" @click="toMain()">首页</el-menu-item>
			  <el-menu-item index="2" class="top2-1" style="color: black;">关于汇创</el-menu-item>
			  <el-menu-item index="3" class="top2-1" style="color: black;">投资理财</el-menu-item>
			  <el-menu-item index="4" class="top2-1" style="color: black;" @click="toMyAccount()">我的账户</el-menu-item>
			  <el-menu-item index="5" class="top2-1" style="color: black;">信息披露</el-menu-item>
			  <el-menu-item ><el-button type="infor" icon="el-icon-loading" size="small" @click="toLogin()">登录</el-button></el-menu-item>
			  <el-menu-item ><el-button type="infor" icon="el-icon-user-solid" size="small" @click="toRegister()">注册</el-button></el-menu-item>
			</el-menu>
			
		</div>
		</div>
		
	</div>
	
</div>
	
</template>

<script>
	export default{
		name:'Top',
		data:function(){
			return{
				
			}
			
		},
		methods:{
			toMain:function(){
				this.$router.push('index')
				
			},
			toLogin:function(){
				this.$router.push('/')
				
			},
			toMyAccount:function(){
				this.$router.push('MyAccount')
			},
			toRegister:function(){
				this.$router.push('register')
				
			},
			
		}
		
	}
	
</script>

<style>
	@import url("../assets/css/Top.css");
	
</style>
