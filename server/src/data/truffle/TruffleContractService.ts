import { Contract, ethers, Signer } from "ethers";
import { BaseProvider } from "ethers/providers";
import AppConfig from "../../config/App";
import { IContract } from "../../models/IContract";
import { FileUtils } from "../../utils/FileUtils";
import logger from "../../utils/Logger";
import Web3Utils from "../../utils/Web3Utils";
import { IContractService } from "../IContractService";
import { ITruffleContract } from "./ITruffleTypes";

class TruffleContractService implements IContractService {
	private networkUrl: string = AppConfig.NETWORK_HOST;
	private networkId: string = AppConfig.NETWORK_ID;
	private provider: BaseProvider;
	private signer: Signer;

	constructor() {
		const provider = new ethers.providers.JsonRpcProvider(this.networkUrl);

		this.provider = provider;
		this.signer = provider.getSigner(0);
	}

	public async GetContract(address: string): Promise<IContract | null> {
		const validContractAddress = await Web3Utils.isContractAddress(this.provider, address);

		if (!validContractAddress) {
			return null;
		}

		const contracts = await this.GetContractFiles();
		const contract = contracts.filter((c: any) => c.networks && c.networks[this.networkId] && c.networks[this.networkId].address === address)[0];
		const result: IContract | null = null;

		if (contract) {
			return this.MapContract(contract);
		}

		return result;
	}

	public async GetContracts(limit: number = 10): Promise<IContract[]> {
		const contracts = await this.GetContractFiles();

		return contracts
			.filter((c: any) => c.networks && c.networks[this.networkId])
			.slice(0, limit)
			.map((contract: ITruffleContract) => {
				return this.MapContract(contract);
			});
	}

	private MapContract(contract: ITruffleContract): IContract {
		let address = "";
		if (contract.networks[this.networkId]) {
			address = contract.networks[this.networkId].address;
		}

		const abi = JSON.stringify(contract.abi);
		const raw = new Contract(address, abi, this.signer);

		return {
			Address: address,
			Name: contract.contractName,
			SourceCode: contract.source,
			ABI: abi,
			RawContract: raw
		} as IContract;
	}

	private async GetContractFiles(): Promise<ITruffleContract[]> {
		const dir = AppConfig.CONTRACT_BUILD_DIR;
		logger.info("Fetching files from: " + dir);

		try {
			const files = FileUtils.GetJsonFiles(dir);
			return files;
		} catch (ex) {
			logger.error(ex.toString());
			return [];
		}
	}
}

export { TruffleContractService };
