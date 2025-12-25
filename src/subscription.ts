import { node } from '@elysiajs/node'
import { Elysia } from 'elysia'
import { driverLocation_ws } from '@/controller'

new Elysia({ adapter: node() })
	.use(driverLocation_ws())
	.listen(3001, ({ hostname, port }) => {
		console.log(`consumer server is running at ${hostname}:${port}`)
	})
