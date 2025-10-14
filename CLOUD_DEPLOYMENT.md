# CV Builder - Cloud Deployment Guide (Vercel + Render)

This guide will help you deploy the CV Builder application to the cloud using:
- **Vercel** for the frontend (React app)
- **Render** for the backend (Node.js API)
- **MongoDB Atlas** for the database (free tier)

---

## 📋 Prerequisites

1. **GitHub Account** - Your code should be in a GitHub repository
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
3. **Render Account** - Sign up at [render.com](https://render.com)
4. **MongoDB Atlas Account** - Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

---

## 🗄️ Step 1: Setup MongoDB Atlas

### 1.1 Create a Free Cluster

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Click **"Build a Database"**
4. Select **"M0 Free"** tier
5. Choose your preferred cloud provider and region
6. Click **"Create Cluster"**

### 1.2 Create Database User

1. Go to **Database Access** in the left sidebar
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Set username and password (save these!)
5. Set user privileges to **"Read and write to any database"**
6. Click **"Add User"**

### 1.3 Configure Network Access

1. Go to **Network Access** in the left sidebar
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (0.0.0.0/0)
   - Note: For production, you should restrict this to Render's IPs
4. Click **"Confirm"**

### 1.4 Get Connection String

1. Go to **Database** in the left sidebar
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Copy the connection string (looks like):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<username>` and `<password>` with your database user credentials
6. Add database name: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/cv_builder?retryWrites=true&w=majority`

---

## 🚀 Step 2: Deploy Backend to Render

### 2.1 Connect GitHub Repository

1. Log in to [Render](https://render.com)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub account if not already connected
4. Select your CV_Builder repository
5. Click **"Connect"**

### 2.2 Configure Web Service

**Basic Settings:**
- **Name**: `cv-builder-backend` (or your preferred name)
- **Region**: Choose closest to your users
- **Branch**: `main` (or your default branch)
- **Root Directory**: `backend`
- **Runtime**: `Node`
- **Build Command**: `chmod +x render-build.sh && ./render-build.sh`
- **Start Command**: `npm start`

**Instance Type:**
- Select **"Free"** tier

### 2.3 Add Environment Variables

Click **"Advanced"** and add these environment variables:

| Key | Value | Notes |
|-----|-------|-------|
| `NODE_VERSION` | `18.17.0` | Node.js version |
| `PORT` | `3000` | Port (Render sets this automatically) |
| `MONGO_URI` | `mongodb+srv://...` | Your MongoDB Atlas connection string |
| `SECRET` | `your-strong-secret-here` | Generate with: `openssl rand -base64 32` |
| `NODE_ENV` | `production` | Environment mode |
| `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD` | `true` | Use system Chromium |
| `PUPPETEER_EXECUTABLE_PATH` | `/usr/bin/chromium` | Path to Chromium |

**Important:** Leave `FRONTEND_URL` empty for now - we'll add it after deploying the frontend.

### 2.4 Deploy

1. Click **"Create Web Service"**
2. Wait for the deployment to complete (this may take 5-10 minutes)
3. Once deployed, you'll get a URL like: `https://cv-builder-backend.onrender.com`
4. **Save this URL** - you'll need it for the frontend

### 2.5 Test Backend

Visit: `https://your-backend-url.onrender.com/api/user`

You should see a response (might be an error about authentication, which is normal).

---

## 🎨 Step 3: Deploy Frontend to Vercel

### 3.1 Connect GitHub Repository

1. Log in to [Vercel](https://vercel.com)
2. Click **"Add New..."** → **"Project"**
3. Import your CV_Builder repository
4. Click **"Import"**

### 3.2 Configure Project

**Framework Preset:**
- Vercel should auto-detect **Vite**

**Root Directory:**
- Click **"Edit"** next to Root Directory
- Select `frontend`
- Click **"Continue"**

**Build Settings:**
- Build Command: `npm run build` (should be auto-filled)
- Output Directory: `dist` (should be auto-filled)
- Install Command: `npm install` (should be auto-filled)

### 3.3 Add Environment Variables

Click **"Environment Variables"** and add:

| Name | Value |
|------|-------|
| `VITE_API_URL` | `https://your-backend-url.onrender.com` |

Replace with your actual Render backend URL from Step 2.4.

### 3.4 Deploy

1. Click **"Deploy"**
2. Wait for deployment (usually 1-2 minutes)
3. Once deployed, you'll get a URL like: `https://cv-builder-xyz.vercel.app`
4. **Save this URL**

---

## 🔄 Step 4: Update Backend with Frontend URL

### 4.1 Add FRONTEND_URL to Render

1. Go back to your Render dashboard
2. Click on your backend service
3. Go to **"Environment"** tab
4. Add new environment variable:
   - **Key**: `FRONTEND_URL`
   - **Value**: `https://your-vercel-app.vercel.app` (from Step 3.4)
5. Click **"Save Changes"**
6. The service will automatically redeploy

---

## ✅ Step 5: Verify Deployment

### 5.1 Test Frontend

1. Visit your Vercel URL: `https://your-vercel-app.vercel.app`
2. You should see the CV Builder homepage
3. Try registering a new account
4. Try creating a CV

### 5.2 Test PDF Generation

1. Create a resume
2. Select a template
3. Try downloading the PDF
4. If it fails, check Render logs for Puppeteer errors

### 5.3 Check Logs

**Render Logs:**
1. Go to Render dashboard
2. Click your backend service
3. Click **"Logs"** tab
4. Look for any errors

**Vercel Logs:**
1. Go to Vercel dashboard
2. Click your project
3. Click **"Deployments"**
4. Click on the latest deployment
5. Click **"View Function Logs"**

---

## 🔧 Troubleshooting

### PDF Generation Fails on Render

**Problem:** Puppeteer/Chromium not working

**Solution 1:** Update `render-build.sh` to use correct Chromium path
```bash
# Find Chromium location
which chromium || which chromium-browser
```

**Solution 2:** Use puppeteer with bundled Chromium (larger slug size)

Update `backend/render.yaml`:
```yaml
envVars:
  - key: PUPPETEER_SKIP_CHROMIUM_DOWNLOAD
    value: false  # Changed from true
  # Remove PUPPETEER_EXECUTABLE_PATH
```

And update `backend/package.json`:
```json
"dependencies": {
  "puppeteer": "^24.2.0"  // Instead of puppeteer-core
}
```

### CORS Errors

**Problem:** Frontend can't connect to backend

**Solution:** Verify `VITE_API_URL` is set correctly in Vercel

1. Go to Vercel dashboard
2. Project → Settings → Environment Variables
3. Verify `VITE_API_URL` matches your Render backend URL
4. Redeploy if you made changes

### MongoDB Connection Fails

**Problem:** Backend can't connect to MongoDB Atlas

**Solution:**
1. Verify connection string in Render environment variables
2. Check MongoDB Atlas network access allows 0.0.0.0/0
3. Verify database user credentials are correct
4. Check Render logs for specific error messages

### Render Free Tier Limitations

**Problem:** Service spins down after inactivity

**Solution:**
- Render free tier spins down after 15 minutes of inactivity
- First request after spin-down may take 30-60 seconds
- Consider upgrading to paid tier for production use
- Or use a service like [UptimeRobot](https://uptimerobot.com) to ping your service every 15 minutes

---

## 💰 Cost Breakdown

| Service | Plan | Cost |
|---------|------|------|
| MongoDB Atlas | M0 Free | $0/month |
| Render Backend | Free | $0/month |
| Vercel Frontend | Hobby | $0/month |
| **Total** | | **$0/month** |

**Limitations of Free Tier:**
- Render: Service spins down after 15 min inactivity, 750 hours/month
- MongoDB Atlas: 512 MB storage, shared RAM
- Vercel: 100 GB bandwidth/month, serverless function execution limits

---

## 📊 Custom Domain (Optional)

### For Vercel (Frontend)

1. Go to Vercel dashboard → Project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update `FRONTEND_URL` in Render environment variables

### For Render (Backend)

1. Upgrade to paid plan (custom domains not available on free tier)
2. Go to Settings → Custom Domain
3. Add your domain
4. Configure DNS
5. Update `VITE_API_URL` in Vercel

---

## 🔄 Redeployment

### When You Update Code

**Frontend (Vercel):**
- Push to GitHub → Automatic deployment
- Or manually trigger from Vercel dashboard

**Backend (Render):**
- Push to GitHub → Automatic deployment
- Or click "Manual Deploy" → "Deploy latest commit"

### When You Update Environment Variables

**Vercel:**
1. Update environment variables
2. Redeploy from Deployments tab

**Render:**
1. Update environment variables
2. Service automatically redeploys

---

## 📝 Environment Variables Summary

### Render (Backend)

```env
NODE_VERSION=18.17.0
PORT=3000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/cv_builder
SECRET=your-strong-random-secret
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

## 🎯 Next Steps After Deployment

1. **Test All Features**: Create account, build CV, download PDF
2. **Monitor Performance**: Check Render and Vercel dashboards
3. **Set Up Domain**: Configure custom domain if desired
4. **Enable Analytics**: Add Vercel Analytics or Google Analytics
5. **Backup Database**: Set up MongoDB Atlas backup schedule
6. **Update README**: Add your live URLs

---

## 🔒 Security Best Practices

1. **Use Strong Secrets**: Generate with `openssl rand -base64 32`
2. **Enable HTTPS**: Both Vercel and Render provide free SSL
3. **Restrict MongoDB Access**: Use Render's IP addresses instead of 0.0.0.0/0
4. **Environment Variables**: Never commit .env files to Git
5. **CORS**: Configure properly in backend if using custom domains
6. **Rate Limiting**: Add rate limiting middleware in production

---

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Render Docs**: https://render.com/docs
- **MongoDB Atlas Docs**: https://docs.atlas.mongodb.com
- **Puppeteer on Render**: https://render.com/docs/web-services#puppeteer

---

## ✨ Success!

Your CV Builder is now live in the cloud! 🎉

- Frontend: `https://your-app.vercel.app`
- Backend: `https://your-backend.onrender.com`
- Database: MongoDB Atlas Cloud

Share your creation with the world! 🚀
