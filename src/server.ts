import app from "./app"
import dotenv from "dotenv";

dotenv.config();

//const PORT = 3000;
const PORT = process.env.PORT || "CHANGEENV";

app.listen(PORT, () => {
  console.log('Server running at http://localhost:'+PORT);
});
