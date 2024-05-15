export const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-white rounded-2xl w-[438px] shadow-b2b-shadow p-7 space-y-4'>
      {children}
    </div>
  );
};
