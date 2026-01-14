import { db, driverLocations_schema } from '@/db'
import { driverLocations_sub } from '@/pubsub'

driverLocations_sub(async ({ driver_id, latitude, longitude, recorded_at }) => {
	await db
		.insert(driverLocations_schema)
		.values({
			driver_id,
			latitude,
			longitude,
			recorded_at: new Date(recorded_at),
		})
		.onConflictDoUpdate({
			target: [
				driverLocations_schema.driver_id,
				driverLocations_schema.recorded_at,
			],
			set: {
				latitude,
				longitude,
			},
		})
})
