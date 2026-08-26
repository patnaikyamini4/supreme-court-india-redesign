interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({
  children,
  className = "",
}: PageContainerProps) {
  return (
    <div
      className={`sc-container py-10 md:py-14 ${className}`}
    >
      {children}
    </div>
  );
}