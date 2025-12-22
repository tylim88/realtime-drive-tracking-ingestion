import { redis } from './__client'

export const driverLocations_pub = (
	id: string,
	data: { latitude: number; longitude: number; recorded_at: number }[],
) => redis.publish(`location of:${id}`, JSON.stringify(data))
