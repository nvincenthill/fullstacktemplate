const request = require("supertest");
const app = require("../server/app");

describe("API", () => {
  it("Should get a response given a good GET request", () => {
    return request(app)
      .get("/api/")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  it("Should 404 a bad GET request", () => {
    return request(app)
      .get("/api/&(@$Y@(^@)#(3/8989-09")
      .then(response => {
        expect(response.statusCode).toBe(404);
      });
  });
});
