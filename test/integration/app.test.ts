import request from "supertest";
import app from "../../src/app"

describe("Auth API", () => {
    it("should register user", async () => {
        const resp = await request(app)
        .post("/auth/register")
        .send({email:"edward.cruzcruz27041996@gmail.com", password: "ecruz22"})
    
        expect(resp.status).toBe(201);
    });
});