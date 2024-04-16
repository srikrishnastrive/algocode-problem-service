const { CosmosClient } = require("@azure/cosmos");
const { COSMOS_KEY,COSMOS_ENDPOINT } = require("../config/server.config");



const endpoint = COSMOS_ENDPOINT;

const databaseId = 'algocode-logs';
const containerId = 'error-logs';
const key = COSMOS_KEY;


const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseId);
const  container = database.container(containerId);

//add function

async function logToCosmoDB(level,message){
    try {
        //structure of the document we will store in cosmos db.
        await container.items.create({
            timestamp : new Date().toISOString(),
            level:level,
            message:message
        });
        console.log("Log entry created in Cosmos DB");
        
    } catch (error) {
        console.log("Error logging to cosmos db");
    }
}


module.exports = {logToCosmoDB}