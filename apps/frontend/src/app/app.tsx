// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
// import NxWelcome from './nx-welcome';
import BookingMain from './components/booking/bookingMain/bookingMain';
import DateTime from './components/booking/dateTime/dateTime';
import { Route, Routes, Link, RouteProps } from 'react-router-dom';
import BookingHeader from './components/booking/bookingHeader/bookingHeader';

export function App() {
  return (
    <>
      <BookingHeader />
      <Routes>
        <Route path="/book" element={<BookingMain />} />
        <Route path="/book/:id" element={<DateTime />} />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
