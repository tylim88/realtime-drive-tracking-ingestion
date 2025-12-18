CREATE TABLE "driver_locations" (
	"driver_id" text NOT NULL,
	"latitude" double precision NOT NULL,
	"longitude" double precision NOT NULL,
	"recorded_at" timestamp (3) with time zone NOT NULL,
	CONSTRAINT "driver_locations_driver_id_recorded_at_pk" PRIMARY KEY("driver_id","recorded_at")
);

CREATE EXTENSION IF NOT EXISTS timescaledb CASCADE;
SELECT create_hypertable('driver_locations', 'recorded_at', if_not_exists => TRUE);
