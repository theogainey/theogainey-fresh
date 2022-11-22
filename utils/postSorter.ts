import { Post } from "../types.d.ts";

const postSorter = (a: Post, b: Post) => {
  const aDate = new Date(a.dateTime);
  const bDate = new Date(b.dateTime); 
  return bDate.getTime() - aDate.getTime();
}

export default postSorter;
