const db = require('../db')

module.exports.getAllTasks = async() => {
    const [data] = await db.query("SELECT *FROM tasks")
        .catch(err => console.log(err))
    return data
}

module.exports.getTaskById = async(id) => {
    const [data] = await db.query("SELECT *FROM tasks WHERE id=?",[id])
    return data
}

module.exports.deleteById = async(id) => {
    const [{affectedRows}] = await db.query("DELETE FROM tasks WHERE id=?",[id])
    return affectedRows
}

module.exports.createTask = async (_title, _completed) => {
    const [result] = await db.query("CALL usp_create_task(?, ?)", [_title, _completed]);
    return result;
};


module.exports.updateTask = async (_id, _title, _completed) => {
    const [result] = await db.query("CALL usp_update_task(?, ?, ?)", [_id, _title, _completed]);
    return result;
};
