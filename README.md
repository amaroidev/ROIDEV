# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# RoiDev Portfolio

## Free Hosting Options

### 1. Netlify (Recommended)

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

### 2. Vercel

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

### 3. GitHub Pages

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

### 4. Firebase Hosting

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
