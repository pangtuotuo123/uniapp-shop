
// 封装请求
export const request = (url, data = {}, method = 'get') => {
	return new Promise((resolve, reject) => {
		//uniapp框架的request发请求
		uni.request({
			url: 'http://127.0.0.1:3001' + url,
			data,
			method,
			success(res) {
				resolve(res.data)
			},
			fail(error) {
				reject(error)
			}
		})
	})
}
