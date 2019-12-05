import { Response, Request } from "express";

import * as express from "express";
var router = express.Router();

router.all("/", (req: Request, res: Response) => {
  res.send({
    iot_data_url: "https://api.k1yoshi.com/iot"
  });
});

export = router;
