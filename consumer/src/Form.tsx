import { treaty } from '@elysiajs/eden'
import { useEffect } from 'react'
import type { driverLocation_ws } from '#/driverLocation.ws'

// @ts-expect-error https://github.com/oven-sh/bun/issues/23725
const client = treaty<ReturnType<typeof driverLocation_ws>>('localhost:3001')

export const Form = () => {
	useEffect(() => {
		// const ws = client.driverLocation.subscribe({
		// 	// query: { driver_id, interval_type, interval_value, since },
		// })
	}, [])
}
