import React from 'react'

const Contact = () => {
  return (
    <div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold text-center mb-8">Contact Us</h1>
  <div class="flex flex-col md:flex-row justify-center">
    <div class="md:w-1/2 mr-4">
      <form>
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
          <input type="text" id="name" class="w-full border rounded-md px-4 py-2" placeholder="Enter your name" />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" class="w-full border rounded-md px-4 py-2" placeholder="Enter your email" />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-gray-700 font-bold mb-2">Message</label>
          <textarea id="message" class="w-full border rounded-md px-4 py-2 h-24" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">Send Message</button>
      </form>
    </div>
    <div class="md:w-1/2">
      <h2 class="text-2xl font-bold mb-4">Our Contact Information</h2>
      <p class="text-gray-700 mb-2">Address: 333 Main Street, City, State, Country</p>
      <p class="text-gray-700 mb-2">Phone: +91 987654321</p>
      <p class="text-gray-700 mb-2">Email: info@yourdomain.com</p>
      <div class="flex space-x-4">
        <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-facebook-f text-blue-500"></i>
        </a>
        <a href="https://www.twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-twitter text-blue-500"></i>
        </a>
        <a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-instagram text-blue-500"></i>
        </a>
      </div>
    </div>
  </div>
</div>
  )
}

export default Contact