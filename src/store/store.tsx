import { create } from "zustand";

export type Section = "header" | "about" | "services" | "projects" | "contact";
type NavState = {
  currentSection: Section;
  changeSection: (section: Section) => void;
  isChangeable: boolean;
  setIsChangeable: (isChangeable: boolean) => void;
};

export const useNavStore = create<NavState>((set) => ({
  currentSection: "header",
  isChangeable: true,
  changeSection: (currentSection) =>
    set((state) => {
      if (state.isChangeable) {
        return { ...state, currentSection };
      } else {
        return state;
      }
    }),
  setIsChangeable(isChangeable) {
    return set((state) => ({
      ...state,
      isChangeable,
    }));
  },
}));

type ProjectStore = {
  inViewProject: string | null;
  setInViewProject: (project: string | null) => void;
  fullScreenProject: string | null;
  setFullScreenProject: (project: string | null) => void;
  lastFullScreenProject: string | null;
};

export const useProjectStore = create<ProjectStore>((set) => ({
  inViewProject: null,
  setInViewProject: (project) => set({ inViewProject: project }),
  fullScreenProject: null,
  setFullScreenProject: (project) => {
    set({ fullScreenProject: project });

    if (project !== null) set({ lastFullScreenProject: project });
  },
  lastFullScreenProject: null,
}));
