import { Elysia } from "elysia";
import { doMigrations, getDB } from "./db/db";
import { project } from "./db/drizzle/schema";

// await doMigrations();

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/project", () => {
    return getDB().select().from(project).execute();
  })

  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
