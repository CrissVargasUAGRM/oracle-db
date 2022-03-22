require("dotenv").config()

const oracledb = require("oracledb")

class DBConnection {
	constructor() {
		oracledb.initOracleClient()
        
        this.config = {
			tag: "default",
			poolAlias: "default",
			user: process.env.USER,
			password: process.env.PASSWORD,
			connectionString: process.env.CONNECTIONSTRING,
		}
	}

	async open() {
		let pool

		try {
            pool = oracledb.getPool(this.config.poolAlias)
		} catch (_) {
			pool = await oracledb.createPool(this.config)
		}

		return pool.getConnection({
			tag: this.config.tag,
		})
	}

	async query(sql) {
		try {
			const conn = await this.open()

			const result = await conn.execute(sql, [], {
				resultSet: true,
				outFormat: oracledb.OUT_FORMAT_OBJECT,
			})

			const rows = result.resultSet.getRows()

			conn.close()

			return rows
		} catch (err) {
			console.error(err)
		}
	}
}

module.exports = new DBConnection()
