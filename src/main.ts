import { startServer } from "./server";
import { connect } from "./config/typeorm";

async function main() {
  const port: number = 4000;
  const app = await startServer();

  app.listen(port);
  console.log("Listening port:", port);

  //
  connect();
}

main();
