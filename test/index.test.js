const { describe } = require("mocha");
const request = require("supertest")("http://localhost:3030/productos");
const expect = require("chai").expect;


describe("Test de API rest", () => {
  describe("GET", () => {
    it("Debe retornar status 200 - todos los productos", (done) => {
      request
        .get("/")
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body.data).to.be.an("array");
          done();
        });
    });
    it("Debe retornar status 200 - un producto", (done) => {
      request
        .get("/622d0b47e11e8cc8bc447609")
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.be.an("object");
          done();
        });
    });
  });

  describe("POST", () => {
    it("Debe retornar status 200 - un producto", (done) => {
      request
        .post("/")
        .send({
          nombre: "alguna cosa",
          precio: 450,
          thumb: "link a esa cosa",
        })
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.be.an("object");
          done();
        });
    });
  })
});
