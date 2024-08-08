const mopngoose = require("mongoose");
const connectDB = async () => {
    try{
        await mopngoose.connect(process.env.MONGO_URL);
        // res.status(200).send({
        //     message: "Database connected",
        // });
        console.log(`Database is connected`.bgGreen.white);

    } catch (error){
    // res.status(504).send({
    //     messsage: `Internal Server Error ${error}`,
    //     success: false,
    //     description: `Database Not Conneccted`,
    
    // });
    console.log(`Error Occured ${error}`.bgRed.white);
}
};
module.exports = connectDB;