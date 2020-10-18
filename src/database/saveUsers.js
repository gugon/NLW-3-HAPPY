function saveUsers(db, user) {
  return db.run(`
        INSERT INTO users (
            name,
            pass,
            email
        ) VALUES (
            "${user.name}",
            "${user.pass}",            
            "${user.email}"          
        );
    `);
}

module.exports = saveUsers;