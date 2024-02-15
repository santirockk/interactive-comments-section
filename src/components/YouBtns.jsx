export function YouBtns ({deleteHandler, editHandler}) {

    return (
        <div className="flex md:ml-auto">
          <button className="text-soft-red font-medium mr-ybtns hover:opacity-50 focus:outline-none" onClick={deleteHandler}>
            <img src="./images/icon-delete.svg" alt="icon delete" className="inline mr-2"/>
            Delete
          </button>
          <button className="text-moderate-blue font-medium hover:opacity-50" onClick={editHandler}>
            <img src="./images/icon-edit.svg" alt="icon edit" className="inline mr-2"/>
            Edit
          </button>
        </div>
    )

}