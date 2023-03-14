import { useState, FC } from 'react';
import { Avatar } from './Avatar';
import { TaskList } from './TaskList';

export type Task = {
  id: number;
  title: string;
  assignee: string;
}

const member = {
  a: 'A',
  b: 'B',
  c: 'C'
}

const generateDummyTask = (): Task[] => {
  return Array(10000).fill('').map((_, index) => {
    const addedIndex: number = index++;
    const addedAssignee: string = addedIndex % 3 === 0
      ? member.a
      : addedIndex % 2 === 0
        ? member.b
        : member.c;

    return {
      id: addedIndex,
      title: `タスク${addedIndex}`,
      assignee: addedAssignee
    }
  });
}

const tasks: Task[] = generateDummyTask();

const filteringAssignee = (assignee: string): Task[] => {
  return assignee === ''
    ? tasks
    : tasks.filter((task) => task.assignee === assignee);
}

export const Transition: FC = () => {
  const [ selectedAssignee, setSelectedAssignee ] = useState<string>('');
  const [ taskList, setTaskList ] = useState<Task[]>(tasks);
  const [ isShowList, setIsShowList ] = useState<boolean>(false);

  const onClickAssignee = (assignee: string): void => {
    const filteredAssignee: Task[] = filteringAssignee(assignee);

    setSelectedAssignee(assignee);
    setTaskList(filteredAssignee);
  }

  const isSelected = (member: string): boolean => {
    return selectedAssignee === member;
  }

  return (
    <div>
      <p>Transition</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar onClick={onClickAssignee} isSelected={isSelected(member.a)} >{ member.a }</Avatar>
        <Avatar onClick={onClickAssignee} isSelected={isSelected(member.b)} >{ member.b }</Avatar>
        <Avatar onClick={onClickAssignee} isSelected={isSelected(member.c)}>{ member.c }</Avatar>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100px',
        margin: 'auto'
      }}>
        <button style={{ marginTop: '16px' }} onClick={() => onClickAssignee('')}>リセット</button>
        <button style={{ marginTop: '16px' }} onClick={() => setIsShowList(!isShowList)}>
          { isShowList ? '非表示' : '表示' }
        </button>
      </div>
      { isShowList && <TaskList taskList={taskList} /> }
    </div>
  );
}
