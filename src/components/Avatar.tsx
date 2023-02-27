import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  isSelected?: boolean;
  onClick: (assignee: string) => void;
}

export const Avatar = (props: Props) => {
  const { children, onClick, isSelected = false } = props;
  const border = isSelected ? '3px solid orange' : '1px solid gray';

  return (
    <div
      style={{
        width: '30px',
        height: '30px',
        border,
        borderRadius: '50%',
        cursor: 'pointer',
        textAlign: 'center',
        lineHeight: '30px',
        userSelect: 'none'
    }}
    onClick={() => onClick(`${children}`)}>
      { children }
    </div>
  );
}