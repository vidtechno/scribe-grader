import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import { LoadingScreen } from "@/components/LoadingScreen";
import { BottomNav } from "@/components/BottomNav";
import { Suspense, lazy, useState, useEffect } from "react";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
const AuthCallback = lazy(() => import("./pages/AuthCallback"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Exam = lazy(() => import("./pages/Exam"));
const Result = lazy(() => import("./pages/Result"));
const Essays = lazy(() => import("./pages/Essays"));
const Leaderboard = lazy(() => import("./pages/Leaderboard"));
const Admin = lazy(() => import("./pages/Admin"));
const Speaking = lazy(() => import("./pages/Speaking"));
const Writing = lazy(() => import("./pages/Writing"));
const SpeakingResult = lazy(() => import("./pages/SpeakingResult"));
const SpeakingHistory = lazy(() => import("./pages/SpeakingHistory"));
const Drafts = lazy(() => import("./pages/Drafts"));
const AdminBlogEditor = lazy(() => import("./pages/AdminBlogEditor"));
const Referral = lazy(() => import("./pages/Referral"));
const Profile = lazy(() => import("./pages/Profile"));
const MockTestDashboard = lazy(() => import("./pages/MockTestDashboard"));
const MockTestExam = lazy(() => import("./pages/MockTestExam"));
const MockTestThankYou = lazy(() => import("./pages/MockTestThankYou"));
const MockTestResult = lazy(() => import("./pages/MockTestResult"));
const NotFound = lazy(() => import("./pages/NotFound"));
const GrammarTest = lazy(() => import("./pages/GrammarTest"));
import { safeReturnTo } from "./lib/returnTo";

const AIMentor = lazy(() => import("@/components/AIMentor").then(m => ({ default: m.AIMentor })));
const Announcements = lazy(() => import("@/components/Announcements").then(m => ({ default: m.Announcements })));

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <LoadingScreen />;
  if (!user) return <Navigate to={`/auth?next=${encodeURIComponent(safeReturnTo(location.pathname))}`} replace />;
  return <>{children}</>;
}

function AuthRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <LoadingScreen />;
  if (user) return <Navigate to={safeReturnTo(new URLSearchParams(location.search).get('next'))} replace />;
  return <>{children}</>;
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return <LoadingScreen />;
  if (user) return <Navigate to="/dashboard" replace />;
  return <>{children}</>;
}

function AppRoutes() {
  const [mentorOpen, setMentorOpen] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <ScrollToTop />
      {user && <Suspense fallback={null}><Announcements /></Suspense>}
      <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<PublicRoute><Index /></PublicRoute>} />
        <Route path="/auth" element={<AuthRoute><Auth /></AuthRoute>} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/vocabulary" element={<Navigate to="/dashboard" replace />} />
        <Route path="/grammar-test" element={<ProtectedRoute><GrammarTest /></ProtectedRoute>} />
        <Route path="/exam" element={<ProtectedRoute><Exam /></ProtectedRoute>} />
        <Route path="/writing" element={<ProtectedRoute><Writing /></ProtectedRoute>} />
        <Route path="/result/:id" element={<ProtectedRoute><Result /></ProtectedRoute>} />
        <Route path="/essays" element={<ProtectedRoute><Essays /></ProtectedRoute>} />
        <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
        <Route path="/speaking" element={<ProtectedRoute><Speaking /></ProtectedRoute>} />
        <Route path="/speaking-result/:id" element={<ProtectedRoute><SpeakingResult /></ProtectedRoute>} />
        <Route path="/speaking-history" element={<ProtectedRoute><SpeakingHistory /></ProtectedRoute>} />
        <Route path="/drafts" element={<ProtectedRoute><Drafts /></ProtectedRoute>} />
        <Route path="/referral" element={<ProtectedRoute><Referral /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/mock-test" element={<ProtectedRoute><MockTestDashboard /></ProtectedRoute>} />
        <Route path="/mock-test/exam/:id" element={<ProtectedRoute><MockTestExam /></ProtectedRoute>} />
        <Route path="/mock-test/thank-you/:id" element={<ProtectedRoute><MockTestThankYou /></ProtectedRoute>} />
        <Route path="/mock-test/result/:id" element={<ProtectedRoute><MockTestResult /></ProtectedRoute>} />
        <Route path="/admin/blog/:id" element={<ProtectedRoute><AdminBlogEditor /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
      {user && <Suspense fallback={null}><AIMentor externalOpen={mentorOpen} onExternalOpenChange={setMentorOpen} /></Suspense>}
      <BottomNav />
    </>
  );
}

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
