import { AuthService } from "../../src/services/auth.service";

describe("AuthService", () => {
    const service = new AuthService();
    it("Should register a new user", async () => {
        const user = await service.register("edward.cruzcruz27041996@gmail.com","ecruz123")
        expect(user.email).toBe("edward.cruzcruz27041996@gmail.com")
    });
});