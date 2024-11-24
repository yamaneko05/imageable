export default function ModalLoading() {
  return (
    <div className="fixed inset-0 grid place-items-center bg-black bg-opacity-50">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-t-transparent"></div>
    </div>
  );
}
