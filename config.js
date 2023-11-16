const env = process.env;

const config = {
  db: {
    /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || "bubble.db.elephantsql.com",
    port: env.DB_PORT || "5432",
    user: env.DB_USER || "bgqghviq",
    password: env.DB_PASSWORD || "6ymOoXsRPCExCtnQBrHXpILD4Rdiy0rn",
    database: env.DB_NAME || "bgqghviq",
  },
  listPerPage: env.LIST_PER_PAGE || 4,
};

module.exports = config;
