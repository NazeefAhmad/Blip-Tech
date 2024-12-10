// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const Checkout = () => {
//   const navigate = useNavigate();

//   // State to hold form data
//   const [formData, setFormData] = useState({
//     fullName: "",
//     address: "",
//     phoneNumber: "",
//     paymentMethod: "cod", // Default payment method is COD
//   });

//   // Handle form input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validation checks (basic)
//     if (!formData.fullName || !formData.address || !formData.phoneNumber) {
//       toast.error("Please fill all the fields!");
//       return;
//     }

//     // Here, you can add logic to save order details in your state or send it to your backend

//     // Show success message
//     toast.success("Order placed successfully!");

//     // Redirect to home or order confirmation page (adjust based on your requirement)
//     navigate("/");
//   };

//   return (
//     <main className="max-w-[1280px] mx-auto px-4 py-8 bg-[#1f2937] text-white min-h-[100vh]">
//       <section className="lg:px-20">
//         <h2 className="text-2xl font-bold mb-2">Checkout</h2>
//         <p className="text-sm mb-8">Enter your details and choose a payment method to complete your order.</p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Full Name */}
//           <div>
//             <label htmlFor="fullName" className="block text-sm font-semibold mb-2">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleInputChange}
//               required
//               className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md"
//             />
//           </div>

//           {/* Address */}
//           <div>
//             <label htmlFor="address" className="block text-sm font-semibold mb-2">
//               Address
//             </label>
//             <textarea
//               id="address"
//               name="address"
//               value={formData.address}
//               onChange={handleInputChange}
//               required
//               className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md"
//               rows="3"
//             />
//           </div>

//           {/* Phone Number */}
//           <div>
//             <label htmlFor="phoneNumber" className="block text-sm font-semibold mb-2">
//               Phone Number
//             </label>
//             <input
//               type="text"
//               id="phoneNumber"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleInputChange}
//               required
//               className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md"
//             />
//           </div>

//           {/* Payment Method */}
//           <div>
//             <label className="block text-sm font-semibold mb-2">Payment Method</label>
//             <div className="flex items-center mb-4">
//               <input
//                 type="radio"
//                 id="cod"
//                 name="paymentMethod"
//                 value="cod"
//                 checked={formData.paymentMethod === "cod"}
//                 onChange={handleInputChange}
//                 className="mr-2"
//               />
//               <label htmlFor="cod">Cash on Delivery (COD)</label>
//             </div>
//             <div className="flex items-center">
//               <input
//                 type="radio"
//                 id="online"
//                 name="paymentMethod"
//                 value="online"
//                 checked={formData.paymentMethod === "online"}
//                 onChange={handleInputChange}
//                 className="mr-2"
//               />
//               <label htmlFor="online">Pay by Card / Online Payment</label>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="text-center">
//             <button
//               type="submit"
//               className="w-full bg-blue-800 text-white px-4 py-3 text-sm font-semibold rounded-md hover:bg-blue-700 transition ease-in-out duration-300"
//             >
//               Place Order
//             </button>
//           </div>
//         </form>
//       </section>
//     </main>
//   );
// };

// export default Checkout;


import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const navigate = useNavigate();

  // State to hold form data
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    paymentMethod: "cod", // Default payment method is COD
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks (basic)
    if (!formData.fullName || !formData.address || !formData.phoneNumber) {
      toast.error("Please fill all the fields!");
      return;
    }

    try {
      // Send data to the backend
      const response = await axios.post("http://localhost:3030/place-order", formData);

      if (response.status === 201) {
        toast.success(response.data.message); // Display success message
        navigate("/"); // Redirect to home or confirmation page
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to place order. Please try again.");
    }
  };

  return (
    <main className="max-w-[1280px] mx-auto px-4 py-8 bg-[#1f2937] text-white min-h-[100vh]">
      <section className="lg:px-20">
        <h2 className="text-2xl font-bold mb-2">Checkout</h2>
        <p className="text-sm mb-8">Enter your details and choose a payment method to complete your order.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md"
            />
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-sm font-semibold mb-2">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md"
              rows="3"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md"
            />
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-sm font-semibold mb-2">Payment Method</label>
            <div className="flex items-center mb-4">
              <input
                type="radio"
                id="cod"
                name="paymentMethod"
                value="cod"
                checked={formData.paymentMethod === "cod"}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label htmlFor="cod">Cash on Delivery (COD)</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="online"
                name="paymentMethod"
                value="online"
                checked={formData.paymentMethod === "online"}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label htmlFor="online">Pay by Card / Online Payment</label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-800 text-white px-4 py-3 text-sm font-semibold rounded-md hover:bg-blue-700 transition ease-in-out duration-300"
            >
              Place Order
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Checkout;
