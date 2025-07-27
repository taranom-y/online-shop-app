import useUser from "@/hooks/useUser";
import { AlertCircle, Loader2, User } from "lucide-react";

export default function UserProfile() {
  const { data, isLoading, isError, error } = useUser();

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 p-4 text-blue-400">
        <Loader2 className="animate-spin w-5 h-5" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center gap-2 p-4 text-red-600">
        <AlertCircle className="w-5 h-5" />
        <span>Error: {error.message}</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <User className="w-8 h-8 text-gray-100" />
        <span className="text-1xl">{data?.username}</span>
      </div>
    </div>
  );
}
