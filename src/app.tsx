import { AttendeeList } from "./components/attendee-list/attendee-list";
import { Header } from "./components/header/header";

export function App() {
  return (
    <div className="flex flex-col gap-2 max-w-7xl mx-auto py-5">
      <Header />
      <AttendeeList />
    </div>
  );
}
