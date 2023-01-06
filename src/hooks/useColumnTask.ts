import { useCallback } from "react";
import { v4 as uuidv4 } from 'uuid'
import { ColumnType } from "../utils/enum";
import { TaskModel } from "../utils/models";
import useTaskCollection from "./useTaskCollection";

const useColumnTask = () => {
    const [tasks, setTasks] = useTaskCollection()
    const addEmptyTask = useCallback(() => {
        console.log('Adding new empty task to ')
        setTasks((allTasks) => {
            const columnTasks = allTasks[column]

            if (columnTasks.length > MAX_TASK_PER_COLUMN) {
                console.log('Too many task')
                return allTasks
            }
            const newColumnTask: TaskModel = {
                id: uuidv4(),
                title: `New ${column} task`,
                color: pickChakraRandomColor('.300'),
                column
            }

            return {
                ...allTasks,
                [column]: [newColumnTask, ...columnTasks]
            }
        })

    
}, [column, setTasks])
}

export default useColumnTask
