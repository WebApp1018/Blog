const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    "SELECT id, quote, author FROM quote OFFSET $1 LIMIT $2",
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function getNum() {
  const rows = await db.query("SELECT COUNT(*) FROM quote;");

  return {
    num: rows[0].count,
  };
}

module.exports = {
  getMultiple,
  getNum,
};
