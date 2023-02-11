const e = require("./src/alert.js"),
 t = new e;
const warning = (e = "", r = () => {}) => {
 t.warning(e, r)
};
const success = (e = "", r = () => {}) => {
 t.success(e, r)
};
const alert = (e = "", r = () => {}) => {
 t.alert(e, r)
};
const info = (e = "", r = () => {}) => {
 t.info(e, r)
};
const error = (e = "", r = () => {}) => {
 t.error(e, r)
};
const err = (e = "", r = () => {}) => {
 t.error(e, r)
};
const confirm = (e = {
 title: "",
 titleColor: "white",
 titleBg: "rgb(121 197 145)",
 text: "Are you sure to proceed?",
 confirmButtonText: "Yes",
 cancelButtonText: "No"
}, r = () => {}) => {
 t.confirm(e, r)
};
const input = (e = {
 title: "",
 titleColor: "white",
 titleBg: "rgb(121 197 145)",
 lable: "inter your name",
 value: "name",
 confirmButtonText: "Ok",
 cancelButtonText: "Cancel"
}, r = () => {}) => {
 t.input(e, r)
};
module.exports = {
 success,
 alert,
 info,
 error,
 err,
 warning,
 confirm,
 input
};
exports = {
 success,
 alert,
 info,
 error,
 warning,
 confirm,
 input
};