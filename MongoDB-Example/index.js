const mongoose = require("mongoose");
//const connectionString = "mongodb+srv://felipetos12:7MZd8V0S3tMxWGff@cluster0.u9pum.mongodb.net/dbtest?retryWrites=true&w=majority";
const { MONGO_URI } = require("./config")
const axios = require("axios").default;
const cheerio = require("cheerio");
const cron = require("node-cron");

mongoose.connect(MONGO_URI, { useNewUrlParser: true });

const { BreakingNew } = require("./models");

cron.schedule("0 */4 * * *", async () => {
    console.log("Cron Job Executing...");
    const html = await axios.get("https://cnnespanol.cnn.com/");
    const $ = cheerio.load(html.data);
    const titles = $(".news__title");
    const breakingNewsArr = [];
    //Create array to set all titles at the same time.
    titles.each((index, element) => {
        breakingNewsArr.push({
            title: $(element).text().toString(),
            link: $(element).children().attr("href")            
        });
    });
    
    BreakingNew.create(breakingNewsArr)
});


/*
//Test to create a model of a Cat in Mongo
const Cat = mongoose.model("Cat", {
    name: String,
    color: String
});
//Create a new cat object.
const cat1 = new Cat({ name: "Garfield7", color: "Yellow" });

//Async function to save a Cat.
async function saveCat(cat) {
    //cat.save().then(() => console.log("Cat has been saved"));
    const result = cat.save();
    return result;
}
//Async function to search a Cat in Mongo
async function searchCat() {
    //Cat.find().then(console.log);
    const result = Cat.find();
    return result;
}
// Main metodh to run all as syncronic
async function main() {
    //First I put the new document in the DB
    const saved = await saveCat(cat1);
    console.log("saved: " + saved);
    //cat1.save().then(() => console.log("Cat has been saved"));

    //Search all the documents, it needs to include the last one document.
    const result = await searchCat();
    console.log("result: " + result);
    //Cat.find().then(console.log);
}

main();
*/
