import useUser from "@/lib/hooks/useUser";
import { AlertCircle, Loader2, User } from "lucide-react";

export default function UserProfile() {
  const { data, isLoading, isError, error } = useUser();

  console.log(data);
  if (isLoading) {
    return (
      <div className="flex items-center gap-2 p-4 text-fuchsia-400">
        <Loader2 className="animate-spin w-5 h-5" />
        <span>Loading user...</span>
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
        <User className="w-6 h-6 text-gray-700" />
        <span className="text-sm font-medium">{data?.username}</span>
      </div>
    </div>
  );
}
