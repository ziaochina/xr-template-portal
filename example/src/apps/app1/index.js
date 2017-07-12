import config from './config'
import * as api from './api'

export default {
	name: "app1",
	version:"1.0.0",
	description:"app1",
	meta : api.getMeta(),
	components:[],
	config:config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "app1")
	}
}