import logo from '@/assets/images/vgomap-logo-full.png';
import { useAuthContext } from '@/hooks';
import { PATHS } from '@/routes/paths';

interface NavBarItem {
  key: string;
  label: string;
  navigate?: string;
  public: boolean;
}

export default function Header() {
  const { isAuthenticated } = useAuthContext();

  const navBar: NavBarItem[] = [
    // {
    //   key: 'about-us',
    //   label: 'About us',
    //   navigate: PATHS.ABOUT_US,
    //   public: true,
    // },
  ];

  return (
    <div className="flex p-1 items-center justify-between">
      <img src={logo} className="h-12" />
      <div className="flex gap-3">
        {navBar.map(
          (item) =>
            item.public && (
              <div
                key={item.key}
                className="flex items-center h-fit p-2 gap-1 text-secondary font-bold cursor-pointer"
              >
                <a href={item.navigate}>{item.label}</a>
              </div>
            )
        )}
      </div>
    </div>
  );
}
