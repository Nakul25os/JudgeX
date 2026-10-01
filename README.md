# JudgeX ⚡
> Next-Generation Online Coding Judge & Sandboxed Compiler Architecture

JudgeX is a high-performance, modern online coding judge and competitive programming platform featuring cinematic visual interactions, real-time code evaluation, sandboxed multi-language compilation, and an authentication portal for students and administrators.

---

## ✨ Features

- **⚡ Core Architecture**: Ultra-low latency code evaluation engine with multi-language execution pipelines (C++, Java, Python, Go, Rust, JavaScript).
- **🎨 Cinematic UI & 3D Interactive Canvas**: Scrubbable frame-by-frame rendering and smooth scroll-driven animations.
- **🔐 Authentication Portal**: Dedicated portal for students and administrators with secure role-based navigation.
- **📊 Real-time Analytics**: Sub-millisecond evaluation metrics, memory allocation monitoring, and detailed test case diagnostics.
- **🌐 Zero-Dependency Local Server**: Built-in high performance Node.js HTTP server supporting range requests, asset streaming, and instant reload.

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)

### Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nakul25os/JudgeX.git
   cd JudgeX
   ```

2. **Start the server:**
   ```bash
   node server.js
   ```

3. **Open in browser:**
   - **Main Arena:** [http://localhost:3000](http://localhost:3000)
   - **Login / Admin Portal:** [http://localhost:3000/login](http://localhost:3000/login)

---

## 📂 Project Structure

```text
├── app.js                      # Core frontend interactive engine & canvas controller
├── index.html                  # Main JudgeX landing page & architecture showcase
├── style.css                   # Global design system & cinematic styles
├── login.html                  # Student & Admin authentication portal
├── login.js                    # Auth handling, tab switching & validation logic
├── login.css                   # Authentication portal styling
├── server.js                   # Lightweight zero-dependency HTTP server
├── ezgif-7ac0a8145df2343c-jpg/ # Frame-by-frame cinematic rendering assets
└── .gitignore                  # Git ignore rules
```

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, Vanilla JavaScript (ES6+), Vanilla CSS3
- **Design System**: Inter, Outfit, and JetBrains Mono typography
- **Server**: Node.js (Core `http`, `fs`, `path`)

---

## 📄 License

This project is licensed under the MIT License.
