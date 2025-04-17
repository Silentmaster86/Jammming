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


# 🎵 Spotify Playlist Creator

A React-based web app that allows users to **search for songs**, **create custom playlists**, and **save them directly to their Spotify accounts**.

![Spotify App Screenshot](./preview.png) <!-- Optional preview image if you have one -->

---

## 🚀 Features

- 🔍 Search tracks from Spotify’s vast music library
- ➕ Add and remove songs from your playlist
- ✏️ Name your playlist
- 💾 Save your playlist directly to your Spotify account
- 🎧 Built with React, Styled Components, and the Spotify Web API

---

## 🧪 Live Demo

🌐 [Launch the app](https://silent86.netlify.app) or 
🌐 [Launch the app](https://silent86.surge.sh)
> ⚠️ Only pre-approved Spotify users can use this app due to API restrictions (see below).

---

## 🛠️ Tech Stack

- **React** – Functional components, hooks
- **Spotify Web API** – For search and playlist creation
- **Styled Components** – For styling
- **Netlify** – Deployed frontend

---

## 🔐 Authorization & Access

This app uses Spotify’s OAuth2 flow and is currently running in **development mode**, which means:

> Only users added manually in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) can access the app.

### 🧾 Steps to Use:
1. **Request Access**  
   Contact me to be added as an authorized user in the Spotify developer app settings.
2. **Log in with Spotify**  
   After clicking "Search" or any action requiring access, you’ll be redirected to Spotify’s login/consent screen.
3. **Enjoy!**  
   Search tracks, build your playlist, and save it to your Spotify account.

---

## 📁 Getting Started Locally

```bash
git clone https://github.com/yourusername/spotify-playlist-creator.git
cd spotify-playlist-creator
npm install
npm start
```
Then set the following in your .env file or directly in your Spotify.js:

- REACT_APP_SPOTIFY_CLIENT_ID=your_client_id
- REACT_APP_SPOTIFY_REDIRECT_URI=http://localhost:3000

Make sure your redirect URI matches the one in your Spotify app settings.

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙋 Contact

- Built by [Silentmaster86](https://github.com/Silentmaster86)
- 💬 For access or questions, feel free to message me!

---

Let me know if you'd like it tailored more toward recruiters, developers, or users - or if you want help uploading it to your GitHub repo.
