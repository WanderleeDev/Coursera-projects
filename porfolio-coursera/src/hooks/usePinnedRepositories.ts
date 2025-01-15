import { Repository } from "@/models/Repository.model";
import { useCallback, useEffect, useState, useTransition } from "react";
import { getEnv } from "@/utils/getEnv";

export interface PinnedRepositories {
  repositories: {
    pinned: Repository[];
  };
  isPending: boolean;
  error: string | null;
}

export function usePinnedRepositories(nameUser: string): PinnedRepositories {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const fetchRepositories = useCallback(async () => {
    try {
      setError(null);
      const response = await fetch(
        `${getEnv("API_URL")}users/${nameUser}/repos?per_page=50`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setRepositories(data);
    } catch (error) {
      console.error(error);
      setError("Error fetching repositories");
    }
  }, [nameUser]);

  useEffect(() => {
    startTransition(() => {
      fetchRepositories();
    });
  }, [nameUser, fetchRepositories]);

  return {
    repositories: {
      pinned: repositories.filter((repo) => repo.topics.includes("pinned")),
    },
    isPending,
    error,
  };
}
