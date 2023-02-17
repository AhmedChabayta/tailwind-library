export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export type GridItemProps = {
  children: React.ReactNode;
  className?: string;
};
