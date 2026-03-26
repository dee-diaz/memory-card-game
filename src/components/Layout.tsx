export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-[url(/bg-image.webp)] bg-no-repeat bg-center bg-cover min-h-screen flex flex-col justify-between px-4 py-4 before:absolute before:inset-0 before:w-full before:h-full before:bg-(--clr-overlay)">
      {children}
    </div>
  );
}
