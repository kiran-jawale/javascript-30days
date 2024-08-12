let posts = JSON.parse(localStorage.getItem("posts")) || [];
let currentUser = localStorage.getItem("currentUser") || null;

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginForm = document.getElementById("login-form");
const postForm = document.getElementById("post-form");
const postContainer = document.getElementById("posts-container");

// Check if a user is already logged in
if (currentUser) {
    toggleForms();
    renderPosts();
}

function toggleForms() {
    if (currentUser) {
        loginForm.style.display = "none";  // Hide the login form
        postForm.style.display = "block";  // Show the post creation form
    } else {
        loginForm.style.display = "block";  // Show the login form
        postForm.style.display = "none";  // Hide the post creation form
    }
}

function handleLogin() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim(); // Example: Just ensure both fields are filled
    
    if (!username || !password) return alert("Please enter both fields.");

    currentUser = username;
    localStorage.setItem("currentUser", currentUser);  // Save the current user to localStorage
    toggleForms();  // Update the UI based on login state
    renderPosts();
}

function handleLogout() {
    localStorage.removeItem("currentUser");  // Remove the user from localStorage
    currentUser = null;
    toggleForms();  // Update the UI based on login state
    postContainer.innerHTML = "<h2>You need to log in to see your posts</h2>";  // Clear posts when logged out
}

function createPost() {
    const text = document.getElementById("post-text").value.trim();
    const imageFileInput = document.getElementById("post-image");
    const imageFile = imageFileInput.files[0];

    if (text || imageFile) {
        if (imageFile && !imageFile.type.startsWith("image/")) {
            alert("Please select a valid image file.");
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            const newPost = {
                text: text || "",
                imagePath: reader.result || null,
                postedBy: currentUser,
                likes: 0,
                comments: [],
            };
            posts.push(newPost);
            localStorage.setItem("posts", JSON.stringify(posts));  // Save posts to localStorage
            document.getElementById("post-text").value = "";  // Clear input fields
            imageFileInput.value = "";
            renderPosts();
        };
        if (imageFile) {
            reader.readAsDataURL(imageFile);
        } else {
            reader.onload(); // No image, proceed with text-only post
        }
    } else {
        alert("Please enter a field.");
    }
}

function handleLike(postIndex) {
    posts[postIndex].likes++;
    localStorage.setItem("posts", JSON.stringify(posts));  // Update posts in localStorage
    renderPosts();
}

function handleComment(postIndex) {
    const comment = prompt("Enter your comment");
    if (comment) {
        posts[postIndex].comments.push(comment);
        localStorage.setItem("posts", JSON.stringify(posts));  // Update posts in localStorage
        renderPosts();
    }
}

function renderPosts() {
    if (!currentUser) {
        postContainer.innerHTML = `<p id="heading">You need to log in to see your posts</p>`;
        return;
    }

    const userPosts = posts.filter(post => post.postedBy === currentUser);

    if (!userPosts.length) {
        postContainer.innerHTML = `<p id="heading">No posts yet!</p>`;
        return;
    }

    userPosts.forEach((post, index) => {
        const postHTML = `
            <div class="post">
                ${post.imagePath ? `<img src="${post.imagePath}" alt="post image">` : ""}
                <div class="post-info">
                    <span class="posted-by">Posted by: ${post.postedBy}</span>
                </div>
                <div class="post-actions">
                    <button onclick="handleLike(${index})">Like (${post.likes})</button>
                    <button onclick="handleComment(${index})">Comment</button>
                </div>
                <div class="post-comments">
                    <h3>Comments</h3>
                    ${post.comments.map(comment => `<div class="comment"><p class="comment-text">${comment}</p></div>`).join('')}
                </div>
            </div>
        `;
        postContainer.innerHTML += postHTML;
    });
}
