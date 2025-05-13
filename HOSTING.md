# Hosting Options for RoiDev Portfolio

This guide provides various free options for hosting your React portfolio online.

## 1. Netlify (Recommended)

1. Create an account at [Netlify.com](https://netlify.com)
2. Install Netlify CLI (optional):
   ```
   npm install netlify-cli -g
   ```
3. Build your site:
   ```
   npm run build
   ```
4. Deploy via drag-and-drop:
   - Go to [Netlify.com](https://netlify.com) dashboard
   - Drag and drop your `build` folder to the Netlify dashboard
   - Or use CLI: `netlify deploy --prod`
5. Your site will be live in seconds at a Netlify subdomain
6. To set up continuous deployment:
   - Connect your GitHub repository
   - Select the repository
   - Configure build settings: build command `npm run build`, publish directory `build`

## 2. Vercel (Detailed Steps)

### Method 1: Using the Vercel Dashboard (Recommended for Beginners)

1. **Create a Vercel Account**
   - Go to [Vercel.com](https://vercel.com) and sign up with GitHub, GitLab, or email
   - Verify your email if needed

2. **Connect Your GitHub Repository**
   - Click on "Add New" → "Project"
   - Select "Continue with GitHub" and authorize Vercel
   - Find and select your portfolio repository (ROIDEV)

3. **Configure Project Settings**
   - Framework Preset: Select "Create React App"
   - Build and Output Settings:
     - Build Command: `npm run build`
     - Output Directory: `build`
     - Install Command: `npm install`
   - Environment Variables: Add any if needed (usually none for simple portfolios)
   - Click "Deploy"

4. **Wait for Deployment**
   - Vercel will build and deploy your site (typically takes 1-2 minutes)
   - You'll get a success notification with your site URL (e.g., roidev.vercel.app)

5. **Optional: Set Up Custom Domain**
   - In your project dashboard, click "Settings" → "Domains"
   - Add your custom domain and follow the DNS verification steps

### Method 2: Using Vercel CLI (For Developers)

1. **Install Vercel CLI globally**
   ```
   npm install -g vercel
   ```

2. **Navigate to your project directory**
   ```
   cd C:\Users\USER\Downloads\MY PORTFOLIO\my-portfolio
   ```

3. **Login to Vercel from the CLI**
   ```
   vercel login
   ```
   - Follow the authentication instructions (email link or browser)

4. **Deploy Your Site**
   ```
   vercel
   ```
   - You'll be asked a series of questions:
     - Set up and deploy? Yes
     - Which scope? Select your account
     - Link to existing project? No (for first-time deployment)
     - Project name: roidev (or your preferred name)
     - Framework preset: Create React App
     - Directory: ./ (current directory)
     - Override settings? No (use defaults)

5. **For Production Deployment**
   ```
   vercel --prod
   ```

### Completing Your Vercel Deployment

After running `vercel` and seeing the "Set up and deploy" prompt:

1. **Type `Y` and press Enter** to confirm

2. **Answer the configuration questions**:
   - Which scope do you want to deploy to? [Select your account/team]
   - Link to existing project? [Select `n` for new project]
   - What's your project name? [Press Enter for default or type your preferred name]
   - In which directory is your code located? [Press Enter for current directory]
   - Want to override the settings? [Press `n` for default]
   - Want to modify these settings? [Press `n` for default]

3. **Wait for deployment** (usually takes 1-2 minutes)
   - Vercel will show build progress in your terminal
   - Upon success, you'll see a deployment URL (e.g., https://roidev.vercel.app)

4. **Verify your site**
   - Vercel will automatically open your site in the browser, or you can copy the URL
   - Check that all pages and assets load correctly

5. **Additional options after deployment**:
   - Run `vercel --prod` to deploy to production
   - Visit your Vercel dashboard to configure more options
   - Set up custom domains in the project settings

6. **Future updates**:
   - Simply run `vercel` again to deploy updates
   - Or connect to GitHub for automatic deployments

### Your Deployed Portfolio

Based on your terminal output, your portfolio is now live at:

**URL: https://my-portfolio-ozzrlrnig-roidevs-projects.vercel.app**

This is your production URL that appears in the terminal after "✅ Production:". You can visit this link to see your deployed portfolio.

You can also access your project dashboard at:
https://vercel.com/roidevs-projects/my-portfolio/settings

If you want to update your site in the future, simply run:
```
vercel --prod
```

### Troubleshooting Vercel Deployments

- **Build Errors**: Check the build logs in the Vercel dashboard
- **Blank Page**: Ensure your homepage URL in package.json is correctly set or removed
- **Images Not Loading**: Use relative paths or import images directly in your components
- **Environment Variables**: Add any required environment variables in the Vercel project settings

### Fixing a Blank/White Screen on Vercel Deployment

If your deployed site at https://my-portfolio-ozzrlrnig-roidevs-projects.vercel.app appears blank (white screen), try these fixes:

1. **Remove GitHub Pages homepage setting**:
   ```json
   // In package.json, remove or comment out:
   // "homepage": "https://FCM4100819823.github.io/ROIDEV",
   ```

2. **Fix asset paths**: Update your code to use relative paths or proper PUBLIC_URL references:
   ```javascript
   // Instead of:
   <img src="/images/ROIDEV.png" />
   
   // Use:
   <img src={`${process.env.PUBLIC_URL}/images/ROIDEV.png`} />
   ```

3. **Add a vercel.json configuration file**:
   ```json
   // filepath: c:\Users\USER\Downloads\MY PORTFOLIO\my-portfolio\vercel.json
   {
     "routes": [
       { "src": "/static/(.*)", "dest": "/static/$1" },
       { "src": "/images/(.*)", "dest": "/images/$1" },
       { "src": "/favicon.ico", "dest": "/favicon.ico" },
       { "src": "/(.*)", "dest": "/index.html" }
     ]
   }
   ```

4. **Check build logs**: Look at the build logs in your Vercel dashboard for errors.

5. **Try a simple index.html**: Test if the server is working by deploying a simple HTML file:
   ```html
   <!-- filepath: c:\Users\USER\Downloads\MY PORTFOLIO\my-portfolio\public\test.html -->
   <!DOCTYPE html>
   <html>
     <head>
       <title>Test Page</title>
     </head>
     <body>
       <h1>Test Page</h1>
       <p>If you can see this, the server is working.</p>
     </body>
   </html>
   ```
   Then visit: https://my-portfolio-ozzrlrnig-roidevs-projects.vercel.app/test.html

6. **Redeploy after changes**:
   ```
   vercel --prod
   ```

## 3. GitHub Pages

1. Install gh-pages package (if not already installed):
   ```
   npm install gh-pages --save-dev
   ```
2. Update package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```
3. Deploy:
   ```
   npm run deploy
   ```

## 4. Firebase Hosting

1. Create a Firebase account
2. Install Firebase Tools:
   ```
   npm install -g firebase-tools
   ```
3. Login and initialize:
   ```
   firebase login
   firebase init
   ```
4. Select Hosting and set public directory to `build`
5. Deploy:
   ```
   npm run build
   firebase deploy
   ```

## Troubleshooting Common Hosting Issues

### Images Not Loading
- Use relative paths or process.env.PUBLIC_URL for images
- Ensure image files exist in the correct folders
- Check case-sensitivity of filenames

### Blank Page After Deployment
- Make sure your package.json has the correct homepage URL
- Add a .nojekyll file in the public folder for GitHub Pages
- Check browser console for errors
