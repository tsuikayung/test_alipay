//导入需要的包
const Alipay = require('alipay_for_node')
const path = require('path')

//创建Alipay对象
let alipay =  new Alipay();

//设置网关，注意:沙箱环境与生产环境是不一样的，注意区分
alipay.gateWayUrl = 'https://openapi.alipaydev.com/gateway.do'

//设置加密请求参数的私钥,注意:在当前目录下新建一个pem目录，并且导入你自己的RSA或RSA2密钥
//alipay.rsaPrivateKey=path.join(__dirname,'./pem/rsa_private_key.pem')
alipay.rsa2PrivateKey=path.join(__dirname,'./pem/rsa2_private_key.pem')

//设置app_id,替换你自己的app_id,沙箱模式或生产环境下的app_id都可以
alipay.setParam('app_id','2016092300574524')

//设置商品相关参数
alipay.setParam('biz_content',JSON.stringify({subject:'菲律宾女佣',out_trade_no:alipay.generateOutTradeNo(),total_amount:1000.00,product_code:'QUICK_WAP_WAY'}))

//设置编码
alipay.setParam('charset','utf-8')

// 设置支付成功之后,跳转的页面
alipay.setParam('return_url','http://www.shenzhenair.com/')

//设置格式
alipay.setParam('format','json')

//设置method
alipay.setParam('method','alipay.trade.wap.pay')

//设置加密方式
//alipay.setParam('sign_type','RSA')
alipay.setParam('sign_type','RSA2')

//设置版本
alipay.setParam('version','1.0')

//设置时间戳
alipay.setParam('timestamp',alipay.getNowFormatDate())

//调用方法,获取最终支付的URL
const alipayRequestStr = alipay.getLastRequestStr()

console.log(alipayRequestStr)