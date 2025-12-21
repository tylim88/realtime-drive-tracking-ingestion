import { Elysia, t } from 'elysia'
import { driver_locations, db } from '@/db'

export const event_post = new Elysia().post(
	'/event',
	async ({
		body: {
			data: { driver_id, latitude, longitude, timestamp },
		},
	}) => {
		await db
			.insert(driver_locations)
			.values({
				driver_id,
				latitude,
				longitude,
				recorded_at: new Date(timestamp),
			})
			.onConflictDoUpdate({
				target: [driver_locations.driver_id, driver_locations.recorded_at],
				set: {
					latitude,
					longitude,
				},
			})
	},
	{
		// data type validation
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
