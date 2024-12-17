import Header from "../containers/Header";
import SideNav from "../containers/SideNav";

type LayoutTypes = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className }: LayoutTypes) => {
  return (
    <main className="h-dvh flex w-screen overflow-x-hidden">
      <SideNav />
      <section className="flex-1 border-l-2 border-grey-300 bg-grey-300  overflow-y-auto no-scrollbar relative w-full overflow-x-hidden">
        <Header />
        <div className={`lg:p-8 py-8 px-4 ${className}`}>{children}</div>
      </section>
    </main>
  );
};

export default Layout;
