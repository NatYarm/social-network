import { format } from 'date-fns';

export const formatDistanceFromNow = () => {};
export const formatDate = () => {
  const today = format(new Date(), 'd MMM yyyy');
  return today;
};

formatDate();
