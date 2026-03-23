import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import PrivacyPage from './pages/PrivacyPage';
import VoorwaardenPage from './pages/VoorwaardenPage';
import PrijzenPage from './pages/PrijzenPage';
import ProtectedRoute from './components/ProtectedRoute';
import AccountLayout from './pages/account/AccountLayout';
import AccountOverviewPage from './pages/account/AccountOverviewPage';
import OrdersPage from './pages/account/OrdersPage';
import SubscriptionsPage from './pages/account/SubscriptionsPage';
import ProfilePage from './pages/account/ProfilePage';
import AccountShopPage from './pages/account/AccountShopPage';
import ScrollToTop from './components/ScrollToTop';

const pageVariants: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25, ease: 'easeIn' } },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Routes location={location}>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="over-ons" element={<AboutPage />} />
            <Route path="diensten" element={<ServicesPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="voorwaarden" element={<VoorwaardenPage />} />
            <Route path="prijzen" element={<PrijzenPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/account" element={<AccountLayout />}>
              <Route index element={<AccountOverviewPage />} />
              <Route path="orders" element={<OrdersPage />} />
              <Route path="subscriptions" element={<SubscriptionsPage />} />
              <Route path="shop" element={<AccountShopPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
          </Route>
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
