const Database = require('./db');
const saveOrphanage = require('./saveorphanage');
const saveUsers = require('./saveUsers');

Database.then(async db => {
    // inserir dados na tabela
    /* await saveOrphanage(db, {
        
        lat: "-27.222633",
        lng: "-49.6455874",
        name: "Lar das meninas",
        about:
        "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "8968633254",
        images: [
        "https://images.unsplash.com/photo-1576043061888-8751653f46af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

        "https://images.unsplash.com/photo-1597552816350-edd306e5c06f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        ].toString(),
        instructions:
        "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "1",

    }) */

    /* await saveUsers(db, {
        
        name: "wagner",
        pass: "4321",
        email: "teste2@gmail.com"

    }) */

    // consultar dados na tabela

    //const selectOrphanages = await db.all("SELECT * FROM orphanages")
    //console.log(selectOrphanages)

    const selectUsers = await db.all("SELECT * FROM users")
    console.log(selectUsers)

    

    

    //const selectUsers = await db.all("SELECT name, pass FROM users WHERE name='wagner' and pass='4321' ")
    //console.log(selectUsers)
    /* if ( isEmptyObject() == "0"){
        console.log("Login ou usuario incorreto")
    } else {
        console.log("CORRETO!!")
    } */

    /* function isEmpty(obj) {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
                return false;
        }
    
        return true;
    }

    console.log(isEmpty(selectUsers)) */

   //const orphanages = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    //console.log(orphanages)

    // deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '1'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))

})