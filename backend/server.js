import { config } from "./src/config/config.js";
import app from "./src/app.js";
import connectdb from "./src/config/db.js";
connectdb();
const PORT = config.PORT;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
