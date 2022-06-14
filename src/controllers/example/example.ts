import { Request, response, Response } from 'express';

class Example {
  index(req: Request, res: Response) {
    return res.json("OK").status(400)
  }
}

export default Example