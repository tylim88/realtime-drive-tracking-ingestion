import { Elysia } from 'elysia'
import { node } from '@elysiajs/node'

new Elysia({ adapter: node() })
	.post('/event', ({ body, status, set }) => {
		console.log(Date.now())
	})
	.listen(3000)
