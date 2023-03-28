const { CRUD } = require("./helpers");
const db = require("./models");
const { ParamProcessor } = require("./services");

const params = process.argv;
console.log(params);
if (params <= 2) {
    process.exit(0);
}

// --create:Contact --firstname=Andres --lastname=Torres --phone=3113888409 --email=felipe13@gmail.com
// --read:Contact
// --update:Contact --id=1 --email=test@gmail.com
// node . 

const options = params.slice(2);
console.log("options: " + options);
let tmp = options[0].split(":");
const operation = tmp[0].replace('--', '');
const entity = tmp[1];

console.log("operation: " + operation);
console.log("entity: " + entity);
console.log();

switch (operation) {
    case CRUD.CREATE:
        //get parameters 
        const params = options.slice(1);
        //create an object.
        let newObj = ParamProcessor(params);
        //Save it in the database
        db[entity].create(newObj)
            .then(() => console.log("Contact created"))
            .catch(console.log);
        break;

    case CRUD.READ:
        db[entity].findAll().then((data) => {
            console.log(data);

            data.forEach((data) => {
                console.table(data.dataValues);
            })
        });
        break;

    case CRUD.UPDATE:
        //get parameters 
        const updParms = options.slice(1);
        const updId = updParms[0].split("=")[1];
        console.table(updParms);
        const updFields = updParms.slice(1);
        console.table(updFields);

        let updObject = ParamProcessor(updFields);

        db[entity].update(updObject, {
            where: {
                id: updId
            }
        })
            .then(() => console.log("Contact updated"))
            .catch(console.log);
        break;

    case CRUD.DELETE:
        const delId = options.slice(1)[0].split("=")[1];
        db[entity].destroy({
            where: {
                id: delId
            }
        });
        break;

    default:
        console.log("Operation not suported");
        break;
}

