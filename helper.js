const axios = require("axios");
const templator = fields => {
  return Object.keys(fields)
    .filter(item => fields[item])
    .map(item => {
      return { FieldName: item, FieldValue: fields[item] };
    });
};

const bufferData = (jsonFilePath, fields) => {
  let template = require(jsonFilePath);
    template.Main.SendRequest.MessageItems[0].BufferData = templator(fields);
  return template;
};

const url =
  "https://elastic.snaplogic.com/api/1/rest/slsched/feed/UnityTrustBank-DEV/projects/shared/ac_wrapper?bearer_token=7gOuPyKIKqIoUgSSCnmvDOhrzjdkZ1jm";
const sendRequest = template => axios.post(url, template);

const handleResponse = (req, allowed, request, res) => {
  const disallowed = Object.keys(req.body).filter(
    item => allowed.indexOf(item) === -1
  ).length;
  if (disallowed > 0) {
    res
      .status(400)
      .send("Please only use the following fields: " + allowed.join(", "));
  }
  return request
    .then(result => res.status(200).send(result.data))
    .catch(err => res.status(400).send(err.data));
};

module.exports = {
  templator,
  bufferData,
  sendRequest,
  handleResponse
};
