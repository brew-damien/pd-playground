import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// index.js
// General-purpose animation function for any element
export function animateElement(element, endValue, duration, updateFunc) {
  let startTime = null;

  function animationStep(currentTime) {
    if (!startTime) startTime = currentTime;
    const progress = currentTime - startTime;
    const currentCount = Math.min(Math.floor((progress / duration) * endValue), endValue);

    updateFunc(element, currentCount); // Update the element content/style

    if (progress < duration) {
      requestAnimationFrame(animationStep); // Continue animation
    }
  }

  requestAnimationFrame(animationStep);
}

// Update the text content of an element (can optionally display percentage)
export function updateTextContent(element, value, isPercentage = true) {
  element.textContent = isPercentage ? `${value}%` : value;
}

// Update the strokeDashoffset of a circular progress element (for gauge animation)
export function updateProgressCircle(circle, value) {
  const radius = 42; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Total circumference
  circle.style.strokeDashoffset = circumference - (value / 100) * circumference;
}

// Update the width of a progress bar element
export function updateProgressBar(bar, value) {
  bar.style.width = `${value}%`;
}

// Intersection Observer to trigger animations when elements come into view
export function setupIntersectionObserver(selector, elements, callback) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry.target); // Trigger callback when the element is in view
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  });

  elements.forEach((item) => {
    observer.observe(item); // Observe each element
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
