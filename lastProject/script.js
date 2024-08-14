document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const postForm = document.getElementById('postForm');
    const logoutBtn = document.getElementById('logoutBtn');
    const switchFormBtn = document.getElementById('switchFormBtn');
    const loginContainer = document.getElementById('loginContainer');
    const registerContainer = document.getElementById('registerContainer');

    let authStatus = JSON.parse(localStorage.getItem('authStatus')) || false;
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    function saveData() {
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    function generateId(prefix) {
        return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    function redirectToPage(page) {
        window.location.href = page;
    }

    function initializeHome() {
        if (authStatus) {
            redirectToPage('profile.html');
        }
    }

    function initializeProfile() {
        if (!authStatus) {
            redirectToPage('home.html');
        } else {
            const profileUsername = document.getElementById('profileUsername');
            const profileEmail = document.getElementById('profileEmail');
            const profilePicture = document.getElementById('myProfilePicture');
            
            profileUsername.textContent = currentUser.username;
            profileEmail.textContent = currentUser.email;
            profilePicture.src = currentUser.profilePicture ? currentUser.profilePicture : './images/defaultprof.webp';

            renderPosts();
            renderNotifications();
        }
    }

    function renderPosts() {
        const profilePosts = document.getElementById('profilePosts');
        profilePosts.innerHTML = '';
        currentUser.posts.forEach(postId => {
            const post = posts.find(p => p.postId === postId);
            if (post) {
                const postElement = document.createElement('div');
                postElement.className = 'post';
                postElement.dataset.postId = post.postId;
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.description}</p>
                    <img src="${post.imagePath}" alt="Post Image">
                    <button class="edit-post-btn" data-post-id="${post.postId}">Edit</button>
                    <button class="delete-post-btn" data-post-id="${post.postId}">Delete</button>
                    <button class="like-post-btn" data-post-id="${post.postId}">Like (${post.likes})</button>
                    <button class="comment-post-btn" data-post-id="${post.postId}">Comment (${post.comments.length})</button>
                `;
                profilePosts.appendChild(postElement);
            }
        });

        document.querySelectorAll('.edit-post-btn').forEach(button => {
            button.addEventListener('click', () => {
                editPost(button.dataset.postId);
            });
        });

        document.querySelectorAll('.delete-post-btn').forEach(button => {
            button.addEventListener('click', () => {
                deletePost(button.dataset.postId);
            });
        });

        document.querySelectorAll('.like-post-btn').forEach(button => {
            button.addEventListener('click', () => {
                handleLike(button.dataset.postId);
            });
        });

        document.querySelectorAll('.comment-post-btn').forEach(button => {
            button.addEventListener('click', () => {
                handleComment(button.dataset.postId);
            });
        });
    }

    function renderNotifications() {
        const notificationsList = document.getElementById('notificationsList');
        notificationsList.innerHTML = '';
        currentUser.notifications.forEach(notification => {
            const notificationElement = document.createElement('li');
            notificationElement.textContent = notification;
            notificationsList.appendChild(notificationElement);
        });
    }

    function editPost(postId) {
        const post = posts.find(p => p.postId === postId);
        if (post) {
            document.getElementById('postTitle').value = post.title;
            document.getElementById('postDescription').value = post.description;
            posts = posts.filter(p => p.postId !== postId);
            currentUser.posts = currentUser.posts.filter(pId => pId !== postId);
            saveData();
            renderPosts();
        }
    }

    function deletePost(postId) {
        posts = posts.filter(p => p.postId !== postId);
        currentUser.posts = currentUser.posts.filter(pId => pId !== postId);
        saveData();
        renderPosts();
    }

    if (loginForm) {
        loginForm.addEventListener('submit', e => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                authStatus = true;
                currentUser = user;
                localStorage.setItem('authStatus', JSON.stringify(authStatus));
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                redirectToPage('profile.html');
            } else {
                alert('Invalid email or password.');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', e => {
            e.preventDefault();
            const username = document.getElementById('registerUsername').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const profilePictureInput = document.getElementById('registerProfilePicture');

            const reader = new FileReader();
            reader.onload = function () {
                const profilePicture = reader.result;
                const userId = generateId('user');
                const newUser = {
                    userId,
                    username,
                    email,
                    password,
                    profilePicture,
                    posts: [],
                    notifications: []
                };

                users.push(newUser);
                saveData();

                alert('Registration successful! Please log in.');
                switchToLogin();  
           
            };
          
            reader.readAsDataURL(profilePictureInput.files[0]);
        });
    }

    if (postForm) {
        postForm.addEventListener('submit', e => {
            e.preventDefault();
            const postTitle = document.getElementById('postTitle').value;
            const postDescription = document.getElementById('postDescription').value;
            const postImageInput = document.getElementById('postImage');

            const reader = new FileReader();
            reader.onload = function () {
                const postImagePath = reader.result;
                const postId = generateId('post');
                const newPost = {
                    postId,
                    title: postTitle,
                    description: postDescription,
                    imagePath: postImagePath,
                    likes: 0,
                    comments: []
                };

                posts.push(newPost);
                currentUser.posts.push(postId);
                saveData();
                renderPosts();
            };
            reader.readAsDataURL(postImageInput.files[0]);
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            authStatus = false;
            currentUser = null;
            localStorage.setItem('authStatus', JSON.stringify(authStatus));
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            redirectToPage('home.html');
        });
    }

    function switchToLogin() {
        registerContainer.style.display = 'none';
        loginContainer.style.display = 'block';
        switchFormBtn.textContent = 'Switch to Register';
    }

    function switchToRegister() {
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
        switchFormBtn.textContent = 'Switch to Login';
    }

    switchFormBtn.addEventListener('click', () => {
        if (loginContainer.style.display === 'none') {
            switchToLogin();
        } else {
            switchToRegister();
        }
    });

    const currentPath = window.location.pathname;
    if (currentPath.includes('profile.html')) {
        initializeProfile();
    } else if (currentPath.includes('home.html')) {
        initializeHome();
    }

    function handleLike(postId) {
        const post = posts.find(p => p.postId === postId);
        if (post) {
            post.likes++;
            saveData();
            renderPosts();
            const notification = `Someone liked your post: ${post.title}`;
            currentUser.notifications.push(notification);
            saveData();
            renderNotifications();
        }
    }

    function handleComment(postId) {
        const post = posts.find(p => p.postId === postId);
        if (post) {
            const commentInput = prompt('Enter your comment:');
            if (commentInput) {
                post.comments.push(commentInput);
                saveData();
                renderPosts();
                const notification = `Someone commented on your post: ${post.title}`;
                currentUser.notifications.push(notification);
                saveData();
                renderNotifications();
            }
        }
    }

    function renderNotifications() {
        const notificationsList = document.getElementById('notificationsList');
        notificationsList.innerHTML = '';
        currentUser.notifications.forEach(notification => {
            const notificationElement = document.createElement('li');
            notificationElement.textContent = notification;
            notificationsList.appendChild(notificationElement);
        });
    }
});
