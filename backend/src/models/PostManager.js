import AbstractManager from "./AbstractManager.js"

class PostManager extends AbstractManager {
  constructor() {
    super({ table: "posts" })
  }

  findAll() {
    return this.database.query(
      `SELECT p.id, p.title, p.content, u.firstname, u.lastname, u.picture FROM ${this.table} p JOIN users u ON  p.author = u.id`
    )
  }

  insert(item) {
    return this.database.query(
      `insert into ${this.table} (title, content) values (?,?)`,
      [item.title, item.content]
    )
  }

  update(item) {
    return this.database.query(
      `update ${this.table} set title = ? set content = ? where id = ?`,
      [item.title, item.content, item.id]
    )
  }
}

export default PostManager
