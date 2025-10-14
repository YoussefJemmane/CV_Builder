# 🚀 Quick Start: Deploy to Vercel + Render

The fastest way to get your CV Builder live in the cloud!

---

## ⚡ 5-Minute Deployment Checklist

### ☑️ Before You Start

- [ ] Code is pushed to GitHub
- [ ] You have accounts on:
  - [Vercel.com](https://vercel.com) (Frontend)
  - [Render.com](https://render.com) (Backend)
  - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Database)

---

## 📝 Step-by-Step Deployment

### 1️⃣ Database: MongoDB Atlas (5 minutes)

```
1. Go to MongoDB Atlas → Create free cluster (M0)
2. Database Access → Add database user (save username/password!)
3. Network Access → Allow access from anywhere (0.0.0.0/0)
4. Get connection string:
   mongodb+srv://username:password@cluster.mongodb.net/cv_builder
```

✅ **Save your MongoDB connection string!**

---

### 2️⃣ Backend: Render (10 minutes)

```
1. Render Dashboard → New Web Service
2. Connect your GitHub repo
3. Configure:
   - Name: cv-builder-backend
   - Root Directory: backend
   - Build Command: chmod +x render-build.sh && ./render-build.sh
   - Start Command: npm start
   - Plan: Free

4. Add Environment Variables:
   NODE_VERSION = 18.17.0
   MONGO_URI = [your MongoDB Atlas connection string]
   SECRET = [generate with: openssl rand -base64 32]
   NODE_ENV = production
   PUPPETEER_SKIP_CHROMIUM_DOWNLOAD = true
   PUPPETEER_EXECUTABLE_PATH = /usr/bin/chromium

5. Create Web Service → Wait for deployment
```

✅ **Save your Render URL**: `https://cv-builder-backend-xyz.onrender.com`

---

### 3️⃣ Frontend: Vercel (5 minutes)

```
1. Vercel Dashboard → New Project
2. Import your GitHub repo
3. Configure:
   - Framework: Vite (auto-detected)
   - Root Directory: frontend
   - Build Command: npm run build
   - Output Directory: dist

4. Add Environment Variable:
   VITE_API_URL = [your Render backend URL]

5. Deploy → Wait for deployment
```

✅ **Save your Vercel URL**: `https://cv-builder-xyz.vercel.app`

---

### 4️⃣ Final Step: Connect Frontend & Backend

```
1. Go back to Render Dashboard
2. Click your backend service → Environment tab
3. Add new variable:
   FRONTEND_URL = [your Vercel URL]
4. Save → Service will auto-redeploy
```

---

## ✅ Verify It Works

1. Visit your Vercel URL
2. Register a new account
3. Create a CV
4. Download as PDF

🎉 **Success! Your app is live!**

---

## 📋 Environment Variables Cheat Sheet

### Render (Backend)
```env
NODE_VERSION=18.17.0
PORT=3000
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/cv_builder
SECRET=your-random-secret-here
FRONTEND_URL=https://your-app.vercel.app
NODE_ENV=production
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
```

### Vercel (Frontend)
```env
VITE_API_URL=https://your-backend.onrender.com
```

---

## 🐛 Common Issues

### ❌ PDF Download Fails

**Check Render logs for Puppeteer errors**
```bash
Render Dashboard → Your Service → Logs tab
```

**Solution**: Make sure Chromium is installed via `render-build.sh`

---

### ❌ CORS Errors

**Check environment variables**
- Vercel: `VITE_API_URL` matches Render URL
- Render: `FRONTEND_URL` matches Vercel URL

**Solution**: Update variables and redeploy

---

### ❌ Database Connection Failed

**Check MongoDB Atlas**
- Network access allows 0.0.0.0/0
- Database user credentials are correct
- Connection string has database name: `/cv_builder`

---

### ❌ Render Service Sleeping

**Free tier limitation**: Service spins down after 15 min inactivity

**Solution**: First request takes 30-60 seconds (normal)
Or upgrade to paid tier

---

## 💰 Cost: $0/month

All services on free tier:
- ✅ MongoDB Atlas: M0 Free (512 MB)
- ✅ Render: Free Web Service (750 hours/month)
- ✅ Vercel: Hobby Plan (100 GB bandwidth)

---

## 🔄 Update Your App

**After pushing code to GitHub:**

- **Vercel**: Auto-deploys on git push
- **Render**: Auto-deploys on git push

No manual action needed! 🎉

---

## 📚 Need More Details?

See [CLOUD_DEPLOYMENT.md](CLOUD_DEPLOYMENT.md) for:
- Detailed instructions
- Troubleshooting guide
- Custom domain setup
- Security best practices
- Production optimization

---

## 🎯 Your Live URLs

After deployment, save these:

```
Frontend (Vercel): https://_________________.vercel.app
Backend (Render):  https://_________________.onrender.com
Database (Atlas):  mongodb+srv://__________.mongodb.net/cv_builder
```

---

## ✨ Congratulations!

Your CV Builder is now live and accessible worldwide! 🌍

Share it with your users! 🚀
