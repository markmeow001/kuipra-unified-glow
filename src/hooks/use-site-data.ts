import { useQuery } from "@tanstack/react-query";

// All data is served statically — no Supabase dependency
// When Supabase is re-enabled in future, replace queryFn with actual API calls

export const useServices = () =>
  useQuery({
    queryKey: ["services"],
    queryFn: async (): Promise<null> => null,
    staleTime: Infinity,
    retry: false,
  });

export const useTeamMembers = () =>
  useQuery({
    queryKey: ["team_members"],
    queryFn: async (): Promise<null> => null,
    staleTime: Infinity,
    retry: false,
  });

export const useProjects = () =>
  useQuery({
    queryKey: ["projects"],
    queryFn: async (): Promise<null> => null,
    staleTime: Infinity,
    retry: false,
  });

export const useSiteContent = () =>
  useQuery({
    queryKey: ["site_content"],
    queryFn: async (): Promise<null> => null,
    staleTime: Infinity,
    retry: false,
  });
