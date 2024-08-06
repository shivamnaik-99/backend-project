import dotenv from "dotenv";
dotenv.config();
import ConnectDB from "./db/index.js";
import { app } from "./app.js";

ConnectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error connecting to db", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is listerning at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection Failed!!!", err);
  });

// can be done like this also but makes index.js heavy
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
