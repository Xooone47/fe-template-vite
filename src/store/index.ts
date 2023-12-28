import {create} from 'zustand';

interface BearStore {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}
export const useBearStore = create<BearStore>(set => ({
    bears: 0,
    increasePopulation: () => set(state => ({bears: state.bears + 1})),
    removeAllBears: () => set({bears: 0}),
}));

export const getBearsStateOutsideComponent = useBearStore.getState;
