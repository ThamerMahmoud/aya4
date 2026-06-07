import { betterAuth } from "better-auth";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { Pool } from "pg";
// import { prismaAdapter } from 'better-auth/adapters/prisma'
// import { PrismaClient } from '@prisma/client'

// export const auth = betterAuth({
//   database: new Pool({
// 	        	// connection options
// 	        	connectionString: "postgres://user:password@localhost:5432/database",

//   emailAndPassword: {
//     enabled: true,
//   },
//   plugins: [tanstackStartCookies()],
// })
// const prisma = new PrismaClient()

export const auth = betterAuth({
  //   database: prismaAdapter(prisma, {
  //     provider: 'postgres',
  //   }),

  database: new Pool({
    // connectionString: 'postgres://postgres:123456@localhost:5440/postgres',
    connectionString:
      "postgres://b6c5bcc1ae54f74f8284b58f892621a044c90c89f33033d97b72ca6ae2a715ba:sk_PjyizDt0vqNBuVkKMki-L@db.prisma.io:5432/postgres?sslmode=require",
  }),
  user: {
    additionalFields: {
      role: {
        type: ["Student", "Teacher"],
        required: true,
        defaultValue: "Student",
        input: true, // don't allow user to set role
      },
    },
  },

  emailAndPassword: {
    enabled: true,
  },

  plugins: [tanstackStartCookies()],
});
