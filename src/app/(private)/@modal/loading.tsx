import Spinner from "@/components/ui/Spinner";

export default function ModalLoading() {
  return (
    <div className="fixed inset-0 grid place-items-center bg-black bg-opacity-50">
      <Spinner />
    </div>
  );
}
