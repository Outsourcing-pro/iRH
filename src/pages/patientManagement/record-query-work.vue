/* A17-2作业查询 */
<template>
	<div class="page">
        <div class="header">
            <!-- 导航 -->
            <div class="back-nav" @click="$router.back()">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-nav_fanhui_baise"></use>
                </svg>{{ msg }}
            </div>
        </div>
		<div class="container">
			<date-bar 
				:sdate='day' 
				:type='2'
				@changeDate="changeDate"
				@confirmDate="confirmDate"></date-bar>
            <div class="from-container">
                <div v-for="(item,index) in data" :key="index">
					<div>
						<div><span>{{index}}</span>{{item.Title}}}</div>
						<div>{{item.StartTime}}</div>
					</div>
					<div class="void"></div>
				</div>
            </div>
            <div class="separate"></div>
		</div>
		<!-- <action-sheet></action-sheet> -->
	</div>
</template>

<script>
	import {GetMyHomeworkList} from '../../api/interface';

	export default {
		name: "recordQueryWork",
		data() {
			return {
				msg: "作业查询",
				day: app.formatDatetime(new Date(),'yyyy-MM-dd'),
				data: []
			};
		},
		created() {
			console.log(this.msg)
			this.renderPage();
		},
		methods: {
			renderPage() {
				GetMyHomeworkList({
					custid: this.$router.currentRoute.params.cid, //患者客户ID
					date: this.day, //日期
					userId: this.$router.currentRoute.params.cid //客户ID
				}).then(res => {
					this.data = res.data;
				});
			},
			changeDate(date) {
				console.log('===',date)
				this.day = date.sdate;
			},
			confirmDate() {
				this.renderPage();
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '@/public/scss/common.scss';

	.page {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
        @include body-bgColor();
        .header {
            .back-nav {
                @include nav-top;
            }
		}
		.container {
			.date {
				height: 40px;
				line-height: 40px;
				padding: 0 15px;
				color: #333333;
				@include item-bgColor();
				@include fontsize14;
			}
			.from-container {
				padding: 20px 10px;
				>div {
					@include spacebetween();
					@include item-bgColor();
					@include itemWidth();
					border-radius: 5px;
					border: 1px solid #D9D9D9;
					height: 64px;
					padding: 0 53px 0 26px;
					font-size: 19px;
					@include deeper-gray;
					span {
						font-size: 24px;
						color: #666666;
						padding-right: 24px;
					}
					>div {
						&:last-child {
							width: 80px;
							height: 24px;
							line-height: 24px;
							text-align: center;
							@include fontsize14;
							@include txt-deepgreen;
							border-radius: 2px;
							border: 1px solid #D9D9D9;
						}
					}
				}
				>.void {
					height: 10px;
					border: none;
					background-color: transparent;
				}
			}
		}
		.footer {
			@include flex;
			@include bd-top;
			@include fontsize18;
			@include item-bgColor();
			color: #057042;
			height: 49px;
			>div {
				width: 50%;
				line-height: 46px;
				text-align: center;
				&:last-child {
					@include bd-left();
				}
			}
		}
	}

</style>
