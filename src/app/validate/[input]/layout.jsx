import InputContextProvider from "@/context/input-context";

export default function Layout({ children }) {
  return (
    <InputContextProvider>
        {children}
    </InputContextProvider>
  )
}
