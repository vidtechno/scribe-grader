import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import { LoadingScreen } from "@/components/LoadingScreen";
import { AIMentor } from "@/components/AIMentor";
import { BottomNav } from "@/components/BottomNav";
import { Announcements } from "@/components/Announcements";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import AuthCallback from "./pages/AuthCallback";
import Dashboard from "./pages/Dashboard";
import Exam from "./pages/Exam";
import Result from "./pages/Result";
import Essays from "./pages/Essays";
import Leaderboard from "./pages/Leaderboard";
import Admin from "./pages/Admin";
import Speaking from "./pages/Speaking";
import Writing from "./pages/Writing";
import SpeakingResult from "./pages/SpeakingResult";
import SpeakingHistory from "./pages/SpeakingHistory";
import Drafts from "./pages/Drafts";
import Profile from "./pages/Profile";
import MockTestDashboard from "./pages/MockTestDashboard";
import MockTestExam from "./pages/MockTestExam";
import MockTestThankYou from "./pages/MockTestThankYou";
import MockTestResult from "./pages/MockTestResult";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return <LoadingScreen />;
  if (!user) return <Navigate to="/auth" replace />;
  return <>{children}</>;
}

function AuthRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return <LoadingScreen />;
  if (user) return <Navigate to="/dashboard" replace />;
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

  return (
    <>
      <ScrollToTop />
      <Announcements />
      <Routes>
        <Route path="/" element={<PublicRoute><Index /></PublicRoute>} />
        <Route path="/auth" element={<AuthRoute><Auth /></AuthRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/exam" element={<ProtectedRoute><Exam /></ProtectedRoute>} />
        <Route path="/writing" element={<ProtectedRoute><Writing /></ProtectedRoute>} />
        <Route path="/result/:id" element={<ProtectedRoute><Result /></ProtectedRoute>} />
        <Route path="/essays" element={<ProtectedRoute><Essays /></ProtectedRoute>} />
        <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
        <Route path="/speaking" element={<ProtectedRoute><Speaking /></ProtectedRoute>} />
        <Route path="/speaking-result/:id" element={<ProtectedRoute><SpeakingResult /></ProtectedRoute>} />
        <Route path="/speaking-history" element={<ProtectedRoute><SpeakingHistory /></ProtectedRoute>} />
        <Route path="/drafts" element={<ProtectedRoute><Drafts /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/mock-test" element={<ProtectedRoute><MockTestDashboard /></ProtectedRoute>} />
        <Route path="/mock-test/exam/:id" element={<ProtectedRoute><MockTestExam /></ProtectedRoute>} />
        <Route path="/mock-test/thank-you/:id" element={<ProtectedRoute><MockTestThankYou /></ProtectedRoute>} />
        <Route path="/mock-test/result/:id" element={<ProtectedRoute><MockTestResult /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <AIMentor externalOpen={mentorOpen} onExternalOpenChange={setMentorOpen} />
      <BottomNav onMentorClick={() => setMentorOpen(true)} />
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
