import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className=" grid grid-cols-[16rem_1fr] h-full gep-12">
      <SideNavigation />
      <div>{children}</div>
    </div>
  );
}
