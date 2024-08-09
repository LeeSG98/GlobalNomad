export enum ReservationStatus {
    PROPOSAL = 'PROPOSAL', // 신청
    APPROVAL = 'APPROVAL', // 승인
    REFUSE = 'REFUSE' // 거절
  }
  
  export const reservationStatusItems = new Map<ReservationStatus, string>([
    [ReservationStatus.PROPOSAL, '신청'],
    [ReservationStatus.APPROVAL, '승인'],
    [ReservationStatus.REFUSE, '거절'],
  ]);
  
  export interface Experience {
    id: number; // id를 number 타입으로 변경
    name: string;
  }
  
  export interface ReservationDetail {
    id: number;
    nickname: string;
    people: number;
    time: string;
    status: ReservationStatus;
  }
  
  