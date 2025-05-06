# Deployment Guide for Free Fire Tournament Registration

## Frontend Deployment to GitHub Pages

1. Create a new GitHub repository:
   - Go to https://github.com/new
   - Enter a repository name (e.g., free-fire-tournament-frontend)
   - Set it to Public
   - Click "Create repository"

2. Initialize git in your project directory (if not already):
   ```bash
   cd free-fire-tournament-registration
   git init
   git add .
   git commit -m "Initial commit for frontend"
   ```

3. Add the GitHub remote and push your code:
   ```bash
   git remote add origin https://github.com/your-username/free-fire-tournament-frontend.git
   git branch -M main
   git push -u origin main
   ```

4. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click on "Settings" > "Pages"
   - Under "Source", select "main" branch and root folder
   - Click "Save"
   - Your site will be available at: https://your-username.github.io/free-fire-tournament-frontend/

5. Update your frontend code to use the backend API URL after backend deployment.

---

## Backend Deployment to Render.com

1. Create a free account on https://render.com

2. Create a new Web Service:
   - Connect your GitHub account and select the repository containing your backend code (server.js and package.json)
   - Set the environment to Node
   - Set the build command to `npm install`
   - Set the start command to `node server.js`
   - Choose a free plan and deploy

3. After deployment, Render will provide a public URL for your backend API.

4. Update your frontend code to use this backend URL for API calls.

---

## Notes

- Make sure to update the API URLs in your frontend JavaScript to point to the deployed backend URL.
- Both GitHub Pages and Render.com offer free tiers suitable for small projects.
- For any issues, consult the official documentation of GitHub Pages and Render.com.

---

If you need help with any step, feel free to ask!
