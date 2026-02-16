import request from "supertest";
import app from "../../src/app";
import users from "../../src/data/datamock";

describe("User E2E", () => {
    it("should get user information using email", async () => {
        await request(app)
        .post("/auth/register")
        .send({ email: "edward.cruzcruz27041996@gmail.com", password: "ecruz22"});
        
        const login = await request(app)
        .post("/auth/login")
        .send({ email: "edward.cruzcruz27041996@gmail.com", password: "ecruz22"});

        //console.log(login.body.token)
        //console.log(users);
        const getUserByEmail = await request(app)
        .get("/user/get-user-by-email")
        .set("Authorization", `Bearer ${login.body.token}`)
        .send({ email: "edward.cruzcruz27041996@gmail.com"});

        expect(getUserByEmail.status).toBe(200);
    });
});