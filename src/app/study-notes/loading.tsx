import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="h-dvh flex items-center justify-center">
      <Loader className="animate-spin size-10" />
    </div>
  );
}
