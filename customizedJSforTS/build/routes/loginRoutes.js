"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const requireAuth = (req, res, next) => {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403).send("Not permitted");
};
const router = (0, express_1.Router)();
exports.router = router;
router.get("/login", (req, res) => {
    res.status(200).send(`<form method="POST">
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
    `);
});
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === "admin@test.com" && password === "test123") {
        // added new flag item to mark as logged in
        req.session = { loggedIn: true };
        res.redirect("/");
    }
    else {
        res.status(400).send("Invalid email or password");
    }
});
router.get("/", (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.status(200).send(`
      <div>
        <div>You are logged in!</div>
        <a href='/logout'>Logout</a>
      </div>
    `);
    }
    else {
        res.status(200).send(`
      <div>
        <div>You are not logged in!</div>
        <a href='/login'>Login</a>
      </div>
    `);
    }
});
router.get("/logout", (req, res) => {
    req.session = null;
    res.redirect("/");
});
router.get("/protected", requireAuth, (req, res) => {
    res.status(200).send("Welcome, this is authenticated route!");
});
