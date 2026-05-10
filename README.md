# Moments App v3.0 — PWA Setup Guide 🚀

## What You Have
- ✅ Google Login (Supabase Auth)
- ✅ Cloud database — data never lost
- ✅ PWA — installs on Android like a real app
- ✅ Offline support (Service Worker)
- ✅ "Add to Home Screen" install banner

---

## STEP 1 — Enable Google Login in Supabase

1. Go to supabase.com → your project
2. Click Authentication → Providers → Google → Enable
3. Go to console.cloud.google.com:
   - New project → APIs & Services → Credentials
   - Create Credentials → OAuth 2.0 Client ID
   - Application type: Web application
   - Redirect URI: https://xoyjeipjiuradwotlqeh.supabase.co/auth/v1/callback
   - Paste Client ID + Secret into Supabase

---

## STEP 2 — Push to GitHub

1. github.com → New repository → name: moments-app
2. Open github.dev on your phone
3. Upload all these files into the repo

---

## STEP 3 — Deploy on Vercel (FREE)

1. vercel.com → Sign up with GitHub
2. Add New Project → select moments-app
3. Framework: Vite (auto-detected)
4. Click Deploy → 2 minutes → you get a live URL!

---

## STEP 4 — Update Supabase

1. Authentication → URL Configuration
2. Site URL: https://your-app.vercel.app
3. Redirect URLs: add https://your-app.vercel.app

---

## STEP 5 — Install on Realme 6 Pro

1. Open Chrome → go to your Vercel URL
2. Log in with Google
3. Tap the Install banner that appears
4. App is on your home screen! 📱

