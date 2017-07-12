import { config, start, componentFactory } from 'xr-meta-engine'
import myConfig  from './config'

import about from './src/apps/about/index.js'
import app1 from './src/apps/app1/index.js'
import app2 from './src/apps/app2/index.js'
import xr_template_portal from './src/apps/xr-template-portal/index.js'

const apps = {
	[about.name]:about,	
	[app1.name]:app1,	
	[app2.name]:app2,	
	[xr_template_portal.name]:xr_template_portal,	
}


config(myConfig({apps}))


import * as xrComponents from 'xr-component'

Object.keys(xrComponents).forEach(key=>{
	componentFactory.registerComponent(key, xrComponents[key])
})
	

start()