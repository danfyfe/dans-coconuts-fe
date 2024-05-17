'use client'
import { createContext, useState,  useEffect, useCallback, Dispatch, SetStateAction } from "react";

interface IOrganization {
  title: string
}

type ActiveTaskManagementForm = 'organization' | 'project' | 'task' | null;

interface ITaskManagementProvider {
  organizations: IOrganization[];
  setOrganizations: Dispatch<SetStateAction<IOrganization[]>>;
  activeForm: ActiveTaskManagementForm;
  setActiveForm: Dispatch<SetStateAction<ActiveTaskManagementForm>>;
}

export const TaskManagementContext = createContext<ITaskManagementProvider>({
  organizations: [],
  setOrganizations: () => {},
  activeForm: null,
  setActiveForm: () => {}
});

export const TaskManagementProvider = ({ children }: { children: React.ReactNode }) => {
  const [organizations, setOrganizations] = useState<IOrganization[]>([]);
  const [activeForm, setActiveForm] = useState<ActiveTaskManagementForm>(null);

  return (
    <TaskManagementContext.Provider value={{ organizations, setOrganizations, activeForm, setActiveForm }}>
      {children}
    </TaskManagementContext.Provider>
  )
};
