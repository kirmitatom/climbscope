import { pgTable, serial, uuid, text, varchar, integer, timestamp, decimal } from 'drizzle-orm/pg-core';

// Users Table
export const usersTable = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  profileImage: text('profile_image'),
  bio: text('bio'),
  location: text('location'),
  rank: integer('rank').default(0),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// Routes Table
export const routesTable = pgTable('routes', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 150 }).notNull(),
  grade: varchar('grade', { length: 20 }).notNull(),
  type: varchar('type', { length: 50 }).notNull(),
  location: text('location'),
  latitude: decimal('latitude', { precision: 9, scale: 6 }),
  longitude: decimal('longitude', { precision: 9, scale: 6 }),
  description: text('description'),
  imageUrl: text('image_url'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// Events Table
export const eventsTable = pgTable('events', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 150 }).notNull(),
  description: text('description'),
  location: text('location'),
  latitude: decimal('latitude', { precision: 9, scale: 6 }),
  longitude: decimal('longitude', { precision: 9, scale: 6 }),
  date: timestamp('date').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// UserRoutes (Completed Routes)
export const userRoutesTable = pgTable('user_routes', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  routeId: uuid('route_id')
    .notNull()
    .references(() => routesTable.id, { onDelete: 'cascade' }),
  status: varchar('status', { length: 20 }).default('completed'),
  completionDate: timestamp('completion_date'),
});

// UserEvents (Event Participation)
export const userEventsTable = pgTable('user_events', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  eventId: uuid('event_id')
    .notNull()
    .references(() => eventsTable.id, { onDelete: 'cascade' }),
  status: varchar('status', { length: 20 }).default('registered'),
});

// Recommendations (Optional)
export const recommendationsTable = pgTable('recommendations', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  type: varchar('type', { length: 50 }).notNull(), // route or event
  targetId: uuid('target_id').notNull(),
  score: decimal('score', { precision: 5, scale: 2 }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// Types for Inserts and Selects
export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertRoute = typeof routesTable.$inferInsert;
export type SelectRoute = typeof routesTable.$inferSelect;

export type InsertEvent = typeof eventsTable.$inferInsert;
export type SelectEvent = typeof eventsTable.$inferSelect;

export type InsertUserRoute = typeof userRoutesTable.$inferInsert;
export type SelectUserRoute = typeof userRoutesTable.$inferSelect;

export type InsertUserEvent = typeof userEventsTable.$inferInsert;
export type SelectUserEvent = typeof userEventsTable.$inferSelect;

export type InsertRecommendation = typeof recommendationsTable.$inferInsert;
export type SelectRecommendation = typeof recommendationsTable.$inferSelect;
