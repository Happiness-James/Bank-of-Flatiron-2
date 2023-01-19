import React from "react";
import AccountContainer from "./AccountContainer";

function App() {
	const [transactions, setTransactions] = React.useState([]);

	React.useEffect(() => {
		fetchTransactions();
	}, []);

	const fetchTransactions = async () => {
		try {
			const res = await fetch("https://transaction-api-305b.onrender.com/transactions")
			const jsonRes = await res.json();
			setTransactions(jsonRes);
		} catch (error) {
			console.log(error);
		}
	};
	const handleAddTransaction = (transaction) => {
		setTransactions([...transactions, transaction]);
	};
	const handleDeleteTransaction = (transId) => {
		const filterTransactions = transactions.filter(
			(trans) => trans.id !== transId
		);

		setTransactions(filterTransactions);
	};
	const handleSearch = (searchTerm) => {
		if (searchTerm) {
			const filteredTransactions = transactions.filter((trans) => {
				if (trans.description.toLowerCase().match(searchTerm.toLowerCase())) {
					return true;
				} else {
					return false;
				}
			});
			setTransactions(filteredTransactions);
		} else {
			fetchTransactions();
		}
	};
	return (
		<div className="ui raised segment">
			<div className="ui segment violet inverted">
				<h2>The Bank of Flatiron</h2>
			</div>
			<AccountContainer
				handleAddTransaction={handleAddTransaction}
				transactions={transactions}
				handleSearch={handleSearch}
				handleDeleteTransaction={handleDeleteTransaction}
			/>
		</div>
	);
}

export default App;