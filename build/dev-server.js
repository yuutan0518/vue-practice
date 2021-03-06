// Node.jsのrequireスタイルでインポート
const bodyParser = require('body-parser')

// Expressアプリケーションインスタンスを受け取る関数をエクスポート
module.exports = app => {
	//HTTPリクエストのbody内容をJSONとして解析するようミドルウェアをインストール
	app.use(bodyParser.json())
}