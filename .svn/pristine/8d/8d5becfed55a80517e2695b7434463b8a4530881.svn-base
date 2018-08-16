<!-- 选择日期组件 -->
<style lang="scss" scoped>
    @import '@/public/scss/common.scss';

	.date-bar {
		display: flex;
		padding: 6px;
		height: 49px;
		font-size: 15px;
		margin: 0 10px;
		text-align: center;
		background-color: #ffffff;
		border: 1px solid #D9D9D9;
		> div {
			line-height: 35px;
		}
		.date-icon {
			width: 35px;
			border-radius: 2px;
			margin-right: 8px;
			background-color: #F5F5F5;
			border: 1px solid #E9E9E9;
		}
		.date-box {
			display: flex;
			.date-btn {
				width: 95px;
				border-radius: 2px;
				background-color: #F5F5F5;
				border: 1px solid #E9E9E9;
			}
			.date-split {
				color: #DBDBDB;
			}
		}
		.date-confirm {
			width: 47px;
			margin-left: 6px;
			border-radius: 2px;
			background-color: #F5F5F5;
			border: 1px solid #E9E9E9;
			@include txt-deepgreen;
		}
	}
</style>

<template>
	<div class="date-bar">
		<div class="date-icon">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-riqixuanze"></use>
			</svg>
		</div>
		<div class="date-box" v-if="type==1">
			<div class="date-btn" @click="selectDate('sdate')">{{sdate}}</div>
			<div class="date-split">&nbsp;-&nbsp;</div>
			<div class="date-btn" @click="selectDate('edate')">{{edate}}</div>
		</div>
		<div class="date-box" v-if="type==2">
			<div class="date-btn" @click="selectDate('sdate')">{{sdate}}</div>
		</div>
		<div class="date-confirm">确定</div>
	</div>
</template>

<script>
	/*
	 *	选择日期组件
	 *	@param sdate 开始日期
	 *	@param edate 结束日期
	 * */
	export default {
		name: 'date-bar',
		props: {
			sdate: { //开始日期
				type: String,
				default: ''
			},
			edate: { //结束日期
				type: String,
				default: ''
			},
			type: { //类型
				type: Number,
				default: 1
			}
		},
		methods: {
			selectDate(t) { //选择日期
				app.calendar({
					value: t == 'sdate' ? this.sdate : this.edate
				}).then(res => {
					let obj;
					if(this.type == 1) {
						obj = {
							sdate: t == 'sdate' ? res : this.sdate,
							edate: t == 'edate' ? res : this.edate
						}
					}

					this.$emit('changeDate', obj);
				});
			}
		}
	}
</script>