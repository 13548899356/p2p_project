<template>
	<div>

    <div class="first">
      <Top></Top>
    </div>

    <div style="background-color:#e7ebf2">
      <div style="margin-left: 90px">
        <el-container class="main-container">
          <el-aside >
            <el-col style="width: 200px">
              <el-menu default-active="1" class="el-menu-vertical-demo" >

                <el-menu-item index="1" @click="toAccount('AccountOverview')" key="1">
                  <i class="el-icon-s-home"></i>
                  <span slot="title">账户总览</span>
                </el-menu-item>

                <el-menu-item index="2"  @click="toAccount('MoneyRecord')" key="2">
                  <i class="el-icon-s-claim"></i>
                  <span slot="title">资金记录</span>
                </el-menu-item>
                <el-menu-item index="3" @click="toAccount('InvestmentRecord')" key="3">
                  <i class="el-icon-s-data"></i>
                  <span slot="title">投资记录</span>
                </el-menu-item>
                <el-menu-item index="4" @click="toAccount('CashTransfer')" key="4">
                  <i class="el-icon-s-help"></i>
                  <span slot="title">回款计划</span>
                </el-menu-item>
                <el-menu-item index="5" @click="toAccount('Recharge')"  key="5">
                  <i class="el-icon-upload"></i>
                  <span slot="title">充值提现</span>
                </el-menu-item>
                <el-menu-item index="6" @click="toAccount('PersonalCenter')"  key="6">
                  <i class="el-icon-user-solid"></i>
                  <span slot="title">账户设置</span>
                </el-menu-item>
                <el-menu-item index="7" @click="toAccount('AssetPlan')"  key="7">
                  <i class="el-icon-s-platform"></i>
                  <span slot="title">资产计划预览</span>
                </el-menu-item>

              </el-menu>
            </el-col>
          </el-aside>
          <el-container>

            <el-main class="main-center">
              <div style="width: 1080px;height: 100%;background-color: white;margin-left: 10px;margin-top: -20px;">

                <router-view />
              </div>
            </el-main>
          </el-container>
        </el-container>

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
			toAccount:function(path){
			    this.$router.push(path)
      }

		},
		components: {
			Top,
			Down


		},
		created() {
        this.$router.push("AccountOverview")
    }

  }
</script>

<style scoped>
  .main-container {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  .main-aside-collapsed {
    /* 在CSS中，通过对某一样式声明! important ，可以更改默认的CSS样式优先级规则，使该条样式属性声明具有最高优先级 */
    width: 64px !important;
    height: 100%;
    background-color: #334157;
    margin: 0px;
  }

  .main-aside {
    width: 240px !important;
    height: 100%;
    background-color: #334157;
    margin: 0px;
  }

  .main-center {
    padding: 0px;
    margin-left: -100px;
    border-left: 1px solid #333;
  }
</style>
