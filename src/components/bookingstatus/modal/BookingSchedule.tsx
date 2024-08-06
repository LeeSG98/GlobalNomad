import getUpdateMyBooking from "@/api/getUpdateMyBooking";
import queryClient from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { forwardRef, useEffect } from "react";
import { BookingScheduleProps } from "@/types/bookingStatus";

const BookingSchedule = forwardRef<HTMLDivElement, BookingScheduleProps>(
  (
    {
      BookingStatus,
      nickname,
      headCount,
      activityId,
      BookingId,
      setSelectedSchedule,
      inView,
      fetchNextPage,
    },
    ref,
  ) => {
    useEffect(() => {
      if (inView) {
        fetchNextPage();
      }
    }, [inView, fetchNextPage]);

    let BookingButton;

    const { mutate } = useMutation({
      mutationFn: getUpdateMyBooking,
      onSuccess: () =>
        Promise.all([
          queryClient.invalidateQueries({ queryKey: ["scheduleByStatus"] }),
          queryClient.invalidateQueries({ queryKey: ["BookingTimeTable"] }),
        ]),
    });

    const getConfirmBooking = () => {
      setSelectedSchedule((prev) => {
        if (!prev) return null; // prev가 null인 경우 처리
        return {
          ...prev,
          count: {
            ...prev.count,
            confirmed: prev.count.confirmed + 1,
            declined: prev.count.pending - 1,
            pending: 0,
          },
        };
      });

      mutate({ activityId, bookingId: BookingId, status: "confirmed" });
    };

    const getDeclineBooking = () => {
      setSelectedSchedule((prev) => {
        if (!prev) return null; // prev가 null인 경우 처리
        return {
          ...prev,
          count: {
            ...prev.count,
            declined: prev.count.declined + 1, // declined 수정
            pending: prev.count.pending - 1,
          },
        };
      });
      mutate({ activityId, bookingId: BookingId, status: "declined" });
    };

    switch (BookingStatus) {
      case "pending":
        BookingButton = (
          <div className="flex justify-end gap-[6px]">
            <button
              className="rounded-[6px] bg-[#112211] px-5 py-[10px] font-bold text-white"
              type="button"
              onClick={getConfirmBooking}
            >
              승인하기
            </button>
            <button
              className="rounded-[6px] border border-[#112211] bg-white px-5 py-[10px] font-bold text-[#112211]"
              type="button"
              onClick={getDeclineBooking}
            >
              거절하기
            </button>
          </div>
        );
        break;
      case "confirmed":
        BookingButton = (
          <button
            type="button"
            className="rounded-[26.5px] bg-[#FFF4E8] px-[15px] py-[10px] font-bold"
          >
            <div className="text-[#FF7C1D]">예약 승인</div>
          </button>
        );
        break;
      case "declined":
        BookingButton = (
          <button
            type="button"
            className="rounded-[26.5px] bg-[#FFE4E0] px-[15px] py-[10px] font-bold"
          >
            <div className="text-[#FF472E]">예약 거절</div>
          </button>
        );
        break;
      default:
        BookingButton = null;
    }

    return (
      <div className="dark:bg-darkMode-black-40 h-[135px] rounded border border-[#DDD] px-[16.43px] pb-3 pr-4 pt-4">
        <div className="flex flex-col gap-[6px]">
          <div className="flex gap-[10px]">
            <div className="dark:text-darkMode-white-30 font-semibold text-[#79747E]">
              닉네임
            </div>
            <div className="dark:text-darkMode-white-10 font-medium text-[#1B1B1B]">
              {nickname}
            </div>
          </div>
          <div className="flex gap-[10px]">
            <div className="dark:text-darkMode-white-30 font-semibold text-[#79747E]">
              인원
            </div>
            <div className="dark:text-darkMode-white-10 font-medium text-[#1B1B1B]">
              {headCount}
            </div>
          </div>
        </div>
        <div className="mt-[6px] text-right">{BookingButton}</div>
        <div ref={ref} className="h-[10px] w-[10px]" />
      </div>
    );
  },
);

BookingSchedule.displayName = "BookingSchedule";

export default BookingSchedule;
