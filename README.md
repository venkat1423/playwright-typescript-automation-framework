# 🚀 Playwright TypeScript Automation Framework

A scalable End-to-End Test Automation Framework built using **Playwright** and **TypeScript**, following industry best practices such as **Page Object Model (POM)**, **Fixtures**, **Data-Driven Testing**, **Storage State Authentication**, and **Reusable Page Objects**.

This framework automates real-world e-commerce workflows using the **SauceDemo** application and is designed to demonstrate production-ready automation practices.

---

# 📌 Tech Stack

- Playwright
- TypeScript
- Node.js
- Git & GitHub
- Visual Studio Code

---

# ✨ Framework Features

- ✅ Page Object Model (POM)
- ✅ Base Page Architecture
- ✅ Playwright Fixtures
- ✅ Storage State Authentication
- ✅ Environment Variables (.env)
- ✅ Data-Driven Testing
- ✅ Dynamic Locators
- ✅ Reusable Page Methods
- ✅ HTML Reports
- ✅ Screenshot on Failure
- ✅ Video Recording on Failure
- ✅ Trace on Failure
- ✅ Smoke & Regression Test Tags

---

# 📂 Project Structure

```text
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
├── .env
├── .gitignore
└── README.md
```

---

# ▶️ Installation

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

# ▶️ Execute Tests

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

# 📊 Reports

Generate HTML Report

```bash
npx playwright show-report
```

---

# 🧪 Automated Test Scenarios

## Login Module

- ✅ Valid Login
- ✅ Invalid Username
- ✅ Invalid Password
- ✅ Locked User
- ✅ Data-Driven Login Validation

---

## Inventory Module

- ✅ Verify Inventory Page
- ✅ Verify Product Count
- ✅ Verify Product Names
- ✅ Add Single Product
- ✅ Add Multiple Products
- ✅ Remove Product
- ✅ Sort Products (A → Z)
- ✅ Sort Products (Z → A)
- ✅ Sort Price (Low → High)
- ✅ Sort Price (High → Low)

---

## Cart Module

- ✅ Verify Product is Displayed in Cart
- ✅ Verify Multiple Products in Cart
- ✅ Verify Remove Product from Cart
- ✅ Verify Continue Shopping
- ✅ Verify Checkout Navigation

---

## Checkout Module

- ✅ Verify Valid Checkout Information
- ✅ Verify First Name Validation
- 🚧 Verify Last Name Validation
- 🚧 Verify Postal Code Validation
- 🚧 Verify Cancel Navigation
- 🚧 Verify Checkout Overview
- 🚧 Verify Order Completion

---

# 🚀 Upcoming Enhancements

- GitHub Actions (CI/CD)
- API Testing
- Docker Integration
- Cross Browser Execution
- Retry Strategy
- Allure Reports

---

# 👨‍💻 Author

**Venkatesh**

QA Automation Engineer

Built with ❤️ using Playwright, TypeScript & Automation Best Practices.