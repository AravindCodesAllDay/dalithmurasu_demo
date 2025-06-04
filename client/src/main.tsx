import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./i18n";
import "./index.css";

import { ThemeProvider } from "./components/theme-context";

import Layout from "./pages/Layout";
import Settings from "./pages/settings/Settings";

import Bookmark from "./pages/bookmarks/Bookmarks";
import Contact from "./pages/contact/Contact";
import Editorial from "./pages/editorials/Editorial";
import Editorials from "./pages/editorials/Editorials";
import NewsHud from "./pages/home/NewsHud";
import Interview from "./pages/interview/Interview";
import InterviewSession from "./pages/interview/InterviewSession";
import InterviewSessions from "./pages/interview/InterviewSessions";
import Notifications from "./pages/notifications/Notifications";
import Poem from "./pages/poems/Poem";
import Poems from "./pages/poems/Poems";
import PremiumArticle from "./pages/premium_articles/PremiumArticle";
import PremiumArticles from "./pages/premium_articles/PremiumArticles";
import RecentPosts from "./pages/recent_posts/RecentPosts";
import Series from "./pages/series/Series";
import Preferences from "./pages/settings/Preferences";
import Profile from "./pages/settings/Profile";
import BabasahebSpeaks from "./pages/speakers/BabasahebSpeaks";
import BabasahebSpeaksDetail from "./pages/speakers/BabasahebSpeaksDetail";
import PeriyarSpeaks from "./pages/speakers/PeriyarSpeaks";
import PeriyarSpeaksDetail from "./pages/speakers/PeriyarSpeaksDetail";

// Admin auth
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/auth/Dashboard";
import Login from "./pages/auth/Login";

// Admin Sidebar
import LayoutAdmin from "./pages/LayoutAdmin";
import AddArticle from "./pages/premium_articles/AddArticle";
import AdminPremiumArticles from "./pages/premium_articles/PremiumArticles";
import AdminRecentPosts from "./pages/recent_posts/AdminRecentPosts";

// 👇 Import Interview Admin Pages
import AddInterview from "./pages/interview/AddInterview";
import AdminInterviews from "./pages/interview/AdminInterviews";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<NewsHud />} />
            <Route path="recent_posts" element={<RecentPosts />} />
            <Route path="premium_articles" element={<PremiumArticles />} />
            <Route path="premium_articles/:id" element={<PremiumArticle />} />
            <Route path="editorials" element={<Editorials />} />
            <Route path="editorial/:id" element={<Editorial />} />
            <Route path="poems" element={<Poems />} />
            <Route path="poem/:id" element={<Poem />} />
            <Route path="series" element={<Series />} />
            <Route path="babasaheb_speaks" element={<BabasahebSpeaks />} />
            <Route path="babasaheb_speaks/:id" element={<BabasahebSpeaksDetail />} />
            <Route path="periyar_speaks" element={<PeriyarSpeaks />} />
            <Route path="periyar_speaks/:id" element={<PeriyarSpeaksDetail />} />
            <Route path="interviews" element={<Interview />} />
            <Route path="interviews/:interviewId" element={<InterviewSessions />} />
            <Route path="interviews/:interviewId/:partId" element={<InterviewSession />} />
            <Route path="contact" element={<Contact />} />
            <Route path="marketplace_books_more" element={<Profile />} />
            <Route path="dalit_murasu_archive" element={<Profile />} />
            <Route path="blue_thoughts" element={<Profile />} />
            <Route path="book_review" element={<Profile />} />
            <Route path="settings" element={<Settings />}>
              <Route path="account" element={<Profile />} />
              <Route path="preferences" element={<Preferences />} />
            </Route>
            <Route path="cart" element={<Profile />} />
            <Route path="bookmarks" element={<Bookmark />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>

          <Route path="/admin" element={<LayoutAdmin />}>
            <Route path="recent-posts" element={<AdminRecentPosts />} />
            <Route path="premium-articles" element={<AdminPremiumArticles />} />
            <Route path="premium-articles/create" element={<AddArticle />} />
            <Route path="interview" element={<AdminInterviews />} />
            <Route path="interview/create" element={<AddInterview />} />
          </Route>

          <Route path="/auth/login" element={<Login />} />
          <Route path="/admin/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
