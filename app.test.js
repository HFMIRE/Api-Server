const app = require("./app");
const request = require("supertest");
const { response } = require("./app");

describe("GET /airports", () => {
    test("can GET all the airports", (done) => {
        request(app)
            .get("/airports")
            .expect(200)
            .expect((response) => {
                expect(response.body.length).toBeGreaterThan(28000);
            })
            .end(done);
    });
});


describe('POST /airports', () => {
    test("can Post all the airports", (done) => {
        request(app)
            .post("/airports")
            .send({name: 'John Wicks Airport'})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect((response) => {
                name: 'John Wicks Airport'
            })
            .end(done);
    });
});

describe("GET /airports", () => {
    test("can GET specfic airports", async() => {
        const response  = await request(app).get("/airports/00FA")
        expect(response.status).toBe(200)
        expect(response.body.icao).toEqual("00FA")
    });
});


describe('PUT /airports', () => {
    test("update a airport", (done) => {
        request(app)
            .put("/airports/00FA")
            .send({name: 'John Wicks Airport'})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect((response) => {
                name: 'John Wicks Airport'
            })
            .end(done);
    });
});
describe("Delete /airports/:id", () => {
    test("can Delete all the airports", async () => {
    const response = await request(app).delete("/airports/00FA")
    expect(response.status).toBe(200); 
    });
});

