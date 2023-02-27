import { ReactNode, useState } from 'react';
import { Avatar } from './Avatar';

type Task = {
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

export const Transition = () => {
  const [ selectedAssignee, setSelectedAssignee ] = useState<string>('');
  const [ taskList, setTaskList ] = useState<Task[]>(tasks);

  const onClickAssignee = (assignee: string) => {
    setSelectedAssignee(assignee);
    setTaskList(filteringAssignee(assignee));
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
      <button style={{ marginTop: '16px' }} onClick={() => onClickAssignee('')}>リセット</button>
      { taskList.map<ReactNode>((task) => (
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
    </div>
  );
}