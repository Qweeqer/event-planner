import { priorities } from "./variables";

export function findPriority(priority) {
  const priorityItem = priorities.find((item) => item.value === priority);
  return {
    value: priorityItem.value,
    valueName: priorityItem.valueName,
  };
}
