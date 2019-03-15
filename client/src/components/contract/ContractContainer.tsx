import React, { Component } from "react";
import { IContractService } from "../../services/IContractService";
import StaticContractService from "../../services/StaticContractService";
import ContractView from "./ContractView";

interface IProps {
	address: string;
}

class ContractContainer extends Component<IProps> {
	public state = {
		error: false,
		contract: {
			Address: this.props.address
		}
	};

	private contractService: IContractService;

	constructor(props: IProps) {
		super(props);

		this.contractService = new StaticContractService();
	}

	public async componentDidMount() {
		const address = this.props.address;
		const contract = await this.contractService.GetContract(address);

		this.setState({
			error: false,
			contract
		});
	}

	public render() {
		return (
			<>
				{this.state.error && <div>Error</div>}

				<div>
					<ContractView contract={this.state.contract} />
				</div>
			</>
		);
	}
}

export default ContractContainer;
