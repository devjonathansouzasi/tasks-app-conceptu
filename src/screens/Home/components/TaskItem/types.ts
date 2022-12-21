import { TaskStatusType } from "../../../../Models/Task";

export type TaskItemProps = {
  id: string;
  title: string;
  description: string;
  status: TaskStatusType;
};
