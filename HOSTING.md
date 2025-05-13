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

## 2. Vercel

1. Create an account at [Vercel.com](https://vercel.com)
2. Install Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Deploy from your project directory:
   ```
   vercel login
   vercel
   ```
4. Follow the interactive prompts
5. Connect your GitHub repo for continuous deployment

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
