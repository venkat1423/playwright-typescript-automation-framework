# 🚀 Playwright TypeScript Automation Framework

A scalable end-to-end automation framework built using **Playwright** and **TypeScript** following industry best practices such as **Page Object Model (POM)**, **Fixtures**, **Data-Driven Testing**, and **Storage State Authentication**.

This project is being built incrementally by implementing real-world e-commerce test scenarios using the SauceDemo application.

---

## 📌 Tech Stack

- Playwright
- TypeScript
- Node.js
- Git & GitHub

---

## ✨ Framework Features

- ✅ Page Object Model (POM)
- ✅ TypeScript Support
- ✅ Reusable Page Classes
- ✅ Base Page
- ✅ Playwright Fixtures
- ✅ Storage State Authentication
- ✅ Environment Variables (.env)
- ✅ Data-Driven Testing
- ✅ Reusable Helper Methods
- ✅ HTML Reports
- ✅ Screenshot on Failure
- ✅ Video Recording on Failure
- ✅ Trace on Failure

---

## 📂 Project Structure

```
SauceDemoProject
│
├── fixtures/
├── pages/
├── test-data/
├── tests/
├── utils/
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

---

## ▶️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

## ▶️ Run Tests

Run all tests

```bash
npx playwright test
```

Run headed mode

```bash
npx playwright test --headed
```

Run smoke tests

```bash
npx playwright test --grep "@smoke"
```

Run regression tests

```bash
npx playwright test --grep "@regression"
```

---

## 📊 View HTML Report

```bash
npx playwright show-report
```

---

## 🧪 Test Scenarios Implemented

### Login Module

- Valid Login
- Invalid Username
- Invalid Password
- Locked User
- Data-Driven Login Validation

### Inventory Module

- Verify Inventory Page
- Verify Product Count
- Verify Product Names
- Add Single Product to Cart
- Add Multiple Products to Cart
- Remove Product from Inventory
- Sort Products (A → Z)
- Sort Products (Z → A)
- Sort Price (Low → High)
- Sort Price (High → Low)

---

## 🚧 Upcoming Modules

- Cart
- Checkout
- Checkout Overview
- Order Completion
- API Testing
- CI/CD using GitHub Actions
- Docker Integration

---

## 👨‍💻 Author

**Venkatesh**

QA Automation Engineer

Built with ❤️ using Playwright & TypeScript.