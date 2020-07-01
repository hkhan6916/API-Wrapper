const { bufferData, sendRequest, handleResponse } = require("./helper.js");

const createPeople = (req, res) => {
  handleResponse(
    req,
    ["name", "title", "surname", "gender", "status"],
    sendRequest(bufferData("./templates/people/create.json", req.body, null)),
    res
  );
  console.log(req.body);
  console.log(req.params);
};
const readPeople = (req, res) => {
  handleResponse(
    req,
    null,
    sendRequest(
      bufferData(
        "./templates/people/read.json",
        {
          IDno: req.params.id
        },
        null
      )
    ),
    res
  );
  console.log(req.body);
  console.log(req.params);
};

const updatePeople = (req, res) => {
  handleResponse(
    req,
    [
      "name",
      "title",
      "surname",
      "gender",
      "status",
      "kyc_complete_date",
      "kyc_verified_date",
      "kyc_risk"
    ],
    sendRequest(
      bufferData(
        "./templates/people/update.json",
        {
          IDno: req.params.id
        },
        req.body
      )
    ),
    res
  );
  console.log(req.body);
  console.log(req.params);
};

const deletePeople = (req, res) => {
  handleResponse(
    req,
    null,
    sendRequest(
      bufferData(
        "./templates/people/delete.json",
        {
          IDno: req.params.id
        },
        null
      )
    ),
    res
  );
  console.log(req.body);
  console.log(req.params);
};

const createIbnkuser = (req, res) => {
  if (!req.body.FK_rowid_people) {
    res.status(200).send("Please provide the following field: FK_rowid_people");
  }
  handleResponse(
    req,
    [
      "username",
      "status",
      "telephone",
      "mobile",
      "emailaddress",
      "FK_rowid_people",
      "internetpassword",
      "internetpac"
    ],
    sendRequest(
      bufferData(
        "./templates/ibnkuser/create.json",
        {
          username: req.body.username,
          FK_rowid_people: req.body.FK_rowid_people
        },
        null
      )
    ),
    res
  );
  console.log(req.body);
  console.log(req.params);
};

const readIbnkuser = (req, res) => {
  handleResponse(
    req,
    null,
    sendRequest(
      bufferData(
        "./templates/ibnkuser/read.json",
        {
          username: req.params.username
        },
        null
      )
    ),
    res
  );
  console.log(req.body);
  console.log(req.params);
};

const updateIbnkuser = (req, res) => {
  handleResponse(
    req,
    [
      "username",
      "status",
      "telephone",
      "mobile",
      "emailaddress",
      "internetpassword",
      "internetpac",
      "internetstatus"
    ],
    sendRequest(
      bufferData(
        "./templates/ibnkuser/update.json",
        {
          username: req.params.username
        },
        req.body
      )
    ),
    res
  );
  console.log(req.body);
  console.log(req.params);
};

const deleteIbnkuser = (req, res) => {
  handleResponse(
    req,
    null,
    sendRequest(
      bufferData(
        "./templates/ibnkuser/delete.json",
        {
          username: req.params.username
        },
        null
      )
    ),
    res
  );
  console.log(req.body);
  console.log(req.params);
};

module.exports = {
  createPeople,
  readPeople,
  updatePeople,
  deletePeople,
  createIbnkuser,
  readIbnkuser,
  updateIbnkuser,
  deleteIbnkuser
};
