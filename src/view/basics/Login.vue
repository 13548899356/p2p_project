<template>
	<div>
		<div class="first">
			<Top></Top>
		</div>
		<div class="first1">
			<div class="first3">
				<template>
					<el-alert title="p2p不会以任何理由要求您转账汇款，谨防诈骗。" type="warning" show-icon>
					</el-alert>
					<el-tabs v-model="activeName" >
						<el-tab-pane label="账号登录" name="second">

							<el-form>
								<el-input type="text" placeholder="登录账号" autocomplete="off"  ></el-input>

								<el-input class="first3-1" type="password" placeholder="登录密码" autocomplete="off" show-password></el-input>
								<el-button  class="first3-1" type="primary" style="width: 100%;">提交</el-button>

							</el-form>
							<br />
							<a href="javascript:void(0)" >我还没有账户，点此注册</a>

						</el-tab-pane>
						<el-tab-pane label="手机登录" name="first">

							<el-form>
								<el-input type="text" v-model="phone" placeholder="手机号码" autocomplete="off"></el-input>
								<el-input class="first3-1" v-model="msg" placeholder="验证码">
									<!-- <span @click="timeOut()" >{{message}}</span> -->
									<template slot="append" >
                        <el-button type="primary" @click="timeOut()" :disabled="isDis">{{message}}</el-button>
									</template>
								</el-input>

								<el-button class="first3-1"   type="primary" style="width: 100%;" @click="doSubmit">提交</el-button>

							</el-form>

						</el-tab-pane>

					</el-tabs>
				</template>

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
				'activeName': 'second',
				'message':'发送验证码',
				'isDis':false,
        'phone':null,
        'msg':null



			};

		},
		methods: {
			 doSubmit: function() {

				let url=this.axios.urls.SYSTEM_getPhoneMessage;
				let params={
					phone:this.phone,
          msg:this.msg
				}

				this.axios.post(url,params).then(resp=>{
          console.log(resp.data)
				}).catch(resp=>{})


			},

			timeOut:function(){
			     let url=this.axios.urls.SYSTEM_getA;
			     this.axios.post(url,{}).then(resp=>{

           }).catch(resp=>{

           })

				this.isDis=true;
				var total=60;
				 let clock = window.setInterval(() => {
				      total--
				      this.message =total + 's后重新发送'
					if(total==0){
						 window.clearInterval(clock)
						 this.message ='重新获取'
						 this.isDis=false;
					}
				    },1000)


			}
		},
		components: {
			Top,
			Down


		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../assets/css/Login.css");

	/* @import url("../../assets/css/user.css"); */
	/*上下滚动*/
	#scrollDiv {
		width: 400px;
		height: 30px;
		line-height: 30px;
		overflow: hidden;
	}

	#scrollDiv li {
		height: 30px;
		padding-left: 10px;
	}

	.login-container {}

	.title {
		margin: 0px auto 40px auto;
		text-align: center;
		color: #505458;
	}
</style>
