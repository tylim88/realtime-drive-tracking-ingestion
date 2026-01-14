import { Elysia, t } from 'elysia'
import { driverLocations_publish } from '@/streaming'

export const event_post = () =>
	new Elysia().post(
		'/event',
		async ({
			body: {
				data: { driver_id, latitude, longitude, timestamp },
			},
		}) => {
			await driverLocations_publish({
				driver_id,
				latitude,
				longitude,
				recorded_at: timestamp,
			})
		},
		{
			// validate body
			body: t.Object({
				event: t.Object({
					name: t.Literal('driver_location'),
					time: t.String({ format: 'date-time' }),
				}),
				data: t.Object({
					driver_id: t.String(),
					latitude: t.Numeric(),
					longitude: t.Numeric(),
					timestamp: t.String({ format: 'date-time' }),
				}),
			}),
		},
	)
