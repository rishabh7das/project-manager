import NewTask from "./NewTask.jsx";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl mb-4 text-bold text-stone-700">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-400 my-4">
          This project doesn't have any tasks yet{" "}
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button className="text-stone-700 hover:text-red-500" onClick={()=>onDelete(task.id)}>Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
