import moment from 'moment';

const dateFormat = (date: string) => {
  return moment(date).fromNow();
};

export default dateFormat;
