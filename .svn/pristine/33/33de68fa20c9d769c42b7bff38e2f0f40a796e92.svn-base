/* A17待录每日作业 */
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
		<scroller-base class="container" :data="data">
			<div class="date">作业日期：{{today}}</div>
            <div class="from-container">
				<div v-for="(item,index) in data" :key="index">
					<router-link tag="div" :to="{path:'/recordEditWork'}">
						<div><span>{{index}}</span>{{item.Title}}}</div>
						<div>{{item.StartTime}}</div>
					</router-link>
					<div class="void"></div>
				</div>
            </div>
            <!-- <div class="separate"></div> -->
		</scroller-base>
        <div class="footer">
			<router-link class="btn" tag="div" :to="{path:`/recordQueryWork/${cid}/${uid}`}">作业查询</router-link>
			<router-link class="btn" tag="div" :to="{path:`/recordEditWork/1`}">布置作业</router-link>
		</div>
	</div>
</template>

<script>
	import {GetMyHomeworkList} from '../../api/interface';
	
	export default {
		name: "recordIRH",
		data() {
			return {
				msg: "今日作业",
				data: [],
				cid: '',
				uid: '',
				today: app.formatDatetime(new Date(),'yyyy-MM-dd')
			}
		},
		created() {
			console.log(this.msg)
			this.cid = this.$router.currentRoute.params.cid;
			this.uid = this.$router.currentRoute.params.uid;

			GetMyHomeworkList({
				custid: this.cid, //患者客户ID
				date: this.today, //今天日期
				userId:  this.uid //客户ID
			}).then(res => {
				this.data = res.data;
			});
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '@/public/scss/common.scss';

	.page {
        @include body-bgColor();
        .header {
            .back-nav {
                @include nav-top;
            }
		}
		.container {
            height: calc(100vh - 94px);
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
