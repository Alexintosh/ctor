import { IContract } from "../model/IContract";

export interface IContractService {
    GetContract(address: string): Promise<IContract | null>;
}
