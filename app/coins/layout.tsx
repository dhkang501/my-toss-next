import BottomNavigator from '@/components/elements/BottomNavigator';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full">
      {children}
      <BottomNavigator></BottomNavigator>
    </div>
  );
};

export default layout;
