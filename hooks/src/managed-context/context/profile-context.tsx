import { createContext, useContext, type ReactNode } from "react";

/**
 * Kontrak data profil statis yang disediakan melalui Context.
 */
export interface ProfileContextValue {
  name: string;
  age: number;
}

const ProfileContext = createContext<ProfileContextValue | undefined>(
  undefined,
);

/**
 * Props untuk provider {@link ProfileProvider}.
 */
export interface ProfileProviderProps {
  value: ProfileContextValue;
  children: ReactNode;
}

/**
 * Menyediakan nilai profil ke seluruh pohon komponen di bawahnya tanpa prop drilling.
 *
 * @param props Nilai profil dan elemen anak.
 * @returns Provider konteks profil.
 */
export const ProfileProvider = ({ value, children }: ProfileProviderProps) => {
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

/**
 * Custom hook aman untuk membaca {@link ProfileContext}.
 *
 * Melempar pesan error yang jelas apabila dipanggil di luar `<ProfileProvider>`.
 *
 * @returns Nilai profil pengguna dari Context.
 */
export const useProfileContext = (): ProfileContextValue => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error(
      "useProfileContext wajib dipanggil di dalam ProfileProvider.",
    );
  }
  return context;
};
