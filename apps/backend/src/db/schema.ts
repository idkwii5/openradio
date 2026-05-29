import { pgTable, text, uuid, timestamp, boolean, integer, json, varchar } from 'drizzle-orm/pg-core';
import { createId } from '@paralleldrive/cuid2';

// Users Table
export const users = pgTable('users', {
  id: uuid('id').primaryKey().default(() => createId() as any),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }),
  avatarUrl: text('avatar_url'),
  role: varchar('role', { length: 50 }).default('user'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Stations Table
export const stations = pgTable('stations', {
  id: uuid('id').primaryKey().default(() => createId() as any),
  userId: uuid('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  genre: varchar('genre', { length: 100 }),
  imageUrl: text('image_url'),
  isLive: boolean('is_live').default(false),
  isPublic: boolean('is_public').default(true),
  listenerCount: integer('listener_count').default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Tracks Table
export const tracks = pgTable('tracks', {
  id: uuid('id').primaryKey().default(() => createId() as any),
  stationId: uuid('station_id')
    .notNull()
    .references(() => stations.id, { onDelete: 'cascade' }),
  title: varchar('title', { length: 255 }).notNull(),
  artist: varchar('artist', { length: 255 }),
  duration: integer('duration'), // in seconds
  audioUrl: text('audio_url').notNull(),
  thumbnailUrl: text('thumbnail_url'),
  metadata: json('metadata'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Listeners Table
export const listeners = pgTable('listeners', {
  id: uuid('id').primaryKey().default(() => createId() as any),
  stationId: uuid('station_id')
    .notNull()
    .references(() => stations.id, { onDelete: 'cascade' }),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'set null' }),
  sessionId: varchar('session_id', { length: 255 }).notNull(),
  userAgent: text('user_agent'),
  ipAddress: varchar('ip_address', { length: 45 }),
  connectedAt: timestamp('connected_at').defaultNow().notNull(),
  disconnectedAt: timestamp('disconnected_at'),
});

// Schedule Table
export const schedules = pgTable('schedules', {
  id: uuid('id').primaryKey().default(() => createId() as any),
  stationId: uuid('station_id')
    .notNull()
    .references(() => stations.id, { onDelete: 'cascade' }),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  startTime: timestamp('start_time').notNull(),
  endTime: timestamp('end_time').notNull(),
  trackIds: json('track_ids'), // Array of track IDs
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// API Keys Table
export const apiKeys = pgTable('api_keys', {
  id: uuid('id').primaryKey().default(() => createId() as any),
  userId: uuid('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  key: varchar('key', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  lastUsedAt: timestamp('last_used_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Analytics Table
export const analytics = pgTable('analytics', {
  id: uuid('id').primaryKey().default(() => createId() as any),
  stationId: uuid('station_id')
    .notNull()
    .references(() => stations.id, { onDelete: 'cascade' }),
  listenerCount: integer('listener_count').default(0),
  totalPlaytime: integer('total_playtime').default(0), // in seconds
  averageSessionDuration: integer('avg_session_duration').default(0), // in seconds
  timestamp: timestamp('timestamp').defaultNow().notNull(),
});
