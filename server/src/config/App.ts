import * as dotenv from "dotenv";
import path from "path";

dotenv.config();

const projectRoot = path.join(__dirname, "../../../");
const AppConfig = {
	NODE_ENV: process.env.NODE_ENV,
	PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 5000,

	LOG_DIR: process.env.LOG_DIR || "logs",
	LOG_LEVEL: process.env.LOG_LEVEL === "production" ? "error" : "debug",

	CONTRACTS_BUILD_DIR: process.env.contracts_build_directory ? process.env.contracts_build_directory : "./build/contracts",
	UI_DIR: process.env.ui_directory ? path.join(projectRoot, process.env.ui_directory) : path.join(projectRoot, "client/build"),

	CONTRACT_SERVICE: process.env.CONTRACT_SERVICE || "local",

	ETHERSCAN_APIKEY: process.env.ETHERSCAN_APIKEY
};

export = AppConfig;