// import getDeleteNotification from "@/api/getDeleteNotification";
// import { useMutation, UseMutationResult } from "@tanstack/react-query";

// const formatUpdatedAt = (updatedAt: string) => {
//   const updatedDate = new Date(updatedAt);
//   const currentDate = new Date();
//   const diffInMs = currentDate.getTime() - updatedDate.getTime();
//   const diffInMin = Math.floor(diffInMs / (1000 * 60));
//   const diffInHours = Math.floor(diffInMin / 60);
//   const diffInDays = Math.floor(diffInHours / 24);
//   const diffInYears = Math.floor(diffInDays / 365);

//   if (diffInYears > 0) {
//     return `${diffInYears}년 전`;
//   }
//   if (diffInDays > 0) {
//     return `${diffInDays}일 전`;
//   }
//   if (diffInHours > 0) {
//     return `${diffInHours}시간 전`;
//   }
//   if (diffInMin > 0) {
//     return `${diffInMin}분 전`;
//   }
//   return "방금 전";
// };
// // 따로 빼기
// interface NotificationDropdownItemProps {
//   content: string;
//   updatedAt: string;
//   notificationId: number;
//   onDelete: (notificationId: number) => void;
// }

// const NotificationDropdownItem = ({
//   content,
//   updatedAt,
//   notificationId,
//   onDelete,
// }: NotificationDropdownItemProps) => {
//   const { mutate }: UseMutationResult<void, Error, number> = useMutation({
//     mutationFn: getDeleteNotification,
//     onMutate: async (notificationId: number) => {
//       onDelete(notificationId);
//     },
//     onError: (error, notificationId, context) => {
//       console.error(error);
//     },
//     // onSuccess: () => {
//     //   onDelete(notificationId);
//     // },
//   });
//   // 낙관적 업데이트로 수정
//   const onClickDeleteButton = () => {
//     mutate(notificationId);
//   };

//   const reservationStatus = content.slice(
//     content.length - 8,
//     content.length - 6,
//   );
//   // 가져오는 방식을 바꾸기 디코참고 정규식 true
//   return (
//     <div className="w-90 flex flex-col gap-1 rounded-md bg-white p-2">
//       <div className="flex justify-between">
//         <img
//           src={`/image/circle_${reservationStatus === "승인" ? "blue" : "red"}.svg`}
//           alt="Confirmed Chip"
//         />
//         <button type="button" onClick={onClickDeleteButton}>
//           <img
//             className="w-5 cursor-pointer opacity-50"
//             src="/image/x_btn.svg"
//             alt="Remove Notification Button"
//           />
//         </button>
//       </div>
//       <div>
//         {content.split(reservationStatus)[0]}
//         <div
//           style={{
//             color: reservationStatus === "승인" ? "#0085FF" : "#FF472E",
//             display: "inline",
//           }}
//         >
//           {reservationStatus}
//         </div>
//         {content.split(reservationStatus)[1]}
//       </div>
//       <div className="text-sm opacity-50">{formatUpdatedAt(updatedAt)}</div>
//     </div>
//   );
// };

// export default NotificationDropdownItem;

import getDeleteNotification from "@/api/getDeleteNotification";
import {
  useMutation,
  useQueryClient,
  UseMutationResult,
} from "@tanstack/react-query";

const formatUpdatedAt = (updatedAt: string) => {
  const updatedDate = new Date(updatedAt);
  const currentDate = new Date();
  const diffInMs = currentDate.getTime() - updatedDate.getTime();
  const diffInMin = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMin / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInYears > 0) {
    return `${diffInYears}년 전`;
  }
  if (diffInDays > 0) {
    return `${diffInDays}일 전`;
  }
  if (diffInHours > 0) {
    return `${diffInHours}시간 전`;
  }
  if (diffInMin > 0) {
    return `${diffInMin}분 전`;
  }
  return "방금 전";
};

interface NotificationDropdownItemProps {
  content: string;
  updatedAt: string;
  notificationId: number;
  onDelete: (notificationId: number) => void;
}

const NotificationDropdownItem = ({
  content,
  updatedAt,
  notificationId,
  onDelete,
}: NotificationDropdownItemProps) => {
  const queryClient = useQueryClient();

  const { mutate }: UseMutationResult<void, Error, number> = useMutation({
    mutationFn: getDeleteNotification,
    onMutate: async (notificationId: number) => {
      onDelete(notificationId);
      await queryClient.cancelQueries({ queryKey: ["notifications"] }); // 쿼리 취소
      const previousData = queryClient.getQueryData(["notifications"]); // 기존 데이터 가져오기

      // 새로운 알림 목록에서 삭제할 알림을 제거
      queryClient.setQueryData(["notifications"], (oldData: any) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          pages: oldData.pages.map((page: any) => ({
            ...page,
            notifications: page.notifications.filter(
              (notif: any) => notif.id !== notificationId,
            ),
          })),
        };
      });

      return { previousData };
    },
    onError: (error, notificationId, context) => {
      // 에러가 발생했을 때 이전 데이터로 롤백
      queryClient.setQueryData(["notifications"], context?.previousData);
    },
    onSettled: () => {
      // 성공 여부와 관계없이 쿼리를 다시 fetch
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });

  const onClickDeleteButton = () => {
    mutate(notificationId);
  };

  const reservationStatus = content.slice(
    content.length - 8,
    content.length - 6,
  );

  return (
    <div className="w-90 flex flex-col gap-1 rounded-md bg-white p-2">
      <div className="flex justify-between">
        <img
          src={`/image/circle_${reservationStatus === "승인" ? "blue" : "red"}.svg`}
          alt="Confirmed Chip"
        />
        <button type="button" onClick={onClickDeleteButton}>
          <img
            className="w-5 cursor-pointer opacity-50"
            src="/image/x_btn.svg"
            alt="Remove Notification Button"
          />
        </button>
      </div>
      <div>
        {content.split(reservationStatus)[0]}
        <div
          style={{
            color: reservationStatus === "승인" ? "#0085FF" : "#FF472E",
            display: "inline",
          }}
        >
          {reservationStatus}
        </div>
        {content.split(reservationStatus)[1]}
      </div>
      <div className="text-sm opacity-50">{formatUpdatedAt(updatedAt)}</div>
    </div>
  );
};

export default NotificationDropdownItem;
