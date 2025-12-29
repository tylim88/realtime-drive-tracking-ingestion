import {
	doublePrecision,
	pgTable,
	primaryKey,
	timestamp,
	varchar,
} from 'drizzle-orm/pg-core'

export const driverLocations_schema = pgTable(
	'driver_locations',
	{
		driver_id: varchar({ length: 30 }).notNull(),
		latitude: doublePrecision().notNull(),
		longitude: doublePrecision().notNull(),
		recorded_at: timestamp({
			precision: 3,
			withTimezone: true,
		}).notNull(),
	},
	(table) => [primaryKey({ columns: [table.driver_id, table.recorded_at] })],
)
