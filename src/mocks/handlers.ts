import { rest } from "msw";
import URL from "../api/api";

export const handlers = [
  rest.post(`${URL}/helloWorld`, async (req, res, ctx) => {
    const resultArray = [
      [
        ctx.status(200),
        ctx.json({
          success: true,
        }),
      ],
    ];
    return res(ctx.delay(100), ...resultArray[0]);
  }),
];
