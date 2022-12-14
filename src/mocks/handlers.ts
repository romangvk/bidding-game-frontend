import { rest } from "msw";
import { app, functions } from "../firebase/init";

export const URL = `http://localhost:5001/${app.options.projectId}/${functions.region}`;

export const handlers = [
  rest.post(`${URL}/helloWorld`, async (req, res, ctx) => {
    const resultArray = [
      [
        ctx.status(200),
        ctx.json({
          success: true,
          data: "Mocked successfully!",
        }),
      ],
    ];
    return res(ctx.delay(100), ...resultArray[0]);
  }),
];
