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

    <!--part2:产品-->
    <div style="width: 100%;">
      <h1 style="cursor: default;color: #475869;background-color: white;text-align: center">我们的产品</h1>
      <div style="content: '';width: 70px;height: 3px;margin: 28px auto 15px auto;background-color: #52525a;"></div>
      <br />
      <br />
      <el-row>
        <!-- <el-col :span="1">&nbsp;</el-col> -->
        <el-col :span="6" class="product">
          <div style="height: 10px;margin: 5px;">
            <span style="float: left;font-size: 14px;line-height: 30px;font-weight: bolder;padding-left: 5px;">急好贷</span>
            <el-button round style="float: right;" size="mini" type="primary">贷款申请</el-button>
          </div>
          <el-divider></el-divider>
          <div>
            <span style="margin: -10px auto auto 20px;float: left;color: cornflowerblue;font-weight: bolder;font-size: 18px;">1-3000元</span>
            <p style="margin: 20px auto 20px -70px;float: left;color: #99A9BF;font-size: 12px;">范围额度(元)</p>
          </div>
          <div style="float: right;margin: -20px 10px auto auto;">
            <p style="color: #cccccc;font-size: 12px;">最长28天</p>
            <p style="color: #cccccc;font-size: 12px;">无门槛，极速放款，最快5分钟到账</p>
          </div>
        </el-col>
        <!-- <el-col :span="2">&nbsp;</el-col> -->
        <el-col :span="6" class="product">
          <div style="height: 10px;margin: 5px;">
            <span style="float: left;font-size: 14px;line-height: 30px;font-weight: bolder;padding-left: 5px;">急好贷</span>
            <el-button round style="float: right;" size="mini" type="primary">贷款申请</el-button>
          </div>
          <el-divider></el-divider>
          <div>
            <span style="margin: -10px auto auto 20px;float: left;color: cornflowerblue;font-weight: bolder;font-size: 18px;">1-3000元</span>
            <p style="margin: 20px auto 20px -70px;float: left;color: #99A9BF;font-size: 12px;">范围额度(元)</p>
          </div>
          <div style="float: right;margin: -20px 10px auto auto;">
            <p style="color: #cccccc;font-size: 12px;">最长28天</p>
            <p style="color: #cccccc;font-size: 12px;">无门槛，极速放款，最快5分钟到账</p>
          </div>
        </el-col>
        <!-- <el-col :span="2">&nbsp;</el-col> -->
        <el-col :span="6" class="product">
          <div style="height: 10px;margin: 5px;">
            <span style="float: left;font-size: 14px;line-height: 30px;font-weight: bolder;padding-left: 5px;">急好贷</span>
            <el-button round style="float: right;" size="mini" type="primary">贷款申请</el-button>
          </div>
          <el-divider></el-divider>
          <div>
            <span style="margin: -10px auto auto 20px;float: left;color: cornflowerblue;font-weight: bolder;font-size: 18px;">1-3000元</span>
            <p style="margin: 20px auto 20px -70px;float: left;color: #99A9BF;font-size: 12px;">范围额度(元)</p>
          </div>
          <div style="float: right;margin: -20px 10px auto auto;">
            <p style="color: #cccccc;font-size: 12px;">最长28天</p>
            <p style="color: #cccccc;font-size: 12px;">无门槛，极速放款，最快5分钟到账</p>
          </div>
        </el-col>
      </el-row>
      <br/>
      <br/>
    </div>
    <el-divider></el-divider>

    <div class="normal-question">
      <div class="title"><a name="normalquestion">常见问题</a></div>
      <div class="underline"></div>
      <div class="question-part">
        <div class="questions">1. 巨好贷的借款门槛高吗？</div>
        <div class="answers">提供本人身份证，本人银行卡。年龄在18-55周岁的注册用户，均可申请巨好贷。<span class="fontColor">提示：巨好贷谢绝向在校大学生提供消费分期贷款，如您是在校大学生，请您放弃申请。</span>
        </div>
        <div class="questions">2. 巨好贷借款后多久可以到账?</div>
        <div class="answers">通过审核后最快3分钟到账，发放到银行卡。但因网络原因，到账时间可能会有延迟，具体到账时间请以收款银行卡通知为准。</div>
        <div class="questions">3. 巨好贷是否可以提前还款？</div>
        <div class="answers">可以进行提前还款，今天借，明天就能还。还款时只计算截止到当天的利息。</div>
      </div>

    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

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
  .product {
    border-radius: 5px;
    box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
    margin: auto 65px auto 50px;

  }
  .normal-question {
    margin-top: 60px;
    text-align: left;
  }

  .normal-question .title {
    text-align: center;
    font-size: 36px;
    color: #52525a;
  }

  .normal-question .underline {
    content: "";
    width: 70px;
    height: 3px;
    margin: 28px auto 15px;
    background-color: #52525a;
  }

  .normal-question .question-part {
    width: 958px;
    margin: 0 auto;
  }

  .normal-question .question-part .questions {
    font-size: 22px;
    font-weight: 700;
    color: #3e3e47;
  }

  .normal-question .question-part .answers {
    padding: 10px 0 40px 30px;
    font-size: 15px;
    color: #b5b5bf;
  }
  .fontColor {
    font-weight: 600;
    color: red;
  }

</style>
