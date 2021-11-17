import { useState } from "react";
import Item from "./Item";
function List() {
	const [list, setList] = useState([
		{
			id: 0,
			name: "Gym",
			tasks: [
				{
					name: "Cardio",
					done: false,
				},
				{
					name: "Weights",
					done: false,
				},
			],
		},
		{
			id: 1,
			name: "Coffee",
			tasks: [{ name: "Porto Bella Coffee", done: false }],
		},
		{
			id: 2,
			name: "Work",
			tasks: [
				{
					name: "Morning meeting",
					done: true,
				},
				{
					name: "Tech Project",
					done: false,
				},
			],
		},
		{
			id: 3,
			name: "Grocery",
			tasks: [
				{
					name: "Milk",
					done: true,
				},
				{
					name: "Potatoes",
					done: false,
				},
				{
					name: "Bread",
					done: false,
				},
			],
		},
		{
			id: 4,
			name: "TV Shows",
		},
	]);
	const [chosenList, setChosenList] = useState(0);
	const [chosenValue, setChosenValue] = useState(list[0]);
	const [errorListing, setErrorListing] = useState("");
	function newList(e) {
		var value = e.target.value;

		if (e.charCode === 13) {
			if (value !== "") {
				setList([...list, { id: list.length, name: value, tasks: [] }]);
				setErrorListing("");
				e.target.value = "";
			}
			if (value === "") {
				setErrorListing("*Type a list name first!");
			}
		}
	}
	function deleteList(index) {
		const newArrayList = list.filter((item, i) => i !== index);
		let List = newArrayList;
		setList(List);
	}

	function handleRemoveItemList(index) {
		const newArrayList = chosenValue.tasks.filter((item, i) => i !== index);
		let List = [...list];
		List[chosenList].tasks = newArrayList;
		setList(List);
	}
	function setTaskDone(index) {
		let newArrayList = chosenValue.tasks;
		newArrayList[index].done = true;
		let List = [...list];
		List[chosenList].tasks = newArrayList;
		setList(List);
	}
	function editTask(index, value) {
		let newArrayList = chosenValue.tasks;
		newArrayList[index].name = value;
		let List = [...list];
		List[chosenList].tasks = newArrayList;
		setList(List);
	}

	function newTask(value) {
		let newArrayList = [];
		if (chosenValue.tasks !== undefined) {
			newArrayList = chosenValue.tasks;
		} else {
			newArrayList = [];
		}
		newArrayList.push(value);
		let List = [...list];
		List[chosenList].tasks = newArrayList;
		setList(List);
	}
	return (
		<div className="list">
			<h2>What do I need to do today?</h2>

			<div className="flex">
				<div className="leftSide">
					<h4>My list </h4>
					<ul>
						{list.map((item, index) => (
							<div className="flex-button">
								<li
									onClick={() => {
										setChosenList(item.id);
										setChosenValue(item);
									}}
									className={chosenList === item.id ? "active" : ""}
									key={index}
								>
									{item.name}
								</li>
								<button onClick={() => deleteList(index)}>Remove</button>
							</div>
						))}
					</ul>
					<label>New list</label>
					<input
						onKeyPress={(e) => {
							newList(e);
						}}
						placeholder="Write list name..."
					/>
					<label className="error">{errorListing}</label>
				</div>
				<div className="rightSide">
					<Item
						value={chosenValue}
						removeTask={handleRemoveItemList}
						doneTask={setTaskDone}
						editTask={editTask}
						newTask={newTask}
					/>
				</div>
			</div>
		</div>
	);
}

export default List;
