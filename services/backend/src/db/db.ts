import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const conectionStr = `postgres://${process.env.DB_USERNAME}:${
  process.env.DB_PASSWORD
}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME!}`;

export async function doMigrations() {
  const migrationClient = postgres(conectionStr, { max: 1 });

  return await migrate(drizzle(migrationClient), {
    migrationsFolder: "drizzle",
  });
}

export function getDB() {
  const queryClient = postgres(conectionStr);

  return drizzle(queryClient);
}
