import { useState } from "react";

function Item(props) {
	const [value, setValue] = useState("");
	const [edit, setEdit] = useState({ index: null, state: null });
	const item = props.value;
	function handleNewTask(e) {
		var value = e.target.value;
		if (e.charCode === 13) {
			if (value !== "") {
				props.newTask({ name: value });
				e.target.value = "";
			}
		}
	}
	return (
		<div className="item">
			<div className="headerItem">
				<h5>{item.name}</h5>
				<h6>{item.tasks?.length === undefined ? "0" : item.tasks?.length} tasks remaining </h6>
			</div>
			<div className="tasksItem">
				{item.tasks && item.tasks.length > 0 ? (
					<ul>
						{item.tasks.map((task, index) => (
							<li key={index} className={task.done ? "done" : ""}>
								{edit.index === index && edit.state === true ? (
									<input value={value} onChange={(e) => setValue(e.target.value)} />
								) : (
									task.name
								)}
								{edit.index === index && edit.state === true ? (
									<button
										className="edit"
										onClick={() => {
											setEdit({ index: index, state: false });
											if (value === "") {
												props.editTask(index, "Unnamed");
											} else props.editTask(index, value);
										}}
									>
										Save
									</button>
								) : (
									<button
										className="edit"
										onClick={() => {
											setEdit({ index: index, state: true });
											setValue(task.name);
										}}
									>
										Edit
									</button>
								)}
								<button
									className="remove"
									onClick={() => {
										props.removeTask(index);
									}}
								>
									Delete
								</button>
								<button
									className={task.done ? "disabled" : "done"}
									onClick={() => {
										props.doneTask(index);
									}}
									disabled={task.done}
								>
									Done
								</button>
							</li>
						))}
					</ul>
				) : (
					<h4>No tasks for this list</h4>
				)}
				<input className="newTaskInput" placeholder="New Task" onKeyPress={(e) => handleNewTask(e)} />
			</div>
		</div>
	);
}

export default Item;
