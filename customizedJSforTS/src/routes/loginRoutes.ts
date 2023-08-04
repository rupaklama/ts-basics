import { NextFunction, Request, Response, Router } from "express";

interface RequestWithBody extends Request {
  // overriding type annotation - body: any
  body: { [key: string]: string | undefined };
}

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403).send("Not permitted");
};

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.status(200).send(
    `<form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>

      <button>Submit</button>
    </form>
    `
  );
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === "admin@test.com" && password === "test123") {
    // added new flag item to mark as logged in
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.status(400).send("Invalid email or password");
  }
});

router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.status(200).send(`
      <div>
        <div>You are logged in!</div>
        <a href='/logout'>Logout</a>
      </div>
    `);
  } else {
    res.status(200).send(`
      <div>
        <div>You are not logged in!</div>
        <a href='/login'>Login</a>
      </div>
    `);
  }
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = null;
  res.redirect("/");
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.status(200).send("Welcome, this is authenticated route!");
});

export { router };
