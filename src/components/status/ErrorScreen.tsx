type ErrorScreenProps = {
  reset: () => void;
  message?: string;
};

export default function ErrorScreen({ reset, message }: ErrorScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-red-500">
      <h1 className="text-2xl font-bold mb-4">에러가 발생했습니다. 😭😭</h1>
      <p className="mb-6">
        {message || "데이터를 불러오는 중 문제가 발생했습니다."}
      </p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
      >
        다시 시도하기 😉
      </button>
    </div>
  );
}
// 에러 스크린 (다시 시도하기 버튼으로 사용자는 해당 페이지로 다시 접근 시도해 볼 수 있음.)