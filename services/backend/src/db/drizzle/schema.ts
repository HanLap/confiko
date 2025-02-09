import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const project = pgTable("project", {
  id: serial("id"),
  name: text("name"),
});
