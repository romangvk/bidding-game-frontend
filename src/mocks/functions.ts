import { rest } from "msw";
import { app, functions } from "../firebase/init";

export const URL = `http://localhost:5001/${app.options.projectId}/${functions.region}`;

export const functionsHandlers = [
  rest.post(`${URL}/createRoom`, async (req, res, ctx) => {
    const resultArray = [
      [
        ctx.status(200),
        ctx.json({
          success: true,
          data: "ASDFGH",
        }),
      ],
    ];
    return res(ctx.delay(100), ...resultArray[0]);
  }),
  rest.post(`${URL}/joinRoom`, async (req, res, ctx) => {
    const body = await req.json();
    const resultArray = [
      [
        ctx.status(200),
        ctx.json({
          success: true,
          data: body?.data.room ?? "ASDFGH",
        }),
      ],
    ];
    return res(ctx.delay(100), ...resultArray[0]);
  }),
  rest.post(`${URL}/increment`, async (req, res, ctx) => {
    const resultArray = [[ctx.status(200)]];
    return res(ctx.delay(100), ...resultArray[0]);
  }),
];
