'use strict'

var server = require("../server")

describe("Home route", () => {
  it("Testing for a message", (done) => {

    const options = { method: "GET", url:"/" }
    server.inject(options, (res) => {
        const result = res.result;
        result.message.should.to.equal('None shall pass!')
        done();
      });
  });
});
