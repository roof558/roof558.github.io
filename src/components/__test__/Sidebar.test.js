import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar, { SidebarItem } from '../Sidebar';
// import { LayoutDashboard } from 'lucide-react';

//Simple text check on the Sidebar
it('renders Sidebar List', () => {
  render(<Sidebar />);
  const sidbarList = screen.getByRole("list");
  expect(sidbarList).toBeInTheDocument();
});

it('renders SidebarItem given text', () => {
    render(
        <BrowserRouter>
            <SidebarItem text={"Home"} />
        </BrowserRouter>
    );
    const sidbarItemText = screen.getByText("Home");
    expect(sidbarItemText).toBeInTheDocument();
});
  
// it('renders SidebarItem with icon', () => {
//     render(
//       <BrowserRouter>
//         <SidebarItem icon={<LayoutDashboard size={20} />} />
//       </BrowserRouter>
//     );
//     const dashboardIcon = screen.getByRole('img', { name: /dashboard/i });
//     expect(dashboardIcon).toBeInTheDocument();
//   });