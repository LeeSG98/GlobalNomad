import getBookingSchedule from '@/api/getBookingSchedule';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { useState, useEffect, useRef } from 'react';
import getScheduleBoardByStatus from '@/api/getScheduleBoardByStatus';
import { useInView } from 'react-intersection-observer';
import { BookingResponse, Schedule, BookingModalProps } from '@/types/bookingStatus';
import ScheduleTimeDropDownBox from './ScheduleTimeDropDownBox';
import ScheduleTimeDropDown from './ScheduleTimeDropDown';
import BookingSchedule from './BookingSchedule';

const BookingModal = ({
  setViewBookingModal,
  selectedDate,
  activitiyId,
  viewBookingModal,
}: BookingModalProps) => {
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(null);
  const [BookingStatus, setBookingStatus] = useState<string>('pending');
  const [viewScheduleTimeDropDown, setVieScheduleTimeDropDown] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const handleCloseModal = () => {
    setViewBookingModal(false);
  };

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (
        viewBookingModal &&
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        setViewBookingModal(false);
      }
    };

    document.addEventListener('mousedown', clickOutside);

    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [viewBookingModal, setViewBookingModal]);

  const { data: scheduleByStatus, fetchNextPage } = useInfiniteQuery<BookingResponse>({
    queryKey: ['scheduleByStatus', activitiyId, selectedSchedule?.scheduleId, BookingStatus],
    queryFn: getScheduleBoardByStatus,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.cursorId,
  });
  const dateParams = `${selectedDate.year}-${selectedDate.month}-${selectedDate.day}`;
  const { data: scheduleData } = useQuery<Schedule[]>({
    queryKey: ['schedule', activitiyId, dateParams],
    queryFn: getBookingSchedule,
  });

  const Booking = scheduleByStatus?.pages.flatMap((page) => page.Booking);

  console.log(Booking);
  useEffect(() => {
    if (scheduleData) {
      const firstSchedule = scheduleData[0];
      setSelectedSchedule(firstSchedule);
    }
  }, [scheduleData]);

  const { inView, ref } = useInView();
  return (
    <div
      className="border border-[#ddd] absolute top-[200px] right-[190px] w-[429px] h-[697px] bg-white rounded-3xl shadow-[0px_4px_16px_0px_rgba(17, 34, 17, 0.05)] px-[24px] pt-[31px] z-[10] sm:w-screen sm:top-0 sm:right-0 sm:fixed sm:inset-0 sm:h-screen sm:rounded-none dark:bg-darkMode-black-20"
      ref={modalRef}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="429"
        height="2"
        viewBox="0 0 429 2"
        fill="none"
        className="relative top-[122px] left-[-24px] -z-10"
      >
        <path d="M1 1L428 1.00004" stroke="#DDDDDD" strokeLinecap="square" />
      </svg>
      <div className="flex justify-between">
        <div className="font-bold text-[28px] text-[#1b1b1b] dark:text-white">예약정보</div>
        <button type="button" onClick={handleCloseModal}>
          <img src="/image/x_btn.svg" alt="cancel_icon" />
        </button>
      </div>
      <div className="flex gap-3 mt-[34px] text-[20px] text-[#4b4b4b] dark:text-darkMode-white-20">
        <div className="flex flex-col gap-[13px]">
          <button
            type="button"
            className={BookingStatus === 'pending' ? 'font-bold' : ''}
            onClick={() => setBookingStatus('pending')}
          >
            신청 {selectedSchedule?.count?.pending}
          </button>
          {BookingStatus === 'pending' ? (
            <div className="w-full h-1 rounded-xl bg-black" />
          ) : null}
        </div>
        <div className="flex flex-col gap-[13px]">
          <button
            type="button"
            className={BookingStatus === 'confirmed' ? 'font-bold' : ''}
            onClick={() => setBookingStatus('confirmed')}
          >
            승인 {selectedSchedule?.count?.confirmed}
          </button>
          {BookingStatus === 'confirmed' ? (
            <div className="w-full h-1 rounded-xl bg-black" />
          ) : null}
        </div>

        <div className="flex flex-col gap-[13px]">
          <button
            type="button"
            className={BookingStatus === 'declined' ? 'font-bold' : ''}
            onClick={() => setBookingStatus('declined')}
          >
            거절 {selectedSchedule?.count?.declined}
          </button>
          {BookingStatus === 'declined' ? (
            <div className="w-full h-1 rounded-xl bg-black" />
          ) : null}
        </div>
      </div>
      <div className="mt-[25px] text-[#1b1b1b] font-semibold text-[20px] dark:text-white">
        예약날짜
      </div>
      <div className="mt-[14px] text-[#1b1b1b]  text-[20px] mb-[10px] dark:text-white">{`${selectedDate.year}년 ${selectedDate.month}월 ${selectedDate.day}일`}</div>

      {selectedSchedule ? (
        <>
          <ScheduleTimeDropDownBox
            selectedSchedule={selectedSchedule}
            setVieScheduleTimeDropDown={setVieScheduleTimeDropDown}
          />
          {viewScheduleTimeDropDown && (
            <div className="relative">
              <ScheduleTimeDropDown
                schedule={scheduleData || []}
                setSelectedSchedule={setSelectedSchedule}
                viewScheduleTimeDropDown={viewScheduleTimeDropDown}
                setVieScheduleTimeDropDown={setVieScheduleTimeDropDown}
              />
            </div>
          )}

          <div className="mt-8 flex flex-col gap-4">
            <div className="text-[#1b1b1b] font-semibold text-[20px] dark:text-white">
              예약 내역
            </div>
            <div className="flex flex-col gap-[14px] h-[186px] overflow-y-auto custom-scrollbar">
              {Booking?.map((item) => {
                return (
                  <BookingSchedule
                    BookingStatus={BookingStatus}
                    key={item.id}
                    nickname={item.nickname}
                    headCount={item.headCount}
                    activityId={activitiyId}
                    BookingId={item.id}
                    setSelectedSchedule={setSelectedSchedule}
                    fetchNextPage={fetchNextPage}
                    ref={ref}
                    inView={inView}
                  />
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <div>일정이 없습니다</div>
      )}
    </div>
  );
};

export default BookingModal;