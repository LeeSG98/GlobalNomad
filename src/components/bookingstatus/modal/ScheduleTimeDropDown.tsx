import { useRef, useEffect } from 'react';
import { ScheduleType, ScheduleTimeDropDownProps } from '@/types/bookingStatus';

const ScheduleTimeDropDown = ({
  schedule,
  setSelectedSchedule,
  viewScheduleTimeDropDown,
  setVieScheduleTimeDropDown,
}: ScheduleTimeDropDownProps) => {
  const onClickScheduleTime = (selectedSchedule: ScheduleType) => {
    setVieScheduleTimeDropDown(false);
    setSelectedSchedule(selectedSchedule);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: any) => {
      if (viewScheduleTimeDropDown && !dropdownRef.current?.contains(e.target)) {
        setVieScheduleTimeDropDown(false);
      }
    };
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('click', clickOutside);
    };
  }, [viewScheduleTimeDropDown]);

  return (
    <div
      ref={dropdownRef}
      className="w-full border border-gray-50 h-[170px] absolute z-50 bg-white rounded overflow-y-auto dark:bg-darkMode-black-30 dark:text-white custom-scrollbar"
    >
      <ul>
        {schedule.map((item,index) => {
          return (
            <li
              key={index}
              className="px-4 py-4 cursor-pointer hover:bg-slate-400"
              onClick={() => onClickScheduleTime(item)}
            >
              {`${item.startTime} ~ ${item.endTime}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ScheduleTimeDropDown;
