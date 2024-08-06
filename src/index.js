import dotenv from "dotenv";
dotenv.config();
import ConnectDB from "./db/index.js";

ConnectDB();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error connecting the db", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listerning on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR : ", error);
//     throw error;
//   }
// })();
