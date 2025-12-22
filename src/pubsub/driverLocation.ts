import { redis } from './__client'

const name = (id: string) => `location of:${id}`

export const driverLocations_pub = (
	id: string,
	data: { latitude: number; longitude: number; recorded_at: number }[],
) => redis.publish(name(id), JSON.stringify(data))

export const driverLocations_sub = () => {}
