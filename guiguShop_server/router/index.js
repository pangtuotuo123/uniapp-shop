let KoaRouter = require('koa-router');
let jwt = require('jsonwebtoken');
let Fly = require("flyio/src/node")
let fly = new Fly;

// 3. 生成路由器对象
const router = new KoaRouter();


// 5. 注册路由
// express: request, response, next
// koa: ctx, next


// 5.1 主页数据的接口
let indexData = require('../datas/index.json');
// console.log(typeof indexData);
router.get('/getIndexData', (ctx) => {
	ctx.body = indexData;
});


// 5.2 主页分类数据
let indexCateListData = require('../datas/indexCateList.json');
// console.log(typeof indexData);
router.get('/getIndexCateList', (ctx) => {
	ctx.body = indexCateListData;
});


// 5.3 分类页数据
let categoryDatas = require('../datas/categoryDatas.json');
// console.log(typeof indexData);

router.get('/getCateGoryData', (ctx) => {
	ctx.body = categoryDatas;
});

//这个接口是用来获取客户端发送过来的code,进而获取唯一标识openId的
router.get('/getOpenId',async ctx => {
	//接收到code
	let code = ctx.query.code
	// let appId = 'wx2aa543075bcf7db5'
	// let secret = '08b5010534c0ffb7d6661b64a8c48dc8'
	let appId =
	"wx34374357072d0e7f";
let secret =
	"b6485e5c0c0bdf102b7019beffff2500";
	//第二步：获取到code之后，我们需要用code 和 appId 和 秘钥 发请求给微信服务器，获取openId
	const result = await fly.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${secret}&js_code=${code}&grant_type=authorization_code`)
	console.log(result.data,'看看这玩意是啥东西')
	// ctx.body = result.data  我们一般不会把隐私数据名文给了用户，而是需要加密后给用户（变为token）
	
	//第三步：自己制作一个jwt，返回给用户作为用户的唯一标识（jwt用什么都可以加密生成，最好是当前请求过来客户端用户的信息）
	let token = jwt.sign(result.data,'zhaoliying')
	// console.log(token)
	ctx.body = token
})


router.get('/verifyToken',ctx => {
	let token = ctx.query.token
	let result = jwt.verify(token, 'zhaoliying');
	console.log(result)
	ctx.body="zhaoliying"
})


module.exports = router;