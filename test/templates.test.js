const { bufferData, handleResponse } = require("../helper.js");
const expect = require("chai").expect;

describe("Value test", () => {
  it("should populate create json file with people object body", () => {
    const expected = require("./files/people/create.expected.json");
    const body = {
      name: "hello",
      surname: "bye",
      title: "mr"
    };

    const newValue = bufferData("./templates/people/create.json", body, null);
    expect(newValue).to.deep.equal(expected);
  });

  it("should populate delete json file with people id", () => {
    const expected = require("./files/people/delete.expected.json");
    const newValue = bufferData(
      "./templates/people/delete.json",
      {
        IDno: "123"
      },
      null
    );
    expect(newValue).to.deep.equal(expected);
  });

  it("should populate update json file with people body and id", () => {
    const expected = require("./files/people/update.expected.json");
    const newValue = bufferData(
      "./templates/people/update.json",
      { IDno: "123" },
      {
        name: "haroon",
        title: "mr"
      }
    );
    expect(newValue).to.deep.equal(expected);
  });

  it("should populate read json file with people id", () => {
    const expected = require("./files/people/read.expected.json");
    const newValue = bufferData(
      "./templates/people/read.json",
      { IDno: "123" },
      null
    );
    expect(newValue).to.deep.equal(expected);
  });

  it("should populate create json file with ibnkuser object body", () => {
    const expected = require("./files/ibnkuser/create.expected.json");
    const newValue = bufferData(
      "./templates/ibnkuser/create.json",
      {
        FK_rowid_people: "123456789123456789",
        username: "username1",
        name: "name",
        surname: "surname",
        title: "mr"
      },
      null
    );
    expect(newValue).to.deep.equal(expected);
  });

  it("should populate read json file with ibnkuser username", () => {
    const expected = require("./files/ibnkuser/read.expected.json");
    const newValue = bufferData(
      "./templates/ibnkuser/read.json",
      { username: "username1" },
      null
    );
    expect(newValue).to.deep.equal(expected);
  });

  it("should populate update json file with ibnkuser new body", () => {
    const expected = require("./files/ibnkuser/update.expected.json");
    const newValue = bufferData(
      "./templates/ibnkuser/update.json",
      { username: "username2" },
      { name: "name", surname: "surname" }
    );
    expect(newValue).to.deep.equal(expected);
  });

  it("should populate delete json file with ibnkuser username", () => {
    const expected = require("./files/ibnkuser/delete.expected.json");
    const newValue = bufferData(
      "./templates/ibnkuser/delete.json",
      { username: "username1" },
      null
    );
    expect(newValue).to.deep.equal(expected);
  });
});
