const app = require("./Airport");
const request = require("supertest");

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
                expect(response.body).toStrictEqual({name: 'John Wicks Airport'});
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
                expect(response.body).toStrictEqual({
                      "name": "John Wicks Airport",
                      "city": "Bushnell",
                      "country": "US",
                       "elevation": 53,
                       "iata": "",
                       "icao": "00FA",
                       "lat": 28.6455001831,
                       "lon": -82.21900177,
                       "name": "Grass Patch Airport",
                       "state": "Florida",
                       "tz": "America/New_York",
                      }
                );
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

