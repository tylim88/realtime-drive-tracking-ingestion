import { node } from '@elysiajs/node'
import { Elysia } from 'elysia'
import { driverLocation_ws } from '@/controller'

new Elysia({ adapter: node() })
	.use(driverLocation_ws())
	.listen(3001, ({ hostname, port }) => {
		console.log(`server is running at ${hostname}:${port}`)
	})

// https://medium.com/@ys.yogendra22/system-design-real-time-car-tracking-app-64ce6db83898
// https://dev.to/codexam/building-a-scalable-real-time-driver-tracking-system-26ei
