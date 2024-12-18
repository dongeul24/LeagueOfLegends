export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin h-16 w-16 border-t-4 border-yellow-500 border-solid rounded-full"></div>
    </div>
  );
}
// 로딩 시 보일 스피너