import { FC, memo, ReactNode, useDeferredValue } from 'react';
import type { Task } from './Transition';

type Props = {
  taskList: Task[];
}

export const TaskList: FC<Props> = memo((props: Props) => {
  const { taskList } = props;
  const deferredTaskList = useDeferredValue<Task[]>(taskList);

  return (
    <>
      { deferredTaskList.map<ReactNode>((task) => (
        <div
          key={task.id}
          style={{
            width: '300px',
            margin: 'auto',
            background: 'lavender'
          }}
        >
          <p>タイトル: {task.title}</p>
          <p>担当: {task.assignee}</p>
        </div>
      )) }
    </>
  );
});
