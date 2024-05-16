'use client'
import { createContext, useState,  useEffect, useCallback, Dispatch, SetStateAction } from "react";

interface IOrganization {
  title: string
}

type ActiveForm = 'organization' | null;

interface ITaskManagementProvider {
  organizations: IOrganization[];
  setOrganizations: Dispatch<SetStateAction<IOrganization[]>>
}

export const TaskManagementContext = createContext<ITaskManagementProvider>({
  organizations: [],
  setOrganizations: () => {}
});

export const TaskManagementProvider = ({ children }: { children: React.ReactNode }) => {
  const [organizations, setOrganizations] = useState<IOrganization[]>([]);
  const [activeForm, setActiveForm] = useState<ActiveForm>(null);

  return (
    <TaskManagementContext.Provider value={{ organizations, setOrganizations }}>
      {children}
    </TaskManagementContext.Provider>
  )
};
