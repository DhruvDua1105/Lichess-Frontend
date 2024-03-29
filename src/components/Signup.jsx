import React, { useState } from 'react';
import api from '../Utils/api';
import showAlert from '../Utils/Alert';

const Signup = ({ onSignupSuccess }) => {
      const [formData, setFormData] = useState({
            email: '',
            password: ''
      });
      const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                  const response = await api.post('/signup', {
                        email_ID: formData.email,
                        password: formData.password,
                  });
                  const { token } = response.data;
                  localStorage.setItem("token", token)
                  onSignupSuccess(true);
            } catch (error) {
                  showAlert('error', 'Server Error, Please try again');
            }
      };

      const handleLoginClick = () => {
            onSignupSuccess(true)
      }

      return (
            <>
                  <section class="bg-gray-50 dark:bg-gray-900">
                        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                              <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                          <h1 class="text-xl text-center font-semibold font-montserrat leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                                Create an account
                                          </h1>
                                          <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6" action="#">
                                                <div>
                                                      <label for="email" class="block mb-2 text-sm font-roboto font-medium text-gray-900 dark:text-white">Your email</label>
                                                      <input value={formData.email}
                                                            onChange={handleChange} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="true" />
                                                </div>
                                                <div>
                                                      <label for="password" class="block mb-2 text-sm font-roboto font-medium text-gray-900 dark:text-white">Password</label>
                                                      <input value={formData.password}
                                                            onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true" />
                                                </div>
                                                <button type="submit" class="w-full font-roboto text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                                <p class="text-sm font-roboto font-light text-gray-500 dark:text-gray-400">
                                                      Already have an account? <button onClick={handleLoginClick} class="font-roboto cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</button>
                                                </p>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </section>
            </>
      )
};

export default Signup;
