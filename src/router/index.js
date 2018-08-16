import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'

// import PatientManagement from '@/pages/patientManagement/list'
const patientList = () => import ( /* webpackChunkName: "A2-hzgl" */ '@/pages/patientManagement/list')
const PatientDetail = () => import ( /* webpackChunkName: "A2-hzgl" */ '@/pages/patientManagement/detail')
const HealthRecord = () => import(/* webpackChunkName: "A2-hzgl" */ '@/pages/patientManagement/health-record')
const HealthEventList = () => import(/* webpackChunkName: "A3-1-jkda-jksj" */ '@/pages/patientManagement/health-event-list')
const CaseHistoryDetail = () => import(/* webpackChunkName: "A4-mzbl-zybl" */ '@/pages/patientManagement/case-history')
const MedicalHistory = () => import(/* webpackChunkName: "A4-4-bs-jcjg" */ '@/pages/patientManagement/medical-history')
const CheckProject = () => import(/* webpackChunkName: "A5-2-jcxm" */ '@/pages/patientManagement/check-project')
const Prescription = () => import(/* webpackChunkName: "A6-2-cfmx" */ '@/pages/patientManagement/prescription')
const HomeworkList1 = () => import(/* webpackChunkName: "A7-1-jdzymx" */ '@/pages/patientManagement/homework-list1')
const HomeworkList2 = () => import(/* webpackChunkName: "A7-2-jdzymx" */ '@/pages/patientManagement/homework-list2')
const HomeworkDetail = () => import(/* webpackChunkName: "A7-3-zyxq" */ '@/pages/patientManagement/homework-detail')
const HealthManage = () => import(/* webpackChunkName: "A8-jkgl" */ '@/pages/patientManagement/health-manage')
const HealthManageDetail = () => import(/* webpackChunkName: "A11-jkglmx" */ '@/pages/patientManagement/health-manage-detail')
const IRHForm = () => import(/* webpackChunkName: "A9-iRH" */ '@/pages/patientManagement/iRH-form')
const IRHForm1 = () => import(/* webpackChunkName: "A9-iRH1" */ '@/pages/patientManagement/iRH-form1')
const IRHForm2 = () => import(/* webpackChunkName: "A9-iRH2" */ '@/pages/patientManagement/iRH-form2')
const IRHService = () => import(/* webpackChunkName: "A9-iRH" */ '@/pages/patientManagement/iRH-service')
const HealthPhy = () => import(/* webpackChunkName: "A12-slcs" */ '@/pages/patientManagement/health-phy')
// iRH之家
const IRHHome = () => import(/* webpackChunkName: "G2-irhfw" */ '@/pages/iRHHome/irh-home')
const MyService = () => import(/* webpackChunkName: "G2-wyfw" */ '@/pages/iRHHome/my-service')
const ServiceDetail = () => import(/* webpackChunkName: "G3-fwxq" */ '@/pages/iRHHome/service-detail')
const AddService = () => import(/* webpackChunkName: "G4-xzfw" */ '@/pages/iRHHome/add-service')
const NewsList = () => import(/* webpackChunkName: "H1-xwzx" */ '@/pages/iRHHome/news-list')
const NewsDetail = () => import(/* webpackChunkName: "H2-zxxq" */ '@/pages/iRHHome/news-detail')
const IRHStar = () => import(/* webpackChunkName: "J1-irhzx" */ '@/pages/iRHHome/irh-star')
const StarDetail = () => import(/* webpackChunkName: "J2-grxx" */ '@/pages/iRHHome/star-detail')
const CreditList = () => import(/* webpackChunkName: "K1-glb" */ '@/pages/iRHHome/credit-list')
const Complaint = () => import(/* webpackChunkName: "L1-tsjy" */ '@/pages/iRHHome/complaint')
const ComplaintDetail = () => import(/* webpackChunkName: "L2-tsjyxq" */ '@/pages/iRHHome/complaint-detail')
const AddComplaint = () => import(/* webpackChunkName: "L3-xztsjy" */ '@/pages/iRHHome/add-complaint')
// 知识库
const Library = () => import(/* webpackChunkName: "S1-zsk" */ '@/pages/library/library')
const ActicleList = () => import(/* webpackChunkName: "S3-wzlb" */ '@/pages/library/acticle-list')
const ActicleDetail = () => import(/* webpackChunkName: "S4-wzxq" */ '@/pages/library/acticle-detail')
// 我的
const My = () => import(/* webpackChunkName: "M2-w" */ '@/pages/my/index')
const Search = () => import(/* webpackChunkName: "O1-gzcx" */ '@/pages/my/search')
const PersonDetail = () => import(/* webpackChunkName: "P2-hzxx" */ '@/pages/my/person-detail')
const MyInfo = () => import(/* webpackChunkName: "Q-wdxx" */ '@/pages/my/my-info')
const Setting = () => import(/* webpackChunkName: "Q-wdxx" */ '@/pages/my/setting')
const ForgetPassword = () => import(/* webpackChunkName: "Q-wdxx" */ '@/pages/my/forget-password')

const MedicalRecords = () => import ( /* webpackChunkName: "A13-jyjl" */ '@/pages/medicalRecords/medical-records');
const MedicalRecordsDetail = () => import ( /* webpackChunkName: "A13-1-jyjl-xq" */ '@/pages/medicalRecords/medical-records-detail');
const MedicalRecordsHistory = () => import ( /* webpackChunkName: "A14-jyjl-bl" */ '@/pages/medicalRecords/medical-records-history');
const MedicalRecordsCheck = () => import ( /* webpackChunkName: "A14-1" */ '@/pages/medicalRecords/medical-records-check');
const MedicalRecordsPrescription = () => import ( /* webpackChunkName: "A14-2-jyjl-cf" */ '@/pages/medicalRecords/medical-records-prescription');
const RecordEditWork = () => import ( /* webpackChunkName: "A16-dl-irh" */ '@/pages/patientManagement/record-edit-work');
const RecordDailyWork = () => import ( /* webpackChunkName: "A17-dl-mrzy" */ '@/pages/patientManagement/record-daily-work');
const RecordQueryWork = () => import ( /* webpackChunkName: "A17-2-dl-zycx" */ '@/pages/patientManagement/record-query-work');
//备忘录
const MemoList = () => import ( /* webpackChunkName: "C1-wdbwl" */ '@/pages/memo/memo-list');
const MemoEdit = () => import ( /* webpackChunkName: "C1-2-xzbwl" */ '@/pages/memo/memo-edit');
const ReplaceLaborList = () => import ( /* webpackChunkName: "B-dl" */ '@/pages/replaceLabor/replace-labor-list');
const ReplaceLaborDetail = () => import ( /* webpackChunkName: "B-1-dlxq" */ '@/pages/replaceLabor/replace-labor-detail');
const ReplaceLaborSearch = () => import ( /* webpackChunkName: "B3-1-hzxz" */ '@/pages/replaceLabor/replace-labor-search');
const DataEntry = () => import ( /* webpackChunkName: "B4-2-sjlr" */ '@/pages/replaceLabor/data-entry');
const MedicalAid = () => import ( /* webpackChunkName: "D1-yjhz" */ '@/pages/medicalAid/medical-aid');
const SortManage = () => import ( /* webpackChunkName: "D3-flgl" */ '@/pages/medicalAid/sort-manage');
const Chat = () => import ( /* webpackChunkName: "D4-lx" */ '@/pages/medicalAid/chat');
const ChatSetting = () => import ( /* webpackChunkName: "D4-1-ltsz" */ '@/pages/medicalAid/chat-setting');
//患者咨询
const PatientConsult = () => import ( /* webpackChunkName: "hzzx" */ '@/pages/patientConsult/patient-consult');
//患者申请
const PatientApply = () => import ( /* webpackChunkName: "H-hzsq" */ '@/pages/patientApply/patient-apply');
const PatientInfo = () => import ( /* webpackChunkName: "H-hzxx" */ '@/pages/patientApply/patient-info');
// 我的消息
const NoticeList = () => import ( /* webpackChunkName: "T1-wdxx" */ '@/pages/notice/notice-list');
const NoticeDetail = () => import ( /* webpackChunkName: "T3-xq" */ '@/pages/notice/notice-detail');
// 药品与设备
const DrugEquipment = () => import ( /* webpackChunkName: "E4-ypysb" */ '@/pages/drugEquipment/drug-equipment');
const DrugEquipmentDetail = () => import ( /* webpackChunkName: "E5-ypysbxq" */ '@/pages/drugEquipment/drug-equipment-detail');
const PurchaseDetail = () => import ( /* webpackChunkName: "E7" */ '@/pages/drugEquipment/purchase-detail');
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HomePage',
			component: HomePage
		},
		{
			path: '/patientList',
			name: 'patientList',
			component: patientList
		},
		{
			path: '/patientDetail',
			name: 'PatientDetail',
			component: PatientDetail
		},
		{
			path: '/healthRecord',
			name: 'HealthRecord',
			component: HealthRecord
		},
		{
			path: '/healthEventList/:type',
			name: 'HealthEventList',
			component: HealthEventList
		},
		{
			path: '/caseHistoryDetail/:type',
			name: 'CaseHistoryDetail',
			component: CaseHistoryDetail,
			children: [
				{
					path: '',
					name: 'HomeworkList1',
					components: {
						homeworkDetails: HomeworkList1
					}
				},
				{
					path: 'homeworkList2',
					name: 'HomeworkList2',
					components: {
						homeworkDetails: HomeworkList2
					}
				}
			]
		},
		{
			path: '/homeworkDetail',
			name: 'HomeworkDetail',
			component: HomeworkDetail
		},
		{
			path: '/healthManage/:type',
			name: 'HealthManage',
			component: HealthManage
		},
		{
			path: '/healthManageDetail',
			name: 'HealthManageDetail',
			component: HealthManageDetail
		},
		{
			path: '/iRHForm',
			name: 'IRHForm',
			component: IRHForm,
			children: [
				{
					path: '',
					name: 'IRHForm1',
					components: {
						IRHFormR: IRHForm1
					}
				},
				{
					path: 'iRHForm2',
					name: 'IRHForm2',
					components: {
						IRHFormR: IRHForm2
					}
				},
				{
					path: 'iRHService',
					name: 'IRHService',
					components: {
						IRHFormR: IRHService
					}
				}
			]
		},
		{
			path: '/healthPhy/:type',
			name: 'HealthPhy',
			component: HealthPhy
		},
		{
			path: '/irhhome',
			name: 'IRHHome',
			component: IRHHome
		},
		{
			path: '/myService',
			name: 'MyService',
			component: MyService
		},
		{
			path: '/serviceDetail/:id',
			name: 'ServiceDetail',
			component: ServiceDetail
		},
		{
			path: '/addService',
			name: 'AddService',
			component: AddService
		},
		{
			path: '/newsList',
			name: 'NewsList',
			component: NewsList
		},
		{
			path: '/newsDetail/:id',
			name: 'NewsDetail',
			component: NewsDetail
		},
		{
			path: '/iRHStar',
			name: 'IRHStar',
			component: IRHStar
		},
		{
			path: '/starDetail/:id',
			name: 'StarDetail',
			component: StarDetail
		},
		{
			path: '/creditList',
			name: 'CreditList',
			component: CreditList
		},
		{
			path: '/complaint',
			name: 'Complaint',
			component: Complaint
		},
		{
			path: '/complaintDetail/:id',
			name: 'ComplaintDetail',
			component: ComplaintDetail
		},
		{
			path: '/addComplaint',
			name: 'AddComplaint',
			component: AddComplaint
		},
		{
			path: '/library',
			name: 'Library',
			component: Library
		},
		{
			path: '/acticleList/:type',
			name: 'ActicleList',
			component: ActicleList
		},
		{
			path: '/acticleDetail/:id',
			name: 'ActicleDetail',
			component: ActicleDetail
		},
		{
			path: '/my',
			name: 'My',
			component: My
		},
		{
			path: '/search',
			name: 'Search',
			component: Search
		},
		{
			path: '/personDetail/:id',
			name: 'PersonDetail',
			component: PersonDetail
		},
		{
			path: '/myInfo',
			name: 'MyInfo',
			component: MyInfo
		},
		{
			path: '/setting',
			name: 'Setting',
			component: Setting
		},
		{
			path: '/forgetPassword',
			name: 'ForgetPassword',
			component: ForgetPassword
		},
		{
			path: '/medicalHistory',
			name: 'MedicalHistory',
			component: MedicalHistory
		},
		{
			path: '/checkProject',
			name: 'CheckProject',
			component: CheckProject
		},
		{
			path: '/prescription',
			name: 'Prescription',
			component: Prescription
		}
		,{
			path: '/medicalRecords/:type/:id',
			name: 'MedicalRecords',
            component: MedicalRecords,
            children: [
				{
					path: 'medicalRecordsDetail/:id',
					name: 'MedicalRecordsDetail',
					components: {
						MedicalRecordsDetail: MedicalRecordsDetail
					}
                },
            ]
		},/* {
			path: '/medicalRecordsDetail/:id',
			name: 'MedicalRecordsDetail',
			component: MedicalRecordsDetail
		}, */{
			path: '/medicalRecordsHistory/:id',
			name: 'MedicalRecordsHistory',
			component: MedicalRecordsHistory
		},{
			path: '/medicalRecordsCheck/:id',
			name: 'MedicalRecordsInspect',
			component: MedicalRecordsCheck
		},{
            path: '/medicalRecordsPrescription/:id',
            name: 'MedicalRecordsPrescription',
            component: MedicalRecordsPrescription
        },{
            path: '/recordEditWork',
            name: 'RecordEditWork',
            component: RecordEditWork
        },{
            path: '/recordDailyWork/:cid/:uid',
            name: 'RecordDailyWork',
            component: RecordDailyWork
        },{
            path: '/recordQueryWork',
            name: 'RecordQueryWork',
            component: RecordQueryWork
        },{
            path: '/memoList',
            name: 'MemoList',
            component: MemoList
        },{
            path: '/memoEdit/:type/:id',
            name: 'MemoEdit',
            component: MemoEdit
		},{
            path: '/replaceLaborList',
            name: 'ReplaceLaborList',
            component: ReplaceLaborList
		},{
            path: '/replaceLaborDetail',
            name: 'ReplaceLaborDetail',
            component: ReplaceLaborDetail
		},{
            path: '/replaceLaborSearch',
            name: 'ReplaceLaborSearch',
            component: ReplaceLaborSearch
		},{
            path: '/dataEntry',
            name: 'DataEntry',
            component: DataEntry
		},{
			path: '/medicalAid',
			name: 'MedicalAid',
			component: MedicalAid
		},{
			path: '/sortManage',
			name: 'SortManage',
			component: SortManage
		},{
			path: '/chat/:type',
			name: 'Chat',
			component: Chat
		},{
			path: '/chatSetting/:type',
			name: 'ChatSetting',
			component: ChatSetting
		},{
			path: '/patientConsult',
			name: 'PatientConsult',
			component: PatientConsult
		},{
			path: '/patientApply',
			name: 'PatientApply',
			component: PatientApply
		},{
			path: '/patientInfo/:type/:id',
			name: 'PatientInfo',
			component: PatientInfo
		},{
			path: '/noticeList/:type',
			name: 'NoticeList',
			component: NoticeList
		},{
			path: '/noticeDetail/:type/:id',
			name: 'NoticeDetail',
			component: NoticeDetail
		},{
			path: '/drugEquipment/:id',
			name: 'DrugEquipment',
			component: DrugEquipment
		},{
			path: '/drugEquipmentDetail/:type/:id',
			name: 'DrugEquipmentDetail',
			component: DrugEquipmentDetail
		},{
			path: '/purchaseDetail/:id',
			name: 'PurchaseDetail',
			component: PurchaseDetail
		}
	]
})
