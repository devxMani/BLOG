import Sidebar from "../components/Sidebar";
export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <Sidebar />
      </div>
      {children}
    </>
  );
}
