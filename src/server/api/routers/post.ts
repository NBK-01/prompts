/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

    post: protectedProcedure
    .input(z.object({title: z.string(), desc: z.string(), prompt: z.string(), category: z.string()}))
    .mutation(({ctx, input}) => {
      return ctx.db.post.create({
        data: {
          title: input.title,
          prompt: input.prompt,
          desc: input.desc,
          createdById:  ctx.session.user.id,
          category: input.category,
        }
      })
    }),

  getLatest: publicProcedure
  .input(z.string())
  .query(({ ctx, input }) => {
    return ctx.db.post.findMany({
      orderBy: { createdAt: "desc" },
      where: { category: input },
      include: {
        createdBy: true
      }
    });
  }),

  getAll: publicProcedure
  .query(({ ctx }) => {
    return ctx.db.post.findMany({
      orderBy: {createdAt: "desc"},
      include: {
        createdBy: true
      }
    })
  }),

  getCount: publicProcedure
  .input(z.string())
  .query(({ctx, input}) => {
    return ctx.db.post.findMany({
      where: {category: input},
    })
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
