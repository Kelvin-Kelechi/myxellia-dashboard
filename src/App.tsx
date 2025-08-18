import { useState } from "react";
import { Dashboard } from "./pages/Dashboard";
import { Header } from "./components/layout/Header";
import { Navigation } from "./components/layout/Navigation";
import { NAVIGATION_ITEMS } from "./utils/constants";
import type { NavigationItem } from "./types";

function App() {
  const [activeItem, setActiveItem] = useState<string>("dashboard");
  const [navigationItems, setNavigationItems] = useState(NAVIGATION_ITEMS);

  const handleNavigationClick = (item: NavigationItem) => {
    setActiveItem(item.id);
    setNavigationItems((prev) =>
      prev.map((navItem) => ({
        ...navItem,
        active: navItem.id === item.id,
      }))
    );
  };

  const user = {
    name: "Ahmed",
    initials: "D", 
  };

  const renderPage = () => {
    switch (activeItem) {
      case "dashboard":
        return <Dashboard />;
      case "listings":
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-semibold text-gray-900">Listings</h1>
            <p className="text-gray-600 mt-2">
              Listings page content coming soon...
            </p>
          </div>
        );
      case "users":
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
            <p className="text-gray-600 mt-2">
              Users page content coming soon...
            </p>
          </div>
        );
      case "request":
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-semibold text-gray-900">Request</h1>
            <p className="text-gray-600 mt-2">
              Request page content coming soon...
            </p>
          </div>
        );
      case "applications":
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-semibold text-gray-900">
              Applications
            </h1>
            <p className="text-gray-600 mt-2">
              Applications page content coming soon...
            </p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
        <Header user={user} />
        <Navigation
          items={navigationItems}
          onItemClick={handleNavigationClick}
        />
      </div>
      <div className="pt-[150px]"> {renderPage()}</div>
    </div>
  );
}

export default App;
