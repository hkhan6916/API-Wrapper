const express = require("express");
const bodyParser = require("body-parser");
const {
  createPeople,
  readPeople,
  updatePeople,
  deletePeople,
  createIbnkuser,
  readIbnkuser,
  updateIbnkuser,
  deleteIbnkuser
} = require("./routes");
const app = express();
const port = process.env.PORT || "8000";
app.use(bodyParser.json());

app.post("/people", createPeople);
app.get("/people/:id", readPeople);
app.patch("/people/:id", updatePeople);
app.delete("/people/:id", deletePeople);

app.post("/ibnkuser", createIbnkuser);
app.get("/ibnkuser/:username", readIbnkuser);
app.patch("/ibnkuser/:username", updateIbnkuser);
app.delete("/ibnkuser/:username", deleteIbnkuser);

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
