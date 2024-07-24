type Experience = {
  id: string;
  name: string;
  description: string;
};

type Reservation = {
  id: string;
  experienceId: string;
  date: string;
  nickname: string;
  people: number;
  time: string;
  status: '예약' | '승인' | '완료';
};
