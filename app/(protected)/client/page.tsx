"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";
import { currentUser } from "@/lib/auth";

const ClientPage = async () => {
  const user = useCurrentUser();

  return <UserInfo label="📱Client Components" user={user} />;
};

export default ClientPage;
