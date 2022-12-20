export enum TaskStatus {
  PENDENT = "PENDENT",
  DONE = "DONE",
  EXPIRED = "EXPIRED",
}

export type TaskStatusType = keyof typeof TaskStatus;

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatusType;
};
export type TaskItemProps = {
  title: string;
  description: string;
  status: TaskStatusType;
};
